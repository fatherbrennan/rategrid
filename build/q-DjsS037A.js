import{a as O,q as s,s as c,y as b,L,h as m,u as h,i as E,m as P,k as _,l as p,S as R,_hW as v}from"./q-B07PLbO6.js";import{_ as n}from"./q-D8aq-jmy.js";import{c as I,u as j}from"./q-D3By7ZuL.js";const D=O(s(()=>n(()=>import("./q-zv9lrV3o.js"),[]),"s_vOn0VZqXlB0")),T=O(s(()=>n(()=>import("./q-M6VYRh6l.js"),[]),"s_EJKOenJdCHI"));function w(o){const e=c(!1),i=c(!1),r=c(!1),l=c(null),u=c(!1),d=s(()=>n(()=>import("./q-DOE-a5Tc.js"),[]),"s_HB8d1L24RZ0");b(s(()=>n(()=>import("./q-Bqo_i1e9.js"),[]),"s_1XLF0tF2c8c",[u]));const a=s(()=>n(()=>import("./q-C-POBaHV.js"),[]),"s_X2UdTgDJy48",[o,r,e,i,d,l]);return L("showpopoverpoly",s(()=>n(()=>import("./q-Zk3NtwkN.js").then(t=>t.u),[]),"s_Zfff1wZ7qjw",[r,e])),{showPopover:s(()=>n(()=>import("./q-CEoY1JEe.js"),[]),"s_pw9Xw6OqbvI",[e,a,i,l]),togglePopover:s(()=>n(()=>import("./q-CDf3yVMu.js"),[]),"s_YJ3hZQsC0Zw",[e,a,i,l]),hidePopover:s(()=>n(()=>import("./q-DRV0vuoy.js"),[]),"s_7K7W0ODGULY",[e,a,i,l]),initPopover$:a,hasPolyfillLoadedSig:e,isSupportedSig:i}}const V=({track:o,cleanup:e})=>{const[i,r]=m();o(()=>i.isListboxOpenSig.value),i.isListboxOpenSig.value&&window.addEventListener("pointerdown",r),e(()=>{window.removeEventListener("pointerdown",r)})},y=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_Mn5ns11mohQ:V},Symbol.toStringTag,{value:"Module"})),A=async o=>{const[e,i,r]=m();if(!e.isListboxOpenSig.value||!r.value||!e.controlRef.value)return;const l=r.value.getBoundingClientRect(),u=e.controlRef.value.getBoundingClientRect(),{clientX:d,clientY:a}=o,g=await i(l,d,a),f=await i(u,d,a);g&&f&&(e.isListboxOpenSig.value=!1)},k=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_40sKjjmd0iA:A},Symbol.toStringTag,{value:"Module"})),Z=o=>{const e=h(I),i=w(e.localId),r={context:e,givenContextRef:e.panelRef},l=j(o.ref,r),u=c(!0),d=E(o,["floating","flip","hover","gutter"]);b(s(()=>n(()=>Promise.resolve().then(()=>M),void 0),"s_YVex2AQf62Q",[e,u,i]));const a=`${e.localId}-panel`;return b(s(()=>n(()=>Promise.resolve().then(()=>y),void 0),"s_Mn5ns11mohQ",[e,s(()=>n(()=>Promise.resolve().then(()=>k),void 0),"s_40sKjjmd0iA",[e,s(()=>n(()=>Promise.resolve().then(()=>q),void 0),"s_km0ki1Vpl4U"),l])])),b(s(()=>n(()=>Promise.resolve().then(()=>U),void 0),"s_UiKB0IjdppQ",[u])),P(D,{get floating(){return o.floating},get flip(){return o.flip},get hover(){return o.hover},get gutter(){return o.gutter},get"bind:anchor"(){return o["bind:anchor"]??e.controlRef},"bind:panel":l,manual:!0,get id(){return e.localId},children:P(T,{id:a,get"data-open"(){return e.isListboxOpenSig.value?"":void 0},get"data-closed"(){return e.isListboxOpenSig.value?void 0:""},get"data-invalid"(){return e.isInvalidSig.value?"":void 0},role:"listbox",get"aria-expanded"(){return e.isListboxOpenSig.value?"true":"false"},get"aria-multiselectable"(){return e.multiple?"true":void 0},onMouseEnter$:[s(()=>n(()=>Promise.resolve().then(()=>B),void 0),"s_smDD4cy28sY",[e]),o.onMouseEnter$],...d,children:P(R,null,3,"SW_0"),[p]:{"data-open":_(t=>t.isListboxOpenSig.value?"":void 0,[e]),"data-closed":_(t=>t.isListboxOpenSig.value?void 0:"",[e]),"data-invalid":_(t=>t.isInvalidSig.value?"":void 0,[e]),role:p,"aria-expanded":_(t=>t.isListboxOpenSig.value?"true":"false",[e]),"aria-multiselectable":_(t=>t.multiple?"true":void 0,[e])}},0,"SW_1"),[p]:{floating:_(t=>t.floating,[o]),flip:_(t=>t.flip,[o]),hover:_(t=>t.hover,[o]),gutter:_(t=>t.gutter,[o]),"bind:anchor":_((t,S)=>S["bind:anchor"]??t.controlRef,[e,o]),"bind:panel":p,manual:p,id:_(t=>t.localId,[e])}},1,"SW_2")},C=async({track:o})=>{const[e,i,r]=m();o(()=>e.isListboxOpenSig.value),i.value||(e.isListboxOpenSig.value?r.showPopover():r.hidePopover())},M=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_YVex2AQf62Q:C},Symbol.toStringTag,{value:"Module"})),Q=(o,e,i)=>e<o.left||e>o.right||i<o.top||i>o.bottom,q=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_km0ki1Vpl4U:Q},Symbol.toStringTag,{value:"Module"})),H=()=>{const[o]=m();o.value=!1},U=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_UiKB0IjdppQ:H},Symbol.toStringTag,{value:"Module"})),$=()=>{const[o]=m();o.isKeyboardFocusSig.value=!1,o.isMouseOverPopupSig.value=!0},B=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_smDD4cy28sY:$},Symbol.toStringTag,{value:"Module"}));export{T as H,v as _hW,D as a,Z as b,C as c,Q as d,H as e,$ as f,A as s,V as s_Mn5ns11mohQ,w as u};
