<template>
  <div>
    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#sidebar-collapse"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <span>Scan & Go</span>Admin
          </a>
          <li>
            <ul class="nav menu" style="color:#30a5ff">
              <li class="active">
                <a @click="$router.push('/user/home')">Home</a>
              </li>
              <li>
                <a @click="$router.push('/user/detail/'+user_id)">Admin</a>
              </li>
              <li>
                <a @click="$router.push('/user/edit/'+user_id)">Profile</a>
              </li>
              <li>
                <a @click="$router.push('/register')">Register</a>
              </li>
              <li>
                <a @click="handleLogout">Logout</a>
              </li>
            </ul>
          </li>
        </div>
      </div>
      <!-- /.container-fluid -->
    </nav>
    <div id="sidebar-collapse" class="col-sm-3 col-lg-2 sidebar" style="margin-top:-30px">
      <div class="profile-sidebar">
        <div class="profile-userpic">
          <img src="http://placehold.it/50/30a5ff/fff" class="img-responsive" alt />
        </div>
        <div class="profile-usertitle">
          <div class="profile-usertitle-name">Admin</div>
          <div class="profile-usertitle-status">
            <span class="indicator label-success"></span>Online
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="divider"></div>
      <form role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search" />
        </div>
      </form>
      <ul class="nav menu" style="display:block">
        <li class="active">
          <a @click="$router.push('/user/home')">Home</a>
        </li>
        <li>
          <a @click="$router.push('/categories')">Categories</a>
        </li>
        <li>
          <a @click="$router.push('/products')">Products</a>
        </li>
        <li>
          <a @click="$router.push('/orders')">Orders</a>
        </li>
        <li>
          <a @click="$router.push('/slide')">Slide</a>
        </li>
        <li>
          <a @click="$router.push('/comment')">Comment</a>
        </li>
        <li>
          <a @click="$router.push('/user')">Users</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  middleware: "authenticated",
  mounted: function() {
    this.getUsers();
  },
  data: function() {
    return {
      user_id: ""
    };
  },
  methods: {
    getUsers: function() {
      let self = this;
      this.$axios.get("/users").then(function(res) {
        self.user_id = res.data.decoded.user_id;
        self.users = res.data.data;
      });
    },
    handleLogout: function() {
      Cookie.remove("token");
      this.$store.commit("setToken", null);
      this.$router.push("/login");
    }
  }
};
</script>
