<template>
  <div>
    <shopHeader v-bind:cart="cart" v-bind:total="total" @products="products=$event" />
    <section id="cart_items">
      <div class="container">
        <div class="breadcrumbs">
          <ol class="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li class="active">Check out</li>
          </ol>
        </div>
        <!--/breadcrums-->

        <div class="review-payment">
          <h2>Review & Payment</h2>
        </div>
        <div class="table-responsive cart_info">
          <table class="table table-condensed">
            <thead>
              <tr class="cart_menu">
                <td class="image" style="text-align: center">Sản phẩm</td>
                <td class="description">Tên</td>
                <td class="price">Số lượng</td>
                <td class="quantity">Thành tiền</td>
                <td class="total">Total</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in cart" :key="index">
                <td class="cart_product">
                  <a>
                    <img
                      style="margin-left:-50px"
                      :src="`/${item.images? item.images.default_image: ''}`"
                    />
                  </a>
                </td>
                <td class="cart_description">
                  <h4>
                    <a href>{{item.name}}</a>
                  </h4>
                </td>
                <td class="cart_price">
                  <p>{{currency(item.price)}}</p>
                </td>
                <td class="cart_quantity">
                  <div class="cart_quantity_button">
                    <p>{{item.count}}</p>
                  </div>
                </td>
                <td class="cart_total">
                  <p class="cart_total_price">{{currency(item.price * item.count)}}</p>
                </td>
              </tr>
              <tr>
                <td colspan="4">&nbsp;</td>
                <td colspan="2">
                  <table class="table table-condensed total-result">
                    <tr>
                      <td>Tổng giá tiền</td>
                      <span>
                        <td>{{currency(total)}}đ</td>
                      </span>
                    </tr>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="register-req">
          <p>Xin vui lòng, đảm bảo thông tin kiểm tra trước khi bấm vào thanh toán</p>
        </div>
        <!--/register-req-->

        <div class="shopper-informations" id="payment">
          <div class="text-center">
            <div class="col-sm-6">
              <div class="shopper-info">
                <p>Thông tin của bạn</p>
                <form>
                  <input type="text" placeholder="Họ tên" :value="user_name" />
                  <input type="text" placeholder="Email của bạn" :value="user_email" />
                </form>
              </div>
              <div ref="paypal"></div>
              <a class="btn btn-primary" @click="$router.push('/shop/cart')">Trở lại</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <shopFooter></shopFooter>
  </div>
</template>
<script>
const Cookies = process.client ? require("js-cookie") : undefined;
import shopHeader from "~/components/shopHeader.vue";
import shopFooter from "~/components/shopFooter.vue";
export default {
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
  data() {
    return {
      cart: [],
      total: 0,
      user_id: "",
      user_name: "",
      user_email: "",
      paypal: {
        sandbox:
          "AfNZOlnY_KmQuNqPDXQp7ZxW5YKIn1C0jLk79D2HCkaTpU0W6g13y0G_RMI2573ePjvsN_MU9eSXHVLG"
      },
      myItems: [],
      loaded: false
    };
  },
  components: {
    shopHeader,
    shopFooter
  },
  mounted() {
    this.totalPrice();
    this.getUsers();
    this.updateOrderTime();
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AfNZOlnY_KmQuNqPDXQp7ZxW5YKIn1C0jLk79D2HCkaTpU0W6g13y0G_RMI2573ePjvsN_MU9eSXHVLG";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    currency(x) {
      x = x.toLocaleString("currency", { style: "currency", currency: "VND" });
      return x;
    },
    getUsers() {
      let self = this;
      this.$axios.get("/users").then(function(res) {
        self.user_id = res.data.decoded.user_id;
        self.user_name = res.data.decoded.user_name;
        self.user_email = res.data.decoded.user_email;
      });
    },
    totalPrice() {
      let total = 0;
      this.cart.forEach(function (value, index, array) {
        total += (value.price * value.count);
      });

      this.total = total;
    },
    handelSubmit() {
      let self = this;
      this.$axios
        .post("/orders", {
          cart: this.cart,
          total: this.total,
          user_id: this.user_id
        })
        .then(function(res) {
          console.log(res);
        });
      alert("Đã thanh toán thành công");
      self.$router.push("/");
      localStorage.removeItem("cart");
      self.$store.commit("setCart", []);
    },
    updateOrderTime() {
      this.cart.forEach(element => {
        this.myItems.push({
          name: element.name,
          description: element.detail,
          quantity: element.order_time,
          price: element.price,
          currency: "USD"
        });
      });
    },
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: "Scan And Go",
                  amount: {
                    currency_code: "USD",
                    value: this.total
                  }
                  // items: this.myItems
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.handelSubmit();
          },
          onError: err => {}
        })
        .render(this.$refs.paypal);
    }
  }
};
</script>
<style scoped>
img {
  object-fit: cover;
  width: 100px;
  height: 100px;
}

#payment {
  margin-left: 350px;
}

tbody tr td {
  text-align: center;
  padding-left: 50px;
}

thead tr td {
  text-align: center;
  padding-left: 50px;
}
</style>
