import{a as S,u as L,_ as d}from"./q-D3NSFh3l.js";import{u as T,B as O,r as m,N as I,q as b,l as c,F as P,_ as l,j as x,k as i,g as w,_hW as F}from"./q-WPPUufUs.js";import{S as h,a as j}from"./q-DYF-mWfa.js";import{R as e,L as D,a as Y,p as A}from"./q-CcpgY4-S.js";import{c as f}from"./q-rJDFQrZm.js";import{a as B,T as E}from"./q-DKAY_EDy.js";import"./q-O8kdPn_1.js";import"./q-DJz-t2SM.js";function $(){return T(B)}const k=()=>{O();const t=S(),o=m(""),s=L(),r=$(),a=m(null),u={[e.tconst]:"",[e.primaryTitle]:"",[e.averageRating]:0,[e.numVotes]:0};I(b(()=>d(()=>Promise.resolve().then(()=>Q),void 0),"s_4GIYZO7LQKE",[o,t,s,a]));const y=b(()=>d(()=>Promise.resolve().then(()=>q),void 0),"s_lFqDbFw2DNU",[r]);return o.value===""?c(P,{children:"(/◔ ◡ ◔)/"},3,"vB_0"):a.value===null?c(h,{children:l("p",null,null,["You might know ",l("span",null,{class:"bg-paper-9"},x(n=>n.value,[o]),3,null),", but i haven't heard of it :("],3,null)},3,"vB_1"):c(h,{class:f("grow gap-y-6",r.isFullscreen&&"h-main",!r.isFullscreen&&"pb-12"),children:[l("div",null,{class:"gap-y-1"},[c(j,{level:2,children:a.value[e.primaryTitle],[i]:{level:i}},1,"vB_2"),l("div",null,{class:"text-ink-5 overflow-hidden text-xs text-ellipsis whitespace-nowrap"},[l("span",null,null,[a.value[e.startYear]," - ",a.value[e.endYear]],1,null),l("span",null,{class:"px-2"},"|",3,null),l("span",null,null,a.value[e.averageRating],1,null),l("span",null,{class:"px-2"},"|",3,null),l("span",null,null,a.value[e.genres].join(", "),1,null)],1,null)],1,null),l("div",null,{class:"grow overflow-auto"},l("div",null,{class:"rategrid",role:"region","aria-label":"ratings table",tabIndex:0},l("table",null,null,[l("thead",null,null,l("tr",null,null,[l("th",null,null,l("div",null,null,l("button",null,{type:"button",title:x(n=>`Click to ${n.isFullscreen?"enter":"exit"} fullscreen`,[r]),class:"cursor-pointer",onClick$:y},r.isFullscreen?c(D,{class:"icon-collapse","aria-label":"collapse icon",[i]:{class:i,"aria-label":i}},3,"vB_3"):c(Y,{class:"icon-expand","aria-label":"expand icon",[i]:{class:i,"aria-label":i}},3,"vB_4"),1,null),1,null),1,null),a.value[e.seasonsIndex].map(n=>l("th",null,null,l("div",null,null,n,1,null),1,n))],1,null),1,null),l("tbody",null,null,a.value[e.episodeIndex].map(n=>l("tr",null,null,[l("th",null,null,l("div",null,null,n,1,null),1,null),a.value[e.seasonsIndex].map(v=>{var _,g;const p=((g=(_=a.value[e.episodeMap])==null?void 0:_[v])==null?void 0:g[n])??u,R=~~p[e.averageRating];return l("td",{class:f(p[e.averageRating]!==u[e.averageRating]&&`text-white bg-rating-${R-1}`),title:p[e.primaryTitle]},null,l("div",null,null,p[e.averageRating]!==u[e.averageRating]?p[e.averageRating]:"",1,null),1,`${v}-${n}`)})],1,n)),1,null)],1,null),1,null),1,null)]},1,"vB_5")},W=Object.freeze(Object.defineProperty({__proto__:null,s_Y2Q1ePxOi1Y:k},Symbol.toStringTag,{value:"Module"})),C=async({track:t})=>{const[o,s,r,a]=w();t(()=>s.params.api),t(()=>s.url.searchParams),s.params.api in E||(r(new URL("/rategrid/tv",s.url).toString(),{replaceState:!0}),a.value=null),o.value=s.url.searchParams.get("id")??"";const u=(await A.get()[s.params.api]().tv().details({id:o.value}).fetch()).data;window.document.title=`${u===null?":(":`${u[e.primaryTitle]} (${u[e.startYear]})`} | tv | rategrid`,a.value=u},Q=Object.freeze(Object.defineProperty({__proto__:null,_hW:F,s_4GIYZO7LQKE:C},Symbol.toStringTag,{value:"Module"})),M=()=>{const[t]=w();t.isFullscreen=!t.isFullscreen},q=Object.freeze(Object.defineProperty({__proto__:null,_hW:F,s_lFqDbFw2DNU:M},Symbol.toStringTag,{value:"Module"}));export{M as a,W as i,C as s,k as s_Y2Q1ePxOi1Y,$ as u};
