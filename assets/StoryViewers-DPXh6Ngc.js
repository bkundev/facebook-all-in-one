import{aq as t}from"./index-DIq5bgLX.js";import{a as u,g as d,b as f,C as y}from"./MyApp-MiOxcIdU.js";import{C as x,D as h}from"./Collection-LDxb92Bd.js";import{e as T}from"./stories-ChUewDET.js";import{T as o}from"./index-BbvbHeDH.js";import{A as j}from"./index-CaDipqbE.js";function F({storyId:i,initialViewers:n=[]}){const{ti:m}=u(),l=async(e=[],r)=>{var a;const p=await T({storyId:i,cursor:r||((a=e[e.length-1])==null?void 0:a.cursor)||""}),g=new Set(e.map(s=>s.uid));return p.filter(s=>!g.has(s.uid))},c=(e,r)=>t.jsxs(o.Link,{href:d(e.uid),target:"_blank",style:{color:"#eee",display:"flex",alignItems:"center",padding:10},children:[(r||0)+1,".",t.jsx(j,{src:f(e.uid,50),style:{marginRight:10,marginLeft:10},size:40}),e.name," ",e.reactions,t.jsx(o.Text,{style:{position:"absolute",right:10},children:y(e.seen_time,m({en:"en-US",vi:"vi-VN"}))})]},e.uid);return t.jsx(x,{collectionName:"viewers of "+i,fetchNext:l,rowKey:e=>e.uid,renderItem:c,initialData:n,displayType:h.Vertical})}export{F as S};
