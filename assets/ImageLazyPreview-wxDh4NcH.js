import{al as L,r as m,ap as h}from"./index-DPONv-AB.js";import{g as k,s as x}from"./useCacheState-CJv9KMn_.js";import{a as C}from"./MyApp-DEIUhxeN.js";import{I}from"./index-Dcy0fSW9.js";import"./addEventListener-DR_NM1NW.js";function A(f){const{cacheId:p,getPreview:u,renderPreview:r,...a}=f,{message:o}=L.useApp(),{ti:s}=C(),c=a.src||"",n="ImageLazyPreview."+(p||c),[y,i]=m.useState(!1),[l,d]=m.useState(k(n,"")),v=async()=>{if(!l)try{i(!0),o.loading({duration:0,key:n,content:s({en:"Loading...",vi:"Đang tải..."})});let t=performance.now();const e=await u();let w=performance.now();console.log("getPreview",w-t),e&&e!==c&&(d(e),x(n,e)),o.success({key:n,content:s({en:"Load success",vi:"Tải xong"})})}catch(t){console.error(t),o.error({key:n,content:s({en:"Load failed: ",vi:"Tải lỗi: "})+t.message})}finally{i(!1)}},g=l||c;return h.jsx(I,{...a,preview:typeof r=="function"?r(g,y):{src:g},onClick:t=>{var e;(e=a.onClick)==null||e.call(a,t),v()}})}export{A as default};
