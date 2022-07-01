<template>
  <div>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div
              class="card-header text-md-center"
              style="font-size: 20px;font-weight: bold"
            >Thông tin người dùng</div>
            <div class="card-body" style="font-style: italic">
              <div class="row">
                <div class="col-12 col-md-8">
                  <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-left">Name</label>
                    <label class="col-md-4 col-form-label text-md-left">: {{users.name}}</label>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-left">Email</label>
                    <label class="col-md-8 col-form-label text-md-left">: {{users.email}}</label>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-left">Address</label>
                    <label class="col-md-4 col-form-label text-md-left">: {{users.address}}</label>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-right"></label>
                    <div class="col-md-6">
                      <span>
                        <button
                          type="button"
                          class="btn btn-primary"
                          @click="$router.push('/user/edit/'+users.id)"
                        >Edit Profile</button>
                      </span>
                      <span>
                        <span>
                          <button
                            style="margin-top:15px"
                            type="button"
                            class="btn btn-info"
                            @click="$router.push('/user/home/')"
                          >Back</button>
                        </span>
                      </span>
                    </div>
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
export default {
  mounted: function() {
    this.getUsers();
  },
  data: function() {
    return {
      users: []
    };
  },
  methods: {
    getUsers: function() {
      let self = this;
      this.$axios.get("/users/" + this.$route.params.id).then(function(res) {
        self.users = res.data.data;
      });
    }
  }
};
</script>
<style scoped>
</style>
