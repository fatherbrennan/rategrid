import{_ as r}from"./q-D3NSFh3l.js";import{a as I,q as s,u as g,r as x,o as b,l as u,k as l,S as p,g as _,_hW as m}from"./q-WPPUufUs.js";import{a as f,b as w}from"./q-BaRQk7LM.js";const S=I(s(()=>r(()=>import("./q-BV9r-uvQ.js"),[]),"s_gk4YxoPhQ54"));function E(){return{getNextEnabledItemIndex$:s(()=>r(()=>import("./q-DgiSviRv.js"),[]),"s_Vg1CIeT315s"),getPrevEnabledItemIndex$:s(()=>r(()=>import("./q-BaA5iltR.js").then(t=>t.u),[]),"s_6jcbzPLASoE")}}const L=o=>{const e=g(f),t=g(w),i=E(),n=x(null),c=s(()=>r(()=>Promise.resolve().then(()=>P),void 0),"s_G8mr4g4zIlM",[s(()=>r(()=>Promise.resolve().then(()=>$),void 0),"s_HLT5Y1cv3Yc",[e,i,n,t])]),v=b(d=>{["ArrowDown","ArrowUp","Home","End"].includes(d.key)&&d.preventDefault()},'e=>{const keys=["ArrowDown","ArrowUp","Home","End"];if(keys.includes(e.key)){e.preventDefault();}}');return u(S,{onClick$:s(()=>r(()=>Promise.resolve().then(()=>D),void 0),"s_CL8fZGQI130",[e,t]),onFocus$:s(()=>r(()=>Promise.resolve().then(()=>k),void 0),"s_Be6bHDqsajo",[n,t]),onKeyDown$:[v,c],...o,children:u(p,null,3,"G4_0"),[l]:{onClick$:l,onFocus$:l,onKeyDown$:l}},0,"G4_1")},T=()=>{const[o,e]=_();return o.value=e.localIndexSig.value},k=Object.freeze(Object.defineProperty({__proto__:null,s_Be6bHDqsajo:T},Symbol.toStringTag,{value:"Module"})),y=async o=>{const[e]=_();switch(o.key){case"ArrowDown":await e("next");break;case"ArrowUp":await e("prev");break;case"Home":await e("first");break;case"End":await e("last");break}},P=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_G8mr4g4zIlM:y},Symbol.toStringTag,{value:"Module"})),A=()=>{const[o,e]=_();o.selectedIndexSig.value=e.localIndexSig.value},D=Object.freeze(Object.defineProperty({__proto__:null,s_CL8fZGQI130:A},Symbol.toStringTag,{value:"Module"})),M=async o=>{var c;const[e,t,i,n]=_();if(!((c=e.itemsMapSig)!=null&&c.value))throw new Error("Qwik UI: Accordion item does not have a map of the available item info.");let a=null;switch(o){case"next":i.value===n.localIndexSig.value&&(a=await t.getNextEnabledItemIndex$(n.localIndexSig.value,e.itemsMapSig.value));break;case"prev":i.value===n.localIndexSig.value&&(a=await t.getPrevEnabledItemIndex$(n.localIndexSig.value,e.itemsMapSig.value));break;case"first":a=await t.getNextEnabledItemIndex$(-1,e.itemsMapSig.value);break;case"last":a=await t.getPrevEnabledItemIndex$(e.itemsMapSig.value.size,e.itemsMapSig.value,!1);break}a!==null&&e.triggerRefsArray.value[a].value.focus()},$=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_HLT5Y1cv3Yc:M},Symbol.toStringTag,{value:"Module"}));export{y as a,A as b,M as c,T as s,L as s_KmVU7tX18w8};
