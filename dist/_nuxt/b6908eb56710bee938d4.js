(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{462:function(t,e,r){"use strict";r.r(e);r(22);var n={mounted:function(){this.getCategories()},data:function(){return{form:{name:"",cat_parent:""},options:[{value:0,text:"This is parent category "}]}},methods:{getCategories:function(){var t=this;this.$axios.get("/categories/cat_parent/0").then((function(e){e.data.data.rows.forEach((function(e){t.options.push({value:e.id,text:e.name})}))})),console.log(t.options)},handleSubmit:function(){var t=this;this.$axios.post("/categories",this.form).then((function(e){t.$router.push("/categories")}))},handleLogout:function(){Cookie.remove("token"),this.$store.commit("setToken",null),this.$router.push("/login")}}},o=r(43),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",{staticClass:"navbar navbar-custom navbar-fixed-top",attrs:{role:"navigation"}},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"navbar-header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("li",[r("ul",{staticClass:"nav menu",staticStyle:{color:"#30a5ff"}},[r("li",{staticClass:"active"},[r("a",{on:{click:function(e){return t.$router.push("/user/home")}}},[t._v("Home")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("/user/detail/"+t.user_id)}}},[t._v("Admin")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("/user/edit/"+t.user_id)}}},[t._v("Profile")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("/user/register")}}},[t._v("Register")])]),t._v(" "),r("li",[r("a",{on:{click:t.handleLogout}},[t._v("Logout")])])])])])])]),t._v(" "),r("div",[r("div",{staticClass:"col-sm-3 col-lg-2 sidebar",staticStyle:{"margin-top":"-30px"},attrs:{id:"sidebar-collapse"}},[t._m(2),t._v(" "),r("div",{staticClass:"divider"}),t._v(" "),r("ul",{staticClass:"nav menu",staticStyle:{display:"block"}},[r("li",[r("a",{on:{click:function(e){return t.$router.push("/user/home")}}},[t._v("Home")])]),t._v(" "),r("li",{staticClass:"active"},[r("a",{on:{click:function(e){return t.$router.push("/categories")}}},[t._v("Categories")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("/products")}}},[t._v("Products")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("/orders")}}},[t._v("Orders")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("/slide")}}},[t._v("Slide")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("/user")}}},[t._v("Users")])])])]),t._v(" "),r("div",{staticClass:"col-sm-8 col-lg-10 sidebar"},[r("div",{staticClass:"create-form"},[r("br"),t._v(" "),r("label",[t._v("Please select your cat's name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter your cat name "},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),r("label",[t._v("Please select your cat's parent")]),t._v(" "),r("b-form-select",{attrs:{options:t.options},model:{value:t.form.cat_parent,callback:function(e){t.$set(t.form,"cat_parent",e)},expression:"form.cat_parent"}}),t._v(" "),r("br"),t._v(" "),r("label",[r("button",{staticClass:"btn btn-info",on:{click:t.handleSubmit}},[t._v("Submit")])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#sidebar-collapse"}},[e("span",{staticClass:"sr-only"},[this._v("Toggle navigation")]),this._v(" "),e("span",{staticClass:"icon-bar"}),this._v(" "),e("span",{staticClass:"icon-bar"}),this._v(" "),e("span",{staticClass:"icon-bar"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e("span",[this._v("Scan & Go")]),this._v("Admin\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profile-sidebar"},[e("div",{staticClass:"profile-userpic"},[e("img",{staticClass:"img-responsive",attrs:{src:"http://placehold.it/50/30a5ff/fff",alt:""}})]),this._v(" "),e("div",{staticClass:"profile-usertitle"},[e("div",{staticClass:"profile-usertitle-name"},[this._v("Admin")]),this._v(" "),e("div",{staticClass:"profile-usertitle-status"},[e("span",{staticClass:"indicator label-success"}),this._v("Online\n          ")])]),this._v(" "),e("div",{staticClass:"clear"})])}],!1,null,null,null);e.default=component.exports}}]);