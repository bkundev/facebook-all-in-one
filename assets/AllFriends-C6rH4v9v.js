const __vite__fileDeps=["./UploadModal-CAyxlel3.js","./index-DK9VpK7Z.js","./index-BM_p-30O.css","./index-oWbeFBZe.js","./PurePanel-F8yUCVM9.js","./MyApp-BHD6VW6n.js","./useBreakpoint-D3UHp-M0.js","./addEventListener-DnrojY7_.js","./TextArea-Dam_UsLU.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{al as an,am as dn,ao as L,ap as R,r as C,aq as s,ar as x,au as hn,aw as U,aJ as un}from"./index-DK9VpK7Z.js";import{a as gn,b as T,t as p,w as fn,S as q,T as y,x as mn,y as kn,z as vn,o as G,A as P,B as xn,C as pn}from"./MyApp-BHD6VW6n.js";import{P as bn}from"./index-vuHwb1ab.js";import yn from"./MyTable-BZIS_vNf.js";import{E as Fn}from"./ExportButton-Y9XVLGfG.js";import{u as jn}from"./useCacheState-B8xTfoxV.js";import{R as W}from"./row-TMJJSMo1.js";import{A as En,P as z}from"./index-ZPvaunNs.js";import{I as Cn}from"./index-Cg-fKe13.js";import{T as Q}from"./index-D93UUL_Y.js";import{P as E}from"./index-BWXgnP_4.js";import{T as Tn}from"./index-CLcfezOx.js";import{A as Nn}from"./index-B5cL9EV-.js";import"./styleChecker-DFOfC8TH.js";import"./addEventListener-DnrojY7_.js";import"./index-Ch48yAb_.js";import"./PurePanel-F8yUCVM9.js";import"./TextArea-Dam_UsLU.js";import"./index-B8Ssol98.js";import"./index-BjwtQS8J.js";import"./Dropdown-CDem9SrW.js";import"./useBreakpoint-D3UHp-M0.js";import"./Pagination-DofX7tu3.js";import"./file-download-DObqyEDW.js";const wn=C.lazy(()=>hn(()=>import("./UploadModal-CAyxlel3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url)),{Title:Dn}=Tn,a={POKED:"Poked",UNFRIENDED:"Unfriended",REQUESTED:"Requested friend",NEW:"New friend",LOCKED:"Locked",BLOCKED_MESSAGE:"Blocked messages"},Un={[a.POKED]:"green",[a.LOCKED]:"orange",[a.UNFRIENDED]:"red",[a.BLOCKED_MESSAGE]:"red",[a.NEW]:"blue",[a.REQUESTED]:"pink"},X=c=>{switch(c){case a.POKED:return{en:"Poked",vi:"Đã chọc"};case a.UNFRIENDED:return{en:"Unfriended",vi:"Đã huỷ kết bạn"};case a.REQUESTED:return{en:"Requested friend",vi:"Đã gửi kết bạn"};case a.NEW:return{en:"New friend",vi:"Bạn mới"};case a.LOCKED:return{en:"Locked",vi:"Bị khoá"};case a.BLOCKED_MESSAGE:return{en:"Blocked messages",vi:"Bị chặn tin nhắn"};default:return c}},An=c=>{const f=(c==null?void 0:c.statuses)||[];return!f.includes(a.REQUESTED)&&(f.includes(a.NEW)||f.includes(a.UNFRIENDED))},$n=c=>{const f=(c==null?void 0:c.statuses)||[];return!f.includes(a.NEW)&&!f.includes(a.UNFRIENDED)};function se(){const{message:c,notification:f}=an.useApp(),J=dn(),{ti:i}=gn(),u=L(R.profile),A=L(R.friendsByUid),S=L(R.setFriendsByUid),[m,I]=jn("AllFriends.data",[]),N=C.useMemo(()=>(m==null?void 0:m.map((n,e)=>({...n,recent:e,url:T(n.uid)})))||[],[m]),[Y,M]=C.useState(!1),[w,$]=C.useState(0),[D,B]=C.useState(0),F=C.useRef(null);C.useEffect(()=>{u!=null&&u.uid&&!(m!=null&&m.length)&&_()},[]);const b=(n,e,t=!1,o=!1)=>{I(r=>un(r,h=>{Array.isArray(n)||(n=[n]);let v=[];for(let k of n){let l=h.findIndex(j=>j.uid==((k==null?void 0:k.uid)||k)),g=h[l];g?(g.statuses||(g.statuses=[]),!t&&!g.statuses.includes(e)?g.statuses.push(e):(Array.isArray(e)||(e=[e]),g.statuses=e),o&&v.push({index:l,data:g})):o?h.unshift({...k,statuses:[e]}):h.push({...k,statuses:[e]})}for(let{index:k,data:l}of v)h.splice(k,1),h.unshift(l);return h}))},V=(n=m)=>{let e=!1;const t=(A==null?void 0:A[u.uid])||[],o=n.map(l=>l.uid),r=t.map(l=>l.uid),d=new Set(o),h=new Set(r),v=o.filter(l=>!h.has(l)),k=r.filter(l=>!d.has(l));v.length&&(e=!0,console.log("New friends: ",v),b(v,a.NEW,!0),t!=null&&t.length?f.success({duration:0,message:i({en:`Find ${v.length} new friends`,vi:`Tìm thấy ${v.length} bạn mới`}),description:s.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:s.jsx("ol",{children:v.map(l=>{const g=n.find(j=>j.uid==l);return s.jsx("li",{children:s.jsx("a",{href:T(l),target:"_blank",children:(g==null?void 0:g.name)||l})},l)})})})}):f.info({duration:0,message:i({en:`Saved friends to cache: ${v.length}`,vi:`Đã lưu danh sách bạn bè: ${v.length}`}),description:s.jsxs("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:[s.jsx(Nn,{banner:!0,type:"info",message:i({en:"Will notify if you have new friends / someone unfriended to you in future",vi:"Sẽ thông báo nếu có bạn mới / người huỷ kết bạn với bạn trong tương lai"})}),s.jsx("ol",{children:v.map(l=>{const g=n.find(j=>j.uid==l);return s.jsx("li",{children:s.jsx("a",{href:T(l),target:"_blank",children:(g==null?void 0:g.name)||l})},l)})})]})})),k.length&&(e=!0,console.log("Deleted friends: ",k),f.info({duration:0,message:i({en:`Find ${k.length} unfriended`,vi:`Có ${k.length} người huỷ kết bạn`}),description:s.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:s.jsx("ol",{children:k.map(l=>{const g=t.find(j=>j.uid==l);return s.jsx("li",{children:s.jsx("a",{href:T(l),target:"_blank",children:(g==null?void 0:g.name)||l})},l)})})})})),e&&S(u==null?void 0:u.uid,n.map(l=>({uid:l.uid,name:l.name})))},_=()=>{if(Y)return;p("AllFriends:onClickReload");const n="onClickReload";c.loading({key:n,content:i({en:"Fetching friends...",vi:"Đang tải bạn bè..."})},0),M(!0),fn({myUid:u==null?void 0:u.uid}).then(e=>{if(V(e),!(e!=null&&e.length))return c.error(i({en:"No data to show",vi:"Không có dữ liệu"}));I(e),console.log(e),c.success({key:n,content:i({en:"Fetch friends completed",vi:"Tải xong bạn bè"})}),F.current.clearFilter()}).catch(e=>{c.error({key:n,content:i({en:"Failed to fetch friends",vi:"Lỗi tải bạn bè"})+": "+e.message}),console.log(e)}).finally(()=>{M(!1)})},H=async n=>{p("AllFriends:onClickUnfriendOne");const e="onClickUnfriendOne"+n.uid;try{return c.loading({key:e,content:i({en:"Unfriending...",vi:"Đang huỷ kết bạn..."})+" "+n.name},0),await mn({myUid:u==null?void 0:u.uid,targetUid:n.uid}),c.success({key:e,content:i({en:"Unfriend completed",vi:"Đã huỷ kết bạn"})+": "+n.name}),b(n,a.UNFRIENDED),!0}catch(t){return c.error({key:e,content:i({en:"Failed to unfriend",vi:"Lỗi huỷ kết bạn"})+": "+n.name+": "+t.message}),console.log(t),!1}},Z=async n=>{p("AllFriends:onClickUnfriendSelected");const e=new Set;for(let o of n)await H(o)&&e.add(o.uid),await P(500);const t=e.size+"/"+n.length;f.success({message:i({en:"Success",vi:"Thành công"}),description:i({en:`Unfriended completed ${t} friends`,vi:`Đã huỷ kết bạn với ${t} người`}),duration:0})},O=async n=>{p("AllFriends:onClickPokeFriend");const e="onClickPokeFriend"+n.uid;try{return c.loading({key:e,content:i({en:"Poking...",vi:"Đang chọc..."})+" "+n.name},0),await kn({myUid:u==null?void 0:u.uid,targetUid:n.uid}),c.success({key:e,content:i({en:"Poke completed",vi:"Chọc thành công"})+": "+n.name}),b(n,a.POKED),!0}catch(t){return c.error({key:e,content:i({en:"Failed to poke",vi:"Chọc thất bại"})+": "+n.name+": "+t.message}),console.log(t),!1}},nn=async n=>{p("AllFriends:onClickPokeSelected");const e=new Set;for(let o of n)await O(o)&&e.add(o.uid),await P(500);const t=e.size+"/"+n.length;f.success({message:i({en:"Success",vi:"Thành công"}),description:i({en:`Poke completed ${t} friends`,vi:`Đã chọc ${t} bạn`}),duration:0})},K=async n=>{p("AllFriends:onClickAddFriend");const e="onClickAddFriend"+n.uid;try{return c.loading({key:e,content:i({en:"Sending friend request...",vi:"Đang gửi kết bạn..."})+" "+n.name},0),await vn({myUid:u==null?void 0:u.uid,targetUid:n.uid}),c.success({key:e,content:i({en:"Send friend request success",vi:"Gửi kết bạn thành công"})+": "+n.name}),b(n,a.REQUESTED),!0}catch(t){return c.error({key:e,content:i({en:"Failed to send friend request",vi:"Lỗi gửi kết bạn"})+": "+t.message}),!1}},en=async n=>{p("AllFriends:onClickAddFriendSelected");const e=new Set;for(let o of n)await K(o)&&e.add(o.uid),await P(500);const t=e.size+"/"+n.length;f.success({message:i({en:"Success",vi:"Thành công"}),description:i({en:`Sent friend request success ${t} users`,vi:`Gửi kết bạn thành công với ${t} người`}),duration:0})},sn=async()=>{if(!w){p("AllFriends:onClickFindLockedFriends"),F.current.clearFilter(),$("..."),c.loading(i({en:"Finding locked friends...",vi:"Đang tìm bạn bè bị khoá..."}));try{const n=await xn({myUid:u==null?void 0:u.uid,onFound:(e,t)=>{c.info(i({en:"Found locked friend",vi:"Tìm thấy bạn bè bị khoá"})+`: ${e.name} (${t.length})`),b(e,a.LOCKED)},onPage:(e,t,o)=>{$(`${o}/${t} - ${~~(t/m.length*100)}%`)}});if(n!=null&&n.length){F.current.setDataSelected(n);const e=n.length;f.success({message:i({en:"Success",vi:"Thành công"}),description:i({en:`Found ${e} locked friends`,vi:`Tìm thấy ${e} bạn bè bị khoá`}),duration:0})}else f.info({message:i({en:"Success",vi:"Thành công"}),description:i({en:"No locked friends found",vi:"Không có ai bị khoá"})})}catch(n){f.error({message:i({en:"Error",vi:"Lỗi"}),description:i({en:"Failed to find locked friends",vi:"Lỗi tìm bạn bè bị khoá"})+": "+n.message,duration:0}),console.log(n)}$(!1)}},tn=async()=>{if(D)return;p("AllFriends:onClickFindBlockedMessages"),B(!0);const n=F.current.getDataSelected(),e=n!=null&&n.length?n:m,t="onClickFindBlockedMessages";c.loading({key:t,content:i({en:"Finding blocked messages...",vi:"Đang tìm bạn bè chặn tin nhắn"})},0);const o=[];for(let d=0;d<e.length;d++){const h=e[d];B(`${o.length}/${d+1} - ${~~(d/e.length*100)}%`),await pn(h.uid)||(o.push(h),F.current.setDataSelected(o),b(h,a.BLOCKED_MESSAGE),c.success({key:t,content:i({en:"Found",vi:"Tìm thấy"})+" "+h.name+" ("+o.length+")"}))}B(!1);const r=o.length?i({en:`Found ${o.length} friends blocking your messages`,vi:`Tìm thấy ${o.length} bạn bè chặn tin nhắn`}):i({en:"No one block messages you",vi:"Không ai chặn tin nhắn của bạn"});c.success({key:t,content:r}),f.success({message:i({en:"Success",vi:"Thành công"}),description:r,duration:0})},on=async n=>{if(!n)return c.error(i({en:"File empty",vi:"File rỗng"}));p("AllFriends:onUploadFriendsFile");try{const e=JSON.parse(n);if(!(e!=null&&e.length))return c.error(i({en:"No data",vi:"Không có dữ liệu"}));const t=[];for(let r of m)e.find(h=>h.uid==r.uid)||t.push(r);const o=[];for(let r of e)m.find(h=>h.uid==r.uid)||o.push(r);b(t,a.NEW,!1,!0),b(o,a.UNFRIENDED,!1,!0),[{title:i({en:`Found ${t.length} new friends`,vi:`Tìm thấy ${t.length} bạn mới`}),text:s.jsx("ol",{children:t.map(r=>s.jsx("li",{children:s.jsx("a",{href:T(r.uid),target:"_blank",children:r.name})},r.uid))})},{title:i({en:`Found ${o.length} unfriended`,vi:`Tìm thấy ${o.length} người huỷ kết bạn`}),text:s.jsx("ol",{children:o.map(r=>s.jsx("li",{children:s.jsx("a",{href:T(r.uid),target:"_blank",children:r.name})},r.uid))})}].forEach(({title:r,text:d})=>f.success({message:r,description:d,duration:0})),(o.length||t.length)&&F.current.setDataSelected([...o,...t])}catch(e){c.error(e.message)}},rn=n=>{J("/bulk-downloader",{state:{targetId:n,platform:bn.Facebook}})},cn=[{title:"#",key:"recent",dataIndex:"recent",sorter:(n,e)=>n.recent-e.recent,render:(n,e,t)=>e.recent+1,width:70,align:"center",headerAlign:"center"},{title:i({en:"Name",vi:"Tên"}),dataIndex:"name",key:"name",sorter:(n,e)=>n.name.localeCompare(e.name),render:(n,e,t)=>s.jsxs(W,{align:"middle",children:[s.jsx(En,{shape:"square",src:s.jsx(Cn,{src:e.avatarLarge,fallback:e.avatar}),size:50}),s.jsx("a",{href:e.url,target:"_blank",style:{marginLeft:"10px"},children:s.jsx("b",{children:e.name})})]}),width:"auto"},{title:i({en:"Friend status",vi:"Trạng thái"}),dataIndex:"status",key:"status",width:150,filters:Object.entries(a).map(([n,e])=>({text:i(X(e))+" ("+m.filter(t=>{var o;return(o=t.statuses)==null?void 0:o.includes(e)}).length+")",value:e})),onFilter:(n,e)=>{var t;return(t=e.statuses)==null?void 0:t.includes(n)},render:(n,e,t)=>{var o;return(o=e==null?void 0:e.statuses)!=null&&o.length?e.statuses.map(r=>({key:r,value:i(X(r))})).map(({key:r,value:d})=>s.jsx(Q,{color:Un[r],children:d},r)):i({en:"Friend",vi:"Bạn bè"})}},{title:"Uid",dataIndex:"uid",key:"uid",sorter:(n,e)=>n.uid>e.uid,width:150},{title:i({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"download",render:(n,e,t)=>{var o,r;return s.jsxs(q.Compact,{children:[s.jsx(y,{title:i({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:s.jsx(x,{type:"default",onClick:()=>rn(e.uid),icon:s.jsx("i",{className:"fa-solid fa-download"})})}),s.jsx(y,{title:i({en:"Poke",vi:"Chọc"}),children:s.jsx(E,{title:i({en:"Poke friend",vi:"Chọc bạn bè"}),description:i({en:"Are you sure want to poke this friend?",vi:"Bạn có chắc muốn chọc người này?"}),onConfirm:()=>O(e),okText:i({en:"Yes",vi:"Chọc mạnh vào"}),cancelText:i({en:"No",vi:"Tha"}),children:s.jsx(x,{type:"default",icon:s.jsx("i",{className:"fa-regular fa-hand-point-right"})})})}),(o=e.statuses)!=null&&o.includes(a.UNFRIENDED)||(r=e.statuses)!=null&&r.includes(a.NEW)?s.jsx(y,{title:i({en:"Request friend",vi:"Gửi kết bạn"}),children:s.jsx(E,{title:i({en:"Request make friend",vi:"Yêu cầu kết bạn"}),description:i({en:"Are you sure want to request make friend with this user?",vi:"Bạn có chắc muốn gửi yêu cầu kết bạn cho người này?"}),onConfirm:()=>K(e),okText:i({en:"Yes",vi:"Gửi"}),cancelText:i({en:"No",vi:"Huỷ"}),children:s.jsx(x,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-user-plus"})})})}):s.jsx(y,{title:i({en:"Unfriend",vi:"Huỷ kết bạn"}),children:s.jsx(E,{title:i({en:"Unfriend user",vi:"Huỷ kết bạn"}),description:i({en:"Are you sure want to unfriend this user?",vi:"Bạn có chắc muốn huỷ kết bạn với người này?"}),onConfirm:()=>H(e),okText:i({en:"Yes",vi:"Bye bye"}),cancelText:i({en:"No",vi:"Tha"}),children:s.jsx(x,{danger:!0,type:"primary",icon:s.jsx("i",{className:"fa-solid fa-trash-can"})})})})]})},width:150,align:"right"}],ln=n=>{var o,r;const e=(o=n==null?void 0:n.filter)==null?void 0:o.call(n,An),t=(r=n==null?void 0:n.filter)==null?void 0:r.call(n,$n);return s.jsxs(s.Fragment,{children:[s.jsx(x,{type:"primary",icon:Y?s.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):s.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:_,children:i({en:"Reload",vi:"Tải lại"})}),s.jsx(Fn,{data:n.length?n:m,options:[{key:"uid",label:".txt (friend uid)",prepareData:d=>({fileName:"friends_"+U().format("YYYY-MM-DD-HHmmss")+".txt",data:d.map(h=>h.uid).join(`
`)})},{key:"uid_name",label:".csv (friend uid+name)",prepareData:d=>({fileName:"friends_uid_name_"+U().format("YYYY-MM-DD-HHmmss")+".csv",data:G(d.map(h=>({uid:h.uid,name:h.name})))})},{key:"json",label:".json",prepareData:d=>({fileName:"friends"+U().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(d,null,4)})},{key:"csv",label:".csv",prepareData:d=>({fileName:"friends"+U().format("YYYY-MM-DD-HHmmss")+".csv",data:G(d)})}]}),s.jsxs(q.Compact,{children:[s.jsx(y,{title:i({en:"Find locked friends",vi:"Lọc bạn bè bị khoá"}),children:s.jsxs(x,{loading:w,icon:s.jsx("i",{className:"fa-solid fa-lock"}),onClick:sn,children:[i({en:"Locked friends",vi:"Bạn bè bị khoá"}),w?` (${w})`:""]})}),s.jsx(z,{title:i({en:"Check who is blocking your messages",vi:"Xem ai đang chặn tin nhắn của bạn"}),content:n!=null&&n.length?i({en:`Check ${n==null?void 0:n.length} friends selected`,vi:`Kiểm tra ${n==null?void 0:n.length} người được chọn`}):i({en:"TIP: You can select friends to check instead of check all",vi:"TIP: Bạn có thể chọn bạn bè để kiểm tra, thay vì kiểm tra tất cả"}),children:s.jsx(E,{title:i(i({en:"Check who is blocking your messages",vi:"Xem ai đang chặn tin nhắn của bạn"})),description:i({en:`Are you sure to check ${(n==null?void 0:n.length)||N.length} friends?`,vi:`Bạn có chắc muốn kiểm tra ${(n==null?void 0:n.length)||N.length} bạn bè?`}),onConfirm:tn,okText:i({en:"Yes",vi:"Kiểm tra"}),cancelText:i({en:"No",vi:"Huỷ"}),children:s.jsxs(x,{loading:D,icon:s.jsx("i",{className:"fa-solid fa-comment-slash"}),children:[i({en:"Blocked messages",vi:"Bị chặn tin nhắn"}),D?` (${D})`:""]})})}),s.jsx(wn,{accept:".json",title:i({en:"Upload friends file",vi:"Tải lên file bạn bè đã lưu"}),text:i({en:"Click or drag file to this area to upload",vi:"Click chọn hoặc kéo thả file vào đây"}),hint:i({en:"Support only .json backup file",vi:"Chỉ hỗ trợ file .json được xuất từ trang này"}),onSubmit:on,renderButton:({showModal:d})=>s.jsx(z,{title:i({en:"Check who unfriend you",vi:"Kiểm tra ai huỷ kết bạn với bạn"}),content:i({en:"How it work: Export friends data to file, then compare it later",vi:"Cách hoạt động: Lưu danh sách bạn bè ra file trước, sau đó so sánh"}),children:s.jsx(x,{icon:s.jsx("i",{className:"fa-solid fa-user-large-slash"}),onClick:d,children:i({en:"Detect unfriend",vi:"Ai huỷ kết bạn"})})})}),n!=null&&n.length?s.jsxs(s.Fragment,{children:[s.jsx(y,{title:i({en:`Poke ${n.length} selected friends`,vi:`Chọc ${n.length} người được chọn`}),children:s.jsx(E,{title:i({en:`Poke ${n.length} selected friends`,vi:`Chọc ${n.length} người được chọn`}),description:i({en:"Are you sure to poke these friends?",vi:"Bạn có chắc muốn chọc những người này?"}),onConfirm:()=>nn(n),okText:i({en:"Yes",vi:"Chọc mạnh vào"}),cancelText:i({en:"No",vi:"Tha"}),children:s.jsx(x,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-hand-point-right"}),children:n.length?" "+n.length:""})})}),(e==null?void 0:e.length)>0?s.jsx(y,{title:i({en:`Request friend with ${e.length} selected users`,vi:`Gửi kết bạn với ${e.length} người được chọn`}),children:s.jsx(E,{title:i({en:`Request friend with ${e.length} selected users`,vi:`Gửi kết bạn với ${e.length} người được chọn`}),description:i({en:"Are you sure to send friend request to these users?",vi:"Bạn có chắc muốn gửi lời mời kết bạn cho những người này?"}),onConfirm:()=>en(e),okText:i({en:"Yes",vi:"Gửi"}),cancelText:i({en:"No",vi:"Huỷ"}),children:s.jsx(x,{icon:s.jsx("i",{className:"fa-solid fa-user-plus"}),children:e.length})})}):null,(t==null?void 0:t.length)>0?s.jsx(y,{title:i({en:`Unfriend ${t.length} selected friends`,vi:`Huỷ kết bạn ${t.length} người được chọn`}),children:s.jsx(E,{title:i({en:`Unfriend ${t.length} selected friends`,vi:`Huỷ kết bạn ${t.length} người được chọn`}),description:i({en:"Are you sure to unfriend these friends?",vi:"Bạn có chắc muốn huỷ kết bạn những người này?"}),onConfirm:()=>Z(t),okText:i({en:"Yes",vi:"Bye bye"}),cancelText:i({en:"No",vi:"Tha"}),children:s.jsx(x,{danger:!0,type:"primary",icon:s.jsx("i",{className:"fa-solid fa-trash-can"}),children:t.length})})}):null]}):null]})]})};return s.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[s.jsxs(W,{align:"middle",style:{margin:"16px"},children:[s.jsx(Dn,{level:3,style:{margin:0},children:i({en:"Friends manager",vi:"Quản lý bạn bè"})}),s.jsx(Q,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:N.length})]}),s.jsx(yn,{ref:F,data:N,columns:cn,size:"small",searchable:!0,selectable:!0,keyExtractor:n=>n.uid,style:{flex:1,maxHeight:"100%"},renderTitle:ln})]})}export{se as default};
