import{al as u,ap as n,aq as x}from"./index-DPONv-AB.js";import{a as E,t as g}from"./MyApp-DEIUhxeN.js";import{f as k}from"./file-download-Db6M2NsT.js";import{D as d}from"./index-nAq8iqIJ.js";function N({data:e,children:a,options:i}){const{message:m}=u.useApp(),{ti:s}=E(),l=r=>{var t,p;if(!(e!=null&&e.length))return m.error(s({en:"No data to export",vi:"Không có dữ liệu"}));const o=(p=(t=i.find(f=>f.key==r))==null?void 0:t.prepareData)==null?void 0:p.call(t,e);o!=null&&o.data&&(g("onClickExport:"+o.fileName),k(o.data,o.fileName))},c=i.map(({key:r,label:o})=>({key:r,label:o}));return n.jsx(d,{menu:{items:c,onClick:r=>l(r.key)},children:a||n.jsx(x,{type:"primary",icon:n.jsx("i",{className:"fa-solid fa-download"}),children:s({en:"Export",vi:"Xuất"})+" "+e.length})})}export{N as E};
