(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{418:function(t,e,r){var content=r(445);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("8ff77f3e",content,!0,{sourceMap:!1})},444:function(t,e,r){"use strict";var n=r(418);r.n(n).a},445:function(t,e,r){(t.exports=r(20)(!1)).push([t.i,"img{width:50px;height:50px}",""])},481:function(t,e,r){"use strict";r.r(e);r(65);var n,o,c=r(15),d={created:function(){this.getTasks(),this.getComments()},data:function(){return{tasks:[],comments:[]}},methods:{getTasks:(o=Object(c.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("/products/"+this.$route.params.id);case 2:e=t.sent,this.tasks=e.data.data;case 4:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),getComments:(n=Object(c.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("/products/comment/"+this.$route.params.id);case 2:e=t.sent,console.log(e),this.comments=e.data.data;case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),delTasks:function(t){var e=this;this.$axios.delete("/products/"+t).then((function(t){e.getTasks()}))}}},_=(r(444),r(43)),component=Object(_.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("table",{staticClass:"table table-bordered"},[t._m(0),t._v(" "),r("tr",[r("td",[t._v(t._s(t.tasks.id))]),t._v(" "),r("td",[t._v(t._s(t.tasks.name))]),t._v(" "),r("td",[t._v(t._s(t.tasks.categoriesId))]),t._v(" "),r("td",[r("img",{attrs:{src:"/"+(t.tasks.images?t.tasks.images.default_image:"")}})]),t._v(" "),r("td",[t._v(t._s(t.tasks.price))]),t._v(" "),r("td",{staticStyle:{width:"300px"},domProps:{innerHTML:t._s(t.tasks.description)}}),t._v(" "),r("td",{domProps:{innerHTML:t._s(t.tasks.detail)}}),t._v(" "),r("td",[t._v(t._s(t.tasks.order_time))]),t._v(" "),r("td",[r("b-button",{staticClass:"btn btn-dark",on:{click:function(e){return t.$router.push("/products")}}},[t._v("Back")])],1)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("Number")]),t._v(" "),r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("categories")]),t._v(" "),r("th",[t._v("picture")]),t._v(" "),r("th",[t._v("price")]),t._v(" "),r("th",[t._v("description")]),t._v(" "),r("th",[t._v("detail")]),t._v(" "),r("th",[t._v("order_time")]),t._v(" "),r("th",[t._v("action")])])}],!1,null,null,null);e.default=component.exports}}]);