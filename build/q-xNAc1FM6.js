import{g as h,h as S,u as k,r as u,x as g,q as _,o as w,_ as b,l as v,k as c,S as y,j as a,_hW as f}from"./q-WPPUufUs.js";import{_ as m}from"./q-D3NSFh3l.js";import{a as C}from"./q-Ck6iajnh.js";import{b as I,u as x}from"./q-BmQqbGZL.js";const P=()=>{const[o,r]=h();o.valueSig.value=r.value},$=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_JM7Tn0tv0LI:P},Symbol.toStringTag,{value:"Module"})),D=function({track:r}){var d;const[t,n,l]=h();r(()=>n.valueSig.value),t.value=l.value===n.valueSig.value,(d=l.onChange$)==null||d.call(l,t.value)},E=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_JxhhCPsCReE:D},Symbol.toStringTag,{value:"Module"})),j=o=>{const r=S(o,["disabled","value","closeOnSelect","onChange$"]),t=k(I),n=u(o.value===t.valueSig.value),l=u();g(_(()=>m(()=>Promise.resolve().then(()=>E),void 0),"s_JxhhCPsCReE",[n,t,o]));const d=w(e=>{["ArrowUp","ArrowDown","ArrowLeft","Home","End","Enter"," "].includes(e.key)&&e.preventDefault()},'e=>{const keys=["ArrowUp","ArrowDown","ArrowLeft","Home","End","Enter"," "];if(keys.includes(e.key)){e.preventDefault();}}'),s=x({...o,onItemSelect:_(()=>m(()=>Promise.resolve().then(()=>$),void 0),"s_JM7Tn0tv0LI",[t,o]),closeOnSelect:o.closeOnSelect??!1});return b("div",{ref:s.itemRef,onClick$:[s.handleClick$,o.onClick$],onKeyDown$:[d,s.handleKeyDown$,o.onKeyDown$],onPointerOver$:[s.handlePointerOver$,o.onPointerOver$]},{tabIndex:-1,id:a(e=>e.itemId,[s]),role:"menuitemradio","aria-checked":a(e=>e.value?"true":"false",[n]),"aria-disabled":a((e,i)=>(i.disabled??!1)||e.disabled,[t,o]),"data-disabled":a((e,i)=>(i.disabled??!1)||e.disabled,[t,o]),"data-highlighted":a(e=>e.isHighlightedSig.value,[s]),"data-checked":a(e=>e.value,[n]),"data-close-on-select":a(e=>e.closeOnSelect,[o]),"data-menu-item":!0},v(C,{"bind:checked":n,"preventdefault:click":!0,ref:l,style:{pointerEvents:"none"},...r,children:v(y,null,3,"sc_0"),[c]:{"bind:checked":c,"preventdefault:click":c,ref:c,style:c}},0,"sc_1"),0,"sc_2")};export{f as _hW,j as a,D as s,P as s_JM7Tn0tv0LI};
