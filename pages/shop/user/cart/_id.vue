<template>
  <div>
    <shopHeader v-bind:cart="cart" v-bind:total="total"/>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <shopUser/>
        </div>
        <div class="col-sm-9" style="margin-bottom:100px">
          <div class="card">
            <div
              class="card-header text-md-center"
              style="font-size: 20px;font-weight: bold"
            >Danh sách đơn hàng
            </div>
            <div class="card-body" style="font-style: italic">
              <div class="row">
                <div class="col-sm-12">
                  <table class="table table-bordered">
                    <thead>
                    <tr>
                      <th style="text-align: center">STT</th>
                      <th style="text-align: center">Trạng thái đơn hàng</th>
                      <th style="text-align: center">Tổng tiền</th>
                      <th style="text-align: center">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(order,index) in orders" :key="index">
                      <td>{{index++}}</td>
                      <td v-if="order.order_status == 0">Đang chờ xử lí</td>
                      <td v-if="order.order_status == 1">Đã thanh toán</td>
                      <td v-if="order.order_status == 2">Đã hủy đơn hàng</td>
                      <td>{{order.total_price}}</td>
                      <td>
                        <b-button variant="danger" @click="handelCancel(order.id)">Hủy đơn hàng</b-button>
                        <b-button
                          variant="info"
                          v-b-toggle.collapse-1
                          @click="getOrder_products(order.id)"
                        >Thông tin
                        </b-button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <b-collapse id="collapse-1">
                    <div
                      class="card-header text-md-center"
                      style="font-size: 20px;font-weight: bold"
                    >Thông tin đơn hàng
                    </div>
                    <table class="table table-bordered">
                      <thead>
                      <tr>
                        <th style="text-align: center">STT</th>
                        <th style="text-align: center">Name</th>
                        <th style="text-align: center">Quantity</th>
                        <th style="text-align: center">Price</th>
                        <th style="text-align: center">Total</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="(product,key) in products" :key="key">
                        <td>{{key+1}}</td>
                        <td>{{product.name}}</td>
                        <td>{{product.quantity[key].quantity}}</td>
                        <td>{{product.price}}</td>
                        <td>{{product.price * product.quantity[key].quantity}}</td>
                      </tr>
                      </tbody>
                    </table>
                  </b-collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <shopFooter/>
  </div>
</template>
<script>
    import shopHeader from "~/components/shopHeader.vue";
    import shopFooter from "~/components/shopFooter.vue";
    import shopUser from "~/components/shopUser.vue";

    export default {
        components: {
            shopHeader,
            shopFooter,
            shopUser
        },
        mounted: function () {
            let self = this;
            socket.on("success-status", function (data) {
                let orderNew = self.orders.find(element => element.id == data.id);
                if (orderNew) orderNew.order_status = data.order;
            });
            socket.on("success-cancel", function (data) {
                let orderNew = self.orders.find(element => element.id == data.id);
                if (orderNew) orderNew.order_status = data.order;
            });
            socket.on("success-cancel-user-order", function (data) {
                let orderNew = self.orders.find(element => element.id == data.id);
                if (orderNew) orderNew.order_status = data.order;
            });
            this.getOrders();
        },
        data: function () {
            return {
                orders: [],
                productId: [],
                order_product: [],
                products: []
            };
        },
        methods: {
            getOrders: function () {
                let self = this;
                this.$axios
                    .get("/orders/customerId/" + this.$route.params.id)
                    .then(function (res) {
                        self.orders = res.data.rows;
                    });
            },
            handelCancel(id) {
                let self = this;
                this.$axios.put("/orders/cancel/" + id).then(function (res) {
                    let order = self.orders.find(element => element.id == id);
                    if (order) order.order_status = 2;
                    socket.emit("cancel-user-order", {order: order.order_status, id: id});
                });
            },
            getOrder_products(id) {
                let self = this;
                self.productId = [];
                self.order_product = [];
                this.$axios.get("/order_products/get_products/" + id).then(function (res) {
                    self.order_product = res.data.data;
                    self.order_product.forEach(element => {
                        self.productId.push(element.productId);
                    });
                });
                setTimeout(() => {
                    this.getProduct();
                }, 500);
            },
            getProduct() {
                let self = this;
                self.products = [];
                self.productId.forEach(element => {
                    this.$axios.get("/products/" + element).then(function (res) {
                        let product = res.data.data;
                        self.products.push({
                            name: product.name,
                            price: product.price,
                            quantity: self.order_product
                        });
                    });
                });
            }
        }
    }
</script>
<style scoped>
  tbody {
    text-align: center;
  }
</style>
