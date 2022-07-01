<template>
  <div id="login">
    <h3 class="text-center text-white pt-5">Login form</h3>
    <div class="container">
      <b-form @submit.prevent="handleLogin">
        <div id="login-row" class="row justify-content-center align-items-center">
          <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12">
              <h3 class="text-center text-info">Login</h3>
              <b-form-group
                label="Your email:"
                :class="{ 'form-group--error': $v.user.email.$error }"
              >
                <b-form-input v-model.trim="$v.user.email.$model" placeholder="Enter your email"></b-form-input>
                <div class="error" v-if="!$v.user.email.required">Email is required</div>
                <div class="error" v-if="!$v.user.email.email">Email is not available</div>
              </b-form-group>
              <b-form-group
                label="Your Password:"
                :class="{ 'form-group--error': $v.user.password.$error }"
              >
                <b-form-input
                  type="password"
                  v-model.trim="$v.user.password.$model"
                  placeholder="Enter your password"
                ></b-form-input>
                <div class="error" v-if="!$v.user.password.required">password is required</div>
                <div
                  class="error"
                  v-if="!$v.user.password.minLength"
                >password must have at least {{$v.user.password.$params.minLength.min}} letters.</div>
              </b-form-group>

              <div class="form-group">
                <label for="remember-me" class="text-info">
                  <span>Remember me</span>
                  <span>
                    <input id="remember-me" name="remember-me" type="checkbox" />
                  </span>
                </label>
                <input type="submit" class="btn btn-info btn-md" value="submit" />
                <button class="btn btn-success" @click="$router.push('/register')">Register</button>
              </div>
            </div>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require("js-cookie") : undefined;
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  mounted: function() {
    console.log("token", this.$store.state.token);
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
        id: "",
        role: ""
      },
      repassword: ""
    };
  },
  validations: {
    user: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(4)
      }
    }
  },
  methods: {
    handleLogin: function(id) {
      let self = this;
      if (this.$v.$invalid) {
        alert("failled");
      } else {
        this.$axios.post("/login", this.user).then(function(res) {
          if (res.data.error) {
            alert(res.data.message);
          } else {
            alert(res.data.message);
            self.$store.commit("setToken", res.data.token);
            Cookie.set("token", res.data.token);
            if (res.data.data.role == true) {
              self.$router.push("/user/home");
            } else {
              self.$router.push("/");
            }
          }
        });
      }
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
  height: 450px;
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
