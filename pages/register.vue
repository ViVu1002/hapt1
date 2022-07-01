<template>
  <div id="login">
    <h3 class="text-center text-white pt-5">Register</h3>
    <div class="container">
      <div
        id="login-row"
        class="row justify-content-center align-items-center"
        style="margin-top:-150px"
      >
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
            <h3 class="text-center text-info">Register</h3>
            <b-form @submit.prevent="handleCreate">
              <div class="form-group">
                <b-form-group
                  label="Your Name:"
                  :class="{ 'form-group--error': $v.form.name.$error }"
                >
                  <b-form-input v-model.trim="$v.form.name.$model" placeholder="Enter name"></b-form-input>
                  <div class="error" v-if="!$v.form.name.required">Name is required</div>
                  <div
                    class="error"
                    v-if="!$v.form.name.minLength"
                  >Name must have at least {{$v.form.name.$params.minLength.min}} letters.</div>
                </b-form-group>
              </div>
              <div class="form-group">
                <b-form-group
                  label="Your email:"
                  :class="{ 'form-group--error': $v.form.email.$error }"
                >
                  <b-form-input v-model.trim="$v.form.email.$model" placeholder="Enter your email"></b-form-input>
                  <div class="error" v-if="!$v.form.email.required">Email is required</div>
                  <div
                    class="error"
                    v-if="!$v.form.email.minLength"
                  >Name must have at least {{$v.form.email.$params.minLength.min}} letters.</div>
                  <div class="error" v-if="!$v.form.email.email">Email is not available</div>
                </b-form-group>
              </div>
              <div class="form-group">
                <b-form-group
                  label="Your Password:"
                  :class="{ 'form-group--error': $v.form.password.$error }"
                >
                  <b-form-input
                    type="password"
                    v-model.trim="$v.form.password.$model"
                    placeholder="Enter your password"
                  ></b-form-input>
                  <div class="error" v-if="!$v.form.password.required">password is required</div>
                  <div
                    class="error"
                    v-if="!$v.form.password.minLength"
                  >password must have at least {{$v.form.password.$params.minLength.min}} letters.</div>
                </b-form-group>
              </div>
              <div class="form-group">
                <b-form-group label="Retype your password again:">
                  <b-form-input
                    type="password"
                    v-model="repassword"
                    placeholder="Retype your password again"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="form-group">
                <b-form-group>
                  <div class="form-group">
                    <label for="address" class="text-info">Address:</label>
                    <br />
                    <input type="text" v-model="form.address" id="address" class="form-control" />
                  </div>
                </b-form-group>
              </div>
              <b-form-group>
                <input type="checkbox" v-model="form.role" value="1" /> Are you admin?
              </b-form-group>
              <div class="form-group text-xl-center">
                <input type="submit" class="btn btn-info btn-md" value="submit" @click="showAlert" />
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        address: "",
        role: false
      },
      repassword: ""
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(7)
      },
      email: {
        required,
        minLength: minLength(7),
        email
      },
      password: {
        required,
        minLength: minLength(7)
      }
    }
  },
  methods: {
    handleCreate() {
      let self = this;
      if (this.$v.$invalid) {
        alert("failled");
      } else {
        if (this.repassword == this.form.password) {
          this.$axios.post("/register", this.form).then(function(res) {
            console.log(res);
            self.$router.push("/login");
          });
        } else {
          alert("Repassword is not correct");
        }
      }
    },
    showAlert() {
      this.$fire({
        title: "Đăng kí thành công!",
        type: "success",
        timer: 3000
      }).then(r => {});
    }
  }
};
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #17a2b8;
  height: 150vh;
}
#login .container #login-row #login-column #login-box {
  margin-top: 120px;
  max-width: 600px;
  height: 700px;
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
