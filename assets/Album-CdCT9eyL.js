const __vite__fileDeps=["./ImageLazyPreview-CbYDzIFT.js","./index-DOOTCcHC.js","./index-BM_p-30O.css","./useCacheState-Bvty8fNQ.js","./MyApp-C1Cge4LI.js","./index-BhyrVf84.js","./addEventListener-wLIjlol3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as t,aq as o,au as f}from"./index-DOOTCcHC.js";import{C as h}from"./Collection-J0vJyBVX.js";import{L as x,N as b,P as v}from"./MyApp-C1Cge4LI.js";import{c as y,M as d}from"./albums-BzV16OP6.js";import{b as c}from"./videos-COKoDDQN.js";import{L as w}from"./index-DBKoNkzi.js";import{I as _}from"./index-BhyrVf84.js";import"./index-Cs-LNwoF.js";import"./file-download-Dycc4scI.js";import"./useCacheState-Bvty8fNQ.js";import"./index-9LEuxGJt.js";import"./Dropdown-uE1te4Kd.js";import"./PurePanel-qusS7nQi.js";import"./index-CCWRB7N3.js";import"./TextArea-D20a544N.js";import"./addEventListener-wLIjlol3.js";import"./Pagination-CV8j8exz.js";import"./useBreakpoint-DW8QQd81.js";import"./responsiveObserver-CeUCIo-a.js";import"./row-BE6NqmDN.js";const g=t.lazy(()=>f(()=>import("./ImageLazyPreview-CbYDzIFT.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url));function H({target:i,albumId:l,album:a}){const s=l||a.id,p=t.useCallback(async(r=[],e)=>{var n;return s?await y({albumId:s,accessToken:await x(b.EAAB),fromId:e||((n=r[r.length-1])==null?void 0:n.id)||""}):void 0},[s]),u=t.useCallback(r=>o.jsx(w.Item,{children:r.type==d.IMAGE?o.jsx(_,{src:r.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"}}):o.jsx(g,{src:r.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"},cacheId:"album_video."+r.id,getPreview:()=>c(r.id).then(e=>e.source),renderPreview:(e,m)=>({destroyOnClose:!0,imageRender:()=>o.jsx(v,{spinning:m,children:o.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:e,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})})}),[]),I=t.useCallback(async r=>r.type==d.IMAGE?{url:r.uri,name:r.id+".jpg"}:{url:(await c(r.id)).source,name:r.id+".mp4"},[]);return o.jsx(h,{collectionName:(i==null?void 0:i.name)+" - Album "+a.name,fetchNext:p,renderItem:u,downloadItem:I,getItemCursor:r=>r.id,rowKey:r=>r.id})}export{H as default};
