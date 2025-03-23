import{u as y,h as L,a as w,q as h,O as R,C as F,m as o,b as l,k as g,l as s,F as S,_hW as I}from"./q-B07PLbO6.js";import{N as P,_ as b,a as T}from"./q-D8aq-jmy.js";import{S as v,a as j}from"./q-Lrzo7-iK.js";import{R as e,L as D,a as O}from"./q-DZt1nGrc.js";import{c as m}from"./q-C9e0bfWH.js";import{a as A}from"./q-BafCNIDF.js";import"./q-C9jjFcju.js";import"./q-D8qb1N0X.js";function M(){return y(A)}const $=()=>{const[r]=L();r.isFullscreen=!r.isFullscreen},C=Object.freeze(Object.defineProperty({__proto__:null,_hW:I,s_FuDRGLZMawg:$},Symbol.toStringTag,{value:"Module"})),k=({resolveValue:r})=>{const t=r(c);return{title:`${t===null?":(":`${t[e.primaryTitle]} (${t[e.startYear]})`} | tv | rategrid`,meta:[{name:"description",content:"Display information related to television series in a clean way."}]}},E=()=>{throw"Symbol removed by Qwik Optimizer, it can not be called from current platform"},c=P(R("s_N8v6xzItHIE")),q=w(h(()=>b(()=>Promise.resolve().then(()=>B),void 0),"s_NanBw0Phqy0")),W=Object.freeze(Object.defineProperty({__proto__:null,default:q,head:k,onGet:E,useTvApiData:c},Symbol.toStringTag,{value:"Module"})),z=()=>{F();const r=T(),t=M(),a=c(),i={[e.tconst]:"",[e.primaryTitle]:"",[e.averageRating]:0,[e.numVotes]:0};if(a.value===null)return o(v,{children:l("p",null,null,["You might know ",l("span",null,{class:"bg-paper-9"},g(n=>n.params.id,[r]),3,null),", but i haven't heard of it :("],3,null)},3,"Lh_0");const x=h(()=>b(()=>Promise.resolve().then(()=>C),void 0),"s_FuDRGLZMawg",[t]);return o(S,{children:o(v,{class:m("grow gap-y-6",t.isFullscreen&&"h-main",!t.isFullscreen&&"pb-12"),children:[l("div",null,{class:"gap-y-1"},[o(j,{level:2,children:a.value[e.primaryTitle],[s]:{level:s}},1,"Lh_1"),l("div",null,{class:"text-ink-5 overflow-hidden text-xs text-ellipsis whitespace-nowrap"},[l("span",null,null,[a.value[e.startYear]," - ",a.value[e.endYear]],1,null),l("span",null,{class:"px-2"},"|",3,null),l("span",null,null,a.value[e.averageRating],1,null),l("span",null,{class:"px-2"},"|",3,null),l("span",null,null,a.value[e.genres].join(", "),1,null)],1,null)],1,null),l("div",null,{class:"grow overflow-auto"},l("div",null,{class:"rategrid",role:"region","aria-label":"ratings table",tabIndex:0},l("table",null,null,[l("thead",null,null,l("tr",null,null,[l("th",null,null,l("div",null,null,l("button",null,{type:"button",title:g(n=>`Click to ${n.isFullscreen?"enter":"exit"} fullscreen`,[t]),class:"cursor-pointer",onClick$:x},t.isFullscreen?o(D,{class:"icon-collapse","aria-label":"collapse icon",[s]:{class:s,"aria-label":s}},3,"Lh_2"):o(O,{class:"icon-expand","aria-label":"expand icon",[s]:{class:s,"aria-label":s}},3,"Lh_3"),1,null),1,null),1,null),a.value[e.seasonsIndex].map(n=>l("th",null,null,l("div",null,null,n,1,null),1,n))],1,null),1,null),l("tbody",null,null,a.value[e.episodeIndex].map(n=>l("tr",null,null,[l("th",null,null,l("div",null,null,n,1,null),1,null),a.value[e.seasonsIndex].map(p=>{var d,_;const u=((_=(d=a.value[e.episodeMap])==null?void 0:d[p])==null?void 0:_[n])??i,f=~~u[e.averageRating];return l("td",{class:m(u[e.averageRating]!==i[e.averageRating]&&`text-white bg-rating-${f-1}`),title:u[e.primaryTitle]},null,l("div",null,null,u[e.averageRating]!==i[e.averageRating]?u[e.averageRating]:"",1,null),1,`${p}-${n}`)})],1,n)),1,null)],1,null),1,null),1,null)]},1,"Lh_4")},1,"Lh_5")},B=Object.freeze(Object.defineProperty({__proto__:null,s_NanBw0Phqy0:z},Symbol.toStringTag,{value:"Module"}));export{I as _hW,W as i,z as s,$ as s_FuDRGLZMawg,M as u};
