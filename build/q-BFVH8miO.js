import{g as y,m as f,o as b,i as P,q as h,l as S,S as j,_hW as p}from"./q-WPPUufUs.js";import{u as m,a as D,g,s as C,b as K,_ as u,p as L,l as q}from"./q-D3NSFh3l.js";const M=async(r,e)=>{const[t,o,n,i]=y();r.defaultPrevented&&(e.hasAttribute("q:nbs")?await t(location.href,{type:"popstate"}):e.href&&(e.setAttribute("aria-pressed","true"),await t(e.href,{forceReload:o,replaceState:n,scroll:i}),e.removeAttribute("aria-pressed")))},O=Object.freeze(Object.defineProperty({__proto__:null,_hW:p,s_0HtKCMkIiQE:M},Symbol.toStringTag,{value:"Module"})),R=r=>{const e=m(),t=D(),{onClick$:o,prefetch:n,reload:i,replaceState:d,scroll:v,...s}=r,a=f(()=>g({...s,reload:i},t));s.href=a||r.href;const _=f(()=>!!a&&n!==!1&&n!=="js"&&C(a,t)||void 0),l=f(()=>_||!!a&&n!==!1&&K(a,t))?h(()=>u(()=>Promise.resolve().then(()=>E),void 0),"s_j9c38k7DsL0"):void 0,k=a?b((c,A)=>{c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.preventDefault()},"(event,target)=>{if(!(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)){event.preventDefault();}}"):void 0;return P("a",{"q:link":!!a,...s,"data-prefetch":_,children:S(j,null,3,"pQ_5"),onClick$:[k,o,a?h(()=>u(()=>Promise.resolve().then(()=>O),void 0),"s_0HtKCMkIiQE",[e,i,d,v]):void 0],onMouseOver$:[s.onMouseOver$,l],onFocus$:[s.onFocus$,l],onQVisible$:[s.onQVisible$,l]},null,0,"pQ_6")},$=(r,e)=>{var t;if(!((t=navigator.connection)!=null&&t.saveData)&&e&&e.href){const o=new URL(e.href);L(o.pathname),e.hasAttribute("data-prefetch")&&q(o,e,{prefetchSymbols:!1,isPrefetch:!0})}},E=Object.freeze(Object.defineProperty({__proto__:null,_hW:p,s_j9c38k7DsL0:$},Symbol.toStringTag,{value:"Module"}));export{p as _hW,$ as a,R as s,M as s_0HtKCMkIiQE};
