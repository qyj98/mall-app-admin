(function(e){function t(t){for(var r,a,c=t[0],u=t[1],i=t[2],d=0,l=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&l.push(s[a][0]),s[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(l.length)l.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},s={app:0},o=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-19a16a87":"c296cc14","chunk-2d0a496c":"dad359db","chunk-2d0d63ff":"317e55da","chunk-44dd8f5b":"47665890"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-19a16a87":1,"chunk-44dd8f5b":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-19a16a87":"a983f94a","chunk-2d0a496c":"31d6cfe0","chunk-2d0d63ff":"31d6cfe0","chunk-44dd8f5b":"af70ac9f"}[e]+".css",s=u.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var i=o[c],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===s))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){i=l[c],d=i.getAttribute("data-href");if(d===r||d===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=o);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(e);var l=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}s[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0b0f":function(e,t,n){},"0c6d":function(e,t,n){"use strict";var r=n("5530"),a=(n("caad"),n("2532"),n("d3b7"),n("bc3a")),s=n.n(a),o=n("4360"),c=s.a.create({baseURL:"https://mallapi.duyiedu.com/"});c.interceptors.request.use((function(e){return e.url.includes("passport")?e:Object(r["a"])(Object(r["a"])({},e),{},{params:Object(r["a"])(Object(r["a"])({},e.params),{},{appkey:o["a"].state.login.user.appkey})})}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){return"fail"===e.data.status?Promise.reject(e.data.msg):e.data.data}),(function(e){return Promise.reject(e)})),t["a"]=c},2624:function(e,t,n){"use strict";n("33ca")},"33ca":function(e,t,n){},4360:function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62"),s={namespaced:!0,state:{collapsed:!1,menuRoutes:[]},mutations:{changeCollapse:function(e){e.collapsed=!e.collapsed},setMenuRoutes:function(e,t){e.menuRoutes=t}},actions:{changeCollapse:function(e){e.commit("changeCollapse")},setMenuRoutes:function(e,t){e.commit("setMenuRoutes",t)}}},o=n("1da1"),c=(n("96cf"),n("4fad"),n("852e")),u=n.n(c);function i(){return{username:u.a.get("username"),email:u.a.get("email"),role:u.a.get("role"),appkey:u.a.get("appkey")}}function d(e){for(var t=Object.entries(e),n=0;n<t.length;n+=1)u.a.set(t[n][0],t[n][1]);return!0}function l(){u.a.remove("username"),u.a.remove("email"),u.a.remove("role"),u.a.remove("appkey")}var f={namespaced:!0,state:{user:i(),isLogin:!1},mutations:{setUser:function(e,t){e.user=t},setLogOut:function(e){e.user={}},setIsLogin:function(e,t){e.isLogin=t}},actions:{userLogin:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:d(t),e.commit("setUser",t),e.commit("setIsLogin",!0);case 3:case"end":return n.stop()}}),n)})))()},userLogOut:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:l(),e.commit("setLogOut"),e.commit("setIsLogin",!1);case 3:case"end":return t.stop()}}),t)})))()}}},m={namespaced:!0,state:{categoryObj:{}},mutations:{setCategoryObj:function(e,t){e.categoryObj=t}},actions:{setCategoryObj:function(e,t){e.commit("setCategoryObj",t)}}};r["a"].use(a["a"]);t["a"]=new a["a"].Store({modules:{menu:s,login:f,search:m}})},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("2819"),s=n.n(a),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],u={name:"app"},i=u,d=(n("034f"),n("2877")),l=Object(d["a"])(i,o,c,!1,null,null,null),f=l.exports,m=(n("d3b7"),n("3ca3"),n("ddb0"),n("99af"),n("8c4f")),b=n("4360"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"container",staticClass:"home"},[n("div",{staticClass:"menu"},[n("LeftMenu")],1),n("div",{staticClass:"main",class:{"menu-fold":e.collapsed}},[n("SliderMenu"),n("router-view")],1)])},h=[],j=n("5530"),g=n("2f62"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-menu",{attrs:{"default-selected-keys":[e.selectedKeys],"default-open-keys":[e.openKeys],selectedKeys:[e.currentKeys],mode:"inline",theme:"dark","inline-collapsed":e.collapsed}},[e._l(e.menuRoutes,(function(t){return[t.meta.hidden?e._e():n("a-sub-menu",{key:t.name},[n("span",{attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:t.meta.icon}}),n("span",[e._v(e._s(t.meta.title))])],1),e._l(t.children,(function(t){return[t.meta.hidden?e._e():n("a-menu-item",{key:t.name},[n("router-link",{attrs:{to:{name:t.name}}},[n("a-icon",{attrs:{type:t.meta.icon}}),e._v(" "+e._s(t.meta.title)+" ")],1)],1)]}))],2)]}))],2)},y=[],k=(n("b0c0"),{data:function(){return{selectedKeys:"",openKeys:"",currentKeys:""}},computed:Object(j["a"])({},Object(g["b"])("menu",["collapsed","menuRoutes"])),created:function(){this.selectedKeys=this.$router.currentRoute.matched[1]?this.$router.currentRoute.matched[1].name:"",this.openKeys=this.$router.currentRoute.matched[0].name,this.currentKeys=this.selectedKeys},watch:{$route:function(){var e=this.$router.currentRoute.matched[1]?this.$router.currentRoute.matched[1].name:"";this.currentKeys=e}}}),w=k,O=Object(d["a"])(w,v,y,!1,null,null,null),_=O.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"collapse"},[n("div",{staticClass:"left-collapse"},[n("a-button",{attrs:{type:"primary"},on:{click:e.toggleCollapsed}},[n("a-icon",{attrs:{type:e.collapsed?"menu-unfold":"menu-fold"}})],1),n("div",{staticClass:"breadcrumb"},[n("a-breadcrumb",[n("a-breadcrumb-item",[e._v(e._s(e.breadcrumbs[0]))]),n("a-breadcrumb-item",[n("router-link",{attrs:{to:{name:e.breadcrumbs[2]}}},[e._v(e._s(e.breadcrumbs[1]))])],1)],1)],1)],1),n("ul",{staticClass:"userInfo"},[n("li",[e._v("欢迎"+e._s(e.user.username)+" "),n("a-icon",{attrs:{type:"down"}})],1),n("li",{on:{click:e.handleClick}},[e._v("退出")])])])},L=[],C={data:function(){return{breadcrumbs:[]}},methods:{toggleCollapsed:function(){this.$store.dispatch("menu/changeCollapse")},handleClick:function(){this.$store.dispatch("login/userLogOut"),this.$router.push({name:"Login"})},getBreadcrumbs:function(){var e=this.$router.currentRoute.matched[0].meta.title,t=this.$router.currentRoute.matched[1]?this.$router.currentRoute.matched[1].meta.title:"",n=this.$router.currentRoute.matched[1]?this.$router.currentRoute.matched[1].name:"",r=[e,t,n];return r}},computed:Object(j["a"])(Object(j["a"])({},Object(g["b"])("menu",["collapsed"])),Object(g["b"])("login",["user"])),created:function(){this.breadcrumbs=this.getBreadcrumbs()},watch:{$route:function(){this.breadcrumbs=this.getBreadcrumbs()}}},x=C,R=Object(d["a"])(x,$,L,!1,null,null,null),P=R.exports,z={components:{LeftMenu:_,SliderMenu:P},computed:Object(j["a"])({},Object(g["b"])("menu",["collapsed"])),methods:{handleScrollToTop:function(e){this.$refs.container.scrollTop=e}},mounted:function(){this.$bus.$on("scrollToTop",this.handleScrollToTop)},destoryed:function(){this.$bus.$off("scrollToTop",this.handleScrollToTop)}},E=z,F=(n("6b1f"),Object(d["a"])(E,p,h,!1,null,null,null)),T=F.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("a-form-model",e._b({ref:"loginForm",attrs:{model:e.loginForm,rules:e.rules}},"a-form-model",e.layout,!1),[n("a-form-model-item",{attrs:{"has-feedback":"",label:"邮箱",prop:"email"}},[n("a-input",{model:{value:e.loginForm.email,callback:function(t){e.$set(e.loginForm,"email",t)},expression:"loginForm.email"}})],1),n("a-form-model-item",{attrs:{"has-feedback":"",label:"密码",prop:"password"}},[n("a-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),n("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[n("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("loginForm")}}},[e._v(" "+e._s(e.isLoading?"登陆中...":"登录")+" ")]),n("a-button",{staticStyle:{"margin-left":"10px"},on:{click:function(t){return e.resetForm("loginForm")}}},[e._v(" 重置 ")])],1)],1)],1)},K=[],M=n("1da1"),A=(n("96cf"),n("0c6d"));function I(e){return N.apply(this,arguments)}function N(){return N=Object(M["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A["a"].post("/passport/login",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}var B=I,U={data:function(){var e=/^[\w-]+@[\w.-]+.com$/,t=function(t,n,r){return n?e.test(n)?r():r(new Error("请输入正确的邮箱")):r(new Error("请输入邮箱"))},n=function(e,t,n){return""===t?n(new Error("请输入密码")):n()};return{loginForm:{password:"",email:""},isLoading:!1,rules:{password:[{validator:n,trigger:"change"}],email:[{validator:t,trigger:"change"}]},layout:{labelCol:{span:4},wrapperCol:{span:14}}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(n){return n?(t.isLoading=!0,B(t.loginForm).then((function(e){t.isLoading=!1,t.$store.dispatch("login/userLogin",e),t.$router.push({name:"Home"})})).catch((function(n){t.isLoading=!1,t.$message.error(n),t.resetForm(e)})),!0):(console.log("error submit!!"),!1)}))},resetForm:function(e){this.$refs[e].resetFields()}}},q=U,H=(n("2624"),Object(d["a"])(q,S,K,!1,null,"0bf5f276",null)),D=H.exports,J=(n("d81d"),n("4de4"),{coustomer:[{name:"Product"},{name:"ProductList"},{name:"ProductAdd"},{name:"Home"},{name:"Index"},{name:"Login"},{name:"ProductEidt"}],admin:[{name:"Product"},{name:"ProductList"},{name:"ProductAdd"},{name:"Category"},{name:"Home"},{name:"Index"},{name:"Login"},{name:"ProductEidt"}]});function G(e,t){var n=J[e].map((function(e){return e.name})),r=function e(t){var r=t.filter((function(t){var r=t;return-1!==n.indexOf(t.name)&&(r.children&&(r.children=e(r.children)),!0)}));return r};return r(t)}r["a"].use(m["a"]);var Q=[{path:"/product",name:"Product",component:T,meta:{title:"商品",hidden:!1,icon:"table"},children:[{path:"list",name:"ProductList",meta:{title:"商品列表",hidden:!1,icon:"bars"},component:function(){return n.e("chunk-44dd8f5b").then(n.bind(null,"59f0"))}},{path:"add",name:"ProductAdd",meta:{title:"添加商品",hidden:!1,icon:"file-add"},component:function(){return n.e("chunk-19a16a87").then(n.bind(null,"02aa"))}},{path:"category",name:"Category",meta:{title:"类目管理",hidden:!1,icon:"table"},component:function(){return n.e("chunk-2d0a496c").then(n.bind(null,"06a1"))}},{path:"edit/:id",name:"ProductEidt",meta:{title:"编辑商品",hidden:!0},component:function(){return n.e("chunk-19a16a87").then(n.bind(null,"02aa"))}}]}],V=[{path:"/",name:"Home",component:T,redirect:{name:"Index"},meta:{title:"首页",hidden:!1,icon:"home"},children:[{path:"index",name:"Index",meta:{title:"统计",hidden:!1,icon:"number"},component:function(){return n.e("chunk-2d0d63ff").then(n.bind(null,"726d"))}}]},{path:"/login",name:"Login",meta:{title:"登录",hidden:!0},component:D}],W=new m["a"]({mode:"hash",base:"/",routes:V}),X=!1;W.beforeResolve((function(e,t,n){if("/login"!==e.path){var r=b["a"].state.login.user;if(r.username&&r.appkey&&r.email&&r.role){if(!X){var a=V.concat(Q),s=G(b["a"].state.login.user.role,a),o=G(b["a"].state.login.user.role,Q);b["a"].dispatch("menu/setMenuRoutes",s).then((function(){W.addRoutes(o),n()})),X=!0}return n()}return n("/login")}return n()}));var Y=W,Z=new r["a"]({});r["a"].prototype.$bus=Z;var ee=n("f23d");n("0b0f");r["a"].use(ee["a"]);n("b8cb");r["a"].use(s.a),r["a"].config.productionTip=!1,new r["a"]({router:Y,store:b["a"],render:function(e){return e(f)}}).$mount("#app")},"6b1f":function(e,t,n){"use strict";n("9e59")},"85ec":function(e,t,n){},"9e59":function(e,t,n){},b8cb:function(e,t,n){}});
//# sourceMappingURL=app.f3d6d5bb.js.map