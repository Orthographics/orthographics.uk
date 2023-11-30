import{_ as u}from"./_plugin-vue_export-helper.c27b6911.js";import{d as p,o as d,c as f,a as o,r as h,n as b,b as _,w as g,e as c,f as x,g as m,h as y}from"./runtime-core.esm-bundler.8b56f106.js";const v={src:"/_astro/Tick-back.3ce3ce06.svg",width:227.28,height:164.63,format:"svg"},k={src:"/_astro/Tick-front.6823a612.svg",width:227.28,height:164.63,format:"svg"},w={src:"/_astro/Button-front.316654c3.svg",width:216,height:95,format:"svg"},B={src:"/_astro/Button-back.da7e9d65.svg",width:216,height:95,format:"svg"},S=p({__name:"OrthoButton",setup(a,{expose:s}){s();const e={get ButtonFront(){return w},get ButtonBack(){return B}};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),T={class:"w-full h-[100px] relative group cursor-pointer -translate-y-2"},F={class:"scale-50 top-1/2 -translate-y-[calc(50%+7px)] translate-x-[4px] absolute h-[100px] w-full"},O=["src"],$=["src"],C={class:"z-10 font-display text-xl font-semibold absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center"};function N(a,s,e,t,n,l){return d(),f("button",T,[o("div",F,[o("img",{class:"absolute top-1/2 -translate-y-1/2 z-10",src:t.ButtonFront.src},null,8,O),o("img",{class:"absolute top-1/2 group-hover:translate-x-[4px] group-hover:translate-y-[calc(-50%-4px)] -translate-y-1/2 transition-transform ease-in-out duration-500",src:t.ButtonBack.src},null,8,$)]),o("h1",C,[h(a.$slots,"default")])])}const j=u(S,[["render",N]]),i="https://submit-form.com/yRU60pgo",z=p({__name:"ContactForm",setup(a,{expose:s}){s();const e=c(),t=c(!1);x(()=>{e.value&&(e.value.onsubmit=r=>{e.value&&(r.preventDefault(),n())})});function n(){console.log("contact submit"),fetch(i,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:e.value?.elements?.name?.value,email:e.value?.elements?.email?.value,message:e.value?.elements?.message?.value})}).then(r=>{if(r.status!==200)throw Error(r.status.toString());return r.json()}).then(r=>{console.log(r),t.value=!0}).catch(r=>{console.log(`Go response ${r} when trying to POST form`)})}const l={form:e,formUrl:i,formSubmitted:t,submitContact:n,get TickBack(){return v},get TickFront(){return k},OrthoButton:j};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),P={class:"max-w-xl grid grid-cols-1 space-y-2 px-8 max-[769px]:pt-4 relative",ref:"form"},V={class:"w-full h-full bg-orthopurple rounded-md bg-opacity-20 border-orthopurple border-2"},q=["src"],E=["src"],M=o("h1",{class:"absolute top-1/2 w-[90%] text-center font-display text-3xl p-2 font-medium"},[m(" Thanks!"),o("br"),o("span",{class:"text-2xl"},"We'll get back to you soon.")],-1),U=y('<label for="name" class="block"><span class="font-display">Name</span><input class="font-body font-thin w-full mt-1 rounded-md border-orthopurple border-opacity-25 focus:ring focus:border-opacity-0 focus:border-orthopurple focus:ring-orthopurple focus:ring-opacity-50 caret-orthopurple" type="text" name="name" id="name" required></label><label for="email" class="block"><span class="font-display">Email</span><input class="font-body font-thin w-full mt-1 rounded-md border-orthopurple border-opacity-25 focus:ring focus:border-opacity-0 focus:border-orthopurple focus:ring-orthopurple focus:ring-opacity-50 caret-orthopurple" type="email" name="email" id="email" required></label><label for="name" class="block"><span class="font-display">Message</span><textarea class="font-body font-thin w-full mt-1 rounded-md border-orthopurple border-opacity-25 focus:ring focus:border-opacity-0 focus:border-orthopurple focus:ring-orthopurple focus:ring-opacity-50 caret-orthopurple" type="textarea" rows="4" name="message" id="message" required></textarea></label>',3);function A(a,s,e,t,n,l){return d(),f("form",P,[o("div",{class:b(["absolute px-4 w-full h-full max-[769px]:pt-4 group transition-[-webkit-filter,filter,opacity] ease-in-out duration-1000",{"-z-[100]":!t.formSubmitted,"z-20":t.formSubmitted,"opacity-0":!t.formSubmitted,"backdrop-blur-[4px]":t.formSubmitted}])},[o("div",V,[o("img",{src:t.TickBack.src,class:"w-32 m-auto mb-8 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-[calc(-50%+2px)] group-hover:translate-y-[calc(-50%-2px)] transition-transform ease-in-out duration-500"},null,8,q),o("img",{src:t.TickFront.src,class:"w-32 m-auto mb-8 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"},null,8,E),M])],2),U,_(t.OrthoButton,{type:"submit"},{default:g(()=>[m("SUBMIT")]),_:1})],512)}const I=u(z,[["render",A]]);export{I as default};