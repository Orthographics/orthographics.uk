import{l as H,m,p as M,q as B,s as I,t as z,v as D,x as L,y as N,z as q,A as W,B as $,C as R,D as K,d as j,E as d,S as F}from"./runtime-core.esm-bundler.04d7298d.js";const U="http://www.w3.org/2000/svg",a=typeof document<"u"?document:null,g=a&&a.createElement("template"),X={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t?a.createElementNS(U,e):a.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,r){const o=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{g.innerHTML=s?`<svg>${e}</svg>`:e;const c=g.content;if(s){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}t.insertBefore(c,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},G=Symbol("_vtc");function J(e,t,n){const s=e[G];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Q=Symbol("_vod");function Y(e,t,n){const s=e.style,i=m(n);if(n&&!i){if(t&&!m(t))for(const r in t)n[r]==null&&b(s,r,"");for(const r in n)b(s,r,n[r])}else{const r=s.display;i?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),Q in e&&(s.display=r)}}const A=/\s*!important$/;function b(e,t,n){if(L(n))n.forEach(s=>b(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Z(e,t);A.test(n)?e.setProperty(N(s),n.replace(A,""),"important"):e[s]=n}}const v=["Webkit","Moz","ms"],h={};function Z(e,t){const n=h[t];if(n)return n;let s=q(t);if(s!=="filter"&&s in e)return h[t]=s;s=W(s);for(let i=0;i<v.length;i++){const r=v[i]+s;if(r in e)return h[t]=r}return t}const E="http://www.w3.org/1999/xlink";function y(e,t,n,s,i){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(E,t.slice(6,t.length)):e.setAttributeNS(E,t,n);else{const r=$(t);n==null||r&&!R(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function V(e,t,n,s,i,r,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,i,r),e[t]=n??"";return}const c=e.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){e._value=n;const f=c==="OPTION"?e.getAttribute("value"):e.value,u=n??"";f!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=R(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function k(e,t,n,s){e.addEventListener(t,n,s)}function tt(e,t,n,s){e.removeEventListener(t,n,s)}const C=Symbol("_vei");function et(e,t,n,s,i=null){const r=e[C]||(e[C]={}),o=r[t];if(s&&o)o.value=s;else{const[c,l]=nt(t);if(s){const f=r[t]=rt(s,i);k(e,c,f,l)}else o&&(tt(e,c,o,l),r[t]=void 0)}}const T=/(?:Once|Passive|Capture)$/;function nt(e){let t;if(T.test(e)){t={};let s;for(;s=e.match(T);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):N(e.slice(2)),t]}let S=0;const st=Promise.resolve(),it=()=>S||(st.then(()=>S=0),S=Date.now());function rt(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;K(ot(s,n.value),t,5,[s])};return n.value=e,n.attached=it(),n}function ot(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const P=/^on[a-z]/,ct=(e,t,n,s,i=!1,r,o,c,l)=>{t==="class"?J(e,s,i):t==="style"?Y(e,n,s):z(t)?D(t)||et(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):lt(e,t,s,i))?V(e,t,s,r,o,c,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),y(e,t,s,i))};function lt(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&P.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||P.test(t)&&m(n)?!1:t in e}const _=I({patchProp:ct},X);let p,w=!1;function ft(){return p||(p=M(_))}function ut(){return p=w?p:B(_),w=!0,p}const at=(...e)=>{const t=ft().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=O(s);if(!i)return;const r=t._component;!H(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t},pt=(...e)=>{const t=ut().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=O(s);if(i)return n(i,!0,i instanceof SVGElement)},t};function O(e){return m(e)?document.querySelector(e):e}const dt=()=>{},mt=j({props:{value:String,name:String,hydrate:{type:Boolean,default:!0}},setup({name:e,value:t,hydrate:n}){if(!t)return()=>null;let s=n?"astro-slot":"astro-static-slot";return()=>d(s,{name:e,innerHTML:t})}}),bt=e=>async(t,n,s,{client:i})=>{if(delete n.class,!e.hasAttribute("ssr"))return;const r=t.name?`${t.name} Host`:void 0,o={};for(const[u,x]of Object.entries(s))o[u]=()=>d(mt,{value:x,name:u==="default"?void 0:u});const c=i!=="only",f=(c?pt:at)({name:r,render(){let u=d(t,n,o);return ht(t.setup)&&(u=d(F,null,u)),u}});await dt(),f.mount(e,c),e.addEventListener("astro:unmount",()=>f.unmount(),{once:!0})};function ht(e){const t=e?.constructor;return t&&t.name==="AsyncFunction"}export{bt as default};
