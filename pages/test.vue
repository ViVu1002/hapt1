<template>
  <div>
    <h2 style="margin-top:10px" class="title text-center">Đánh giá sản phẩm</h2>
    <div>
      <div>
        <label style="margin:20px 0 30px 420px" for="viet_bai_danh_gia">Đánh giá sản phẩm</label>
        <input
          class="input_rating"
          type="text"
          v-model="form.comment"
          id="viet_bai_danh_gia"
          placeholder="Viết bình luận..."
        />
        <star-rating
          style="float:right"
          :show-rating="false"
          @rating-selected="setRating"
          v-model="form.rating"
          v-bind:star-size="20"
          :increment="0.5"
        ></star-rating>
        <b-button variant="info" style="float:right" @click="handleSubmit">Comment</b-button>
      </div>
    </div>
  </div>
</template>
<script>
const Cookies = process.client ? require("js-cookie") : undefined;

export default {
  mounted() {
    this.getProducts();
  },
  data() {
    return {
      form: {
        comment: "",
        userId: "",
        rate: "",
        parentId: "",
        name: "",
        productId: "",
        rating: 0,
        id: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      let self = this;
      this.$axios.post("/comment", this.form).then(function(res) {
        self.getProducts();
        self.form.comment = "";
        self.form.rating = "";
      });
    },
    getProducts() {
      let self = this;
      this.$axios.get("/products/" + this.$route.params.id).then(function(res) {
        self.product = res.data.data;
        self.form.productId = res.data.data.id;
      });
    },
    setRating() {
      axios.post("/comment").then(response => {
        this.rating = 0;
      });
    }
  }
};
</script>
<style>
.img_detail {
  width: 500px;
  height: 500px;
  display: block;
  margin: 0 auto;
}
.img_picture {
  margin-right: 5px;
  margin-top: 10px;
  width: 73px !important;
  height: 75px !important;
  display: inline-block !important;
  border: 1px solid #e6dfdf;
}
.rating {
  border: 1px solid #bfbfbf;
  width: 86px;
  height: 40px;
  margin-left: 10px;
  border-radius: 1em;
}
.rating_1 {
  border: 1px solid #bfbfbf;
  width: 130px;
  height: 40px;
  margin-left: 100px;
  border-radius: 1em;
}
.input_rating {
  border-radius: 1em;
  width: 30% !important;
  height: 40px;
}
.rating_2 {
  border: 1px solid #bfbfbf;
  border-radius: 1em;
  width: 130px;
  height: 40px;
  margin-left: 100px;
}
</style>