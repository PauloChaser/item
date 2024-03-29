(function(){"use strict";var e={6133:function(e,t,n){var r=n(5130),o=n(6768),a=n(1387),s=n(4232),c=(0,o.pM)({__name:"LinkButton",props:{to:{},isActive:{type:Boolean}},setup(e){return(e,t)=>{const n=(0,o.g2)("router-link");return e.to?((0,o.uX)(),(0,o.Wv)(n,{key:0,to:e.to,class:(0,s.C4)(["button",{"button--active":e.isActive}])},{default:(0,o.k6)((()=>[(0,o.RG)(e.$slots,"default")])),_:3},8,["to","class"])):((0,o.uX)(),(0,o.CE)("button",{key:1,class:(0,s.C4)(["button",{"button--active":e.isActive}])},[(0,o.RG)(e.$slots,"default")],2))}}}),u=n(1241);const i=(0,u.A)(c,[["__scopeId","data-v-28eba133"]]);var l=i,d=n(782);const f={class:"navigation"};var p=(0,o.pM)({__name:"App",setup(e){const t=(0,a.lq)(),n=(0,d.Pj)();(0,o.sV)((()=>{n.dispatch("GET_INITIAL_DATA")}));const s=e=>t.path===e;return(e,t)=>{const n=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("nav",f,[(0,o.bF)(l,{to:"/","is-active":s("/")},{default:(0,o.k6)((()=>[(0,o.eW)("Валюты")])),_:1},8,["is-active"]),(0,o.bF)(l,{to:"/converter","is-active":s("/converter")},{default:(0,o.k6)((()=>[(0,o.eW)("Конвертер")])),_:1},8,["is-active"])]),(0,o.bF)(r.eB,{name:"slide-fade"},{default:(0,o.k6)((()=>[(0,o.bF)(n)])),_:1})],64)}}});const v=p;var m=v,_=n(144),E=n(6060),h=n(8588);const b=e=>((0,o.Qi)("data-v-70e4c4d6"),e=e(),(0,o.jt)(),e),g={class:"currencies"},y={class:"currencies__filterRow"},k={class:"currencies__selectWrapper"},S=b((()=>(0,o.Lk)("span",{class:"currencies__selectSubtitle"},"Currency",-1))),A={class:"currencies__result"},C={class:"currencies__resultList"},T={class:"currencies__currencyVal"},R={class:"currencies__rate"};var w=(0,o.pM)({__name:"Currencies",setup(e){const t=(0,d.Pj)(),n=(0,_.KR)(t.getters.BASE),r=(0,_.KR)(""),a=(0,o.EW)((()=>{if(0===r.value.length)return t.getters.RATES;const e=Object.entries(t.getters.RATES).filter((([e])=>e.toLowerCase().includes(r.value.toLowerCase())));return Object.fromEntries(e)}));return(0,o.wB)(n,(e=>{t.dispatch("GET_RATES",e)})),(e,c)=>((0,o.uX)(),(0,o.CE)("div",g,[(0,o.Lk)("div",y,[(0,o.bF)(E.A,{class:"currencies__searchInput",placeholder:"Search",modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=e=>r.value=e),type:"text"},null,8,["modelValue"]),(0,o.Lk)("div",k,[S,(0,o.bF)(h.A,{options:(0,_.R1)(t).getters.CURRENCIES,modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=e=>n.value=e)},null,8,["options","modelValue"])])]),(0,o.Lk)("div",A,[(0,o.Lk)("ul",C,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.value,((e,n)=>((0,o.uX)(),(0,o.CE)("li",{class:"currencies__listItem",key:n},[(0,o.Lk)("span",T,(0,s.v_)(n),1),(0,o.Lk)("span",R,(0,s.v_)(e.toFixed(2))+" "+(0,s.v_)((0,_.R1)(t).getters.BASE),1)])))),128))])])]))}});const L=(0,u.A)(w,[["__scopeId","data-v-70e4c4d6"]]);var O=L;const I=[{path:"/",name:"currencies",component:O},{path:"/converter",name:"converter",component:()=>n.e(594).then(n.bind(n,908))}],j=(0,a.aE)({history:(0,a.LA)("/item/"),routes:I});var N=j;n(4603),n(7566),n(8721);const V="http://api.exchangeratesapi.io/",B="52dd5a4e71e4d1e95ad215dbfaedcad9",F=async(e,t)=>{const n=new URLSearchParams(t).toString(),r="api_cache_"+e+n,o=localStorage.getItem(r);if(o)return JSON.parse(o);try{const t=await fetch(`${V}/v1/${e}?access_key=${B}&${n}`),o=await t.json();return o.error||localStorage.setItem(r,JSON.stringify(o)),o}catch(a){console.log(a)}};var x=(0,d.y$)({state:{base:"USD",rates:{},currencies:{},converterRate:1},getters:{BASE:e=>e.base,CURRENCIES:e=>e.currencies,RATES:e=>e.rates,CONVERTER_RATE:e=>e.converterRate},mutations:{SET_BASE:(e,t)=>{e.base=t},SET_RATES:(e,t)=>{e.rates=t},SET_CURRENCIES:(e,t)=>{e.currencies=t},SET_CONVERTER_RATE:(e,t)=>{e.converterRate=t}},actions:{GET_INITIAL_DATA:async({commit:e,dispatch:t,getters:n})=>{const{symbols:r}=await F("symbols");await t("GET_RATES",n.BASE),e("SET_CURRENCIES",r)},GET_RATES:async({commit:e},t)=>{const n={cbase:t},{rates:r}=await F("latest",n);e("SET_BASE",t),e("SET_RATES",r)},GET_CONVERTER_RATE:async({commit:e},t)=>{const n={cbase:t.from,symbols:t.to},{rates:r}=await F("latest",n),o=Object.values(r)[0];e("SET_CONVERTER_RATE",o)}}});(0,r.Ef)(m).use(x).use(N).mount("#app")},6060:function(e,t,n){n.d(t,{A:function(){return u}});var r=n(6768);const o=["type","value","placeholder"];var a=(0,r.pM)({__name:"Input",props:{placeholder:{},type:{},modelValue:{}},setup(e){return(e,t)=>((0,r.uX)(),(0,r.CE)("input",{class:"input",type:e.type,value:e.modelValue,placeholder:e.placeholder,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},null,40,o))}}),s=n(1241);const c=(0,s.A)(a,[["__scopeId","data-v-525bba22"]]);var u=c},8588:function(e,t,n){n.d(t,{A:function(){return _}});var r=n(6768),o=n(4232),a=n(5130),s=n(144);const c=e=>((0,r.Qi)("data-v-f4ff2d7c"),e=e(),(0,r.jt)(),e),u={class:"selectedOption"},i=c((()=>(0,r.Lk)("svg",{width:"12",height:"7",viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,r.Lk)("path",{d:"M11 1L6 6L1 1",stroke:"#464646","stroke-linecap":"round","stroke-linejoin":"round"})],-1))),l=[i],d={class:"optionList"},f=["onClick"];var p=(0,r.pM)({__name:"Select",props:{options:{},modelValue:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=t,c=(0,s.KR)(!1);function i(){c.value=!c.value}function p(e){n("update:modelValue",e),c.value=!1}return(e,t)=>((0,r.uX)(),(0,r.CE)("div",{class:"customSelect",onClick:i},[(0,r.Lk)("div",u,[(0,r.eW)((0,o.v_)(e.modelValue)+" ",1),(0,r.Lk)("span",{class:(0,o.C4)(["arrowWrapper",{active:c.value}])},l,2)]),(0,r.Lk)("div",{class:(0,o.C4)(["dropdown",{active:c.value}])},[(0,r.Lk)("ul",d,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.options,((e,t)=>((0,r.uX)(),(0,r.CE)("li",{class:"listItem",key:t,onClick:(0,a.D$)((e=>p(t)),["stop"])},(0,o.v_)(t),9,f)))),128))])],2)]))}}),v=n(1241);const m=(0,v.A)(p,[["__scopeId","data-v-f4ff2d7c"]]);var _=m}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var s=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var c=!0,u=0;u<r.length;u++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(c=!1,a<s&&(s=a));if(c){e.splice(l--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.a49189f2.js"}}(),function(){n.miniCssF=function(e){return"css/about.fa193fc3.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="itemtest:";n.l=function(r,o,a,s){if(e[r])e[r].push(o);else{var c,u;if(void 0!==a)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var d=i[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){c=d;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=r),e[r]=[o];var f=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/item/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,a){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",n.nc&&(s.nonce=n.nc);var c=function(n){if(s.onerror=s.onload=null,"load"===n.type)o();else{var r=n&&n.type,c=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+c+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=r,u.request=c,s.parentNode&&s.parentNode.removeChild(s),a(u)}};return s.onerror=s.onload=c,s.href=t,r?r.parentNode.insertBefore(s,r.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){o=s[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var s=n.miniCssF(r),c=n.p+s;if(t(s,c))return o();e(r,c,null,o,a)}))},o={524:0};n.f.miniCss=function(e,t){var n={594:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var s=n.p+n.u(t),c=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",c.name="ChunkLoadError",c.type=a,c.request=s,o[1](c)}};n.l(s,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,s=r[0],c=r[1],u=r[2],i=0;if(s.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var l=u(n)}for(t&&t(r);i<s.length;i++)a=s[i],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkitemtest"]=self["webpackChunkitemtest"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(6133)}));r=n.O(r)})();
//# sourceMappingURL=app.74daff7c.js.map