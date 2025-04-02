import{g as S,r as _,q as c,x,t as k,u as Y,h as z,J as V,o as R,_ as C,i as X,j as T,k as H,l as $,S as U,_hW as f}from"./q-DkOvt7MH.js";import{_ as u}from"./q-CROQm7W7.js";import{c as Q,u as W}from"./q-DTaWsxyQ.js";const J=`@layer qwik-ui {
  [data-qui-carousel-viewport] {
    overflow: hidden;
  }

  [data-qui-carousel-scroller] {
    transform: var(--transform);
    will-change: transform;
    transition: 0.3s transform ease-out;

    display: flex;
    gap: var(--gap);
    flex-direction: var(--orientation);

    /* for initial slide position */
    scroll-snap-type: both mandatory;
    max-height: calc(var(--max-slide-height));
  }

  [data-qui-carousel-slide] {
    /* default, feel free to override */
    --total-gap-width: calc(var(--gap) * (var(--slides-per-view) - 1));
    --available-slide-width: calc(100% - var(--total-gap-width));
    --slide-width: calc(var(--available-slide-width) / var(--slides-per-view));

    flex-basis: var(--slide-width);
    flex-shrink: 0;
    position: relative;
  }

  [data-qui-carousel-scroller][data-initial] {
    overflow: hidden;
  }

  @media (prefers-reduced-motion: reduce) {
    [data-qui-carousel-player] {
      display: none;
    }
  }

  /* workaround until scroll-snap-start is added to CSS */
  [data-qui-scroll-start] {
    --remove-flex-gap: calc(-1 * var(--gap) - 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    white-space: nowrap;
    visibility: hidden;
    display: none;
  }

  /* should not affect padding on non-scroller carousels */
  [data-qui-carousel-scroller] [data-qui-scroll-start] {
    display: revert;
  }

  /* Offsetting the scroll-start - Horizontal orientation */
  [data-qui-scroll-start][data-orientation='horizontal'][data-start] {
    margin-right: var(--remove-flex-gap);
  }

  [data-qui-scroll-start][data-orientation='horizontal'][data-end] {
    margin-left: var(--remove-flex-gap);
  }

  /* Vertical orientation (remove start gap) */
  [data-qui-scroll-start][data-orientation='vertical'][data-start] {
    margin-top: var(--remove-flex-gap);
  }

  [data-qui-scroll-start]::before {
    content: '';
    height: 1px;
    width: 1px;
    display: block;
    /* changes to none on first interaction */
    scroll-snap-align: var(--scroll-snap-align, start);
  }

  /* position the marker to the start */
  [data-qui-scroll-start][data-start]::before {
    margin-top: calc(var(--remove-flex-gap) * -1);
  }

  /* position the marker to the end */
  [data-qui-scroll-start][data-end]::before {
    margin-top: calc(var(--remove-flex-gap) * 1);
  }

  /* center verically */
  [data-qui-scroll-start][data-center]::before {
    position: absolute;
    margin-top: -0.5px;
    inset: 50%;
  }

  /* remove the marker's snap-align on hover */
  [data-qui-carousel-scroller]:hover [data-qui-scroll-start]::before {
    scroll-snap-align: unset;
  }

  [data-initial] [hidden] {
    display: none;
  }
}
`,N=J,B=Object.freeze(Object.defineProperty({__proto__:null,s_Kc8lqTAMME4:N},Symbol.toStringTag,{value:"Module"})),Z=async()=>{const[t,e]=S();if(window.matchMedia("(pointer: coarse)").matches||(await e.setTransition(!0),!t.scrollerRef.value))return;const o=await e.getSlidePosition(t.currentIndexSig.value);e.transformSig.value.x=-o,await e.setTransform(),t.scrollerRef.value.style.transition="none"},F=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_S6DskcL7DF0:Z},Symbol.toStringTag,{value:"Module"})),K=async t=>{const[e,a,o]=S();if(!o.isMouseDownSig.value||o.startPosSig.value===void 0||!e.scrollerRef.value||!o.boundariesSig.value)return;const n=t[o.orientationProps[e.orientationSig.value].pagePosition],i=e.sensitivitySig.value.mouse,r=(o.startPosSig.value-n)*i,s=o.transformSig.value[o.orientationProps[e.orientationSig.value].direction]-r;s>=o.boundariesSig.value.min&&s<=o.boundariesSig.value.max&&(o.transformSig.value[o.orientationProps[e.orientationSig.value].direction]=s,await o.setTransition(!1),await o.setTransform()),o.startPosSig.value=n,a.value=!0},G=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_4O0OlqYtQXU:K},Symbol.toStringTag,{value:"Module"})),ee=async()=>{const[t,e,a,o,n,i]=S();if(!t.scrollerRef.value)return;const r=t.slideRefsArray.value,s=-i.transformSig.value[i.orientationProps[t.orientationSig.value].direction];let v=0,d=1/0;for(let g=0;g<r.length;g++){if(!r[g].value)continue;const m=await i.getSlidePosition(g),P=Math.abs(m-s);P<d&&(v=g,d=P)}const h=await i.getSlidePosition(v);await i.setTransition(!0),i.transformSig.value[i.orientationProps[t.orientationSig.value].direction]=-h,await i.setTransform(),t.currentIndexSig.value=v,i.isMouseDownSig.value=!1,a.value=!1,o.value=!1,n.value=!1,window.removeEventListener("mousemove",e)},te=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_BDHgZUnJoHg:ee},Symbol.toStringTag,{value:"Module"})),oe=()=>{const[t,e,a]=S();e.value&&(a.value=t.startIndexSig.value!==0&&t.startIndexSig.value!==void 0&&t.currentIndexSig.value!==0)},ne=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_U05ipte2f5A:oe},Symbol.toStringTag,{value:"Module"})),ae=async t=>{const[e,a]=S();if(!a.isDraggableSig.value||!a.scrollerRef.value||!a.isMouseWheelSig.value)return;const o=e.validIndexesSig.value,n=a.currentIndexSig.value,i=o.indexOf(n),r=t.deltaY>0?1:-1,s=Math.max(0,Math.min(i+r,o.length-1));a.currentIndexSig.value=o[s]},ie=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_xbynEHjtaJs:ae},Symbol.toStringTag,{value:"Module"})),re=async t=>{const[e,a,o,n]=S();if(n.isMouseDownSig.value||n.startPosSig.value===void 0||!e.scrollerRef.value||!n.boundariesSig.value)return;const i=t.touches[0][n.orientationProps[e.orientationSig.value].clientPosition],r=e.sensitivitySig.value.touch,s=(n.startPosSig.value-i)*r,v=n.transformSig.value[n.orientationProps[e.orientationSig.value].direction]-s;v>=n.boundariesSig.value.min&&v<=n.boundariesSig.value.max&&(n.transformSig.value[n.orientationProps[e.orientationSig.value].direction]=v,await a()),n.startPosSig.value=i,o.value=!0},se=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_IQFYYVeZ0q8:re},Symbol.toStringTag,{value:"Module"})),le=async t=>{const[e,a,o,n,i]=S();e.isDraggableSig.value&&e.scrollerRef.value&&(await i.setTransition(!0),e.startIndexSig.value&&e.scrollStartRef.value&&e.scrollStartRef.value.style.setProperty("--scroll-snap-align","none"),await i.setBoundaries(),i.isMouseDownSig.value=!0,i.startPosSig.value=t.pageX,window.addEventListener("mousemove",o),window.addEventListener("mouseup",a),n.value=!1)},ce=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_mr0Yf5gldrk:le},Symbol.toStringTag,{value:"Module"})),ue=async t=>{const[e,a,o,n]=S();!e.isDraggableSig.value||!e.scrollerRef.value||(e.startIndexSig.value&&e.scrollStartRef.value&&e.scrollStartRef.value.style.setProperty("--scroll-snap-align","none"),n.startPosSig.value=t.touches[0][n.orientationProps[e.orientationSig.value].clientPosition],o.value=!0,a.value=!1,await n.setBoundaries(),await n.setTransition(!1))},de=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_SIaf0Toa7MA:ue},Symbol.toStringTag,{value:"Module"})),ve=async function({track:e}){var d;const[a,o,n,i,r]=S();if(e(()=>a.currentIndexSig.value),n.value){n.value=!1;return}if(r.isTouchDeviceSig.value&&i.value||!a.scrollerRef.value||((d=a.scrollStartRef.value)==null||d.style.setProperty("--scroll-snap-align","none"),r.isMouseDownSig.value))return;const s=a.currentIndexSig.value,v=await r.getSlidePosition(s);await r.setTransition(!0),r.transformSig.value[r.orientationProps[a.orientationSig.value].direction]=-v,await r.setTransform(),window.removeEventListener("mousemove",o)},_e=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_7YItNhINq0E:ve},Symbol.toStringTag,{value:"Module"})),ge=()=>{const[t]=S();t.value=!1},Se=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_31rD4jlL8vg:ge},Symbol.toStringTag,{value:"Module"})),fe=(t,e)=>{const a=_();return c(()=>u(()=>import("./q-C7MYm5bc.js"),[]),"s_ZpuOr1M7lBI",[e,t,a])};function he(t){const e=_(),a=_({x:0,y:0,z:0}),o=_(null),n=_(!1),i=_(!1),r=_(!0),s=_();x(c(()=>u(()=>import("./q-BH-qyH1F.js"),[]),"s_57QHb7s9SXc",[t]));const v={vertical:{size:"height",scroll:"scrollHeight",client:"clientHeight",direction:"y",pagePosition:"pageY",clientPosition:"clientY"},horizontal:{size:"width",scroll:"scrollWidth",client:"clientWidth",direction:"x",pagePosition:"pageX",clientPosition:"clientX"}},{direction:d,scroll:h,client:g,size:w}=v[t.orientationSig.value],m=c(()=>u(()=>import("./q-Bc3MSyox.js"),[]),"s_R5XztXNurWs",[t,d,a]),P=c(()=>u(()=>import("./q-CQWZE5RK.js"),[]),"s_IgzWzsedD4Q",[o,g,t,h]),b=c(()=>u(()=>import("./q-ITzHm8mM.js").then(M=>M.u),[]),"s_is0yi7vq0A4",[t,s,r]);return{startPosSig:e,transformSig:a,boundariesSig:o,isMouseDownSig:n,isTouchDeviceSig:i,isInitialTransitionSig:r,setTransform:m,setBoundaries:P,setTransition:b,setInitialSlidePos:c(()=>u(()=>import("./q-Dlkrr3Dy.js"),[]),"s_4aayiWXV8Y0",[t,m,b,a]),orientationProps:v,getSlidePosition:c(()=>u(()=>import("./q-ORNwb0i_.js"),[]),"s_7d20asa8H1s",[g,t,h,w])}}const Te=t=>{k(c(()=>u(()=>Promise.resolve().then(()=>B),void 0),"s_Kc8lqTAMME4"));const e=Y(Q),a=z(t,["onMouseDown$","onTouchStart$","onTouchMove$","onTouchEnd$"]),o=_(!1),n=_(!0),i=_(!1),r=_(!0),s=_(!1),v=W(e),d=he(e),h=c(()=>u(()=>Promise.resolve().then(()=>G),void 0),"s_4O0OlqYtQXU",[e,o,d]),g=c(()=>u(()=>Promise.resolve().then(()=>te),void 0),"s_BDHgZUnJoHg",[e,h,o,n,i,d]),w=c(()=>u(()=>Promise.resolve().then(()=>ce),void 0),"s_mr0Yf5gldrk",[e,g,h,o,d]);x(c(()=>u(()=>Promise.resolve().then(()=>_e),void 0),"s_7YItNhINq0E",[e,h,o,n,d]));const m=c(()=>u(()=>Promise.resolve().then(()=>F),void 0),"s_S6DskcL7DF0",[e,d]),P=c(()=>u(()=>Promise.resolve().then(()=>de),void 0),"s_SIaf0Toa7MA",[e,n,i,d]),b=fe(d.setTransform,1),E=c(()=>u(()=>Promise.resolve().then(()=>se),void 0),"s_IQFYYVeZ0q8",[e,b,n,d]);V("resize",m),x(c(()=>u(()=>Promise.resolve().then(()=>ne),void 0),"s_U05ipte2f5A",[e,r,s]));const q=c(()=>u(()=>Promise.resolve().then(()=>ie),void 0),"s_xbynEHjtaJs",[v,e]);x(c(()=>u(()=>Promise.resolve().then(()=>Se),void 0),"s_31rD4jlL8vg",[r]));let M=0,j=0,y=null,D=null;const L=R(l=>{const p=l.touches[0];!p||(y=l.target.closest("[data-qui-carousel-scroller]"),!y)||(D=y.getAttribute("data-orientation"),M=p.clientX,j=p.clientY)},'e=>{const touch=e.touches[0];if(!touch)return;const target=e.target;activeCarousel=target.closest("[data-qui-carousel-scroller]");if(!activeCarousel)return;carouselOrientation=activeCarousel.getAttribute("data-orientation");touchStartX=touch.clientX;touchStartY=touch.clientY;}'),A=R(l=>{if(!y||!D)return;const p=l.touches[0];if(!p)return;const O=Math.abs(p.clientX-M),I=Math.abs(p.clientY-j);(D==="horizontal"&&O>I&&O>5||D==="vertical"&&I>O&&I>5)&&l.preventDefault()},'e=>{if(!activeCarousel||!carouselOrientation)return;const touch=e.touches[0];if(!touch)return;const deltaX=Math.abs(touch.clientX-touchStartX);const deltaY=Math.abs(touch.clientY-touchStartY);if(carouselOrientation==="horizontal"&&deltaX>deltaY&&deltaX>5){e.preventDefault();}else if(carouselOrientation==="vertical"&&deltaY>deltaX&&deltaY>5){e.preventDefault();}}');return C("div",{onMouseDown$:[w,t.onMouseDown$],onTouchStart$:[L,P,t.onTouchStart$],onTouchMove$:[A,E,t.onTouchMove$],onTouchEnd$:[g,t.onTouchEnd$],onQVisible$:s.value?d.setInitialSlidePos:void 0,onWheel$:q},{"data-qui-carousel-viewport":!0,"preventdefault:wheel":T(l=>l.isMouseWheelSig.value,[e])},X("div",{ref:e.scrollerRef,"data-qui-carousel-scroller":!0,get"data-draggable"(){return e.isDraggableSig.value?"":void 0},get"data-align"(){return e.alignSig.value},get"data-initial-touch"(){return i.value?"":void 0},get"data-initial"(){return s.value?"":void 0},get"data-orientation"(){return e.orientationSig.value},...a,children:$(U,null,3,"Jq_0")},{"data-qui-carousel-scroller":H,"data-draggable":T(l=>l.isDraggableSig.value?"":void 0,[e]),"data-align":T(l=>l.alignSig.value,[e]),"data-initial-touch":T(l=>l.value?"":void 0,[i]),"data-initial":T(l=>l.value?"":void 0,[s]),"data-orientation":T(l=>l.orientationSig.value,[e])},0,null),0,"Jq_1")};export{K as a,ee as b,oe as c,ae as d,re as e,le as f,ue as g,ve as h,ge as i,Te as j,Z as s,N as s_Kc8lqTAMME4,fe as u};
