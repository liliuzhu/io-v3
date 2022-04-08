(function(){var e={6053:function(e,t,n){"use strict";var o=n(9242),r=n(3396);function i(e,t){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(n)}var a=n(89);const s={},c=(0,a.Z)(s,[["render",i]]);var u=c,l=n(5431);(0,l.z)("/io-v3/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=n(678),d=n(6876);const p=n(271),m=(e=>e.keys().map((t=>e(t).default)))(p);function h(e,t){return e.map((e=>e[t])).filter((e=>!(0,d.o8)(e))).reduce(((e,t)=>e.concat(t)),[])}var v={RouterOptions:{base:"/io-v3/"},mode:"hash",global:h(m,"global"),tabs:h(m,"tabs"),redirect:{path:"/:pathMatch(.*)*",redirect:"/"}};let b=[];const g={path:"/",name:"Home",component:()=>Promise.all([n.e(387),n.e(791)]).then(n.bind(n,3358)),children:[]};(0,d.o8)(v.global)||(b=b.concat(v.global)),(0,d.o8)(v.tabs)||(g.children=v.tabs),b.push(g),(0,d.Kn)(v.redirect)&&b.push(v.redirect),console.log(b);const y=(0,f.p7)({history:(0,f.r5)(),scrollBehavior(){return{top:0}},routes:b});var w=y,k=n(65),A=(0,k.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});const O=e=>{O.installed||(O.installed=!0)};var C={install:O};function E(e,t){e.beforeEach((async(e,n,o)=>{const{path:r,meta:i}=e;if(t.dispatch("setFullScreen",i.fullScreen),/^http/.test(r)){const e=r.split("http")[1];window.location.href=`http${e}`}else o()})),e.afterEach((e=>{const{meta:t}=e;t&&t.title&&(document.title=t.title)}))}E(w,A);(0,o.ri)(u).use(C).use(A).use(w).mount("#app")},4186:function(e,t,n){"use strict";n.r(t);const o=[{path:"contact",name:"Contact",component:()=>n.e(631).then(n.bind(n,1566)),meta:{title:"李留住联系方式",keepAlive:!0}}],r=[];t["default"]={tabs:o,global:r}},1654:function(e,t,n){"use strict";n.r(t);const o=[{path:"",name:"Home",component:()=>Promise.all([n.e(409),n.e(177)]).then(n.bind(n,4341)),meta:{title:"李留住作品展示与个人简介",keepAlive:!0}}],r=[];t["default"]={tabs:o,global:r}},8966:function(e,t,n){"use strict";n.r(t);const o=[],r=[{path:"/myAddress",name:"MyAddress",component:()=>n.e(869).then(n.bind(n,8668)),meta:{title:"联系地址"}}];t["default"]={tabs:o,global:r}},4894:function(e,t,n){"use strict";n.r(t);const o=[{path:"portfolio",name:"Portfolio",component:()=>Promise.all([n.e(409),n.e(824)]).then(n.bind(n,9993)),meta:{title:"李留住作品展示",keepAlive:!0}}],r=[];t["default"]={tabs:o,global:r}},1704:function(e,t,n){"use strict";n.r(t);const o=[{path:"resume",name:"Resume",component:()=>Promise.all([n.e(387),n.e(597)]).then(n.bind(n,7094)),meta:{title:"李留住个人简介",keepAlive:!0}}],r=[];t["default"]={tabs:o,global:r}},271:function(e,t,n){var o={"./views/Contact/router.ts":4186,"./views/Home/router.ts":1654,"./views/MyAddress/router.ts":8966,"./views/Portfolio/router.ts":4894,"./views/Resume/router.ts":1704};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=271}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"static/js/"+({177:"home",597:"resume",631:"contact",791:"materials",824:"portfolio",869:"myAddress"}[e]||e)+"."+{177:"4c059a30",387:"429eb357",409:"beec9bc3",597:"8f1ce7ad",631:"77be70cc",791:"528abb2a",824:"9fa25d6f",869:"48396562"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"static/css/"+{177:"home",597:"resume",631:"contact",791:"materials",824:"portfolio",869:"myAddress"}[e]+"."+{177:"59a78cab",597:"dacb9ce3",631:"e773e2b4",791:"b56d83dd",824:"b5a400f0",869:"f1075fcc"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue3-ts:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+i){s=f;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/io-v3/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(t(a,s))return r();e(o,s,r,i)}))},r={826:0};n.f.miniCss=function(e,t){var n={177:1,597:1,631:1,791:1,824:1,869:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={826:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],c=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(t&&t(o);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkvue3_ts"]=self["webpackChunkvue3_ts"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6053)}));o=n.O(o)})();
//# sourceMappingURL=index.288274a4.js.map