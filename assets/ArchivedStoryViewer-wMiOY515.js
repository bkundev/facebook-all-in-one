import{al as _,r as m,ap as e,aq as g}from"./index-DPONv-AB.js";import{a as I,aJ as V,S as n,W as C,b as F,c as L}from"./MyApp-DEIUhxeN.js";import{u as j}from"./useCacheState-CJv9KMn_.js";import{S as E}from"./StoryViewers-BGYpRoyn.js";import{T as r}from"./index-DRtX_-IA.js";import{I as u}from"./index-Dcy0fSW9.js";import{A as U}from"./index-BR4Pt_VD.js";import{T as $}from"./index-DJlPrUWY.js";import"./Collection-K88sGWrf.js";import"./index-CRR1ljKb.js";import"./file-download-Db6M2NsT.js";import"./index-nAq8iqIJ.js";import"./Dropdown-BxPBQoTL.js";import"./PurePanel-DNavI3ZW.js";import"./index-HNqxY7iK.js";import"./TextArea-1Q1I5EX3.js";import"./addEventListener-DR_NM1NW.js";import"./index-B8GgScDR.js";import"./Pagination-2Ahrgyjg.js";import"./row-CuIGguQJ.js";import"./styleChecker-CyKTA426.js";function oe({story:l}){const{ti:d}=I(),{message:v}=_.useApp(),[o,y]=j("ArchivedStoryViewer.stories."+l.creation_time,[]),[c,x]=j("ArchivedStoryViewer.viewingIndex."+l.id,0),[f,p]=m.useState(!1),t=o[c]||o[0],b=t?Object.values(t.viewer_count).reduce((i,s)=>i+s,0):0,w=t?t.reactions.reduce((i,s)=>i+s.count,0):0,T=c<o.length-1,A=c>0,S=o.length===0&&!f,h=m.useRef(!1);m.useEffect(()=>{!(o!=null&&o.length)&&l.creation_time&&!h.current&&(p(!0),h.current=!0,V({creationTime:l.creation_time}).then(i=>{if(i){const s=i.findIndex(k=>k.id===l.id);y(i),x(s)}}).catch(i=>v.error(d({en:"Error: ",vi:"Lỗi: "}))+i.message).finally(()=>{p(!1),h.current=!1}))},[]);const a={height:"70vh",width:"calc(70vh * 9 / 16)"},N=m.useRef(null),R=t?[{key:"story",label:e.jsxs(r.Text,{children:[e.jsx("i",{className:"fa fa-play"})," Play"]}),children:e.jsxs(n,{direction:"vertical",style:{position:"relative"},children:[t.video?e.jsx("video",{controls:!0,autoPlay:!0,loop:!0,src:t.video,style:{...a,borderRadius:10,objectFit:"contain"}}):t.image_background?e.jsxs(n,{direction:"vertical",style:{position:"relative"},children:[e.jsx(u,{src:t.image_background,preview:!1,style:{...a,borderRadius:10,objectFit:"contain"}}),e.jsx(u,{src:t.image,style:{...a,borderRadius:10,objectFit:"contain",position:"absolute",bottom:0,left:0,transform:"translate(-50%, 0)",opacity:.5}})]}):e.jsx(u,{src:t.image,style:{...a,borderRadius:10,objectFit:"contain"}}),e.jsx(n,{direction:"vertical",align:"start",style:{background:"linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",top:0,left:0,padding:10,width:"100%",paddingBottom:"50px",borderRadius:10},children:[t.comment_count?{icon:e.jsx("i",{className:"fa-solid fa-message"}),text:t.comment_count}:null,t.music?{icon:e.jsx("i",{className:"fa-solid fa-music"}),text:t.music}:null].filter(Boolean).map((i,s)=>i&&e.jsxs(r.Text,{style:{color:"#eee",textAlign:"left"},children:[i.icon," ",i.text]},"story-statistic-"+s))})]})},{key:"viewer",label:e.jsxs(r.Text,{children:[e.jsx("i",{className:"fa fa-eye"})," ",b," "]}),children:e.jsxs(n,{direction:"vertical",style:{...a,width:450,overflowY:"auto",overflowX:"hidden",textAlign:"left",position:"relative"},children:[e.jsxs(r.Text,{children:[d({en:"Views",vi:"Lượt xem"}),":"]}),e.jsx("ul",{children:Object.entries(t.viewer_count).map(([i,s])=>e.jsx("li",{children:e.jsxs(r.Text,{style:{color:"#eee"},children:[i,": ",s]})},"story-viewer-"+i))}),e.jsx(n,{direction:"horizontal",style:{display:"flex",padding:10,alignItems:"center"},children:e.jsxs(r.Text,{style:{textDecoration:"underline"},children:[d({en:"Created date",vi:"Ngày đăng"}),e.jsx(r.Text,{style:{position:"absolute",right:10},children:C(new Date(t.created_at),d({en:"en-US",vi:"vi-VN"}))})]})}),e.jsx(E,{storyId:t.id,initialViewers:t.viewers})]})},{key:"reactions",label:e.jsxs(r.Text,{children:[e.jsx("i",{className:"fa fa-heart"})," ",w," "]}),children:e.jsxs(n,{direction:"vertical",style:{overflowY:"auto",...a},align:"start",children:[e.jsxs(r.Text,{children:[d({en:"Reactions",vi:"Lượt thích"}),":"]}),t.reactions.map((i,s)=>e.jsxs(r.Link,{href:F(i.uid),style:{padding:"0 5px 5px",display:"block"},target:"_blank",children:[e.jsx(U,{src:L(i.uid,50),size:35}),e.jsx(r.Text,{style:{color:"#eee",textAlign:"left"},children:` ${i.count} ${i.reactions}`},"story-reaction-"+s)]},"story-reaction-"+s))]})}]:[];return e.jsxs(n,{direction:"vertical",style:{maxHeight:"100vh",overflowY:"auto",overflowX:"hidden",minWidth:a.width,minHeight:a.height,background:"#222",padding:10,borderRadius:10,color:"white"},ref:N,children:[e.jsxs(r.Text,{children:["Archived Story Viewer"," ",f?e.jsx("i",{className:"fa fa-spinner fa-spin"}):`(${c+1}/${o.length})`]}),S&&e.jsx("div",{children:"No data"}),t&&e.jsxs(n,{children:[e.jsx(g,{disabled:!A,onClick:()=>{x(c-1)},children:e.jsx("i",{className:"fa fa-chevron-left"})}),e.jsx($,{defaultActiveKey:"story",items:R}),e.jsx(g,{disabled:!T,onClick:()=>{x(c+1)},children:e.jsx("i",{className:"fa fa-chevron-right"})})]})]})}export{oe as default};
