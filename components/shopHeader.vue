<template>
  <div>
    <header id="header">
      <div class="header_top">
        <!--header_top-->
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="contactinfo">
                <ul class="nav nav-pills">
                  <li>
                    <a href="#">
                      <i class="fas fa-phone" /> +2 95 01 88 821
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fas fa-envelope" /> ScanAndGo@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="social-icons pull-right">
                <ul style="display:inline; margin-top:15px" class="nav navbar-nav">
                  <li style="display:inline">
                    <a href="#">
                      <i class="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-google-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-middle">
        <!--header-middle-->
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="logo pull-left">
                <a href="#" @click="$router.push('/')">
                  <img src="~assets/images/home/logo.png" alt />
                </a>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="shop-menu pull-right">
                <ul class="nav navbar-nav">
                  <template v-if="user_id">
                    <li>
                      <a style="margin-left:-71px" class="dropdown">
                        <div
                          class="dropdown-toggle"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="fas fa-user">&nbsp;{{user_name}}</i>
                        </div>
                        <div
                          class="dropdown-menu text-sm-center"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a class="dropdown-item" @click="handelLogout">
                            <i class="fas fa-sign-out-alt">&nbsp;Đăng xuất</i>
                          </a>
                          <a
                            class="dropdown-item"
                            href="#"
                            @click="$router.push('/shop/user/detail/'+user_id)"
                          >Trang cá nhân</a>
                        </div>
                      </a>
                    </li>
                  </template>
                  <template v-else >
                    <li style="margin-top: 30px;" >
                      <a
                        @click="$router.push('/register')"
                        style="margin-left:-70px; margin-top:-20px"
                      >Register</a>
                    </li>
                    <li>
                      <a @click="$router.push('/login')" style=" margin-top:-20px">Login</a>
                    </li>
                  </template>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/header-middle-->
      <div class="header-bottom">
        <!--header-bottom-->
        <div class="container">
          <div class="row">
            <div class="col-sm-9">
              <div class="mainmenu pull-left">
                <ul class="nav navbar-nav collapse navbar-collapse">
                  <li>
                    <a @click="$router.push('/')" class="active">Trang chủ</a>
                  </li>
                  <li>
                    <a @click="$router.push('/shop/products')">Sản Phẩm</a>
                  </li>
                  <li>
                    <a @click="$router.push('/shop/blog')">Blog</a>
                  </li>
                  <li>
                    <a @click="$router.push('/shop/contact')">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-3" style="margin-top:-20px">
              <div class="search_box" style="display:inline">
                <input v-model="search" @change="handleSearch" placeholder="Search" />
              </div>
              <div style="display:inline-block; font-size:25px;margin-bottom:-28px" v-if="user_id">
                <div>
                  <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
                    <template style="background:#fff" v-slot:button-content>
                      <i class="fas fa-shopping-cart"></i>
                      {{cart.length}}
                    </template>
                    <b-dropdown-item v-if="cart.length == 0">
                      <template class="cart_dropdown">
                        <div
                          class="text-md-center checkout-preview-dropdown__empty p-7"
                          style="min-width: 250px; height:100px"
                        >
                          <span
                            class="d-block font-weight-bold"
                            style="margin-top:80px"
                          >Chưa có sản phẩm</span>
                          <span class="btn btn-icon btn-soft-primary rounded-circle mb-3">
                            <span class="fas fa-shopping-basket btn-icon__inner"></span>
                          </span>
                        </div>
                      </template>
                    </b-dropdown-item>
                    <b-dropdown-item v-else>
                      <template>
                        <div>
                          <span style="font-size:20px;margin-right:50px">Giỏ hàng của bạn</span>
                          <span>{{cart.length}} sản phẩm</span>
                        </div>
                        <div style="border: 1px solid #c1bbbb ; margin:15px 0px 15px 0px"></div>
                        <div v-for="(item,index) in cart" :key="index">
                          <img
                            style="width:70px; height:70px; margin-bottom:10px"
                            :src="`/${item.images? item.images.default_image: ''}`"
                          />
                          <span class="item_name">{{item.name}}</span>
                          <span class="item_price">{{item.count}} sản phẩm</span>
                          <br>
                          <span style="float: right;margin-top: -20px">{{item.price}} đ</span>
                        </div>
                        <div
                          style="border: 1px solid #c1bbbb ; margin-top:15px; margin-bottom:15px"
                        ></div>
                        <div>
                          <span style="font-size:20px">Tạm tính</span>
                          <span style="float:right">{{total}} đ</span>
                        </div>
                        <div
                          style="font-size:12px; margin-top:10px"
                        >(Phí vận chuyển và thuế sẽ được tính lúc thanh toán.)</div>
                        <div
                          style="border: 1px solid #c1bbbb ; margin-top:15px; margin-bottom:15px"
                        ></div>
                        <div>
                          <a
                            class="cart_checkout_1"
                            href="#"
                            @click="$router.push('/shop/cart')"
                          >Đến giỏ hàng</a>
                          <a
                            class="cart_checkout_2"
                            style="border: 1px solid #c1bbbb ;padding:10px 15px; width:100px; height:40px; float:right"
                            href="#"
                            @click="$router.push('/shop/checkout')"
                          >Mua ngay</a>
                        </div>
                      </template>
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/header-bottom-->
    </header>
    <!--/header-->
    <section id="slider">
      <!--slider-->
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <b-carousel
              id="carousel"
              v-model="slide"
              :indicator="1110"
              controls
              @sliding-start="onSlileStart"
              @sliding-end="onSlileEnd"
              :visible-slides="3"
              :slide-ratio="1/4"
            >
              <div v-for="slide in slides" :key="slide.id">
                <b-carousel-slide
                  :img-src="`/${slide.slide_images ? slide.slide_images.default_image : ''}`"
                />
              </div>
            </b-carousel>
          </div>
        </div>
      </div>
    </section>
    <!--/slider-->
  </div>
