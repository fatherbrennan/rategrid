import{h as d,i as H,s as o,G as L,H as M,y as m,q as u,t as E,j as w,l as R,k as A,m as z,S as X,_hW as p}from"./q-B07PLbO6.js";import{_ as r}from"./q-D8aq-jmy.js";import{S as $}from"./q-BpJlVe5n.js";import{u as Y}from"./q-D3By7ZuL.js";import{u as N}from"./q-BOHp9Lmk.js";const U=function({track:i}){const[t,l]=d(),s=l["bind:open"];s&&(i(()=>s.value),t.value=s.value??t.value)},B=Object.freeze(Object.defineProperty({__proto__:null,_hW:p,s_5B3pIPHqcR0:U},Symbol.toStringTag,{value:"Module"})),G=function({track:i}){var n;const[t,l,s]=d();i(()=>l.value),t.value||(n=s.onOpenChange$)==null||n.call(s,l.value)},K=Object.freeze(Object.defineProperty({__proto__:null,_hW:p,s_fCqKhdDXuko:G},Symbol.toStringTag,{value:"Module"})),J=()=>{const[e]=d();return e._itemsMap},Q=Object.freeze(Object.defineProperty({__proto__:null,s_CndvAS73ik4:J},Symbol.toStringTag,{value:"Module"})),F=({track:e})=>{const[i,t]=d();i.value=e(()=>t.invalid??!1)},W=Object.freeze(Object.defineProperty({__proto__:null,_hW:p,s_d8cdyIcXS2w:F},Symbol.toStringTag,{value:"Module"})),Z=async function({track:i}){var g;const[t,l,s,n,v]=d(),a=n["bind:value"];if(a){i(()=>a.value);for(const[c,_]of s.value)(g=a.value)!=null&&g.includes(_.value)?(await v.selectionManager$(c,"add"),l.value&&(t.highlightedIndexSig.value=c)):await v.selectionManager$(c,"remove")}},ee=Object.freeze(Object.defineProperty({__proto__:null,_hW:p,s_hr2bn96Ym44:Z},Symbol.toStringTag,{value:"Module"})),de=e=>{var P,y;const i=H(e,["_itemsMap","_valuePropIndex","onChange$","onOpenChange$","scrollOptions","loop","multiple","_label","name","required","disabled","invalid"]),t=Y(e.ref),l=o(),s=o(),n=o(),v=o(),a=o(),g=e.loop??!1,c=L(),_=M(u(()=>r(()=>Promise.resolve().then(()=>Q),void 0),"s_CndvAS73ik4",[e])),I=o(new Set([e._valuePropIndex??[]].flat())),x=o(e._valuePropIndex??null),b=o(!1),k=e.scrollOptions??{behavior:"smooth",block:"center",inline:"nearest"},j=o(),O=o(!0),T=o(),f=o(e.disabled??!1),h=o(e.invalid??!1),q=o(!1),D=o(!1);m(u(()=>r(()=>Promise.resolve().then(()=>W),void 0),"s_d8cdyIcXS2w",[h,e]));const S={itemsMapSig:_,currDisplayValueSig:j,triggerRef:l,popoverRef:s,listboxRef:n,labelRef:v,groupRef:a,highlightedItemRef:T,localId:c,highlightedIndexSig:x,selectedIndexSetSig:I,isKeyboardFocusSig:q,isMouseOverPopupSig:D,isListboxOpenSig:b,scrollOptions:k,loop:g,multiple:e.multiple??!1,name:e.name,required:e.required,isDisabledSig:f,isInvalidSig:h};E($,S);const V=N();return m(u(()=>r(()=>Promise.resolve().then(()=>ee),void 0),"s_hr2bn96Ym44",[S,O,_,e,V])),m(u(()=>r(()=>Promise.resolve().then(()=>B),void 0),"s_5B3pIPHqcR0",[b,e])),m(u(()=>r(()=>Promise.resolve().then(()=>K),void 0),"s_fCqKhdDXuko",[O,b,e])),m(u(()=>r(()=>Promise.resolve().then(()=>ne),void 0),"s_cHYgD9XO1es",[S,e,I])),m(u(()=>r(()=>Promise.resolve().then(()=>oe),void 0),"s_oRNGoadO460",[O])),m(u(()=>r(()=>Promise.resolve().then(()=>ie),void 0),"s_b9x71gHo47k",[f,e])),w("div",{role:"group",ref:t,"data-open":S.isListboxOpenSig.value?"":void 0,"data-closed":S.isListboxOpenSig.value?void 0:"",get"data-disabled"(){return f.value?"":void 0},"data-invalid":(P=S.isInvalidSig)!=null&&P.value?"":void 0,"aria-invalid":(y=S.isInvalidSig)==null?void 0:y.value,"data-qui-select-root":!0,...i,children:z(X,null,3,"o6_0")},{role:R,"data-disabled":A(C=>C.value?"":void 0,[f]),"data-qui-select-root":R},0,"o6_1")},te=()=>{const[e]=d();e.value=!1},oe=Object.freeze(Object.defineProperty({__proto__:null,_hW:p,s_oRNGoadO460:te},Symbol.toStringTag,{value:"Module"})),se=({track:e})=>{const[i,t]=d();i.value=e(()=>t.disabled??!1)},ie=Object.freeze(Object.defineProperty({__proto__:null,_hW:p,s_b9x71gHo47k:se},Symbol.toStringTag,{value:"Module"})),le=async function({track:i}){const[t,l,s]=d(),n=l["bind:value"],v=l["bind:displayValue"];i(()=>s.value);const a=[],g=[];for(const c of t.selectedIndexSetSig.value){const _=t.itemsMapSig.value.get(c);_&&(a.push(_.value),g.push(_.displayValue))}if(l.onChange$&&s.value.size>0&&await l.onChange$(t.multiple?a:a[0]),n&&n.value){const c=JSON.stringify(n.value),_=JSON.stringify(a);c!==_&&(t.multiple?n.value=a:n.value=a[0])}t.currDisplayValueSig.value=g,v&&t.currDisplayValueSig.value&&(v.value=t.multiple?t.currDisplayValueSig.value:t.currDisplayValueSig.value[0])},ne=Object.freeze(Object.defineProperty({__proto__:null,_hW:p,s_cHYgD9XO1es:le},Symbol.toStringTag,{value:"Module"}));export{p as _hW,J as a,F as b,Z as c,de as d,te as e,se as f,le as g,G as s,U as s_5B3pIPHqcR0};
