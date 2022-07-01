<template>
  <div class="container">
    <h1>Thêm mới sản Phẩm</h1>Name:
    <input
      v-model="form.name"
      type="text"
      class="form-control"
      placeholder="Enter your product's name "
    />
    <upload_files @uploaded="imageUploaded"></upload_files>
    <b-button @click="handleSubmit">Submit</b-button>
  </div>
</template>
<script>
import upload_files from "../../components/upload_files";

export default {
  components: {
    upload_files
  },
  data: function() {
    return {
      form: {
        name: "",
        image: ""
      }
    };
  },
  methods: {
    handleSubmit: function() {
      let self = this;
      this.$axios.post("/slide", this.form).then(function(res) {
        console.log(res);
        self.$router.push("/slide");
      });
    },
    imageUploaded(data = {}) {
      this.form.image = data.productImageInfo ? data.productImageInfo.id : null;
    }
  }
};
</script>
<style scoped>
div input {
  padding-top: 10px;
}
</style>