</template>
<script>
const Cookies = process.client ? require("js-cookie") : undefined;
export default {
  mounted() {
    if (this.$store.state.token) {
      this.getUsers();
    } else {
      this.$router.push("/");
    }
    this.getSlides();
  },
  props : ['cart','total','count_pro'],
  data() {
    return {
      users: [],
      user_id: "",
      user_name: "",
      search: "",
      slide: 0,
      sliding: null,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      slides: [],
    };
  },
  methods: {
    getUsers() {
      let self = this;
      this.$axios.get("/users").then(function(res) {
        self.user_id = res.data.decoded.user_id;
        self.user_name = res.data.decoded.user_name;
        self.users = res.data.data;
        self.$emit("user_id", self.user_id);
      });
    },
    handelLogout() {
      Cookies.remove("token");
      localStorage.removeItem("cart");
      this.$store.commit("setToken", null);
      this.$store.commit("setCart", []);
      this.$router.push("/login");
    },
    handleSearch() {
      let self = this;
      this.$axios
        .get("/products/search?search=" + this.search)
        .then(function(res) {
          self.products = res.data.data;
          self.$emit("products", self.products);
          self.$router.push("/shop/products?search=" + self.search);
        });
    },
    onSlileStart(slide) {
      this.sliding = true;
    },
    onSlileEnd(slide) {
      this.sliding = false;
    },
    getSlides() {
      let self = this;
      this.$axios.get("/slide").then(function(res) {
        self.slides = res.data.rows;
      });
    }
  }
};
</script>
<style scoped>
.cart_checkout_1 , .cart_checkout_2 {
  border: 1px solid #c1bbbb;
  padding: 15px 15px;
  width: 100px;
  height: 40px;
}
.cart_checkout_1 {
  margin-left: 30px;
  float: right;
}
.cart_checkout_2 {
  margin-left: 40px
}
</style>
