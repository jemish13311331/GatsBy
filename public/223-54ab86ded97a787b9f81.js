"use strict";(self.webpackChunklearn_at_most_capacity=self.webpackChunklearn_at_most_capacity||[]).push([[223],{8223:function(e,t,n){n.r(t),n.d(t,{renderImageToString:function(){return b},swapPlaceholderImage:function(){return g}});var o=n(3723),a=n(7294),r=n(7762);n(2369);let i;const c=new WeakMap,l=navigator.connection||navigator.mozConnection||navigator.webkitConnection,s=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function u(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function d(e,t,n,o,a,r){const i=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),l=n.has(t);function s(e){this.removeEventListener("load",s);const t=e.currentTarget,n=new Image;n.src=t.currentSrc,n.decode?n.decode().then((()=>{u(this,c),null==a||a({wasCached:l})})).catch((e=>{u(this,c),null==r||r(e)})):(u(this,c),null==a||a({wasCached:l}))}return i.addEventListener("load",s),null==o||o({wasCached:l}),Array.from(i.parentElement.children).forEach((e=>{const t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),n&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",n))})),n.add(t),i.complete&&s.call(i,{currentTarget:i}),()=>{i&&i.removeEventListener("load",s)}}function g(e,t,a,r,s,u,g){if(!(0,o.h)()){let o;const f=(h=()=>{o=d(e,t,a,s,u,g)},"IntersectionObserver"in window?(i||(i=new IntersectionObserver((e=>{e.forEach((e=>{var t;e.isIntersecting&&(null==(t=c.get(e.target))||t(),c.delete(e.target))}))}),{rootMargin:"4g"!==(null==l?void 0:l.effectiveType)||null!=l&&l.saveData?"2500px":"1250px"})),function(e){return c.set(e,h),i.observe(e),function(){i&&e&&(c.delete(e),i.unobserve(e))}}):function(){return h(),function(){}}),v=f(e);var b,m;return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(b=r.objectFit)?b:"cover",e.dataset.objectPosition=""+(null!=(m=r.objectPosition)?m:"50% 50%"),async function(e){"objectFitPolyfill"in window||await n.e(231).then(n.t.bind(n,7231,23)),window.objectFitPolyfill(e)}(e)),()=>{o&&o(),v()}}var h;return d(e,t,a,s,u,g)}function b(e){let{image:t,loading:n="lazy",isLoading:i,isLoaded:c,imgClassName:l,imgStyle:u={},objectPosition:d,backgroundColor:g,objectFit:b="cover"}=e,m=(0,o._)(e,s);const{width:h,height:f,layout:v,images:w,placeholder:y,backgroundColor:p}=t;return u=(0,o.a)({objectFit:b,objectPosition:d,backgroundColor:g},u),(0,r.renderToStaticMarkup)(a.createElement(o.L,{layout:v,width:h,height:f},a.createElement(o.P,(0,o.a)({},(0,o.g)(y,c,v,h,f,p,b,d))),a.createElement(o.M,(0,o.a)({},m,{width:h,height:f,className:l},(0,o.b)(i,c,w,n,u)))))}}}]);
//# sourceMappingURL=223-54ab86ded97a787b9f81.js.map