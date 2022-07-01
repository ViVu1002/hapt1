<template>
  <div>
    <shopHeader v-bind:cart="cart" v-bind:total="total" @products="products=$event" />
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
              <div v-if="this.$route.query.search">
                <h4>Có {{result}} kết quả với từ khóa '{{this.$route.query.search}}'</h4>
                <div class="col-sm-4" v-for="(product, index) in products" :key="index">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <a @click="$router.push('/shop/product_detail/'+product.id)">
                          <img
                            style="width:250px; height:250px"
                            :src="`/${product.images? product.images.default_image: ''}`"
                            alt
                          />
                        </a>
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
              <div v-else>
                <div style="width: 225px;margin-left: 598px;margin-bottom: 20px;">
                  Sắp xếp theo
                  <b-form-select v-model="order_by" :options="order" @change="getProductsByOrder" />
                </div>
                <div class="col-sm-4" v-for="(product, index) in products" :key="index">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <a @click="$router.push('/shop/product_detail/'+product.id)">
                          <img
                            style="width:250px; height:250px"
                            :src="`/${product.images? product.images.default_image: ''}`"
                            alt
                          />
                        </a>
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
                <infinite-loading @infinite="infiniteHandler" />
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
import InfiniteLoading from "vue-infinite-loading";
import QrcodeVue from "qrcode.vue";
export default {
  mounted: function() {
    if (this.$route.query.search) {
      this.handleSearch();
    } else {
      this.getProducts();
    }
  },
  data: function() {
    return {
      cart : [],
      total : 0,
      products: [],
      count_pro : 0,
      order: [
        { value: ["name", "ASC"], text: "Tên từ A-Z" },
        { value: ["name", "DESC"], text: "Tên từ Z-A" },
        { value: ["price", "ASC"], text: "Giá tiền tăng dần" },
        { value: ["price", "DESC"], text: "Giá tiền giảm dần" },
        { value: ["id", "DESC"], text: "Mới nhất" },
        { value: ["id", "ASC"], text: "Cũ nhất" }
      ],
      order_by: ["name", "ASC"],
      result: "",
      pagination: {
        currentPage: 1,
        perPage: 6,
        totalPage: ""
      }
    };
  },
  components: {
    shopHeader,
    shopFooter,
    shopNav,
    InfiniteLoading,
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
  methods: {
    currency(x) {
      x = x.toLocaleString("currency", { style: "currency", currency: "VND" });
      return x;
    },
    handleSearch() {
      let self = this;
      this.$axios
        .get("/products/search?search=" + this.$route.query.search)
        .then(function(res) {
          console.log(res);
          self.products = res.data.data;
          self.result = res.data.data.length;
        });
    },
    getProducts: function() {
      let self = this;
      this.$axios
        .post(
          "/products/sort?currentPage=" +
            this.pagination.currentPage +
            "&perPage=" +
            this.pagination.perPage,
          this.order_by
        )
        .then(function(res) {
          let temp = res.data.data;
          self.products = self.products.concat(temp);
          self.pagination.totalPage = res.data.pagination.totalPage;
        });
    },
    getProductsByOrder() {
      let self = this;
      self.products = [];
      this.pagination.currentPage = 1;
      this.getProducts();
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
    },
    infiniteHandler($state) {
      setTimeout(() => {
        this.pagination.currentPage++;
        if (this.pagination.currentPage <= this.pagination.totalPage) {
          this.getProducts();
          setTimeout(() => {
            $state.loaded();
          }, 1000);
        } else {
          console.log("no more data");
        }
      }, 1000);
    }
  }
};
</script>
