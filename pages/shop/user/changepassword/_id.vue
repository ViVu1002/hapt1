<template>
  <div>
    <!--    <shopHeader />-->
    <FlashMessage :position="'right bottom'"/>
    <!-- content -->
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
            >Thay đổi mật khẩu truy cập
            </div>
            <div class="card-body" style="font-style: italic">
              <div class="row">
                <div class="col-12 col-md-8">
                  <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-left">Mật khẩu cũ:</label>
                    <b-input
                      class="col-md-8 col-form-label text-md-left"
                      type="password"
                      v-model="users.oldPassword"
                    ></b-input>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-left">Mật khẩu mới :</label>
                    <b-input
                      class="col-md-8 col-form-label text-md-left"
                      type="password"
                      v-model="users.newPassword"
                    ></b-input>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-left">Nhập lại:</label>
                    <b-input
                      class="col-md-8 col-form-label text-md-left"
                      type="password"
                      v-model="users.confirmPassword"
                    ></b-input>
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
                          @click="$router.push('/')"
                        >Back
                        </button>
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
    <!-- end content -->
    <shopFooter/>
  </div>
</template>
<script>
    import shopFooter from "~/components/shopFooter.vue";
    import shopUser from "~/components/shopUser.vue";
    // import shopHeader from "~/component/shopHeader.vue"
    export default {
        components: {
            // shopHeader,
            shopFooter,
            shopUser,

        },
        mounted: function () {
            this.getUsers();
        },
        data: function () {
            return {
                users: {
                    oldPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                },

            };
        },
        methods: {
            getUsers: function () {
                let self = this;
                this.$axios.get("/users/" + this.$route.params.id).then(function (res) {
                    self.users = res.data.data;
                });
            },
            handelSubmit() {
                let self = this;
                if (this.users.newPassword == this.users.confirmPassword) {
                    this.$axios.put("/users/changePassword/" + this.users.id, this.users).then(function (res) {
                        self.flashMessage.success({
                            title: 'Success',
                            message: 'Update Success'
                        });
                        self.users = '';
                    });
                } else
                    return self.flashMessage.error({
                        title: 'Error',
                        message: 'password fail'
                    })
            },
        }
    }

</script>
