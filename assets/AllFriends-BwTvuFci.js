const __vite__fileDeps=["./UploadModal-CSkA5iCR.js","./index-DPONv-AB.js","./index-BM_p-30O.css","./index-CPUY_3IM.js","./PurePanel-DNavI3ZW.js","./MyApp-DEIUhxeN.js","./TextArea-1Q1I5EX3.js","./addEventListener-DR_NM1NW.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{al as an,az as dn,an as L,ao as R,r as E,ap as s,aq as p,at as hn,av as D,aJ as un}from"./index-DPONv-AB.js";import{a as gn,b as U,t as x,w as fn,S as q,T as y,x as mn,y as kn,z as vn,P as pn,o as G,A as P,B as xn,C as bn}from"./MyApp-DEIUhxeN.js";import yn from"./MyTable-XIw2FkM-.js";import{E as Fn}from"./ExportButton-CiFHU8Ur.js";import{u as jn}from"./useCacheState-CJv9KMn_.js";import{R as W}from"./row-CuIGguQJ.js";import{A as En,P as z}from"./index-BR4Pt_VD.js";import{I as Cn}from"./index-Dcy0fSW9.js";import{T as Q}from"./index-DFUzF-Fj.js";import{P as j}from"./index-Bo5Y1njE.js";import{T as Tn}from"./index-DRtX_-IA.js";import{A as Nn}from"./index-D0n73TLw.js";import"./styleChecker-CyKTA426.js";import"./addEventListener-DR_NM1NW.js";import"./index-HNqxY7iK.js";import"./PurePanel-DNavI3ZW.js";import"./TextArea-1Q1I5EX3.js";import"./index-C-h6N-6y.js";import"./index-nAq8iqIJ.js";import"./Dropdown-BxPBQoTL.js";import"./Pagination-2Ahrgyjg.js";import"./file-download-Db6M2NsT.js";const wn=E.lazy(()=>hn(()=>import("./UploadModal-CSkA5iCR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)),{Title:Dn}=Tn,l={POKED:"Poked",UNFRIENDED:"Unfriended",REQUESTED:"Requested friend",NEW:"New friend",LOCKED:"Locked",BLOCKED_MESSAGE:"Blocked messages"},Un={[l.POKED]:"green",[l.LOCKED]:"orange",[l.UNFRIENDED]:"red",[l.BLOCKED_MESSAGE]:"red",[l.NEW]:"blue",[l.REQUESTED]:"pink"},X=r=>{switch(r){case l.POKED:return{en:"Poked",vi:"Đã chọc"};case l.UNFRIENDED:return{en:"Unfriended",vi:"Đã huỷ kết bạn"};case l.REQUESTED:return{en:"Requested friend",vi:"Đã gửi kết bạn"};case l.NEW:return{en:"New friend",vi:"Bạn mới"};case l.LOCKED:return{en:"Locked",vi:"Bị khoá"};case l.BLOCKED_MESSAGE:return{en:"Blocked messages",vi:"Bị chặn tin nhắn"};default:return r}},An=r=>{const g=(r==null?void 0:r.statuses)||[];return!g.includes(l.REQUESTED)&&(g.includes(l.NEW)||g.includes(l.UNFRIENDED))},$n=r=>{const g=(r==null?void 0:r.statuses)||[];return!g.includes(l.NEW)&&!g.includes(l.UNFRIENDED)};function ee(){const{message:r,notification:g}=an.useApp(),J=dn(),{ti:i}=gn(),d=L(R.profile),A=L(R.friendsByUid),S=L(R.setFriendsByUid),[m,Y]=jn("AllFriends.data",[]),T=E.useMemo(()=>(m==null?void 0:m.map((n,e)=>({...n,recent:e,url:U(n.uid)})))||[],[m]),[I,M]=E.useState(!1),[N,$]=E.useState(0),[w,B]=E.useState(0),F=E.useRef(null);E.useEffect(()=>{d!=null&&d.uid&&!(m!=null&&m.length)&&H()},[]);const b=(n,e,t=!1,o=!1)=>{Y(c=>un(c,u=>{Array.isArray(n)||(n=[n]);for(let f of n){let k=u.find(a=>a.uid==(f==null?void 0:f.uid)||f);k?(k.statuses||(k.statuses=[]),!t&&!k.statuses.includes(e)?k.statuses.push(e):(Array.isArray(e)||(e=[e]),k.statuses=e)):o?u.unshift({...f,statuses:[e]}):u.push({...f,statuses:[e]})}return u}))},V=(n=m)=>{let e=!1;const t=(A==null?void 0:A[d.uid])||[],o=n.map(a=>a.uid),c=t.map(a=>a.uid),h=new Set(o),u=new Set(c),f=o.filter(a=>!u.has(a)),k=c.filter(a=>!h.has(a));f.length&&(e=!0,console.log("New friends: ",f),b(f,l.NEW,!0),t!=null&&t.length?g.success({duration:0,message:i({en:`Find ${f.length} new friends`,vi:`Tìm thấy ${f.length} bạn mới`}),description:s.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:s.jsx("ol",{children:f.map(a=>{const v=n.find(C=>C.uid==a);return s.jsx("li",{children:s.jsx("a",{href:U(a),target:"_blank",children:(v==null?void 0:v.name)||a})},a)})})})}):g.info({duration:0,message:i({en:`Saved friends to cache: ${f.length}`,vi:`Đã lưu danh sách bạn bè: ${f.length}`}),description:s.jsxs("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:[s.jsx(Nn,{banner:!0,type:"info",message:i({en:"Will notify if you have new friends / someone unfriended to you in future",vi:"Sẽ thông báo nếu có bạn mới / người huỷ kết bạn với bạn trong tương lai"})}),s.jsx("ol",{children:f.map(a=>{const v=n.find(C=>C.uid==a);return s.jsx("li",{children:s.jsx("a",{href:U(a),target:"_blank",children:(v==null?void 0:v.name)||a})},a)})})]})})),k.length&&(e=!0,console.log("Deleted friends: ",k),g.info({duration:0,message:i({en:`Find ${k.length} unfriended`,vi:`Có ${k.length} người huỷ kết bạn`}),description:s.jsx("div",{style:{maxHeight:300,overflowY:"auto",overflowX:"hidden"},children:s.jsx("ol",{children:k.map(a=>{const v=t.find(C=>C.uid==a);return s.jsx("li",{children:s.jsx("a",{href:U(a),target:"_blank",children:(v==null?void 0:v.name)||a})},a)})})})})),e&&S(d==null?void 0:d.uid,n.map(a=>({uid:a.uid,name:a.name})))},H=()=>{if(I)return;x("AllFriends:onClickReload");const n="onClickReload";r.loading({key:n,content:i({en:"Fetching friends...",vi:"Đang tải bạn bè..."})},0),M(!0),fn({myUid:d==null?void 0:d.uid}).then(e=>{if(V(e),!(e!=null&&e.length))return r.error(i({en:"No data to show",vi:"Không có dữ liệu"}));Y(e),console.log(e),r.success({key:n,content:i({en:"Fetch friends completed",vi:"Tải xong bạn bè"})}),F.current.clearFilter()}).catch(e=>{r.error({key:n,content:i({en:"Failed to fetch friends",vi:"Lỗi tải bạn bè"})+": "+e.message}),console.log(e)}).finally(()=>{M(!1)})},O=async n=>{x("AllFriends:onClickUnfriendOne");const e="onClickUnfriendOne"+n.uid;try{return r.loading({key:e,content:i({en:"Unfriending...",vi:"Đang huỷ kết bạn..."})+" "+n.name},0),await mn({myUid:d==null?void 0:d.uid,targetUid:n.uid}),r.success({key:e,content:i({en:"Unfriend completed",vi:"Đã huỷ kết bạn"})+": "+n.name}),b(n,l.UNFRIENDED),!0}catch(t){return r.error({key:e,content:i({en:"Failed to unfriend",vi:"Lỗi huỷ kết bạn"})+": "+n.name+": "+t.message}),console.log(t),!1}},Z=async n=>{x("AllFriends:onClickUnfriendSelected");const e=new Set;for(let o of n)await O(o)&&e.add(o.uid),await P(500);const t=e.size+"/"+n.length;g.success({message:i({en:"Success",vi:"Thành công"}),description:i({en:`Unfriended completed ${t} friends`,vi:`Đã huỷ kết bạn với ${t} người`}),duration:0})},_=async n=>{x("AllFriends:onClickPokeFriend");const e="onClickPokeFriend"+n.uid;try{return r.loading({key:e,content:i({en:"Poking...",vi:"Đang chọc..."})+" "+n.name},0),await kn({myUid:d==null?void 0:d.uid,targetUid:n.uid}),r.success({key:e,content:i({en:"Poke completed",vi:"Chọc thành công"})+": "+n.name}),b(n,l.POKED),!0}catch(t){return r.error({key:e,content:i({en:"Failed to poke",vi:"Chọc thất bại"})+": "+n.name+": "+t.message}),console.log(t),!1}},nn=async n=>{x("AllFriends:onClickPokeSelected");const e=new Set;for(let o of n)await _(o)&&e.add(o.uid),await P(500);const t=e.size+"/"+n.length;g.success({message:i({en:"Success",vi:"Thành công"}),description:i({en:`Poke completed ${t} friends`,vi:`Đã chọc ${t} bạn`}),duration:0})},K=async n=>{x("AllFriends:onClickAddFriend");const e="onClickAddFriend"+n.uid;try{return r.loading({key:e,content:i({en:"Sending friend request...",vi:"Đang gửi kết bạn..."})+" "+n.name},0),await vn({myUid:d==null?void 0:d.uid,targetUid:n.uid}),r.success({key:e,content:i({en:"Send friend request success",vi:"Gửi kết bạn thành công"})+": "+n.name}),b(n,l.REQUESTED),!0}catch(t){return r.error({key:e,content:i({en:"Failed to send friend request",vi:"Lỗi gửi kết bạn"})+": "+t.message}),!1}},en=async n=>{x("AllFriends:onClickAddFriendSelected");const e=new Set;for(let o of n)await K(o)&&e.add(o.uid),await P(500);const t=e.size+"/"+n.length;g.success({message:i({en:"Success",vi:"Thành công"}),description:i({en:`Sent friend request success ${t} users`,vi:`Gửi kết bạn thành công với ${t} người`}),duration:0})},sn=async()=>{if(!N){x("AllFriends:onClickFindLockedFriends"),F.current.clearFilter(),$("..."),r.loading(i({en:"Finding locked friends...",vi:"Đang tìm bạn bè bị khoá..."}));try{const n=await xn({myUid:d==null?void 0:d.uid,onFound:(e,t)=>{r.info(i({en:"Found locked friend",vi:"Tìm thấy bạn bè bị khoá"})+`: ${e.name} (${t.length})`),b(e,l.LOCKED)},onPage:(e,t,o)=>{$(`${o}/${t} - ${~~(t/m.length*100)}%`)}});if(n!=null&&n.length){F.current.setDataSelected(n);const e=n.length;g.success({message:i({en:"Success",vi:"Thành công"}),description:i({en:`Found ${e} locked friends`,vi:`Tìm thấy ${e} bạn bè bị khoá`}),duration:0})}else g.info({message:i({en:"Success",vi:"Thành công"}),description:i({en:"No locked friends found",vi:"Không có ai bị khoá"})})}catch(n){g.error({message:i({en:"Error",vi:"Lỗi"}),description:i({en:"Failed to find locked friends",vi:"Lỗi tìm bạn bè bị khoá"})+": "+n.message,duration:0}),console.log(n)}$(!1)}},tn=async()=>{if(w)return;x("AllFriends:onClickFindBlockedMessages"),B(!0);const n=F.current.getDataSelected(),e=n!=null&&n.length?n:m,t="onClickFindBlockedMessages";r.loading({key:t,content:i({en:"Finding blocked messages...",vi:"Đang tìm bạn bè chặn tin nhắn"})},0);const o=[];for(let h=0;h<e.length;h++){const u=e[h];B(`${o.length}/${h+1} - ${~~(h/e.length*100)}%`),await bn(u.uid)||(o.push(u),F.current.setDataSelected(o),b(u,l.BLOCKED_MESSAGE),r.success({key:t,content:i({en:"Found",vi:"Tìm thấy"})+" "+u.name+" ("+o.length+")"}))}B(!1);const c=o.length?i({en:`Found ${o.length} friends blocking your messages`,vi:`Tìm thấy ${o.length} bạn bè chặn tin nhắn`}):i({en:"No one block messages you",vi:"Không ai chặn tin nhắn của bạn"});r.success({key:t,content:c}),g.success({message:i({en:"Success",vi:"Thành công"}),description:c,duration:0})},on=async n=>{if(!n)return r.error(i({en:"File empty",vi:"File rỗng"}));x("AllFriends:onUploadFriendsFile");try{const e=JSON.parse(n);if(!(e!=null&&e.length))return r.error(i({en:"No data",vi:"Không có dữ liệu"}));const t=[];for(let c of m)e.find(u=>u.uid==c.uid)||t.push(c);const o=[];for(let c of e)m.find(u=>u.uid==c.uid)||o.push(c);b(t,l.NEW),b(o,l.UNFRIENDED),[i({en:`Found ${t.length} new friends`,vi:`Tìm thấy ${t.length} bạn mới`}),i({en:`Found ${o.length} unfriended`,vi:`Tìm thấy ${o.length} người huỷ kết bạn`})].forEach(c=>g.success({message:i({en:"Success",vi:"Thành công"}),description:c,duration:0})),(o.length||t.length)&&F.current.setDataSelected([...o,...t])}catch(e){r.error(e.message)}},rn=n=>{J("/bulk-downloader",{state:{targetId:n,platform:pn.Facebook}})},cn=[{title:"#",key:"recent",dataIndex:"recent",sorter:(n,e)=>n.recent-e.recent,render:(n,e,t)=>e.recent+1,width:70,align:"center",headerAlign:"center"},{title:i({en:"Name",vi:"Tên"}),dataIndex:"name",key:"name",sorter:(n,e)=>n.name.localeCompare(e.name),render:(n,e,t)=>s.jsxs(W,{align:"middle",children:[s.jsx(En,{shape:"square",src:s.jsx(Cn,{src:e.avatarLarge,fallback:e.avatar}),size:50}),s.jsx("a",{href:e.url,target:"_blank",style:{marginLeft:"10px"},children:s.jsx("b",{children:e.name})})]}),width:"auto"},{title:i({en:"Friend status",vi:"Trạng thái"}),dataIndex:"status",key:"status",width:150,filters:Object.entries(l).map(([n,e])=>({text:i(X(e))+" ("+m.filter(t=>{var o;return(o=t.statuses)==null?void 0:o.includes(e)}).length+")",value:e})),onFilter:(n,e)=>{var t;return(t=e.statuses)==null?void 0:t.includes(n)},render:(n,e,t)=>{var o;return(o=e==null?void 0:e.statuses)!=null&&o.length?e.statuses.map(c=>({key:c,value:i(X(c))})).map(({key:c,value:h})=>s.jsx(Q,{color:Un[c],children:h},c)):i({en:"Friend",vi:"Bạn bè"})}},{title:"Uid",dataIndex:"uid",key:"uid",sorter:(n,e)=>n.uid>e.uid,width:150},{title:i({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"download",render:(n,e,t)=>{var o,c;return s.jsxs(q.Compact,{children:[s.jsx(y,{title:i({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:s.jsx(p,{type:"default",onClick:()=>rn(e.uid),icon:s.jsx("i",{className:"fa-solid fa-download"})})}),s.jsx(y,{title:i({en:"Poke",vi:"Chọc"}),children:s.jsx(j,{title:i({en:"Poke friend",vi:"Chọc bạn bè"}),description:i({en:"Are you sure want to poke this friend?",vi:"Bạn có chắc muốn chọc người này?"}),onConfirm:()=>_(e),okText:i({en:"Yes",vi:"Chọc mạnh vào"}),cancelText:i({en:"No",vi:"Tha"}),children:s.jsx(p,{type:"default",icon:s.jsx("i",{className:"fa-regular fa-hand-point-right"})})})}),(o=e.statuses)!=null&&o.includes(l.UNFRIENDED)||(c=e.statuses)!=null&&c.includes(l.NEW)?s.jsx(y,{title:i({en:"Request friend",vi:"Gửi kết bạn"}),children:s.jsx(j,{title:i({en:"Request make friend",vi:"Yêu cầu kết bạn"}),description:i({en:"Are you sure want to request make friend with this user?",vi:"Bạn có chắc muốn gửi yêu cầu kết bạn cho người này?"}),onConfirm:()=>K(e),okText:i({en:"Yes",vi:"Gửi"}),cancelText:i({en:"No",vi:"Huỷ"}),children:s.jsx(p,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-user-plus"})})})}):s.jsx(y,{title:i({en:"Unfriend",vi:"Huỷ kết bạn"}),children:s.jsx(j,{title:i({en:"Unfriend user",vi:"Huỷ kết bạn"}),description:i({en:"Are you sure want to unfriend this user?",vi:"Bạn có chắc muốn huỷ kết bạn với người này?"}),onConfirm:()=>O(e),okText:i({en:"Yes",vi:"Bye bye"}),cancelText:i({en:"No",vi:"Tha"}),children:s.jsx(p,{danger:!0,type:"primary",icon:s.jsx("i",{className:"fa-solid fa-trash-can"})})})})]})},width:150,align:"right"}],ln=n=>{var o,c;const e=(o=n==null?void 0:n.filter)==null?void 0:o.call(n,An),t=(c=n==null?void 0:n.filter)==null?void 0:c.call(n,$n);return s.jsxs(s.Fragment,{children:[s.jsx(p,{type:"primary",icon:I?s.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):s.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:H,children:i({en:"Reload",vi:"Tải lại"})}),s.jsx(Fn,{data:n.length?n:m,options:[{key:"uid",label:".txt (friend uid)",prepareData:h=>({fileName:"friends_"+D().format("YYYY-MM-DD-HHmmss")+".txt",data:h.map(u=>u.uid).join(`
`)})},{key:"uid_name",label:".csv (friend uid+name)",prepareData:h=>({fileName:"friends_uid_name_"+D().format("YYYY-MM-DD-HHmmss")+".csv",data:G(h.map(u=>({uid:u.uid,name:u.name})))})},{key:"json",label:".json",prepareData:h=>({fileName:"friends"+D().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(h,null,4)})},{key:"csv",label:".csv",prepareData:h=>({fileName:"friends"+D().format("YYYY-MM-DD-HHmmss")+".csv",data:G(h)})}]}),s.jsxs(q.Compact,{children:[s.jsx(y,{title:i({en:"Find locked friends",vi:"Lọc bạn bè bị khoá"}),children:s.jsxs(p,{loading:N,icon:s.jsx("i",{className:"fa-solid fa-lock"}),onClick:sn,children:[i({en:"Locked friends",vi:"Bạn bè bị khoá"}),N?` (${N})`:""]})}),s.jsx(z,{title:i({en:"Check who is blocking your messages",vi:"Xem ai đang chặn tin nhắn của bạn"}),content:n!=null&&n.length?i({en:`Check ${n==null?void 0:n.length} friends selected`,vi:`Kiểm tra ${n==null?void 0:n.length} người được chọn`}):i({en:"TIP: You can select friends to check instead of check all",vi:"TIP: Bạn có thể chọn bạn bè để kiểm tra, thay vì kiểm tra tất cả"}),children:s.jsx(j,{title:i(i({en:"Check who is blocking your messages",vi:"Xem ai đang chặn tin nhắn của bạn"})),description:i({en:`Are you sure to check ${(n==null?void 0:n.length)||T.length} friends?`,vi:`Bạn có chắc muốn kiểm tra ${(n==null?void 0:n.length)||T.length} bạn bè?`}),onConfirm:tn,okText:i({en:"Yes",vi:"Kiểm tra"}),cancelText:i({en:"No",vi:"Huỷ"}),children:s.jsxs(p,{loading:w,icon:s.jsx("i",{className:"fa-solid fa-comment-slash"}),children:[i({en:"Blocked messages",vi:"Bị chặn tin nhắn"}),w?` (${w})`:""]})})}),s.jsx(wn,{accept:".json",title:i({en:"Upload friends file",vi:"Tải lên file bạn bè đã lưu"}),text:i({en:"Click or drag file to this area to upload",vi:"Click chọn hoặc kéo thả file vào đây"}),hint:i({en:"Support only .json backup file",vi:"Chỉ hỗ trợ file .json được xuất từ trang này"}),onSubmit:on,renderButton:({showModal:h})=>s.jsx(z,{title:i({en:"Check who unfriend you",vi:"Kiểm tra ai huỷ kết bạn với bạn"}),content:i({en:"How it work: Export friends data to file, then compare it later",vi:"Cách hoạt động: Lưu danh sách bạn bè ra file trước, sau đó so sánh"}),children:s.jsx(p,{icon:s.jsx("i",{className:"fa-solid fa-user-large-slash"}),onClick:h,children:i({en:"Detect unfriend",vi:"Ai huỷ kết bạn"})})})}),n!=null&&n.length?s.jsxs(s.Fragment,{children:[s.jsx(y,{title:i({en:`Poke ${n.length} selected friends`,vi:`Chọc ${n.length} người được chọn`}),children:s.jsx(j,{title:i({en:`Poke ${n.length} selected friends`,vi:`Chọc ${n.length} người được chọn`}),description:i({en:"Are you sure to poke these friends?",vi:"Bạn có chắc muốn chọc những người này?"}),onConfirm:()=>nn(n),okText:i({en:"Yes",vi:"Chọc mạnh vào"}),cancelText:i({en:"No",vi:"Tha"}),children:s.jsx(p,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-hand-point-right"}),children:n.length?" "+n.length:""})})}),(e==null?void 0:e.length)>0?s.jsx(y,{title:i({en:`Request friend with ${e.length} selected users`,vi:`Gửi kết bạn với ${e.length} người được chọn`}),children:s.jsx(j,{title:i({en:`Request friend with ${e.length} selected users`,vi:`Gửi kết bạn với ${e.length} người được chọn`}),description:i({en:"Are you sure to send friend request to these users?",vi:"Bạn có chắc muốn gửi lời mời kết bạn cho những người này?"}),onConfirm:()=>en(e),okText:i({en:"Yes",vi:"Gửi"}),cancelText:i({en:"No",vi:"Huỷ"}),children:s.jsx(p,{icon:s.jsx("i",{className:"fa-solid fa-user-plus"}),children:e.length})})}):null,(t==null?void 0:t.length)>0?s.jsx(y,{title:i({en:`Unfriend ${t.length} selected friends`,vi:`Huỷ kết bạn ${t.length} người được chọn`}),children:s.jsx(j,{title:i({en:`Unfriend ${t.length} selected friends`,vi:`Huỷ kết bạn ${t.length} người được chọn`}),description:i({en:"Are you sure to unfriend these friends?",vi:"Bạn có chắc muốn huỷ kết bạn những người này?"}),onConfirm:()=>Z(t),okText:i({en:"Yes",vi:"Bye bye"}),cancelText:i({en:"No",vi:"Tha"}),children:s.jsx(p,{danger:!0,type:"primary",icon:s.jsx("i",{className:"fa-solid fa-trash-can"}),children:t.length})})}):null]}):null]})]})};return s.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[s.jsxs(W,{align:"middle",style:{margin:"16px"},children:[s.jsx(Dn,{level:3,style:{margin:0},children:i({en:"Friends manager",vi:"Quản lý bạn bè"})}),s.jsx(Q,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:T.length})]}),s.jsx(yn,{ref:F,data:T,columns:cn,size:"small",searchable:!0,selectable:!0,keyExtractor:n=>n.uid,style:{flex:1,maxHeight:"100%"},renderTitle:ln})]})}export{ee as default};
