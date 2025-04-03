import{g as v,B as g,u as y,t as P,r as c,x as h,q as r,i as S,j as b,l as f,S as T,_hW as d}from"./q-DkOvt7MH.js";import{_ as p}from"./q-CV_dOpHt.js";import{p as j,E as R}from"./q-BzqWobPD.js";import{u as E}from"./q-CfYKGmsX.js";const I=`/* This only applies when popover isn't supported */
@supports not selector(:popover-open) {
  /* The polyfill adds this class when popped out */
  [popover]:not(.\\:popover-open) {
    display: none;
  }
}

.popover-closing {
  display: block !important;
}

/* Strips the user agent styles from the popover when in floating mode */
@layer qwik-ui {
  [data-floating] {
    margin: unset;
    padding: unset;
    border: unset;
    overflow: unset;
    position: absolute;
  }
}

/** override the polyfill's layer, which gets dynamically imported later on. */
@layer popover-polyfill {
  [data-floating] {
    margin: unset;
    padding: unset;
    border: unset;
    overflow: unset;
    position: absolute;
  }
}
`,L=I,O=Object.freeze(Object.defineProperty({__proto__:null,s_ltfuAjKLBDY:L},Symbol.toStringTag,{value:"Module"})),k=e=>{var t,a,s;const[o,n]=v();o.isOpenSig.value=e.newState==="open",(t=o.panelRef)!=null&&t.value&&(a=o.panelRef)!=null&&a.value.classList.contains(":popover-open")&&(s=o.panelRef)!=null&&s.value.parentElement&&!n.value&&o.panelRef.value.parentElement.appendChild(o.panelRef.value)},w=Object.freeze(Object.defineProperty({__proto__:null,_hW:d,s_eWzsZ47u00c:k},Symbol.toStringTag,{value:"Module"})),D=e=>{var o,n;for(;e!=null&&e.parentElement;){if(((o=e.parentElement)==null?void 0:o.tagName)==="DIALOG"||(n=e.parentElement)!=null&&n.hasAttribute("popover"))return e.parentElement;e=e.parentElement}return null},A=Object.freeze(Object.defineProperty({__proto__:null,_hW:d,s_oWj9uUv0rFs:D},Symbol.toStringTag,{value:"Module"})),$=e=>{g();const o=y(j),n=`${o.compId}-panel`,t={context:o,givenContextRef:o.panelRef},a=E(e.ref,t);P(r(()=>p(()=>Promise.resolve().then(()=>O),void 0),"s_ltfuAjKLBDY"));const s=c(!1),i=c(2),l=c(!1),_=c(!1);return i.value===1&&setTimeout(()=>{l.value=!0},0),h(r(()=>p(()=>Promise.resolve().then(()=>C),void 0),"s_hvWo0fhkN2c",[o,_,s,l])),S("div",{...e,id:n,ref:a,get popover(){return o.manual||e.popover==="manual"?"manual":"auto"},children:[i.value===1&&f(R,null,3,"DL_0"),f(T,null,3,"DL_1")],onBeforeToggle$:[r(()=>p(()=>Promise.resolve().then(()=>M),void 0),"s_561mDpIkM8k",[o]),e.onBeforeToggle$],onToggle$:[r(()=>p(()=>Promise.resolve().then(()=>w),void 0),"s_eWzsZ47u00c",[o,_]),e.onToggle$],"document:onPopPolyLoad$":r(()=>p(()=>Promise.resolve().then(()=>W),void 0),"s_D41oNDmRP20",[i])},{popover:b((m,u)=>m.manual||u.popover==="manual"?"manual":"auto",[o,e])},0,"DL_2")},x=async({track:e,cleanup:o})=>{var _;const[n,t,a,s]=v();e(()=>s.value),a.value=!0;const i=r(()=>p(()=>Promise.resolve().then(()=>A),void 0),"s_oWj9uUv0rFs");let l=document.querySelector("div[data-qwik-ui-popover-polyfill]");l||(l=document.createElement("div"),l.setAttribute("data-qwik-ui-popover-polyfill",""),document.body.appendChild(l)),(_=n.panelRef)!=null&&_.value&&(await i(n.panelRef.value)===null?l.appendChild(n.panelRef.value):t.value=!0,document.dispatchEvent(new CustomEvent("showpopoverpoly")),o(()=>{var u;return(u=n.panelRef)==null?void 0:u.value}))},C=Object.freeze(Object.defineProperty({__proto__:null,_hW:d,s_hvWo0fhkN2c:x},Symbol.toStringTag,{value:"Module"})),q=()=>{const[e]=v();if(e.value===0){e.value=1;return}},W=Object.freeze(Object.defineProperty({__proto__:null,s_D41oNDmRP20:q},Symbol.toStringTag,{value:"Module"})),z=async e=>{var t;const[o]=v();if(!((t=o.panelRef)!=null&&t.value))return;const n=o.panelRef.value;e.newState==="open"&&(delete n.dataset.closed,n.dataset.open=""),e.newState==="closed"&&(delete n.dataset.open,n.dataset.closed="")},M=Object.freeze(Object.defineProperty({__proto__:null,_hW:d,s_561mDpIkM8k:z},Symbol.toStringTag,{value:"Module"}));export{D as a,$ as b,x as c,q as d,z as e,k as s,L as s_ltfuAjKLBDY};
