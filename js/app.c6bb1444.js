(function(t){function e(e){for(var i,r,o=e[0],c=e[1],u=e[2],d=0,v=[];d<o.length;d++)r=o[d],a[r]&&v.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(v.length)v.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"2a56":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],r=(n("034f"),n("2877")),o={},c=Object(r["a"])(o,a,s,!1,null,null,null),u=c.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._m(0),n("div",{staticClass:"home-title"},[t._v("林间-枫")]),n("div",{staticClass:"home-introduce"},[t._v(t._s(t.introduceNmae))]),n("div",{staticClass:"home-start",on:{click:t.openIndex}},[t._v("开始你的旅行 →")]),n("div",{staticClass:"home-features flex"},t._l(t.list,function(e,i){return n("div",{key:i,staticClass:"home-features-list"},[n("h2",[t._v(t._s(e.title))]),n("p",[t._v(t._s(e.contern))])])}),0)])},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home-logo"},[i("img",{attrs:{src:n("b640"),alt:""}})])}],p=n("d225"),f=function t(){Object(p["a"])(this,t)},m=(new f,{data:function(){return{introduceNmae:"来自林间-枫的个人博客",list:[{id:1,title:"个人介绍",contern:"来自某间小公司的前端小菜鸡，懂JS,HTML,CSS,Vue等前端技术，了解后端PHP,Mysql,只是懂一点皮毛哦,不要太当回事，哈哈"},{id:2,title:"为什么写博客？",contern:"只是为了玩一下记录一些好玩的技术吧，以后不用老是百度啦，自己查看一下个人博客，最后：也是记录我转行,加油！！"},{id:3,title:"个人爱好",contern:"喜欢游泳跑步，旅游等，喜欢撸猫，交朋友(女性那种的哦)，哈哈，（开始你博客的旅行吧）"}]}},methods:{openIndex:function(){this.$router.push("/index")}},mounted:function(){}}),_=m,h=(n("c37e"),Object(r["a"])(_,d,v,!1,null,"b3dd7ee0",null)),b=h.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"nav"},[t._m(0),t._m(1),n("div",{staticClass:"nav-list"},t._l(t.navList,function(e){return n("div",{key:e.id,class:t.index==e.id?"nav-list-item activer":"nav-list-item",on:{click:function(n){return t.tabListItem(e.id)}}},[n("span",{attrs:{href:"one"}},[t._v(t._s(e.name))])])}),0)]),t._m(2)])},C=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-logo"},[i("img",{attrs:{src:n("c300")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-introduce"},[n("h2",[t._v("林间有-枫")]),n("p",[t._v("Always believe that the good world is about to happen - feng")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("div",{staticClass:"main-banner"},[i("img",{attrs:{src:n("d22d"),alt:""}})]),i("div",{staticClass:"main-box"},[i("div",{staticClass:"main-about"},[i("h1",{staticClass:"title-h1"},[t._v("你好")]),i("div",{staticClass:"title-p"},[i("p",[t._v("来自于某间公司切图仔")]),i("p",[t._v("前端工程师")])]),i("div",{staticClass:"about-content"},[i("p",[t._v("1.熟悉HTML , CSS , javascript技术;")]),i("p",[t._v("2.熟悉jQuery , Vue , Bootstrap , MUI , MintUI , Vuex等框架;")]),i("p",[t._v("3.熟悉HTML5 , CSS3 , 新特性,熟悉移动APP的开发模式能够使用媒体查询,响应式布局适配不同的设备;")]),i("p",[t._v("4.熟悉Ajax , json , jsonp , axios可以配合后台端口 , 完成前后台交互;")]),i("p",[t._v("5.熟悉CSS预处理语言less , 能够利用svn进行源代码管理;")]),i("p",[t._v("6.熟悉Session 以及Cookie会话技术;")]),i("p",[t._v("7.熟悉微信小程序开发")]),i("p",[t._v("8.高性能的页面文档流 , 规范 , 工整 , 能够提炼可服用的模块 , 注释清晰;")])])]),i("div",{staticClass:"main-about"},[i("div",{staticClass:"title-p"},[i("p",[t._v("问题列表")]),i("p",[t._v("平时遇到一些问题以及总结")])])])])])}],x={data:function(){return{navList:[{id:1,name:"关于"},{id:2,name:"列表"},{id:3,name:"联系"}],index:1}},methods:{tabListItem:function(t){this.index=t}},mounted:function(){console.log(123)}},y=x,j=(n("ca9c"),Object(r["a"])(y,g,C,!1,null,null,null)),w=j.exports;i["a"].use(l["a"]);var S=new l["a"]({routes:[{path:"/",name:"home",component:b},{path:"/index",name:"index",component:w}]}),O=n("2f62");i["a"].use(O["a"]);var M=new O["a"].Store({state:{},mutations:{},actions:{}});i["a"].config.productionTip=!1,new i["a"]({router:S,store:M,render:function(t){return t(u)}}).$mount("#app")},"620b":function(t,e,n){},"64a9":function(t,e,n){},b640:function(t,e,n){t.exports=n.p+"img/logo.71e84302.jpg"},c300:function(t,e,n){t.exports=n.p+"img/top2.4b164018.png"},c37e:function(t,e,n){"use strict";var i=n("620b"),a=n.n(i);a.a},ca9c:function(t,e,n){"use strict";var i=n("2a56"),a=n.n(i);a.a},d22d:function(t,e,n){t.exports=n.p+"img/banner.cef121d9.png"}});
//# sourceMappingURL=app.c6bb1444.js.map