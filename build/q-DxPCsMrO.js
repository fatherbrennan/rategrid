import{h as y,o as f,p as b,j as P,q as h,m as S,S as j,_hW as u}from"./q-B07PLbO6.js";import{u as m,a as D,g as C,s as K,b as g,_ as p,p as L,l as q}from"./q-D8aq-jmy.js";const M=async(r,e)=>{const[t,o,n,i]=y();r.defaultPrevented&&(e.hasAttribute("q:nbs")?await t(location.href,{type:"popstate"}):e.href&&(e.setAttribute("aria-pressed","true"),await t(e.href,{forceReload:o,replaceState:n,scroll:i}),e.removeAttribute("aria-pressed")))},O=Object.freeze(Object.defineProperty({__proto__:null,_hW:u,s_0HtKCMkIiQE:M},Symbol.toStringTag,{value:"Module"})),R=r=>{const e=m(),t=D(),{onClick$:o,prefetch:n,reload:i,replaceState:d,scroll:v,...s}=r,a=f(()=>C({...s,reload:i},t));s.href=a||r.href;const _=f(()=>!!a&&n!==!1&&n!=="js"&&K(a,t)||void 0),l=f(()=>_||!!a&&n!==!1&&g(a,t))?h(()=>p(()=>Promise.resolve().then(()=>E),void 0),"s_j9c38k7DsL0"):void 0,k=a?b((c,A)=>{c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.preventDefault()},"(event,target)=>{if(!(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)){event.preventDefault();}}"):void 0;return P("a",{"q:link":!!a,...s,"data-prefetch":_,children:S(j,null,3,"pQ_5"),onClick$:[k,o,a?h(()=>p(()=>Promise.resolve().then(()=>O),void 0),"s_0HtKCMkIiQE",[e,i,d,v]):void 0],onMouseOver$:[s.onMouseOver$,l],onFocus$:[s.onFocus$,l],onQVisible$:[s.onQVisible$,l]},null,0,"pQ_6")},$=(r,e)=>{var t;if(!((t=navigator.connection)!=null&&t.saveData)&&e&&e.href){const o=new URL(e.href);L(o.pathname),e.hasAttribute("data-prefetch")&&q(o,e,{prefetchSymbols:!1,isPrefetch:!0})}},E=Object.freeze(Object.defineProperty({__proto__:null,_hW:u,s_j9c38k7DsL0:$},Symbol.toStringTag,{value:"Module"}));export{u as _hW,$ as a,R as s,M as s_0HtKCMkIiQE};
