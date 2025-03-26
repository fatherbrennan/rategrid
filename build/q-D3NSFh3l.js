import{u as P,c as m,a as V,_ as B,e as K,n as Y,q as C,b as $,d as p,f as z,w as R,g as J,h as X,i as Z,j as T,k as ee,l as te,S as ne,_hW as x}from"./q-WPPUufUs.js";const re=function(){const t=typeof document<"u"&&document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),se=function(e){return"/rategrid/"+e},O={},S=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(i=>{if(i=se(i),i in O)return;O[i]=!0;const l=i.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${f}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":re,l||(u.as="script"),u.crossOrigin="",u.href=i,c&&u.setAttribute("nonce",c),document.head.appendChild(u),l)return new Promise((h,d)=>{u.addEventListener("load",h),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})}))}function a(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&a(c.reason);return t().catch(a)})},oe='((i,r,a,o)=>{a=e=>{const t=document.querySelector("[q\\\\:base]");t&&r.active&&r.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;r?a(t):i.push(t)}),"serviceWorker"in navigator?navigator.serviceWorker.register("/rategrid/service-worker.js").then(e=>{o=()=>{r=e,i.forEach(a),a({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&o()}):e.active&&o()}).catch(e=>console.error(e)):console.log("Service worker not supported in this browser.")})([])',Te=m("qc-s"),Oe=m("qc-c"),Le=m("qc-ic"),ae=m("qc-h"),ce=m("qc-l"),ie=m("qc-n"),Ie=m("qc-a"),je=m("qc-ir"),Ne=m("qc-p"),Qe=K(C(()=>S(()=>import("./q-CmtQ59tj.js"),[]),"s_97DNR7UwuJE")),We=V(C(()=>S(()=>import("./q-D7uTQDzR.js"),[]),"s_80HGy50OrjI")),L=new WeakMap,v=new Map,I=new Set,le="qaction",Me="qfunc",Ue="qdata",w=e=>e.pathname+e.search+e.hash,_=(e,t)=>new URL(e,t.href),ue=(e,t)=>e.origin===t.origin,j=e=>e.endsWith("/")?e:e+"/",G=({pathname:e},{pathname:t})=>{const n=Math.abs(e.length-t.length);return n===0?e===t:n===1&&j(e)===j(t)},fe=(e,t)=>e.search===t.search,A=(e,t)=>fe(e,t)&&G(e,t),he=(e,t,n)=>{let r=t??"";return n&&(r+=(r?"&":"?")+le+"="+encodeURIComponent(n.id)),e+(e.endsWith("/")?"":"/")+"q-data.json"+r},Ve=(e,t)=>{const n=e.href;if(typeof n=="string"&&typeof e.target!="string"&&!e.reload)try{const r=_(n.trim(),t.url),s=_("",t.url);if(ue(r,s))return w(r)}catch(r){console.error(r)}else if(e.reload)return w(_("",t.url));return null},pe=(e,t)=>{if(e){const n=_(e,t.url),r=_("",t.url);return!A(n,r)}return!1},xe=(e,t)=>{if(e){const n=_(e,t.url),r=_("",t.url);return!G(n,r)}return!1},de=e=>e&&typeof e.then=="function",Ge=(e,t,n,r)=>{const s=me(),o={head:s,withLocale:c=>R(r,c),resolveValue:c=>{const i=c.__id;if(c.__brand==="server_loader"&&!(i in e.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const l=e.loaders[i];if(de(l))throw new Error("Loaders returning a promise can not be resolved for the head function.");return l},...t};for(let c=n.length-1;c>=0;c--){const i=n[c]&&n[c].head;i&&(typeof i=="function"?N(s,R(r,()=>i(o))):typeof i=="object"&&N(s,i))}return o.head},N=(e,t)=>{typeof t.title=="string"&&(e.title=t.title),E(e.meta,t.meta),E(e.links,t.links),E(e.styles,t.styles),E(e.scripts,t.scripts),Object.assign(e.frontmatter,t.frontmatter)},E=(e,t)=>{if(Array.isArray(t))for(const n of t){if(typeof n.key=="string"){const r=e.findIndex(s=>s.key===n.key);if(r>-1){e[r]=n;continue}}e.push(n)}},me=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});function _e(e,t){const n=M(e),r=Q(e),s=M(t),a=Q(t);return H(e,n,r,t,s,a)}function H(e,t,n,r,s,a){let o=null;for(;t<n;){const c=e.charCodeAt(t++),i=r.charCodeAt(s++);if(c===91){const l=F(e,t),f=t+(l?3:0),u=D(e,f,n,93),h=e.substring(f,u),d=D(e,u+1,n,47),g=e.substring(u+1,d);t=u+1;const y=s-1;if(l){const q=ye(h,g,r,y,a,e,t+g.length+1,n);if(q)return Object.assign(o||(o={}),q)}const b=D(r,y,a,47,g);if(b==-1)return null;const k=r.substring(y,b);if(!l&&!g&&!k)return null;s=b,(o||(o={}))[h]=decodeURIComponent(k)}else if(c!==i&&!(isNaN(i)&&ge(e,t)))return null}return W(e,t)&&W(r,s)?o||{}:null}function ge(e,t){return e.charCodeAt(t)===91&&F(e,t+1)}function Q(e){const t=e.length;return t>1&&e.charCodeAt(t-1)===47?t-1:t}function W(e,t){const n=e.length;return t>=n||t==n-1&&e.charCodeAt(t)===47}function M(e){return e.charCodeAt(0)===47?1:0}function F(e,t){return e.charCodeAt(t)===46&&e.charCodeAt(t+1)===46&&e.charCodeAt(t+2)===46}function D(e,t,n,r,s=""){for(;t<n&&e.charCodeAt(t)!==r;)t++;const a=s.length;for(let o=0;o<a;o++)if(e.charCodeAt(t-a+o)!==s.charCodeAt(o))return-1;return t-a}function ye(e,t,n,r,s,a,o,c){n.charCodeAt(r)===47&&r++;let i=s;const l=t+"/";for(;i>=r;){const f=H(a,o,c,n,i,s);if(f){let h=n.substring(r,Math.min(i,s));return h.endsWith(l)&&(h=h.substring(0,h.length-l.length)),f[e]=decodeURIComponent(h),f}const u=Ce(n,r,l,i,r-1)+l.length;if(i===u)break;i=u}return null}function Ce(e,t,n,r,s){let a=e.lastIndexOf(n,r);return a==r-n.length&&(a=e.lastIndexOf(n,r-n.length-1)),a>t?a:s}const He=async(e,t,n,r)=>{if(!Array.isArray(e))return null;for(const s of e){const a=s[0],o=_e(a,r);if(!o)continue;const c=s[1],i=s[3],l=new Array(c.length),f=[];c.forEach((d,g)=>{U(d,f,y=>l[g]=y)});const u=Se(t,r);let h;return U(u,f,d=>h=d==null?void 0:d.default),f.length>0&&await Promise.all(f),[a,o,l,h,i]}return null},U=(e,t,n,r)=>{if(typeof e=="function"){const s=L.get(e);if(s)n(s);else{const a=e();typeof a.then=="function"?t.push(a.then(o=>{L.set(e,o),n(o)})):a&&n(a)}}},Se=(e,t)=>{if(e){t=t.endsWith("/")?t:t+"/";const n=e.find(r=>r[0]===t||t.startsWith(r[0]+(t.endsWith("/")?"":"/")));if(n)return n[1]}},Fe=(e,t,n,r,s=!1)=>{if(t!=="popstate"){const a=A(n,r),o=n.hash===r.hash;if(!a||!o){const c={_qCityScroll:ve()};s?e.history.replaceState(c,"",w(r)):e.history.pushState(c,"",w(r))}}},ve=()=>({x:0,y:0,w:0,h:0}),Ee=e=>{e=e.endsWith("/")?e:e+"/",I.has(e)||(I.add(e),document.dispatchEvent(new CustomEvent("qprefetch",{detail:{links:[e]}})))},Be=async(e,t,n)=>{const r=e.pathname,s=e.search,a=he(r,s,n==null?void 0:n.action);let o;n!=null&&n.action||(o=v.get(a)),(n==null?void 0:n.prefetchSymbols)!==!1&&Ee(r);let c;if(!o){const i=we(n==null?void 0:n.action);n!=null&&n.action&&(n.action.data=void 0),o=fetch(a,i).then(l=>{if(l.redirected){const f=new URL(l.url);if(!f.pathname.endsWith("/q-data.json")||f.origin!==location.origin){location.href=f.href;return}}if((l.headers.get("content-type")||"").includes("json"))return l.text().then(f=>{const u=p(f,t);if(!u){location.href=e.href;return}if(n!=null&&n.clearCache&&v.delete(a),u.redirect)location.href=u.redirect;else if(n!=null&&n.action){const{action:h}=n,d=u.loaders[h.id];c=()=>{h.resolve({status:l.status,result:d})}}return u});(n==null?void 0:n.isPrefetch)!==!0&&(location.href=e.href)}),n!=null&&n.action||v.set(a,o)}return o.then(i=>(i||v.delete(a),c&&c(),i))},we=e=>{const t=e==null?void 0:e.data;return t?t instanceof FormData?{method:"POST",body:t}:{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json, charset=UTF-8"}}:{cache:"no-cache",headers:{"Cache-Control":"no-cache",Pragma:"no-cache"}}},Ke=()=>P(ae),Ye=()=>P(ce),be=()=>P(ie),$e=()=>Y(z("qwikcity")),ze=(e,t,n,r,s)=>{e==="popstate"&&s?r.scrollTo(s.x,s.y):(e==="link"||e==="form")&&(De(t,n)||r.scrollTo(0,0))},De=(e,t)=>{const n=e.hash.slice(1),r=n&&document.getElementById(n);return r?(r.scrollIntoView(),!0):!!(!r&&e.hash&&A(e,t))},Je=e=>({x:e.scrollLeft,y:e.scrollTop,w:Math.max(e.scrollWidth,e.clientWidth),h:Math.max(e.scrollHeight,e.clientHeight)}),Xe=()=>{const e=history.state;return e==null?void 0:e._qCityScroll},Ze=e=>{const t=history.state||{};t._qCityScroll=e,history.replaceState(t,"")},et="_qCityScroller",tt={},nt={navCount:0},rt=V(C(()=>S(()=>import("./q-DQ8EB6NI.js"),[]),"s_7QJi73TUQvM"));function st(e){for(;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.parentElement;return e.closest("[q\\:container]")}const ot=e=>B("script",{nonce:$(e,"nonce")},{dangerouslySetInnerHTML:oe},null,3,"pQ_7"),at=async function*(e,t,n){const r=e.getReader();try{let s="";const a=new TextDecoder;for(;!(n!=null&&n.aborted);){const o=await r.read();if(o.done)break;s+=a.decode(o.value,{stream:!0});const c=s.split(/\n/);s=c.pop();for(const i of c)yield await p(i,t)}}finally{r.releaseLock()}},Pe=async(e,t)=>{const[n]=J(),r=new FormData(t),s=new URLSearchParams;r.forEach((a,o)=>{typeof a=="string"&&s.append(o,a)}),await n("?"+s.toString(),{type:"form",forceReload:!0})},Ae=Object.freeze(Object.defineProperty({__proto__:null,_hW:x,s_0goEtrhBVkY:Pe},Symbol.toStringTag,{value:"Module"})),ke=(e,t)=>{t.getAttribute("data-spa-reset")==="true"&&t.reset(),t.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:{status:200}}))},qe=Object.freeze(Object.defineProperty({__proto__:null,_hW:x,s_7hHsKlGtbGM:ke},Symbol.toStringTag,{value:"Module"})),ct=e=>{const t=X(e,["action","spaReset","reloadDocument","onSubmit$"]),n=be();return Z("form",{action:"get",get"preventdefault:submit"(){return!e.reloadDocument},get"data-spa-reset"(){return e.spaReset?"true":void 0},...t,children:te(ne,null,3,"pQ_8"),onSubmit$:[...Array.isArray(e.onSubmit$)?e.onSubmit$:[e.onSubmit$],C(()=>S(()=>Promise.resolve().then(()=>Ae),void 0),"s_0goEtrhBVkY",[n]),C(()=>S(()=>Promise.resolve().then(()=>qe),void 0),"s_7hHsKlGtbGM")]},{action:ee,"preventdefault:submit":T(r=>!r.reloadDocument,[e]),"data-spa-reset":T(r=>r.spaReset?"true":void 0,[e])},0,"pQ_9")};export{Qe as A,Fe as B,Oe as C,ae as D,st as E,_ as F,Me as G,at as H,Ue as I,Ke as J,We as K,rt as L,ke as M,ct as N,et as Q,ce as R,ot as S,S as _,x as _hW,Ye as a,xe as b,me as c,Le as d,ie as e,Te as f,Ve as g,Ie as h,je as i,tt as j,nt as k,Be as l,$e as m,Ne as n,He as o,Ee as p,A as q,Ge as r,pe as s,Pe as s_0goEtrhBVkY,Xe as t,be as u,ze as v,v as w,ue as x,Ze as y,Je as z};
