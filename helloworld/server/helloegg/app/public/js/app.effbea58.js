(function(){"use strict";var e={3955:function(e,n,t){var o=t(6369),r=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],l={name:"App"},a=l,i=t(1001),s=(0,i.Z)(a,r,u,!1,null,null,null),c=s.exports,f=t(8499),d=t.n(f),p=t(2631),g=function(){var e=this,n=e._self._c;return n("div",[n("h1",[e._v("数据："+e._s(e.msg))]),n("button",{on:{click:e.logout}},[e._v("注销")])])},m=[],v=t(6943);const h=v.Z.create({baseURL:""});h.interceptors.request.use((e=>{let n=localStorage.getItem("token");return n&&(e.headers.token=n),e})),h.interceptors.response.use((e=>e.data));var b=h,y={name:"Home",data(){return{msg:""}},methods:{logout(){localStorage.setItem("token",""),location.reload()},getMessage(){b.get("/hello").then((e=>{console.log(e),this.msg=e.data[0].msg}))}},created(){this.getMessage()}},_=y,w=(0,i.Z)(_,g,m,!1,null,null,null),k=w.exports,O=function(){var e=this,n=e._self._c;return n("div",[n("h1",[e._v("登陆")]),n("form",{on:{submit:function(n){return n.preventDefault(),e.login.apply(null,arguments)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text"},domProps:{value:e.username},on:{input:function(n){n.target.composing||(e.username=n.target.value)}}}),n("button",[e._v("登陆")])])])},x=[],S=(t(7658),{name:"Login",data(){return{username:""}},methods:{login(){b.post("/login",{username:this.username}).then((e=>{2e4===e.code&&(console.log(e.token),localStorage.setItem("token",e.token),this.$router.push("/"))}))}}}),j=S,Z=(0,i.Z)(j,O,x,!1,null,null,null),M=Z.exports;o["default"].use(p.Z);const P=[{path:"/",name:"Home",component:k},{path:"/login",name:"Login",component:M}],T=new p.Z({base:"/",routes:P});T.beforeEach(((e,n,t)=>{if("/login"===e.path)t();else{let e=localStorage.getItem("token");e?t():t("/login")}}));var I=T;o["default"].use(d()),o["default"].config.productionTip=!1,new o["default"]({render:e=>e(c),router:I}).$mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var u=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,u){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],u=e[c][2];for(var a=!0,i=0;i<o.length;i++)(!1&u||l>=u)&&Object.keys(t.O).every((function(e){return t.O[e](o[i])}))?o.splice(i--,1):(a=!1,u<l&&(l=u));if(a){e.splice(c--,1);var s=r();void 0!==s&&(n=s)}}return n}u=u||0;for(var c=e.length;c>0&&e[c-1][2]>u;c--)e[c]=e[c-1];e[c]=[o,r,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,u,l=o[0],a=o[1],i=o[2],s=0;if(l.some((function(n){return 0!==e[n]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(i)var c=i(t)}for(n&&n(o);s<l.length;s++)u=l[s],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(c)},o=self["webpackChunkhelloworld"]=self["webpackChunkhelloworld"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(3955)}));o=t.O(o)})();
//# sourceMappingURL=app.effbea58.js.map