(function(t){function e(e){for(var i,c,o=e[0],r=e[1],l=e[2],v=0,f=[];v<o.length;v++)c=o[v],a[c]&&f.push(a[c][0]),a[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var r=n[o];0!==a[r]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},s=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=r;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"15dc":function(t,e,n){t.exports=n.p+"img/24.0679adf1.jpg"},"2a56":function(t,e,n){},"41da":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],c=(n("034f"),n("2877")),o={},r=Object(c["a"])(o,a,s,!1,null,null,null),l=r.exports,u=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._m(0),n("div",{staticClass:"home-title"},[t._v("林间-枫")]),n("div",{staticClass:"home-introduce"},[t._v(t._s(t.introduceNmae))]),n("div",{staticClass:"home-start",on:{click:t.openIndex}},[t._v("开始你的旅行 →")]),n("div",{staticClass:"home-features flex"},t._l(t.list,function(e,i){return n("div",{key:i,staticClass:"home-features-list"},[n("h2",[t._v(t._s(e.title))]),n("p",[t._v(t._s(e.contern))])])}),0)])},f=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home-logo"},[i("img",{attrs:{src:n("b640"),alt:""}})])}],d=n("d225"),p=function t(){Object(d["a"])(this,t)},m=(new p,{data:function(){return{introduceNmae:"来自林间-枫的个人博客",list:[{id:1,title:"个人介绍",contern:"来自某间小公司的前端小菜鸡，懂JS,HTML,CSS,Vue等前端技术，了解后端PHP,Mysql,只是懂一点皮毛哦,不要太当回事，哈哈"},{id:2,title:"为什么写博客？",contern:"只是为了玩一下记录一些好玩的技术吧，以后不用老是百度啦，自己查看一下个人博客，最后：也是记录我转行,加油！！"},{id:3,title:"个人爱好",contern:"喜欢游泳跑步，旅游等，喜欢撸猫，交朋友(女性那种的哦)，哈哈，（开始你博客的旅行吧）"}]}},methods:{openIndex:function(){this.$router.push("/index")}},mounted:function(){}}),_=m,h=(n("c37e"),Object(c["a"])(_,v,f,!1,null,"b3dd7ee0",null)),b=h.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"nav"},[t._m(0),t._m(1),n("div",{staticClass:"nav-list"},t._l(t.navList,function(e){return n("div",{key:e.id,class:t.index==e.id?"nav-list-item activer":"nav-list-item",on:{click:function(n){return t.tabListItem(e.id)}}},[n("span",{attrs:{href:"one"}},[t._v(t._s(e.name))])])}),0)]),n("div",{staticClass:"main"},[t._m(2),n("div",{staticClass:"main-box"},[n("div",{staticClass:"main-about"},[n("h1",{staticClass:"title-h1"},[t._v("嗨，你好")]),t._m(3),n("div",{staticClass:"about-content flex between"},[t._m(4),n("div",{staticClass:"about-content-right"},[n("introduce")],1)])]),t._m(5),n("div",{staticClass:"main-about"},[t._m(6),n("div",{staticClass:"about-content about-icon flex between fcenter"},[t._m(7),n("div",{staticClass:"about-content-right"},[n("steve")],1)])])])])])},C=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-logo"},[i("img",{attrs:{src:n("c300")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-introduce"},[n("h2",[t._v("林间有-枫")]),n("p",[t._v("Face a new life every day - feng")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-banner"},[i("img",{attrs:{src:n("d22d"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-p"},[n("p",[t._v("来自于某间公司切图仔")]),n("p",[t._v("前端工程师")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-content-left"},[n("p",[t._v("1.熟悉HTML , CSS , javascript技术;")]),n("p",[t._v("2.熟悉jQuery , Vue , Bootstrap , MUI , MintUI , Vuex等框架;")]),n("p",[t._v("3.熟悉HTML5 , CSS3 , 新特性,熟悉移动APP的开发模式能够使用媒体查询,响应式布局适配不同的设备;")]),n("p",[t._v("4.熟悉Ajax , json , jsonp , axios可以配合后台端口 , 完成前后台交互;")]),n("p",[t._v("5.熟悉CSS预处理语言less , 能够利用svn进行源代码管理;")]),n("p",[t._v("6.熟悉Session 以及Cookie会话技术;")]),n("p",[t._v("7.熟悉微信小程序开发")]),n("p",[t._v("8.高性能的页面文档流 , 规范 , 工整 , 能够提炼可服用的模块 , 注释清晰;")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-about"},[n("div",{staticClass:"title-p"},[n("p",[t._v("问题列表")]),n("p",[t._v("平时遇到一些问题以及总结")])]),n("div",{staticClass:"about-content about-problem"},[n("p",[t._v("平时工作中会很多很多问题")]),n("p",[t._v("要不断的百度所以我要做一下总结....")]),n("p",[t._v("加油")]),n("span",[t._v("开始问题之旅 →")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-p"},[n("p",[t._v("联系方式")]),n("p",[t._v("方便大家交流")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-content-left"},[n("p",[n("i",{staticClass:"iconfont icon-weixin wx"}),n("span",[t._v("WeChat：")]),n("span",{staticClass:"icon-text"},[t._v("vue9966")])]),n("p",[n("i",{staticClass:"iconfont icon-qq qq"}),n("span",[t._v("QQ：")]),n("span",{staticClass:"icon-text"},[t._v("937982061")])]),n("p",[n("i",{staticClass:"iconfont icon-GitHub"}),n("span",[t._v("GitHub：")]),n("span",{staticClass:"icon-text"},[t._v("vue9966")])]),n("p",[n("i",{staticClass:"iconfont icon-youxiang youxiang"}),n("span",[t._v("Mail：")]),n("span",{staticClass:"icon-text"},[t._v("vue9966@163.com")])])])}],x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"grid"},[i("figure",{staticClass:"effect-julia"},[i("img",{attrs:{src:n("15dc"),alt:"img21"}}),i("figcaption",[i("h2",[t._v("奋斗的少年")]),i("div",[i("p",[t._v("把每一天都过好")]),i("p",[t._v("把每顿饭吃好")]),i("p",[t._v("把每件事情做好")])])])])])}],y={},j=y,E=(n("a04a"),Object(c["a"])(j,x,w,!1,null,null,null)),O=E.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"grid"},[i("figure",{staticClass:"effect-steve"},[i("img",{attrs:{src:n("85ee"),alt:"img33"}}),i("figcaption",[i("h2",[t._v("生活")]),i("p",[t._v("生活是柴米油盐的平淡；是行色匆匆早出晚归的奔波")])])])])}],T={},M=T,P=(n("cc0d"),Object(c["a"])(M,S,$,!1,null,null,null)),k=P.exports,L={data:function(){return{navList:[{id:1,name:"关于"},{id:2,name:"问题"},{id:3,name:"联系"}],index:1}},components:{introduce:O,steve:k},methods:{tabListItem:function(t){this.index=t,3==t?(document.body.scrollTop=900,window.pageYOffset=900,document.documentElement.scrollTop=900):2==t?(document.body.scrollTop=500,window.pageYOffset=500,document.documentElement.scrollTop=500):(document.body.scrollTop=0,window.pageYOffset=0,document.documentElement.scrollTop=0)},handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.index=t>=700?3:t>=500?2:1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)}},H=L,I=(n("ca9c"),Object(c["a"])(H,g,C,!1,null,null,null)),q=I.exports;i["a"].use(u["a"]);var Y=new u["a"]({routes:[{path:"/",name:"home",component:b},{path:"/index",name:"index",component:q}]}),J=n("2f62");i["a"].use(J["a"]);var Q=new J["a"].Store({state:{},mutations:{},actions:{}});i["a"].config.productionTip=!1,new i["a"]({router:Y,store:Q,render:function(t){return t(l)}}).$mount("#app")},"620b":function(t,e,n){},"64a9":function(t,e,n){},7941:function(t,e,n){},"85ee":function(t,e,n){t.exports=n.p+"img/33.6a5e721c.jpg"},a04a:function(t,e,n){"use strict";var i=n("41da"),a=n.n(i);a.a},b640:function(t,e,n){t.exports=n.p+"img/logo.71e84302.jpg"},c300:function(t,e,n){t.exports=n.p+"img/top2.4b164018.png"},c37e:function(t,e,n){"use strict";var i=n("620b"),a=n.n(i);a.a},ca9c:function(t,e,n){"use strict";var i=n("2a56"),a=n.n(i);a.a},cc0d:function(t,e,n){"use strict";var i=n("7941"),a=n.n(i);a.a},d22d:function(t,e,n){t.exports=n.p+"img/banner.cef121d9.png"}});
//# sourceMappingURL=app.ff256ece.js.map