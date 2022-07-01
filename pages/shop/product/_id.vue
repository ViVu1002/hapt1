<template>
  <div>
    <shopHeader @products="products=$event" />
    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <shopNav />
          </div>
          <div class="col-sm-9 padding-right">
            <div class="features_items">
              <!--features_items-->
              <h2 class="title text-center">Sản phẩm</h2>
              <div class="col-sm-4" v-for="(product, index) in products" :key="index">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo text-center">
                      <a @click="$router.push('/shop/product_detail/'+product.id)">
                        <img
                          style="width:250px; height:250px"
                          :src="`/${default_image ? default_image[index]: ''}`"
                        />
                      </a>
                      <h2>{{currency(product.price)}}</h2>
                      <p>{{product.name}}</p>
                      <qrcode-vue
                        :value="'http://localhost:3000/shop/product_detail/'+product.id"
                        size="100"
                        level="H"
                      />
                      <a @click="addToCart(product)" class="btn btn-default add-to-cart">
                        <i class="fa fa-shopping-cart" />Thêm vào giỏ hàng
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <shopFooter />
  </div>
</template>
<script>
const Cookies = process.client ? require("js-cookie") : undefined;
import shopHeader from "~/components/shopHeader.vue";
import shopFooter from "~/components/shopFooter.vue";
import shopNav from "~/components/shopNav.vue";
import QrcodeVue from "qrcode.vue";
export default {
  created() {
    if (process.browser) {
      if (localStorage.getItem("cart")) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        return (this.cart = cart);
      } else {
        let cart = this.$store.getters.cart;
        return (this.cart = cart);
      }
    }
  },
  mounted: async function() {
    await this.getByMenu();
    await this.getByCat();
    this.getPicture();
  },
  data: function() {
    return {
      products: {},
      default_image: [],
      array: [],
      total : 0,
      cart : [],
    };
  },
  components: {
    shopHeader,
    shopFooter,
    shopNav,
    QrcodeVue
  },
  methods: {
    async getByMenu() {
      let self = this;
      const res = await this.$axios.get(
        `/products/menu/${this.$route.params.id}`
      );
      self.products = res.data.data;
    },
    async getByCat() {
      let self = this;
      const res = await this.$axios.get(
        `/categories/cat_parent/${this.$route.params.id}`
      );
      let data = res.data.data.rows;
      data.forEach(element => {
        element.products.forEach(e => {
          self.products.push(e);
        });
      });
      self.products.forEach(element => {
        self.array.push(element.picture);
      });
    },
    getPicture() {
      let self = this;
      this.array.forEach(element => {
        let id = element;
        this.$axios.get("/gallery/" + id).then(function(res) {
          let default_image = res.data.data.default_image;
          self.default_image.push(default_image);
        });
      });
    },
    addToCart(product) {
      console.log('aaa');
      let total = 0;
      this.$store.dispatch("setCart", this.cart);
      let pro = this.cart.find(element => element.id == product.id);
      if (pro) {
        alert("Đã tồn tại sản phẩm trong giỏ hàng");
      }
      else {this.$store.dispatch("addToCart", product);
      }

      localStorage.setItem("cart", JSON.stringify(this.cart));
      this.cart.forEach(function (value, index, array) {
        total += value.price;
      });

      this.total = total;
      console.log(this.cart, this.total);
    },
    currency(x) {
      x = x.toLocaleString("currency", { style: "currency", currency: "VND" });
      return x;
    }
  }
};
</script>
