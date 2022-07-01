<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>STT</th>
          <th>Slide_id</th>
          <th>Name</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{slides.id}}</td>
          <td>{{slides.name}}</td>
          <td>{{slides.image}}</td>
        </tr>
      </tbody>
    </table>
    <b-button variant="info" @click="$router.push('/slide')">Order</b-button>
  </div>
</template>
<script>
export default {
  mounted: function() {
    this.getOrders();
  },
  data: function() {
    return {
      orders: [],
      order_products: []
    };
  },
  methods: {
    getOrders: function() {
      let self = this;
      this.$axios.get("/slide/" + this.$route.params.id).then(function(res) {
        console.log(res);
        self.slides = res.data;
      });
    }
  }
};
</script>
