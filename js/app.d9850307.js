(function(){"use strict";var e={9310:function(e,n,o){var t=o(9242),r=o(3396);const i={id:"app"},a={id:"nav"},u=(0,r.Uk)("Home"),l=(0,r.Uk)("Login"),c=(0,r.Uk)(" Policies");function s(e,n,o,s,d,m){const p=(0,r.up)("HobbitonView"),f=(0,r.up)("router-link"),v=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(p),(0,r._)("div",a,[(0,r.Wm)(f,{to:"/HomeView"},{default:(0,r.w5)((()=>[u])),_:1}),(0,r.Wm)(f,{to:"/loginview"},{default:(0,r.w5)((()=>[l])),_:1}),(0,r.Wm)(f,{to:"/PsAndTs"},{default:(0,r.w5)((()=>[c])),_:1})]),(0,r.Wm)(t.uT,{name:"router-anim"},{default:(0,r.w5)((()=>[(0,r.Wm)(v)])),_:1}),(0,r._)("button",{onClick:n[0]||(n[0]=(...e)=>m.back&&m.back(...e))},"Back"),(0,r._)("button",{onClick:n[1]||(n[1]=(...e)=>m.forward&&m.forward(...e))},"Forward")])}var d=o.p+"img/74905170.788de3f3.png";const m={id:""},p=(0,r._)("header",null,[(0,r._)("h1",null,[(0,r._)("span",null,"Hobbiton ")]),(0,r._)("p",null,"Technologies")],-1),f=(0,r._)("img",{src:d,alt:""},null,-1),v=[p,f];function b(e,n){return(0,r.wg)(),(0,r.iD)("div",m,v)}var g=o(89);const w={},h=(0,g.Z)(w,[["render",b]]);var y=h,H={methods:{back(){this.$router.go(-1)},forward(){this.$router.go(1)}},name:"App",components:{HobbitonView:y}};const _=(0,g.Z)(H,[["render",s]]);var V=_,k=o(2483),W=o(7139);const P={class:"page"};function O(e,n,o,t,i,a){const u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",P,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.crud,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id,class:"crud"},[(0,r.Wm)(u,{to:{name:"manageCompany",params:{id:e.id}}},{default:(0,r.w5)((()=>[(0,r._)("h4",null,(0,W.zw)(e.id),1)])),_:2},1032,["to"])])))),128))])}var D={data(){return{crud:[{title:"Add insurance company",id:"Add insurance company",details:"You need to enter the insurance company details"},{title:"View insurance companies",id:"View insurance companies",details:""},{title:"Update insurance company",id:"Update insurance company",details:"You need to enter name"},{title:"Delete insurance company",id:"Delete insurance company",details:"You need to enter name"}]}}};const T=(0,g.Z)(D,[["render",O]]);var Z=T;const j={class:"page"};function x(e,n,o,t,i,a){const u=(0,r.up)("loginForms");return(0,r.wg)(),(0,r.iD)("div",j,[(0,r.Wm)(u)])}const A={class:"Hobbiton-theme"};function C(e,n){const o=(0,r.up)("FormKit");return(0,r.wg)(),(0,r.iD)("div",A,[(0,r.Wm)(o,{type:"form","submit-label":"Login",action:"https://enpae7aofyxlml7.m.pipedream.net",method:"post"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{name:"email",placeholder:"example@gmail.com",label:"Email address",validation:"required|email"}),(0,r.Wm)(o,{placeholder:"*************",type:"password",name:"password",label:"Password",validation:"required"})])),_:1})])}const F={},L=(0,g.Z)(F,[["render",C]]);var M=L,S={name:"App",components:{loginForms:M}};const U=(0,g.Z)(S,[["render",x]]);var Y=U;const z={class:"page"},B=(0,r._)("p",null,"Policies",-1);function $(e,n){const o=(0,r.up)("FormKit"),t=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",z,[B,(0,r.Wm)(o,{type:"form","submit-label":"Submit",action:"/PoliciesView",method:"post"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{name:"number",label:" Broker ID",validation:"required|id"}),(0,r.Wm)(o,{type:"number",name:"page number",label:"Page number"}),(0,r.Wm)(o,{type:"number",name:"page size",label:"Page size"})])),_:1})]),(0,r.Wm)(t)],64)}const q={},K=(0,g.Z)(q,[["render",$]]);var E=K;const I={class:"page"},R=(0,r._)("h3",null,"Manage insuarance companies",-1);function G(e,n,o,t,i,a){return(0,r.wg)(),(0,r.iD)("div",I,[R,(0,r._)("p",null,(0,W.zw)(e.$route.params.id),1)])}var J={data(){return{id:this.$route.params.id}}};const N=(0,g.Z)(J,[["render",G]]);var Q=N;const X={},ee=X;var ne=ee;const oe=[{path:"/HomeView",name:"HomeView",component:Z},{path:"/PsAndTs",name:"PsAndTs",component:E},{path:"/LoginView",name:"LoginView",component:Y},{path:"/manageCompany/:id",name:"manageCompany",component:Q},{path:"/all-cruds",redirect:"/Home"},{path:"/PoliciesView",name:"policies",component:ne}],te=(0,k.p7)({history:(0,k.PO)("/hobbitonv1/"),routes:oe});var re=te,ie=o(9335),ae=o(6494),ue=o(9815);const le=(0,t.ri)(V),ce=(0,ie.u_)({locales:{de:ae.de,fr:ae.fr,bg:ae.bg},locale:"en",theme:"genesis",icons:{formkit:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 0.0182495H0V4.01533H4V8.01167L7.9989 8.01167V12.0088H4V16.0058H0V20.0029H4V16.0058H8V12.0088H11.9989V8.01167L8 8.01167V4.01459H4V0.0182495ZM11.9983 20.0029H15.9977H15.9983H19.9972H19.9977H23.9972V24H19.9977H19.9972H15.9983H15.9977H11.9983V20.0029Z" fill="currentColor"/></svg>'},plugins:[(0,ue.R)()]});le.use(ie.BA,ce),le.use(re),le.mount("#app")}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(n,t,r,i){if(!t){var a=1/0;for(s=0;s<e.length;s++){t=e[s][0],r=e[s][1],i=e[s][2];for(var u=!0,l=0;l<t.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](t[l])}))?t.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var c=r();void 0!==c&&(n=c)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[t,r,i]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/hobbitonv1/"}(),function(){var e={143:0};o.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,i,a=t[0],u=t[1],l=t[2],c=0;if(a.some((function(n){return 0!==e[n]}))){for(r in u)o.o(u,r)&&(o.m[r]=u[r]);if(l)var s=l(o)}for(n&&n(t);c<a.length;c++)i=a[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(s)},t=self["webpackChunkhobbiton"]=self["webpackChunkhobbiton"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(9310)}));t=o.O(t)})();
//# sourceMappingURL=app.d9850307.js.map