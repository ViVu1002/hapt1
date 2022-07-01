<template>
  <div class="container">
    <h3>Order Detail Processing</h3>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>STT</th>
          <th>Customer_id</th>
          <th>Order_status</th>
          <th>Total_price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{orders.id}}</td>
          <td>{{orders.customerId}}</td>
          <td>{{orders.order_status}}</td>
          <td>{{orders.total_price}}</td>
        </tr>
      </tbody>
    </table>

    <h3>Danh sách sản phẩm</h3>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>STT</th>
          <th>Product ID</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product,key) in products" :key="key">
          <td>{{key}}</td>
          <td>{{product.id}}</td>
          <td>{{product.name}}</td>
          <td>{{order_products[key].quantity}}</td>
          <td>{{product.price}}</td>
          <td>{{order_products[key].quantity * product.price}}</td>
        </tr>
      </tbody>
    </table>
    <b-button variant="dark" @click="$router.push('/orders')">Trở lại</b-button>
  </div>
</template>
<script>
export default {
  mounted: function() {
    this.getOrders();
    setTimeout(() => {
      this.getProducts();
    }, 1000);
  },
  data: function() {
    return {
      orders: [],
      order_products: [],
      products: []
    };
  },
  methods: {
    getOrders: function() {
      let self = this;
      this.$axios.get("/orders/" + this.$route.params.id).then(function(res) {
        self.orders = res.data;
        self.order_products = res.data.order_products;
      });
    },
    getProducts() {
      let self = this;
      self.order_products.forEach(element => {
        this.$axios.get("/products/" + element.productId).then(function(res) {
          let pro = res.data.data;
          self.products.push(pro);
        });
      });
    }
  }
};
</script>
