import{aq as o}from"./index-DK9VpK7Z.js";import{a as d,J as h,o as p,ak as u,S as x}from"./MyApp-BHD6VW6n.js";import{E as j}from"./ExportButton-Y9XVLGfG.js";import{C as k}from"./Collection-D_5id6rP.js";import{A as f}from"./index-B5cL9EV-.js";import{L as y}from"./index-DlqXPYre.js";import{I as _}from"./index-Cg-fKe13.js";import"./file-download-DObqyEDW.js";import"./index-BjwtQS8J.js";import"./Dropdown-CDem9SrW.js";import"./PurePanel-F8yUCVM9.js";import"./index-ux3d5fbP.js";import"./useCacheState-B8xTfoxV.js";import"./index-Ch48yAb_.js";import"./TextArea-Dam_UsLU.js";import"./addEventListener-DnrojY7_.js";import"./Pagination-DofX7tu3.js";import"./useBreakpoint-D3UHp-M0.js";import"./row-TMJJSMo1.js";function T({target:s}){const{ti:a}=d(),c=async(e=[],i)=>{var r;return s!=null&&s.id?await u({uid:s.id,cursor:i||((r=e[e.length-1])==null?void 0:r.cursor)}):void 0},t=e=>o.jsx(y.Item,{children:o.jsxs(x,{direction:"vertical",style:{maxWidth:150},children:[o.jsx(_,{src:e.image,style:{width:150,height:150,objectFit:"contain",borderRadius:10}}),o.jsxs("span",{style:{margin:0},children:[o.jsx("span",{style:{opacity:.7},children:e.id}),o.jsx("br",{}),o.jsx("a",{href:e.url,target:"_blank",children:o.jsx("b",{children:e.name})})]})]})});return o.jsx(k,{collectionName:(s==null?void 0:s.name)+" - Liked Pages",fetchNext:c,renderItem:t,getItemCursor:e=>e.cursor,rowKey:e=>e.id,showPagination:!0,all:!0,showSearch:!0,searchPlaceholder:e=>a({en:`Search in ${e.length} liked pages`,vi:`Tìm trong ${e.length} trang được thích`}),onSearch:(e,i)=>h(e,i.name+i.id),header:e=>{var n,r,l,m;const i=((n=e[0])==null?void 0:n.total)&&((r=e[0])==null?void 0:r.total)!==e.length;return o.jsx(f,{type:"success",showIcon:!0,message:a({en:`Liked ${e.length} public pages`+(i?` (in total ${(l=e[0])==null?void 0:l.total} likes)`:""),vi:`Đã thích ${e.length} trang công khai`+(i?` (trong tổng ${(m=e[0])==null?void 0:m.total} lượt thích)`:"")})})},headerButtons:e=>o.jsx(j,{data:e,options:[{key:"uid",label:".txt (pages id)",prepareData:i=>({fileName:(s==null?void 0:s.name)+"_liked_pages_id.txt",data:i.map(n=>n.id).join(`
`)})},{key:"id_name",label:".csv (page id+name)",prepareData:i=>({fileName:(s==null?void 0:s.name)+"_liked_pages_id_name.csv",data:p(i.map(n=>({id:n.id,name:n.name})))})},{key:"json",label:".json",prepareData:i=>({fileName:(s==null?void 0:s.name)+"_liked_pages.json",data:JSON.stringify(i,null,4)})},{key:"csv",label:".csv",prepareData:i=>({fileName:(s==null?void 0:s.name)+"_liked_pages.csv",data:p(i)})}]})})}export{T as default};
