(function(t){function n(n){for(var i,o,r=n[0],c=n[1],u=n[2],v=0,p=[];v<r.length;v++)o=r[v],a[o]&&p.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(n);while(p.length)p.shift()();return s.push.apply(s,u||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],i=!0,r=1;r<e.length;r++){var c=e[r];0!==a[c]&&(i=!1)}i&&(s.splice(n--,1),t=o(o.s=e[0]))}return t}var i={},a={app:0},s=[];function o(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)o.d(e,i,function(n){return t[n]}.bind(null,i));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=n,r=r.slice();for(var u=0;u<r.length;u++)n(r[u]);var l=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var i=e("64a9"),a=e.n(i);a.a},"2a56":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},s=[],o=(e("034f"),e("2877")),r={},c=Object(o["a"])(r,a,s,!1,null,null,null),u=c.exports,l=e("8c4f"),v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[t._m(0),e("div",{staticClass:"home-title"},[t._v("林间-枫")]),e("div",{staticClass:"home-introduce"},[t._v(t._s(t.introduceNmae))]),e("div",{staticClass:"home-start",on:{click:t.openIndex}},[t._v("开始你的旅行 →")]),e("div",{staticClass:"home-features flex"},t._l(t.list,function(n,i){return e("div",{key:i,staticClass:"home-features-list"},[e("h2",[t._v(t._s(n.title))]),e("p",[t._v(t._s(n.contern))])])}),0)])},p=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"home-logo"},[i("img",{attrs:{src:e("b640"),alt:""}})])}],d=e("d225"),f=function t(){Object(d["a"])(this,t)},_=(new f,{data:function(){return{introduceNmae:"来自林间-枫的个人博客",list:[{id:1,title:"个人介绍",contern:"来自某间小公司的前端小菜鸡，懂JS,HTML,CSS,Vue等前端技术，了解后端PHP,Mysql,只是懂一点皮毛哦,不要太当回事，哈哈"},{id:2,title:"为什么写博客？",contern:"只是为了玩一下记录一些好玩的技术吧，以后不用老是百度啦，自己查看一下个人博客，最后：也是记录我转行,加油！！"},{id:3,title:"个人爱好",contern:"喜欢游泳跑步，旅游等，喜欢撸猫，交朋友(女性那种的哦)，哈哈，（开始你博客的旅行吧）"}]}},methods:{openIndex:function(){this.$router.push("/index")}},mounted:function(){}}),m=_,h=(e("c37e"),Object(o["a"])(m,v,p,!1,null,"b3dd7ee0",null)),b=h.exports,C=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page"},[e("div",{staticClass:"nav"},[t._m(0),t._m(1),e("div",{staticClass:"nav-list"},t._l(t.navList,function(n){return e("div",{key:n.id,class:t.index==n.id?"nav-list-item activer":"nav-list-item",on:{click:function(e){return t.tabListItem(n.id)}}},[e("span",{attrs:{href:"one"}},[t._v(t._s(n.name))])])}),0)]),t._m(2)])},x=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"nav-logo"},[i("img",{attrs:{src:e("c300")}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nav-introduce"},[e("h2",[t._v("林间有-枫")]),e("p",[t._v("Always believe that the good world is about to happen - feng")])])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"main"},[i("div",{staticClass:"main-banner"},[i("img",{attrs:{src:e("d22d"),alt:""}})]),i("div",{staticClass:"main-box"},[i("div",{staticClass:"main-about"},[i("h1",{staticClass:"title-h1"},[t._v("你好")]),i("div",{staticClass:"title-p"},[i("p",[t._v("来自于某间公司切图仔")]),i("p",[t._v("前端工程师")])]),i("div",{staticClass:"about-content"},[i("p",[t._v("1.熟悉HTML , CSS , javascript技术;")]),i("p",[t._v("2.熟悉jQuery , Vue , Bootstrap , MUI , MintUI , Vuex等框架;")]),i("p",[t._v("3.熟悉HTML5 , CSS3 , 新特性,熟悉移动APP的开发模式能够使用媒体查询,响应式布局适配不同的设备;")]),i("p",[t._v("4.熟悉Ajax , json , jsonp , axios可以配合后台端口 , 完成前后台交互;")]),i("p",[t._v("5.熟悉CSS预处理语言less , 能够利用svn进行源代码管理;")]),i("p",[t._v("6.熟悉Session 以及Cookie会话技术;")]),i("p",[t._v("7.熟悉微信小程序开发")]),i("p",[t._v("8.高性能的页面文档流 , 规范 , 工整 , 能够提炼可服用的模块 , 注释清晰;")])])]),i("div",{staticClass:"main-about"},[i("div",{staticClass:"title-p"},[i("p",[t._v("问题列表")]),i("p",[t._v("平时遇到一些问题以及总结")])]),i("div",{staticClass:"about-content about-problem"},[i("p",[t._v("平时工作中会很多很多问题")]),i("p",[t._v("要不断的百度所以我要做一下总结....")]),i("p",[t._v("加油")]),i("span",[t._v("开始的问题之旅 →")])])]),i("div",{staticClass:"main-about"},[i("div",{staticClass:"title-p"},[i("p",[t._v("联系方式")]),i("p",[t._v("方便大家交流")])]),i("div",{staticClass:"about-content about-icon "},[i("p",[i("i",{staticClass:" iconfont icon-weixin wx"}),i("span",[t._v("WeChat：")]),i("span",{staticClass:"icon-text"},[t._v("vue9966")])]),i("p",[i("i",{staticClass:"iconfont icon-qq qq"}),i("span",[t._v("QQ：")]),i("span",{staticClass:"icon-text"},[t._v("937982061")])]),i("p",[i("i",{staticClass:"iconfont icon-GitHub"}),i("span",[t._v("GitHub：")]),i("span",{staticClass:"icon-text"},[t._v("vue9966")])]),i("p",[i("i",{staticClass:"iconfont icon-youxiang youxiang"}),i("span",[t._v("邮箱：")]),i("span",{staticClass:"icon-text"},[t._v("vue9966@163.com")])])])])])])}],g={data:function(){return{navList:[{id:1,name:"关于"},{id:2,name:"问题"},{id:3,name:"联系"}],index:1}},methods:{tabListItem:function(t){this.index=t}},mounted:function(){console.log(123)}},y=g,j=(e("ca9c"),Object(o["a"])(y,C,x,!1,null,null,null)),w=j.exports;i["a"].use(l["a"]);var S=new l["a"]({routes:[{path:"/",name:"home",component:b},{path:"/index",name:"index",component:w}]}),O=e("2f62");i["a"].use(O["a"]);var M=new O["a"].Store({state:{},mutations:{},actions:{}});i["a"].config.productionTip=!1,new i["a"]({router:S,store:M,render:function(t){return t(u)}}).$mount("#app")},"620b":function(t,n,e){},"64a9":function(t,n,e){},b640:function(t,n,e){t.exports=e.p+"img/logo.71e84302.jpg"},c300:function(t,n,e){t.exports=e.p+"img/top2.4b164018.png"},c37e:function(t,n,e){"use strict";var i=e("620b"),a=e.n(i);a.a},ca9c:function(t,n,e){"use strict";var i=e("2a56"),a=e.n(i);a.a},d22d:function(t,n,e){t.exports=e.p+"img/banner.cef121d9.png"}});
//# sourceMappingURL=app.b28f3c02.js.map