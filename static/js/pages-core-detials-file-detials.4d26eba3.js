(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-core-detials-file-detials"],{"11c6":function(t,e,n){"use strict";n.r(e);var r=n("3d5d"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"1d36":function(t,e,n){"use strict";var r={lFile:n("8a89").default,uIcon:n("2c6b").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"box"},[n("l-file",{ref:"lFile",on:{"up-success":function(e){arguments[0]=e=t.$handleEvent(e),t.onSuccess.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"box-item flex between"},[n("v-uni-text",{staticClass:"s3 color-999"},[t._v("申请人：")]),n("v-uni-text",{staticClass:"s2"},[t._v(t._s(t.companyInfo.username))])],1),n("v-uni-view",{staticClass:"box-item flex between"},[n("v-uni-text",{staticClass:"s3 color-999"},[t._v("类型：")]),n("v-uni-text",{staticClass:"s2"},[t._v(t._s(1==t.companyInfo.fileType?"内部文件":"其它"))])],1),n("v-uni-view",{staticClass:"box-item flex between"},[n("v-uni-text",{staticClass:"s3 color-999"},[t._v("标题：")]),n("v-uni-text",{staticClass:"s2"},[t._v(t._s(t.companyInfo.fileName))])],1),n("v-uni-view",{staticClass:"box-item flex between"},[n("v-uni-text",{staticClass:"s3 color-999"},[t._v("日期")]),n("v-uni-text",{staticClass:"s2"},[t._v(t._s(t.dateFormat(t.companyInfo.fileTime)))])],1),n("v-uni-view",{staticClass:"box-item box-remarks"},[n("v-uni-view",{staticClass:"s2 color-999"},[t._v("图片")]),t._l(t.companyInfo.picture,(function(e,r){return[n("v-uni-image",{attrs:{src:e},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openImg(e,r)}}})]})),t.companyInfo.picture?t._e():n("v-uni-text",{staticClass:"s26 color-666"},[t._v("暂无图片")])],2),n("v-uni-view",{staticClass:"box-item box-remarks"},[n("v-uni-view",{staticClass:"s2 color-999"},[t._v("文件")]),n("v-uni-view",{staticClass:"flex"},[t._l(t.listFile,(function(e,r){return[n("v-uni-view",{staticClass:"add-list-file   ",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.oepFile(e,r)}}},[n("v-uni-view",{staticClass:"file-icon"},[n("u-icon",{attrs:{name:"file-text-fill",color:"#2979ff",size:"58"}})],1),n("v-uni-view",{staticClass:"s26 color-333"},[t._v(t._s(e.fileName))])],1)]}))],2)],1)],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},3742:function(t,e,n){"use strict";var r=n("7a3c"),i=n.n(r);i.a},"3d5d":function(t,e,n){"use strict";var r=n("ee27");n("c975"),n("d3b7"),n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("d0af")),o=r(n("c9e9")),a={props:{top:{type:String,default:"auto"},bgColor:{type:String,default:"rgba(49, 126, 243, 0.5)"},color:{type:String,default:"#e54d42"}},data:function(){return{cubgColor:"",loading:!1,value:5,show:!1,msg:"执行完毕~"}},methods:{toast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.duration,r=void 0===n?2e3:n,i=e.icon,o=void 0===i?"none":i;uni.showToast({title:t,duration:r,icon:o})},getRequest:function(t){var e=new Object,n=t.indexOf("?");if(-1!=n)for(var r=t.substring(n+1),i=r.split("&"),o=0;o<i.length;o++)e[i[o].split("=")[0]]=unescape(i[o].split("=")[1]);return e},appChooseFile:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.currentWebview,t.url,t.name,t.header,(0,o.default)(t,["currentWebview","url","name","header"])},wxChooseFile:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.url,r=e.name,a=void 0===r?"file":r,s=e.header,c=(0,o.default)(e,["url","name","header"]);wx.chooseMessageFile({count:1,type:"file",success:function(e){var r=e.tempFiles,o=(0,i.default)(r,1),u=o[0],l=u.path,f=u.name;return t.setdefUI(),uni.uploadFile({url:n,name:a,filePath:l,formData:c,header:s,success:function(e){if(200==e.statusCode){var n=JSON.parse(e.data);return t.onCommit(t.$emit("up-success",{fileName:f,data:n}))}return t.errorHandler("文件上传失败",t.upErr)},fail:function(){return t.errorHandler("文件上传失败",t.upErr)}})},fail:function(){return t.errorHandler("文件选择失败",t.upErr)}})},upload:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.url?this.loading&&this.toast("还有个文件玩命处理中，请稍候.."):this.toast("上传地址不正确")},open:function(t){var e=uni.getSystemInfoSync().platform;"ios"==e&&(t=encodeURI(t)),uni.openDocument({filePath:t,success:function(t){console.log("打开文档成功")}})},download:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"temporary";if(!this.loading)return this.setdefUI(),new Promise((function(r,i){var o=uni.downloadFile({url:t,success:function(t){var o=t.statusCode,a=t.tempFilePath;200===o&&("local"==n?uni.saveFile({tempFilePath:a,success:function(t){var n=t.savedFilePath;return e.onCommit(r(n))},fail:function(){return e.errorHandler("下载失败",i)}}):e.onCommit(r(a)))},fail:function(){return e.errorHandler("下载失败",i)}});o.onProgressUpdate((function(t){var n=t.progress,r=void 0===n?0:n;r<=100&&e.$nextTick((function(){e.value=r}))}))}));this.toast("还有个文件玩命处理中，请稍候..")},onCommit:function(t){var e=this;return this.msg="执行完毕~",this.loading=!1,this.cubgColor="rgba(57, 181, 74, 0.5)",setTimeout((function(){e.show=!1}),1500),t},setdefUI:function(){this.cubgColor=this.bgColor,this.value=0,this.loading=!0,this.show=!0},upErr:function(t){this.$emit("up-error",t)},errorHandler:function(t,e){var n=this;return this.msg=t,this.loading=!1,this.cubgColor="rgba(229, 77, 66, 0.5)",setTimeout((function(){n.show=!1}),1500),e(t)}}};e.default=a},"5ed4":function(t,e,n){"use strict";var r=n("ee27");n("4de4"),n("4160"),n("baa5"),n("ac1f"),n("1276"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=r(n("c964")),o=n("7339"),a=r(n("8a89")),s=(r(n("a3e6")),{data:function(){return{companyInfo:{},listFile:[]}},components:{lFile:a.default},onLoad:function(t){var e={};e.id=t.id,this.getCompanySystem(e)},methods:{openImg:function(t,e){var n=[];this.companyInfo.picture.forEach((function(t){n.push(t)})),uni.previewImage({current:n[e],urls:n,success:function(t){console.log(t)},fail:function(t){console.log(t)}})},oepFile:function(t,e){var n=this;console.log("打开文件",t.url);var r=t.url;this.$refs.lFile.download(r).then((function(t){n.$refs.lFile.open(t)}))},closeFile:function(t,e){console.log("删除文件",t);var n=this.fileList.filter((function(t,n){return n!=e?t:""}));this.listFile=n},resetAccessory:function(t){var e=t.lastIndexOf("/");return t.substring(e+1,t.length)},dateFormat:function(t){return this.$moment(t).format("YYYY-MM-DD")},getCompanySystem:function(t){var e=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var r,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={data:t},n.next=3,(0,o.getCompanyFileDetaisl)(r);case 3:if(i=n.sent,200!==i.status){n.next=11;break}if(console.log(i),e.companyInfo=i.data,a=i.data.beforeAccessory.split(","),a){n.next=10;break}return n.abrupt("return");case 10:a.forEach((function(t,n){e.listFile.push({url:i.data.accessory[n],fileName:t})}));case 11:case"end":return n.stop()}}),n)})))()}}});e.default=s},"6cb6":function(t,e,n){var r=n("b9fc");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("46fdbeba",r,!0,{sourceMap:!1,shadowMode:!1})},"6f0b":function(t,e,n){"use strict";n.r(e);var r=n("5ed4"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"7a3c":function(t,e,n){var r=n("d035");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("7b72f4e0",r,!0,{sourceMap:!1,shadowMode:!1})},"8a89":function(t,e,n){"use strict";n.r(e);var r=n("a440"),i=n("11c6");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("aafc");var a,s=n("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"2001f891",null,!1,r["a"],a);e["default"]=c.exports},a440:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"t-toptips",class:[t.show?"t-top-show":""],style:{top:t.top,background:t.cubgColor}},[t.loading?n("v-uni-view",{staticClass:"flex flex-sub"},[n("v-uni-view",{staticClass:"cu-progress flex-sub round striped active sm"},[n("v-uni-view",{style:{background:t.color,width:t.value+"%"}})],1),n("v-uni-text",{staticClass:"margin-left"},[t._v(t._s(t.value)+"%")])],1):[t._v(t._s(t.msg))]],2)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},aafc:function(t,e,n){"use strict";var r=n("6cb6"),i=n.n(r);i.a},b6802:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},b9fc:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".t-toptips[data-v-2001f891]{width:100%;padding:%?18?% %?30?%;box-sizing:border-box;position:fixed;z-index:90;color:#fff;font-size:%?30?%;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;word-break:break-all;opacity:0;-webkit-transform:translateZ(0) translateY(-100%);transform:translateZ(0) translateY(-100%);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.t-top-show[data-v-2001f891]{-webkit-transform:translateZ(0) translateY(0);transform:translateZ(0) translateY(0);opacity:1}",""]),t.exports=e},baa5:function(t,e,n){var r=n("23e7"),i=n("e58c");r({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},c9e9:function(t,e,n){"use strict";n.r(e);n("a4d3"),n("c975"),n("b64b");function r(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}function i(t,e){if(null==t)return{};var n,i,o=r(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}n.d(e,"default",(function(){return i}))},d035:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.box[data-v-15b2bc7e]{padding-top:%?30?%}.box .box-top[data-v-15b2bc7e]{padding:%?25?% %?20?%;background-color:#fff}.box .box-top .box-top-item[data-v-15b2bc7e]{padding:%?15?% %?5?%}.box .box-item[data-v-15b2bc7e]{padding:%?25?%;background-color:#fff}.box .box-item uni-image[data-v-15b2bc7e]{margin-top:%?20?%;width:%?160?%;height:%?160?%;margin-right:%?15?%}.box .box-item .box-item-content[data-v-15b2bc7e]{padding:%?30?%}.box .box-item.box-remarks[data-v-15b2bc7e]{margin-top:%?20?%}.box .box-btn[data-v-15b2bc7e]{width:100%;height:%?140?%;background-color:#fff;position:fixed;bottom:0}.box .box-btn .btn-item.item-che[data-v-15b2bc7e]{width:%?180?%;text-align:center}.box .box-btn .btn-item .btn[data-v-15b2bc7e]{display:inline-block;width:%?250?%;height:%?80?%;line-height:%?80?%;text-align:center;background-color:#007aff;border:1px solid #007aff}.box .box-btn .btn-item .btn.btn-no[data-v-15b2bc7e]{background-color:#fff;border:1px solid #999}',""]),t.exports=e},d0af:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.r(e);n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function i(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(c){i=!0,o=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw o}}return n}}var o=n("dde1");function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){return r(t)||i(t,e)||Object(o["a"])(t,e)||a()}n.d(e,"default",(function(){return s}))},dde1:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a630"),n("fb6a"),n("d3b7"),n("25f0"),n("3ca3");var r=n("b6802");function i(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(t,e):void 0}}},fd6a:function(t,e,n){"use strict";n.r(e);var r=n("1d36"),i=n("6f0b");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("3742");var a,s=n("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"15b2bc7e",null,!1,r["a"],a);e["default"]=c.exports}}]);