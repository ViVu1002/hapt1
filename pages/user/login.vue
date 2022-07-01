<template>
  <div>
    <div style="margin-left:600px; width:1000px">
      <b-row>
        <b-col cols="8">
          <div class="login-panel panel panel-default">
            <div class="panel-heading">Log in</div>
            <div class="panel-body">
              <div class="form-group">
                <input
                  class="form-control"
                  required
                  placeholder="Email"
                  v-model="admins.email"
                  type="email"
                  autofocus
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  required
                  placeholder="Password"
                  v-model="admins.password"
                  type="password"
                  value
                />
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="1" />Do you must be an admin ?
                </label>
              </div>
              <b-button variant="info" @click="handleLogin">Login</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  mounted: function() {
    console.log("token", this.$store.state.token);
  },
  data: function() {
    return {
      admins: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    handleLogin: function(id) {
      let self = this;
      this.$axios
        .post("/admins/login", this.admins, {
          headers: {
            token: this.$store.state.token
          }
        })
        .then(function(res) {
          console.log(res);
          self.$store.commit("setToken", res.data.token);
          Cookie.set("token", res.data.token);
          self.$router.push("/admins/home");
        });
    }
  }
};
</script>
<style>
body {
  background: #f1f4f7;
  padding-top: 60px;
  font-size: 14px;
  color: #444444;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.panel-heading {
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0.025em;
  height: 60px;
  line-height: 38px;
}

.panel-default .panel-heading {
  background: #fff;
  border-bottom: 1px solid #e9ecf2;
  color: #444444;
}
input.form-control {
  border: 1px solid #ddd;
  box-shadow: none;
  height: 46px;
}

.bootstrap-table input.form-control {
  height: 34px;
}

.input-group-btn .btn {
  height: 46px;
}
a.btn:hover,
button:hover {
  opacity: 0.8;
}
.panel-body {
  padding: 15px;
}
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.panel-body {
  padding: 15px;
}
</style>