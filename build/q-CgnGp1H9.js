import{h as a,_hW as R}from"./q-B07PLbO6.js";const x=e=>{const[s,t,l]=a();s.scrollerRef.value&&(l.value&&(t.value=getComputedStyle(s.scrollerRef.value).transition,l.value=!1),s.scrollerRef.value.style.transition=e?t.value??"revert":"none")},p=Object.freeze(Object.defineProperty({__proto__:null,_hW:R,s_is0yi7vq0A4:x},Symbol.toStringTag,{value:"Module"})),T=e=>{const[s,t,l,o]=a();if(!t.scrollerRef.value)return 0;const r=t.scrollerRef.value,c=t.slideRefsArray.value;let n=0;for(let i=0;i<e;i++)if(c[i].value){const d=c[i].value.getBoundingClientRect();n+=d[o],n+=t.gapSig.value}const f=t.alignSig.value,g=c[e].value.getBoundingClientRect(),u=r[s],v=g[o];f==="center"?n-=(u-v)/2:f==="end"&&(n-=u-v);const m=0,S=-(r[l]-u);return n=Math.max(S,Math.min(m,-n)),Math.abs(n)},b=()=>{const[e,s,t]=a();if(!e.scrollerRef.value)return;const l={x:r=>`${r}px, 0, 0`,y:r=>`0, ${r}px, 0`},o=t.value[s];e.scrollerRef.value.style.transform=`translate3d(${l[s](o)})`},z=()=>{const[e]=a();e.isScrollerSig.value=!0},w=()=>{const[e,s,t,l]=a();if(!t.scrollerRef.value)return;const o=0,r=-(t.scrollerRef.value[l]-t.scrollerRef.value[s]);e.value={min:r,max:o}},h=async()=>{const[e,s,t,l]=a();if(e.startIndexSig.value===void 0)throw new Error("Qwik UI: Q Visible executed when startIndexSig is not set");if(!e.scrollerRef.value)return;e.scrollerRef.value.style.transform="none";const o=e.scrollerRef.value.scrollLeft,r=e.scrollerRef.value.scrollTop;l.value={x:-o,y:-r,z:l.value.z},await t(!1),await s(),e.scrollerRef.value.style.overflow="visible"};export{R as _hW,b as a,z as b,w as c,h as d,T as s,x as s_is0yi7vq0A4,p as u};
