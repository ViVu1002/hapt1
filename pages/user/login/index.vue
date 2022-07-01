<template>
  <div id="login">
    <h3 class="text-center text-white pt-5">Login form</h3>
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
            <h3 class="text-center text-info">Login</h3>
            <div class="form-group">
              <label class="text-info">Email:</label>
              <br />
              <input type="email" v-model="user.email" class="form-control" />
            </div>
            <div class="form-group">
              <label class="text-info">Password:</label>
              <br />
              <input type="password" v-model="user.password" class="form-control" />
            </div>
            <div class="form-group">
              <label for="remember-me" class="text-info">
                <span>Remember me</span>
                <span>
                  <input id="remember-me" name="remember-me" type="checkbox" />
                </span>
              </label>
              <input type="submit" @click="handelSubmit" class="btn btn-info btn-md" value="submit" />
              <button class="btn btn-success" @click="$router.push('/register')">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Cookies = process.client ? require("js-cookie") : undefined;
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    handelSubmit() {
      let self = this;
      this.$axios
        .post("http://127.0.0.1:4000/users/login", this.user)
        .then(function(res) {
          console.log(res);
          self.$store.commit("setToken", res.data.token);
          Cookies.set("setToken", res.data.token);
          self.$router.push("/");
        });
    }
  }
};
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #17a2b8;
  height: 100vh;
}

#login .container #login-row #login-column #login-box {
  margin-top: 120px;
  max-width: 600px;
  height: 320px;
  border: 1px solid #9c9c9c;
  background-color: #eaeaea;
}

#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}

#login
  .container
  #login-row
  #login-column
  #login-box
  #login-form
  #register-link {
  margin-top: -85px;
}
</style>
