<template>
  <div>
    <shopHeader v-bind:cart="cart" v-bind:total="total" />
    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <shopNav />
          </div>
          <div class="col-sm-9 padding-right">
            <div class="features_items">
              <!--features_items-->
              <h2 style="margin-top:3px" class="title text-center">Sản phẩm bán chạy nhất</h2>
              <div class="col-sm-4" v-for="(product,index) in products" :key="index">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo text-center">
                      <img
                        style="width:250px; height:250px"
                        :src="`/${product.images ? product.images.default_image : ''}`"
                        @click="$router.push('/shop/product_detail/'+product.id)"
                        alt
                      />
                      <h2>{{currency(product.price)}}</h2>
                      <p>{{product.name}}</p>
                      <qrcode-vue
                        :value="'http://localhost:3000/shop/product_detail/'+product.id"
                        size="100"
                        level="H"
                      ></qrcode-vue>
                      <a @click="addToCart(product)" class="btn btn-default add-to-cart">
                        <i class="fa fa-shopping-cart"></i>Thêm vào giỏ hàng
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--features_items-->
            <div class="features_items">
              <!--features_items-->
              <h2 style="margin-top:3px" class="title text-center">Sản phẩm mới nhất</h2>
              <div class="col-sm-4" v-for="(newest,index) in newests" :key="index">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo text-center">
                      <img
                        style="width:250px; height:250px"
                        :src="`/${newest.images ? newest.images.default_image : ''}`"
                        @click="$router.push('/shop/product_detail/'+newest.id)"
                        alt
                      />
                      <h2>{{currency(newest.price)}}</h2>
                      <p>{{newest.name}}</p>
                      <qrcode-vue
                        :value="'http://localhost:3000/shop/product_detail/'+newest.id"
                        size="100"
                        level="H"
                      ></qrcode-vue>
                      <a
                        @click="$router.push('/shop/product_detail/'+newest .id)"
                        class="btn btn-default add-to-cart"
                      >
                        <i class="fa fa-shopping-cart"></i>Thêm vào giỏ hàng
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
import shopHeader from "~/components/shopHeader.vue";
import shopFooter from "~/components/shopFooter.vue";
import shopNav from "~/components/shopNav.vue";
import QrcodeVue from "qrcode.vue";
export default {
  data() {
    return {
      products: [],
      cart: [],
      newests: [],
      total : 0,
    };
  },
  components: {
    shopHeader,
    shopFooter,
    shopNav,
    QrcodeVue
  },
  created() {
    if (process.browser) {
      let total = 0;
      let cart = [];
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      } else {
        cart = this.$store.getters.cart;
      }

      cart.forEach(function (value, index, array) {
        total += (value.price * value.count);
      });

      return [this.cart = cart, this.total = total];
    }
  },
  mounted() {
    this.getByOrderTime();
    this.getById();
  },
  methods: {
    currency(x) {
      x = x.toLocaleString("currency", { style: "currency", currency: "VND" });
      return x;
    },
    getByOrderTime: function() {
      let self = this;
      this.$axios.get("/products/order_time").then(function(res) {
        self.products = res.data.data;
      });
    },
    getById: function() {
      let self = this;
      this.$axios.get("/products/newest").then(function(res) {
        self.newests = res.data.data;
      });
    },
    addToCart(product) {
      let total = 0;
      this.$store.dispatch("setCart", this.cart);
      let pro = this.cart.find(element => element.id == product.id);
      if (pro) {
        pro['count'] += 1;
      } else {
        product['count'] = 1;
        this.$store.dispatch("addToCart", product);
      }

      localStorage.setItem("cart", JSON.stringify(this.cart));
      this.cart.forEach(function (value, index, array) {
        total += (value.price * value.count);
      });

      this.total = total;
    }
  }
};
</script>
<style scoped>
#default_image {
  width: 248px;
  height: 270px;
  object-fit: cover;
}
</style>

