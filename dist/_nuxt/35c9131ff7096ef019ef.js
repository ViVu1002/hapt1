(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{377:function(e,t,n){var content=n(409);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("4ffb4d0f",content,!0,{sourceMap:!1})},408:function(e,t,n){"use strict";var o=n(377);n.n(o).a},409:function(e,t,n){(e.exports=n(20)(!1)).push([e.i,"div.file-listing[data-v-c31aed1a]{width:200px}span.remove-file[data-v-c31aed1a]{color:red;cursor:pointer;float:right}div button[data-v-c31aed1a]{margin-left:14px}div input[data-v-c31aed1a]{margin-left:-15px}",""])},414:function(e,t,n){var content=n(437);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("3953c03c",content,!0,{sourceMap:!1})},421:function(e,t,n){"use strict";var o={data:function(){return{files:[]}},methods:{submitFiles:function(){var e=this;if(this.checkFilesValid()){for(var t=new FormData,i=0;i<this.files.length;i++)t.append("files",this.files[i]);this.$axios.post("/gallery/upload",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.$emit("uploaded",{productImageInfo:t.data.data}),e.files=""})).catch((function(e){console.log("%cOops! something went wrong!","color: red; font-size: 20px;"),console.log(e)}))}else console.log("%cMax file is 5, please remove some picsture","color: red; font-size: 20px;")},handleFilesUpload:function(){for(var e=this.$refs.files.files,i=0;i<e.length;i++)this.files.push(e[i])},removeFile:function(e){this.files.splice(e,1)},checkFilesValid:function(){return this.files.length<=5}}},l=(n(408),n(43)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-2"},[n("input",{ref:"files",attrs:{type:"file",id:"files",multiple:""},on:{change:function(t){return e.handleFilesUpload()}}})]),e._v(" "),n("div",{staticClass:"col-md-4"},[n("button",{staticClass:"btn btn-success",on:{click:function(t){return e.submitFiles()}}},[e._v("Upload")])])]),e._v(" "),n("div",{staticClass:"large-12 medium-12 small-12 cell"},e._l(e.files,(function(t,o){return n("div",{key:o,staticClass:"file-listing"},[e._v("\n      "+e._s(t.name)+"\n      "),n("span",{staticClass:"remove-file",on:{click:function(t){return e.removeFile(o)}}},[e._v("Cancel")])])})),0)])}),[],!1,null,"c31aed1a",null);t.a=component.exports},436:function(e,t,n){"use strict";var o=n(414);n.n(o).a},437:function(e,t,n){(e.exports=n(20)(!1)).push([e.i,"div input[data-v-76b21ea0]{padding-top:10px}",""])},469:function(e,t,n){"use strict";n.r(t);var o={components:{upload_files:n(421).a},data:function(){return{form:{name:"",image:""}}},methods:{handleSubmit:function(){var e=this;this.$axios.post("/slide",this.form).then((function(t){console.log(t),e.$router.push("/slide")}))},imageUploaded:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.form.image=data.productImageInfo?data.productImageInfo.id:null}}},l=(n(436),n(43)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Thêm mới sản Phẩm")]),e._v("Name:\n  "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter your product's name "},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),e._v(" "),n("upload_files",{on:{uploaded:e.imageUploaded}}),e._v(" "),n("b-button",{on:{click:e.handleSubmit}},[e._v("Submit")])],1)}),[],!1,null,"76b21ea0",null);t.default=component.exports}}]);