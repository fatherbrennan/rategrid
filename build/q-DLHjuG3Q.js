import{h as p,u as c,j as g,k as d,q as _,m as P,S as m,_hW as l}from"./q-B07PLbO6.js";import{_ as a}from"./q-D8aq-jmy.js";import{p as h}from"./q-BYkxIFfT.js";import{u as f}from"./q-DjsS037A.js";import"./q-D3By7ZuL.js";const O=async()=>{const[o,e]=p();o.hover&&await e.showPopover()},S=Object.freeze(Object.defineProperty({__proto__:null,_hW:l,s_juCY0T8F2GA:O},Symbol.toStringTag,{value:"Module"})),I=o=>{const e=c(h),t=`${e.compId}-trigger`,n=`${e.compId}-panel`,r=f(e.compId),i=_(()=>a(()=>Promise.resolve().then(()=>j),void 0),"s_Hk1yDb8530Y",[e,r]),s=_(()=>a(()=>Promise.resolve().then(()=>S),void 0),"s_juCY0T8F2GA",[e,r]),v=_(()=>a(()=>Promise.resolve().then(()=>b),void 0),"s_WmuQQGilnO0",[e,r]);return g("button",{...o,ref:e.triggerRef,id:t,popovertarget:n,get popoverTargetAction(){return e.hover?"show":void 0},children:P(m,null,3,"M0_0"),onClick$:[i,o.onClick$],onPointerOver$:[s,o.onPointerOver$],onPointerOut$:[v,o.onPointerOut$]},{popoverTargetAction:d(u=>u.hover?"show":void 0,[e])},0,"M0_1")},T=async()=>{var t,n,r,i;const[o,e]=p();if(o.hover&&!e.isSupportedSig.value){await e.showPopover();return}if(!e.isSupportedSig.value){for(await e.initPopover$();!e.hasPolyfillLoadedSig.value;)await new Promise(s=>setTimeout(s,10));e.isSupportedSig.value||(o.isOpenSig.value?(i=(r=o.panelRef)==null?void 0:r.value)==null||i.hidePopover():(n=(t=o.panelRef)==null?void 0:t.value)==null||n.showPopover())}},j=Object.freeze(Object.defineProperty({__proto__:null,_hW:l,s_Hk1yDb8530Y:T},Symbol.toStringTag,{value:"Module"})),w=async()=>{const[o,e]=p();o.hover&&await e.hidePopover()},b=Object.freeze(Object.defineProperty({__proto__:null,_hW:l,s_WmuQQGilnO0:w},Symbol.toStringTag,{value:"Module"}));export{l as _hW,T as a,w as b,I as s,O as s_juCY0T8F2GA};
