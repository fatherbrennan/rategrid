import{h as _,i as E,s,G as T,H as O,t as R,y as u,q as r,j as x,k as D,l as p,m as M,d as q,S as y,_hW as g}from"./q-B07PLbO6.js";import{_ as l}from"./q-D8aq-jmy.js";import{a as H}from"./q-BZhVn5RJ.js";import"./q-WpqEBIII.js";const L=()=>{const[e]=_();return e._itemsMap},A=Object.freeze(Object.defineProperty({__proto__:null,s_8HmA7vlc4Uk:L},Symbol.toStringTag,{value:"Module"})),C=function({track:i}){const[o,t]=_(),n=t["bind:open"];n&&(i(()=>n.value),o.value=n.value??o.value)},z=Object.freeze(Object.defineProperty({__proto__:null,_hW:g,s_J2quSSZwo38:C},Symbol.toStringTag,{value:"Module"})),K=e=>{const i=E(e,["_itemsMap","onOpenChange$","scrollOptions","loop"]),o=s(),t=s(),n=s(),d=e.loop??!1,v=T(),f=`${v}-dropdown`,w=O(r(()=>l(()=>Promise.resolve().then(()=>A),void 0),"s_8HmA7vlc4Uk",[e])),b=s(null),c=s(!1),I=e.scrollOptions??{behavior:"instant",block:"nearest"},h=s(),m=s(!0),P=s(),j=s(!1),a={itemsMapSig:w,currDisplayValueSig:h,highlightedIndexSig:b,isOpenSig:c,triggerRef:t,panelRef:n,highlightedItemRef:P,isMouseOverPopupSig:j,localId:v,scrollOptions:I,loop:d};R(H,a),u(r(()=>l(()=>Promise.resolve().then(()=>z),void 0),"s_J2quSSZwo38",[c,e])),u(r(()=>l(()=>Promise.resolve().then(()=>V),void 0),"s_in0G3EsblrQ",[m,c,e]));const S=O(r(()=>l(()=>Promise.resolve().then(()=>J),void 0),"s_dUelEcIPrr8",[a,c]));return u(r(()=>l(()=>Promise.resolve().then(()=>$),void 0),"s_HIca0wtzi7k",[m])),x("div",{role:"group","data-qui-dropdown":!0,ref:o,"data-open":a.isOpenSig.value?!0:void 0,"data-closed":a.isOpenSig.value?void 0:!0,"aria-controls":f,get"aria-expanded"(){return a.isOpenSig.value},"aria-expanded":q(a.isOpenSig,"value"),"aria-haspopup":"true",get"aria-activedescendant"(){return S.value},...i,children:M(y,null,3,"Y0_0")},{role:p,"data-qui-dropdown":p,"aria-haspopup":p,"aria-activedescendant":D(k=>k.value,[S])},0,"Y0_1")},U=function({track:i}){var d;const[o,t,n]=_();i(()=>t.value),o.value||(d=n.onOpenChange$)==null||d.call(n,t.value)},V=Object.freeze(Object.defineProperty({__proto__:null,_hW:g,s_in0G3EsblrQ:U},Symbol.toStringTag,{value:"Module"})),Q=()=>{const[e]=_();e.value=!1},$=Object.freeze(Object.defineProperty({__proto__:null,_hW:g,s_HIca0wtzi7k:Q},Symbol.toStringTag,{value:"Module"})),G=()=>{const[e,i]=_();if(!i.value)return"";const o=e.highlightedIndexSig.value??-1,t=e.itemsMapSig.value.get(o);return o===null||o===-1||t!=null&&t.disabled?"":`${e.localId}-${o}`},J=Object.freeze(Object.defineProperty({__proto__:null,s_dUelEcIPrr8:G},Symbol.toStringTag,{value:"Module"}));export{K as a,U as b,Q as c,G as d,C as s,L as s_8HmA7vlc4Uk};
