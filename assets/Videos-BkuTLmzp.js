const __vite__fileDeps=["./ImageLazyPreview-Bsws5QnL.js","./index-DIq5bgLX.js","./index-BM_p-30O.css","./useCacheState-BGfzTj7R.js","./MyApp-MiOxcIdU.js","./index-DAVJbk9H.js","./addEventListener-3oSyDV2P.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as d,aq as e,au as u}from"./index-DIq5bgLX.js";import{x as h,B as x,O as f,P as v}from"./MyApp-MiOxcIdU.js";import{C as y}from"./Collection-LDxb92Bd.js";import{g as w,a as I,b as p}from"./videos-DVlUFDN9.js";import{L as b}from"./index-DoRELR-6.js";import"./index-R4kZvd-z.js";import"./file-download-BAVwK8SC.js";import"./useCacheState-BGfzTj7R.js";import"./index-C_eP70Gq.js";import"./Dropdown-mqs4Afzo.js";import"./PurePanel-CmkTJSAT.js";import"./index-DAXXZz2T.js";import"./TextArea-CAjRjfaX.js";import"./addEventListener-3oSyDV2P.js";import"./Pagination-CCda05l4.js";import"./useBreakpoint-DVjXUw1O.js";import"./responsiveObserver-DiKIXTRH.js";import"./row-DBSFeXDE.js";const j=d.lazy(()=>u(()=>import("./ImageLazyPreview-Bsws5QnL.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url));function F({target:i}){const r=d.useCallback(async(o=[],s)=>{var l;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(s=s||((l=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:l.cursor)||"",((i==null?void 0:i.type)===h.Group?await w({id:i==null?void 0:i.id,cursor:s}):await I({id:i==null?void 0:i.id,cursor:s})).videos)},[i]),m=d.useCallback(async o=>{if(!o.source){const s=await p(o.id);o.source=s.source}return{url:o.source,name:o.id+".mp4"}},[]),c=d.useCallback(o=>e.jsx(b.Item,{children:e.jsx(x.Ribbon,{text:o.length?f(o.length):null,children:e.jsx(j,{src:o.picture,width:200,height:200,style:{objectFit:"cover"},cacheId:"video."+o.id,getPreview:()=>o.source||p(o.id).then(s=>s.source),renderPreview:(s,n)=>({destroyOnClose:!0,imageRender:()=>e.jsx(v,{spinning:n,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})})})}),[]);return e.jsx(y,{collectionName:(i==null?void 0:i.name)+" - Videos",fetchNext:r,renderItem:c,downloadItem:m,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{F as default};
