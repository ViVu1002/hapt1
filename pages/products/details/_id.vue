<template>
  <div class="container">
    <table class="table table-bordered">
      <tr>
        <th>Number</th>
        <th>Name</th>
        <th>categories</th>
        <th>picture</th>
        <th>price</th>
        <th>description</th>
        <th>detail</th>
        <th>order_time</th>
        <th>action</th>
      </tr>
      <tr>
        <td>{{tasks.id}}</td>
        <td>{{tasks.name}}</td>
        <td>{{tasks.categoriesId}}</td>
        <td>
          <img :src="`/${tasks.images? tasks.images.default_image: ''}`" />
        </td>
        <td>{{tasks.price}}</td>
        <td style="width:300px" v-html="tasks.description"></td>
        <td v-html="tasks.detail"></td>
        <td>{{tasks.order_time}}</td>
        <td>
          <b-button class="btn btn-dark" @click="$router.push('/products')">Back</b-button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  created: function() {
    this.getTasks();
    this.getComments();
  },
  data: function() {
    return {
      tasks: [],
      comments:[]
      // loaded : false,
    };
  },
  methods: {
    getTasks: async function() {
      const res = await this.$axios.get("/products/" + this.$route.params.id);
      this.tasks = res.data.data;
    },
    getComments: async function() {
      const res = await this.$axios.get("/products/comment/" + this.$route.params.id);
      console.log(res)
      this.comments = res.data.data;
    },
    delTasks: function(id) {
      let self = this;
      this.$axios.delete("/products/" + id).then(function(res) {
        self.getTasks();
      });
    }
  }
};
</script>
<style>
img {
  width: 50px;
  height: 50px;
}
</style>
