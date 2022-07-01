<template>
  <div class="container">
    <h1>Thêm mới sản Phẩm</h1>Name:
    <input
      v-model="form.name"
      type="text"
      class="form-control"
      placeholder="Enter your product's name "
    />
    Select product's category in the select form below :
    <b-form-select v-model="form.categoriesId" :options="options"></b-form-select>
    <upload_files @uploaded="imageUploaded"></upload_files>Price:
    <input
      v-model="form.price"
      type="text"
      class="form-control"
      placeholder="Enter your product price"
    />
    Description:
    <vue-ckeditor
      type="classic"
      v-model="form.description"
      class="form-control"
      placeholder="Enter your product description"
    ></vue-ckeditor>Detail:
    <vue-ckeditor
      type="classic"
      v-model="form.detail"
      class="form-control"
      placeholder="Enter your product detail"
    ></vue-ckeditor>Order time:
    <input
      v-model="form.order_time"
      type="text"
      class="form-control"
      placeholder="Enter your product order_time"
    />
    <br />
    <label>
      <button class="btn btn-info" @click="handleSubmit">Submit</button>
    </label>
  </div>
</template>
<script>
import upload_files from "../../components/upload_files";

export default {
  components: {
    upload_files
  },
  mounted: function() {
    this.getCatProduct();
  },
  data: function() {
    return {
      form: {
        name: "",
        categoriesId: "",
        picture: "",
        price: "",
        description: "",
        detail: "",
        order_time: ""
      },
      options: [{ value: 0, text: "This is parent category " }]
    };
  },
  methods: {
    getCatProduct: function() {
      let self = this;
      this.$axios.get("/categories/cat_product").then(function(res) {
        let data = res.data.data.rows;
        data.forEach(value => {
          self.options.push({
            value: value.id,
            text: value.name
          });
        });
      });
    },
    handleSubmit() {
      let self = this;
      this.$axios.post("/products", this.form).then(res => {
        console.log(res);
        this.$router.push("/products");
      });
    },
    imageUploaded(data = {}) {
      this.form.picture = data.productImageInfo
        ? data.productImageInfo.id
        : null;
    }
  }
};
</script>
<style scoped>
div input {
  padding-top: 10px;
}
</style>
