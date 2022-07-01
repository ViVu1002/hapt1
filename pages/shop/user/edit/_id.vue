<template>

  <div class="container mt-5">
    <FlashMessage :position="'right bottom'"/>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div
            class="card-header text-md-center"
            style="font-size: 20px;font-weight: bold"
          >Chỉnh Sửa thông tin</div>
          <div class="card-body" style="font-style: italic">
            <div class="row">
              <div class="col-12 col-md-8">
                <div class="form-group row">
                  <label class="col-md-4 col-form-label text-md-left">Tên Người Dùng :</label>
                  <b-input class="col-md-8 col-form-label text-md-left" v-model="form.name"></b-input>
                </div>
                <div class="form-group row">
                  <label class="col-md-4 col-form-label text-md-left">Địa chỉ Email :</label>
                  <b-input class="col-md-8 col-form-label text-md-left" v-model="form.email"></b-input>
                </div>
                <div class="form-group row">
                  <label class="col-md-4 col-form-label text-md-left">Nơi Sinh Sống :</label>
                  <b-input class="col-md-8 col-form-label text-md-left" v-model="form.address"></b-input>
                </div>
                <div class="form-group row">
                  <label class="col-md-4 col-form-label text-md-right"></label>
                  <div class="col-md-3">
                    <a>
                      <button type="button" class="btn btn-primary" @click="handelSubmit">Update</button>
                    </a>
                  </div>
                  <div class="col-md-3">
                    <a>
                      <button
                        type="button"
                        style="margin-top:15px"
                        class="btn btn-dark"
                        @click="$router.push('/shop/user/detail/'+form.id)"
                      >Back</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  mounted: function() {
    this.getUsers();
  },
  data: function() {
    return {
      form: {
        id: "",
        name: "",
        email: "",
        address: ""
      },
      user_id: ""
    };
  },
  methods: {
    getUsers() {
      let self = this;
      this.$axios.get("/users/" + this.$route.params.id).then(function(res) {
        self.form = res.data.data;
        self.user_id = res.data.decoded.user_id;
      });
    },
    handelSubmit: function() {
      let self = this;
      this.$axios.put("/users/" + this.form.id, this.form).then(function(res) {
          self.flashMessage.success({title : "success", message: "Cập nhật thành công!"});
      });
      self.$router.push("/shop/user/detail/" + this.user_id);
    }
  }
};
</script>

<style scoped>
</style>
