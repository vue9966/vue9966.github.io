(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-core-examine-examine-my"],{"11ec":function(e,t,a){var i=a("54d0");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("dc29f7a0",i,!0,{sourceMap:!1,shadowMode:!1})},1308:function(e,t,a){"use strict";a.r(t);var i=a("be8c"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},"37a1":function(e,t,a){"use strict";var i=a("11ec"),n=a.n(i);n.a},"3afb":function(e,t,a){"use strict";var i={uAvatar:a("9243").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"materiel"},[a("v-uni-view",{staticClass:"line-ed"}),a("v-uni-view",{staticClass:"materiel-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openDetials(e.item)}}},[a("v-uni-view",{staticClass:"materiel-item-info flex between fvertical"},[a("v-uni-view",{staticClass:"info-user flex fvertical"},[a("u-avatar",{attrs:{src:e.item.src,mode:"square",size:46}}),a("v-uni-text",{staticClass:"s2"},[e._v(e._s(e.item.science)+"-"+e._s(e.item.title))])],1),a("v-uni-view",{staticClass:"info-day s2"},[e._v(e._s(e.item.date))])],1),a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"item-list"},[a("v-uni-text",{staticClass:"s3 color-666"},[e._v("所属项目："+e._s(e.item.project))])],1),a("v-uni-view",{staticClass:"item-list"},[a("v-uni-text",{staticClass:"s3 color-666"},[e._v("申请人："+e._s(e.item.username))])],1),a("v-uni-view",{staticClass:"item-list flex between "},[a("v-uni-text",{staticClass:"s2 color-1989fa fright"},[e._v(e._s(e.item.status))])],1)],1)],1)],1)},s=[];a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}))},4250:function(e,t,a){"use strict";var i=a("4a39"),n=a.n(i);n.a},"47f9":function(e,t,a){"use strict";var i={uSearch:a("f96c").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"examine-my"},[a("u-search",{attrs:{placeholder:"搜索","input-align":"center","show-action":!1,shape:"round"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),a("v-uni-view",{staticClass:"examine-my-select flex fvertical between"},[e._l(e.selectList,(function(t,i){return[a("v-uni-view",{key:i+"_0",staticClass:"select-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.switchSelect(i)}}},[a("v-uni-text",{staticClass:"s2 ",class:i===e.selecIndex?"active":""},[e._v(e._s(t.name))])],1)]}))],2)],1),a("v-uni-view",{staticClass:"line-ed"}),a("scrollBtn",{staticClass:"scroll-btn",attrs:{list:e.listSrllBtn},on:{ChangeScroll:function(t){arguments[0]=t=e.$handleEvent(t),e.ChangeScroll.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"examine-box"},[e._l(e.examineList,(function(t,i){return[a("examineList",{key:i+"_0",attrs:{item:t},on:{openDetials:function(t){arguments[0]=t=e.$handleEvent(t),e.openDetials.apply(void 0,arguments)}}})]}))],2)],1)},s=[];a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}))},"4a39":function(e,t,a){var i=a("e92a");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("9fa14a0c",i,!0,{sourceMap:!1,shadowMode:!1})},"54d0":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.materiel .materiel-item[data-v-55ab49e7]{width:100%;padding:%?20?%}.materiel .materiel-item .materiel-item-info .info-user uni-text[data-v-55ab49e7]{padding-left:%?20?%}.materiel .materiel-item .box[data-v-55ab49e7]{padding-top:%?30?%}.materiel .materiel-item .box .item-list[data-v-55ab49e7]{padding-bottom:%?20?%}',""]),e.exports=t},7568:function(e,t,a){"use strict";var i=a("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("bc11")),s=i(a("37d2")),r=i(a("a3e6")),c={data:function(){return{listSrllBtn:[{id:1,type:1,name:"全部"},{id:2,type:2,name:"物料入库"},{id:3,type:3,name:"设置购置"},{id:4,type:4,name:"资金申请"},{id:5,type:5,name:"报销"},{id:6,type:6,name:"支付申请"},{id:7,type:7,name:"请假"},{id:8,type:8,name:"离职"},{id:9,type:9,name:"人员招聘"}],keyword:"",selectList:[{id:1,name:"我的审核(3)"},{id:2,name:"我已审核"}],selecIndex:0,examineList:[{id:1,title:"入库",project:"XX项目",username:"吴笑笑",science:"水泥",status:"待审核",date:"今天",type:1},{id:2,title:"设置购置",project:"XX项目",username:"吴笑笑",science:"挖掘机",status:"待审核",date:"今天",type:2},{id:3,title:"资金申请",project:"XX项目",username:"吴笑笑",science:"开发工程",status:"待审核",date:"今天",type:3},{id:4,title:"报销",project:"XX项目",username:"吴笑笑",science:"采购1",status:"待审核",date:"今天",type:4},{id:5,title:"支付申请",project:"XX项目",username:"吴笑笑",science:"付工程款",status:"待审核",date:"今天",type:5},{id:6,title:"请假",project:"XX项目",username:"吴笑笑",science:"病假",status:"待审核",date:"今天",type:6},{id:7,title:"离职",project:"XX项目",username:"吴笑笑",science:"个人原因",status:"待审核",date:"今天",type:7},{id:8,title:"人员招聘",project:"XX项目",username:"吴笑笑",science:"CAD招聘",status:"待审核",date:"今天",type:8}]}},components:{examineList:n.default,scrollBtn:s.default},methods:{ChangeScroll:function(e){console.log(e)},openDetials:function(e){var t="";switch(e.type){case 1:t="/pages/core/detials/warehousing-detials?item=".concat(e);break;case 2:t="/pages/core/detials/purchase-detials?item=".concat(e);break;case 3:t="/pages/core/detials/apply-detials?item=".concat(e);break;case 4:t="/pages/core/detials/reimbursement-detials?item=".concat(e);break;case 5:t="/pages/core/detials/payment-detials?item=".concat(e);break;case 6:t="/pages/core/detials/leave-detials?item=".concat(e);break;case 7:t="/pages/core/detials/resignationApplication-detials?item=".concat(e);break;case 8:t="/pages/core/detials/recruit-detials?item=".concat(e);break}r.default.getNavigateTo(t)},switchSelect:function(e){this.examineList;this.selecIndex=e}}};t.default=c},bc11:function(e,t,a){"use strict";a.r(t);var i=a("3afb"),n=a("1308");for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("37a1");var r,c=a("f0c5"),l=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"55ab49e7",null,!1,i["a"],r);t["default"]=l.exports},be8c:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{item:{type:Object,default:{}}},methods:{openDetials:function(e){this.$emit("openDetials",e)}}};t.default=i},daaf:function(e,t,a){"use strict";a.r(t);var i=a("47f9"),n=a("fc4c");for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("4250");var r,c=a("f0c5"),l=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"89f9207a",null,!1,i["a"],r);t["default"]=l.exports},e92a:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.scroll-btn[data-v-89f9207a]{padding:%?30?% 0 %?30?% %?30?%}.examine-my[data-v-89f9207a]{padding:%?30?% %?30?% 0}.examine-my .examine-my-select[data-v-89f9207a]{height:%?80?%}.examine-my .examine-my-select .select-item[data-v-89f9207a]{width:50%;height:100%;line-height:%?80?%;text-align:center}.examine-my .examine-my-select .select-item uni-text.active[data-v-89f9207a]{font-weight:700;position:relative;color:#1989fa!important}.examine-my .examine-my-select .select-item uni-text.active[data-v-89f9207a]::after{content:"";left:50%;bottom:%?-25?%;-webkit-transform:translate(-50%);transform:translate(-50%);position:absolute;width:100%;height:2px;background-color:#1989fa}',""]),e.exports=t},fc4c:function(e,t,a){"use strict";a.r(t);var i=a("7568"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a}}]);