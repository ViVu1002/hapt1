(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{453:function(t,e,n){"use strict";n.r(e);var r={mounted:function(){this.getSlides()},data:function(){return{comments:[],search:"",totalResult:0,pagination:{currentPage:1,perPage:10}}},methods:{getSlides:function(){var t=this;this.$axios.get("/comment").then((function(e){console.log(e),t.comments=e.data.data}))},handleLogout:function(){Cookie.remove("token"),this.$store.commit("setToken",null),this.$router.push("/login")}}},o=n(43),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar navbar-custom navbar-fixed-top",attrs:{role:"navigation"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"navbar-header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("li",[n("ul",{staticClass:"nav menu",staticStyle:{color:"#30a5ff"}},[n("li",{staticClass:"active"},[n("a",{on:{click:function(e){return t.$router.push("/user/home")}}},[t._v("Home")])]),t._v(" "),n("li",[n("a",{on:{click:function(e){return t.$router.push("/user/detail/"+t.user_id)}}},[t._v("Admin")])]),t._v(" "),n("li",[n("a",{on:{click:function(e){return t.$router.push("/user/edit/"+t.user_id)}}},[t._v("Profile")])]),t._v(" "),n("li",[n("a",{on:{click:function(e){return t.$router.push("/register")}}},[t._v("Register")])]),t._v(" "),n("li",[n("a",{on:{click:t.handleLogout}},[t._v("Logout")])])])])])])]),t._v(" "),n("div",[n("div",{staticClass:"col-sm-3 col-lg-2 sidebar",staticStyle:{"margin-top":"-30px"},attrs:{id:"sidebar-collapse"}},[t._m(2),t._v(" "),n("div",{staticClass:"divider"}),t._v(" "),n("ul",{staticClass:"nav menu",staticStyle:{display:"block"}},[n("li",[n("a",{on:{click:function(e){return t.$router.push("/user/home")}}},[t._v("Home")])]),t._v(" "),n("li",[n("a",{on:{click:function(e){return t.$router.push("/categories")}}},[t._v("Categories")])]),t._v(" "),n("li",[n("a",{on:{click:function(e){return t.$router.push("/products")}}},[t._v("Products")])]),t._v(" "),n("li",[n("a",{on:{click:function(e){return t.$router.push("/orders")}}},[t._v("Orders")])]),t._v(" "),n("li",[n("a",{on:{click:function(e){return t.$router.push("/slide")}}},[t._v("Slide")])]),t._v(" "),n("li",{staticClass:"active"},[n("a",{on:{click:function(e){return t.$router.push("/comment")}}},[t._v("Comment")])]),t._v(" "),n("li",[n("a",{on:{click:function(e){return t.$router.push("/user")}}},[t._v("Users")])])])]),t._v(" "),n("div",{staticClass:"col-sm-9 col-lg-10 sidebar"},[n("table",{staticClass:"table table-bordered"},[t._m(3),t._v(" "),n("tbody",t._l(t.comments,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(r+1))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.comment))]),t._v(" "),n("td",[t._v(t._s(e.rate))]),t._v(" "),n("td",[t._v(t._s(e.parentId))]),t._v(" "),n("td",[t._v(t._s(e.productId))])])})),0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#sidebar-collapse"}},[e("span",{staticClass:"sr-only"},[this._v("Toggle navigation")]),this._v(" "),e("span",{staticClass:"icon-bar"}),this._v(" "),e("span",{staticClass:"icon-bar"}),this._v(" "),e("span",{staticClass:"icon-bar"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e("span",[this._v("Scan & Go")]),this._v("Admin\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profile-sidebar"},[e("div",{staticClass:"profile-userpic"},[e("img",{staticClass:"img-responsive",attrs:{src:"http://placehold.it/50/30a5ff/fff",alt:""}})]),this._v(" "),e("div",{staticClass:"profile-usertitle"},[e("div",{staticClass:"profile-usertitle-name"},[this._v("Admin")]),this._v(" "),e("div",{staticClass:"profile-usertitle-status"},[e("span",{staticClass:"indicator label-success"}),this._v("Online\n          ")])]),this._v(" "),e("div",{staticClass:"clear"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("STT")]),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Comment")]),t._v(" "),n("th",[t._v("Rate")]),t._v(" "),n("th",[t._v("ParentId")]),t._v(" "),n("th",[t._v("ProductId")])])])}],!1,null,null,null);e.default=component.exports}}]);