import{E as ie,F as re,H as le,aU as K,D as S,G as se,r as i,I as ne,a6 as de,J as ce,Q as ue,n as D,j as pe,M as me,$ as ge,S as ve,T as $e,aD as be,aq as k}from"./index-DPONv-AB.js";import{i as fe,s as Ce,k as we,j as ye,at as he,m as ee,au as Se,h as Pe,e as xe,av as Oe,aq as Ie,ar as Ee,aw as Ne,S as je,O as ze}from"./MyApp-DEIUhxeN.js";import{D as Re}from"./Dropdown-BxPBQoTL.js";import{i as oe,g as De}from"./PurePanel-DNavI3ZW.js";const Te=e=>{const{componentCls:o,menuCls:t,colorError:a,colorTextLightSolid:l}=e,s=`${t}-item`;return{[`${o}, ${o}-menu-submenu`]:{[`${t} ${s}`]:{[`&${s}-danger:not(${s}-disabled)`]:{color:a,"&:hover":{color:l,backgroundColor:a}}}}}},Be=e=>{const{componentCls:o,menuCls:t,zIndexPopup:a,dropdownArrowDistance:l,sizePopupArrow:s,antCls:n,iconCls:d,motionDurationMid:$,paddingBlock:w,fontSize:y,dropdownEdgeChildPadding:b,colorTextDisabled:g,fontSizeIcon:c,controlPaddingHorizontal:C,colorBgElevated:p}=e;return[{[o]:Object.assign(Object.assign({},le(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:a,display:"block","&::before":{position:"absolute",insetBlock:e.calc(s).div(2).sub(l).equal(),zIndex:-9999,opacity:1e-4,content:'""'},[`&-trigger${n}-btn`]:{[`& > ${d}-down, & > ${n}-btn-icon > ${d}-down`]:{fontSize:c}},[`${o}-wrap`]:{position:"relative",[`${n}-btn > ${d}-down`]:{fontSize:c},[`${d}-down::before`]:{transition:`transform ${$}`}},[`${o}-wrap-open`]:{[`${d}-down::before`]:{transform:"rotate(180deg)"}},"\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ":{display:"none"},[`&${n}-slide-down-enter${n}-slide-down-enter-active${o}-placement-bottomLeft,
          &${n}-slide-down-appear${n}-slide-down-appear-active${o}-placement-bottomLeft,
          &${n}-slide-down-enter${n}-slide-down-enter-active${o}-placement-bottom,
          &${n}-slide-down-appear${n}-slide-down-appear-active${o}-placement-bottom,
          &${n}-slide-down-enter${n}-slide-down-enter-active${o}-placement-bottomRight,
          &${n}-slide-down-appear${n}-slide-down-appear-active${o}-placement-bottomRight`]:{animationName:fe},[`&${n}-slide-up-enter${n}-slide-up-enter-active${o}-placement-topLeft,
          &${n}-slide-up-appear${n}-slide-up-appear-active${o}-placement-topLeft,
          &${n}-slide-up-enter${n}-slide-up-enter-active${o}-placement-top,
          &${n}-slide-up-appear${n}-slide-up-appear-active${o}-placement-top,
          &${n}-slide-up-enter${n}-slide-up-enter-active${o}-placement-topRight,
          &${n}-slide-up-appear${n}-slide-up-appear-active${o}-placement-topRight`]:{animationName:Ce},[`&${n}-slide-down-leave${n}-slide-down-leave-active${o}-placement-bottomLeft,
          &${n}-slide-down-leave${n}-slide-down-leave-active${o}-placement-bottom,
          &${n}-slide-down-leave${n}-slide-down-leave-active${o}-placement-bottomRight`]:{animationName:we},[`&${n}-slide-up-leave${n}-slide-up-leave-active${o}-placement-topLeft,
          &${n}-slide-up-leave${n}-slide-up-leave-active${o}-placement-top,
          &${n}-slide-up-leave${n}-slide-up-leave-active${o}-placement-topRight`]:{animationName:ye}})},he(e,p,{arrowPlacement:{top:!0,bottom:!0}}),{[`${o} ${t}`]:{position:"relative",margin:0},[`${t}-submenu-popup`]:{position:"absolute",zIndex:a,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul, li":{listStyle:"none",margin:0}},[`${o}, ${o}-menu-submenu`]:{[t]:Object.assign(Object.assign({padding:b,listStyleType:"none",backgroundColor:p,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary},K(e)),{"&:empty":{padding:0,boxShadow:"none"},[`${t}-item-group-title`]:{padding:`${S(w)} ${S(C)}`,color:e.colorTextDescription,transition:`all ${$}`},[`${t}-item`]:{position:"relative",display:"flex",alignItems:"center"},[`${t}-item-icon`]:{minWidth:y,marginInlineEnd:e.marginXS,fontSize:e.fontSizeSM},[`${t}-title-content`]:{flex:"auto","> a":{color:"inherit",transition:`all ${$}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}}},[`${t}-item, ${t}-submenu-title`]:Object.assign(Object.assign({clear:"both",margin:0,padding:`${S(w)} ${S(C)}`,color:e.colorText,fontWeight:"normal",fontSize:y,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${$}`,borderRadius:e.borderRadiusSM,"&:hover, &-active":{backgroundColor:e.controlItemBgHover}},K(e)),{"&-selected":{color:e.colorPrimary,backgroundColor:e.controlItemBgActive,"&:hover, &-active":{backgroundColor:e.controlItemBgActiveHover}},"&-disabled":{color:g,cursor:"not-allowed","&:hover":{color:g,backgroundColor:p,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${S(e.marginXXS)} 0`,overflow:"hidden",lineHeight:0,backgroundColor:e.colorSplit},[`${o}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:e.paddingXS,[`${o}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:e.colorTextDescription,fontSize:c,fontStyle:"normal"}}}),[`${t}-item-group-list`]:{margin:`0 ${S(e.marginXS)}`,padding:0,listStyle:"none"},[`${t}-submenu-title`]:{paddingInlineEnd:e.calc(C).add(e.fontSizeSM).equal()},[`${t}-submenu-vertical`]:{position:"relative"},[`${t}-submenu${t}-submenu-disabled ${o}-menu-submenu-title`]:{[`&, ${o}-menu-submenu-arrow-icon`]:{color:g,backgroundColor:p,cursor:"not-allowed"}},[`${t}-submenu-selected ${o}-menu-submenu-title`]:{color:e.colorPrimary}})}},[ee(e,"slide-up"),ee(e,"slide-down"),oe(e,"move-up"),oe(e,"move-down"),se(e,"zoom-big")]]},Ae=e=>Object.assign(Object.assign({zIndexPopup:e.zIndexPopupBase+50,paddingBlock:(e.controlHeight-e.fontSize*e.lineHeight)/2},Se({contentRadius:e.borderRadiusLG,limitVerticalRadius:!0})),Pe(e)),Me=ie("Dropdown",e=>{const{marginXXS:o,sizePopupArrow:t,paddingXXS:a,componentCls:l}=e,s=re(e,{menuCls:`${l}-menu`,dropdownArrowDistance:e.calc(t).div(2).add(o).equal(),dropdownEdgeChildPadding:a});return[Be(s),Te(s)]},Ae,{resetStyle:!1}),T=e=>{const{menu:o,arrow:t,prefixCls:a,children:l,trigger:s,disabled:n,dropdownRender:d,getPopupContainer:$,overlayClassName:w,rootClassName:y,overlayStyle:b,open:g,onOpenChange:c,visible:C,onVisibleChange:p,mouseEnterDelay:B=.15,mouseLeaveDelay:A=.1,autoAdjustOverflow:M=!0,placement:m="",overlay:P,transitionName:x}=e,{getPopupContainer:L,getPrefixCls:O,direction:h,dropdown:f}=i.useContext(ne);$e();const H=i.useMemo(()=>{const r=O();return x!==void 0?x:m.includes("top")?`${r}-slide-down`:`${r}-slide-up`},[O,m,x]),X=i.useMemo(()=>m?m.includes("Center")?m.slice(0,m.indexOf("Center")):m:h==="rtl"?"bottomRight":"bottomLeft",[m,h]),u=O("dropdown",a),I=de(u),[_,U,j]=Me(u,I),[,E]=ce(),N=i.Children.only(l),V=ue(N,{className:D(`${u}-trigger`,{[`${u}-rtl`]:h==="rtl"},N.props.className),disabled:n}),v=n?[]:s;let z;v&&v.includes("contextMenu")&&(z=!0);const[W,R]=xe(!1,{value:g??C}),q=pe(r=>{c==null||c(r,{source:"trigger"}),p==null||p(r),R(r)}),F=D(w,y,U,j,I,f==null?void 0:f.className,{[`${u}-rtl`]:h==="rtl"}),G=Oe({arrowPointAtCenter:typeof t=="object"&&t.pointAtCenter,autoAdjustOverflow:M,offset:E.marginXXS,arrowWidth:t?E.sizePopupArrow:0,borderRadius:E.borderRadius}),Z=i.useCallback(()=>{o!=null&&o.selectable&&(o!=null&&o.multiple)||(c==null||c(!1,{source:"menu"}),R(!1))},[o==null?void 0:o.selectable,o==null?void 0:o.multiple]),Y=()=>{let r;return o!=null&&o.items?r=i.createElement(Ie,Object.assign({},o)):typeof P=="function"?r=P():r=P,d&&(r=d(r)),r=i.Children.only(typeof r=="string"?i.createElement("span",null,r):r),i.createElement(Ee,{prefixCls:`${u}-menu`,rootClassName:D(j,I),expandIcon:i.createElement("span",{className:`${u}-menu-submenu-arrow`},i.createElement(Ne,{className:`${u}-menu-submenu-arrow-icon`})),mode:"vertical",selectable:!1,onClick:Z,validator:Ve=>{}},r)},[Q,ae]=me("Dropdown",b==null?void 0:b.zIndex);let J=i.createElement(Re,Object.assign({alignPoint:z},ge(e,["rootClassName"]),{mouseEnterDelay:B,mouseLeaveDelay:A,visible:W,builtinPlacements:G,arrow:!!t,overlayClassName:F,prefixCls:u,getPopupContainer:$||L,transitionName:H,trigger:v,overlay:Y,placement:X,onVisibleChange:q,overlayStyle:Object.assign(Object.assign(Object.assign({},f==null?void 0:f.style),b),{zIndex:Q})}),V);return Q&&(J=i.createElement(ve.Provider,{value:ae},J)),_(J)};function Le(e){return Object.assign(Object.assign({},e),{align:{overflow:{adjustX:!1,adjustY:!1}}})}const He=De(T,"dropdown",e=>e,Le),Xe=e=>i.createElement(He,Object.assign({},e),i.createElement("span",null));T._InternalPanelDoNotUseOrYouWillBeFired=Xe;var _e=function(e,o){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&o.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)o.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]]);return t};const te=e=>{const{getPopupContainer:o,getPrefixCls:t,direction:a}=i.useContext(ne),{prefixCls:l,type:s="default",danger:n,disabled:d,loading:$,onClick:w,htmlType:y,children:b,className:g,menu:c,arrow:C,autoFocus:p,overlay:B,trigger:A,align:M,open:m,onOpenChange:P,placement:x,getPopupContainer:L,href:O,icon:h=i.createElement(ze,null),title:f,buttonsRender:H=Y=>Y,mouseEnterDelay:X,mouseLeaveDelay:u,overlayClassName:I,overlayStyle:_,destroyPopupOnHide:U,dropdownRender:j}=e,E=_e(e,["prefixCls","type","danger","disabled","loading","onClick","htmlType","children","className","menu","arrow","autoFocus","overlay","trigger","align","open","onOpenChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","dropdownRender"]),N=t("dropdown",l),V=`${N}-button`,v={menu:c,arrow:C,autoFocus:p,align:M,disabled:d,trigger:d?[]:A,onOpenChange:P,getPopupContainer:L||o,mouseEnterDelay:X,mouseLeaveDelay:u,overlayClassName:I,overlayStyle:_,destroyPopupOnHide:U,dropdownRender:j},{compactSize:z,compactItemClassnames:W}=be(N,a),R=D(V,W,g);"overlay"in e&&(v.overlay=B),"open"in e&&(v.open=m),"placement"in e?v.placement=x:v.placement=a==="rtl"?"bottomLeft":"bottomRight";const q=i.createElement(k,{type:s,danger:n,disabled:d,loading:$,onClick:w,htmlType:y,href:O,title:f},b),F=i.createElement(k,{type:s,danger:n,icon:h}),[G,Z]=H([q,F]);return i.createElement(je.Compact,Object.assign({className:R,size:z,block:!0},E),G,i.createElement(T,Object.assign({},v),Z))};te.__ANT_BUTTON=!0;const Ue=T;Ue.Button=te;export{Ue as D};
