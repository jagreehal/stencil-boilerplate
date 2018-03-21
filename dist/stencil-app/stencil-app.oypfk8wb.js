/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='stencil-app']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(n,e,t,o){"use strict";function i(n,e,t,o,i,c,f){let r=t.n+(o||C),l=t[r];if(l||(l=t[r=t.n+C]),l){let o=e.e;if(e.t)if(1===t.encapsulation)o=i.shadowRoot;else for(;i=e.o(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const c=n.i.get(o)||{};if(!c[r]){f=l.content.cloneNode(!0);const t=o.querySelectorAll("[data-styles]");e.c(o,f,t.length&&t[t.length-1].nextSibling||o.f),c[r]=!0,n.i.set(o,c)}}}function c(n){return{r:n[0],l:n[1],u:!!n[2],s:!!n[3],a:!!n[4]}}function f(n,e){if(j(e)){if(n===Boolean||3===n)return"false"!==e&&(""===e||!!e);if(n===Number||4===n)return parseFloat(e)}return e}function r(n,e,t,o){const i=n.p.get(e);i&&((o=i.$activeLoading)&&((t=o.indexOf(e))>-1&&o.splice(t,1),!o.length&&i.$initLoad()),n.p.delete(e))}function l(n,e,t){let o,i=!1,c=!1;for(var f=arguments.length;f-- >2;)T.push(arguments[f]);for(;T.length;)if((t=T.pop())&&void 0!==t.pop)for(f=t.length;f--;)T.push(t[f]);else"boolean"==typeof t&&(t=null),(c="function"!=typeof n)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(c=!1)),c&&i?o[o.length-1].d+=t:void 0===o?o=[c?u(t):t]:o.push(c?u(t):t),i=c;const r=new A;if(r.m=n,r.w=o,e&&(r.y=e,r.v=e.b,r.M=e.ref,e.className&&(e.class=e.className),"object"==typeof e.class)){for(f in e.class)e.class[f]&&T.push(f);e.class=T.join(" "),T.length=0}return r}function u(n){const e=new A;return e.d=n,e}function s(n,e){n.k.has(e)||(n.k.set(e,!0),n.g.add(()=>{(function n(e,t,o,i,c){if(e.k.delete(t),!e.C.has(t)){let f;if(i=e.W.get(t),o=!i){if((c=e.p.get(t))&&!c.$rendered)return void(c.$onRender=c.$onRender||[]).push(()=>{n(e,t)});i=function f(n,e,t,o,i,c){try{(function f(n,e,t,o,i,c){for(c in n.N.set(o,t),n.j.has(t)||n.j.set(t,{}),(i=Object.assign({color:{type:String}},e.properties)).mode={type:String},i)p(n,i[c],t,o,c)})(n,o=n.x(e).S,e,t=new o)}catch(o){t={},n.O(o,7,e,!0)}return n.W.set(e,t),t}(e,t)}f&&f.then?f.then(()=>a(e,t,i,o)):a(e,t,i,o)}})(n,e)},n.T?1:3))}function a(n,e,t,o){(function i(n,e,t,o,c){try{const i=e.S.host;let f;if(o.render||o.hostData||i||f){n.A=!0;const i=o.render&&o.render();let f;n.A=!1;const r=n.L.get(t)||new A;r.P=t;const u=l(null,f,i);n.L.set(t,n.render(r,u,c,n.R.get(t),n.q.get(t),e.S.encapsulation))}n.B(n,n.D,e,o.mode,t),t.$rendered=!0,t.$onRender&&(t.$onRender.forEach(n=>n()),t.$onRender=null)}catch(e){n.A=!1,n.O(e,8,t,!0)}})(n,n.x(e),e,t,!o);try{o?e.$initLoad():v(n.L.get(e))}catch(t){n.O(t,6,e,!0)}}function p(n,e,t,o,i){if(e.type||e.state){const c=n.j.get(t);if(!e.state){if(e.attr&&(void 0===c[i]||""===c[i])){const o=n.D.H(t,e.attr);null!=o&&(c[i]=f(e.type,o))}t.hasOwnProperty(i)&&(void 0===c[i]&&(c[i]=t[i]),delete t[i])}o.hasOwnProperty(i)&&void 0===c[i]&&(c[i]=o[i]),e.watchCallbacks&&(c[L+i]=e.watchCallbacks.slice()),m(o,i,function c(e){return(e=n.j.get(n.N.get(this)))&&e[i]},function r(t,o){(o=n.N.get(this))&&(e.state||e.mutable)&&d(n,o,i,t)})}}function d(n,e,t,o,i,c,f){(i=n.j.get(e))||n.j.set(e,i={}),o!==i[t]&&(i[t]=o,n.W.get(e)&&(i[L+t],!n.A&&e.$rendered&&s(n,e)))}function m(n,e,t,o){Object.defineProperty(n,e,{configurable:!0,get:t,set:o})}function h(n,e,t,o,i){const c=11===t.P.nodeType&&t.P.host?t.P.host:t.P,f=e&&e.y||W,r=t.y||W;for(i in f)r&&null!=r[i]||null==f[i]||w(n,c,i,f[i],void 0,o,t.F);for(i in r)i in f&&r[i]===("value"===i||"checked"===i?c[i]:f[i])||w(n,c,i,f[i],r[i],o,t.F)}function w(n,e,t,o,i,c,f,r,l){if("class"!==t||c)if("style"===t){for(r in o=o||W,i=i||W,o)i[r]||(e.style[r]="");for(r in i)i[r]!==o[r]&&(e.style[r]=i[r])}else if("o"!==t[0]||"n"!==t[1]||t in e)if("list"!==t&&"type"!==t&&!c&&(t in e||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.x(e);o&&o.U&&o.U[t]?y(e,t,i):"ref"!==t&&(y(e,t,null==i?"":i),null!=i&&!1!==i||e.removeAttribute(t))}else null!=i&&function u(n,e,t){const o=e!==(e=e.replace(/^xlink\:?/,"")),i=P[e];!i||t&&"false"!==t?"function"!=typeof t&&(i&&(t=""),o?n.setAttributeNS(R,x(e),t):n.setAttribute(e,t)):o?n.removeAttributeNS(R,x(e)):n.removeAttribute(e)}(e,t,i);else t=x(t.substring(2)),i?i!==o&&n.D.z(e,t,i):n.D.I(e,t);else if(o!==i){const n=null==o||""===o?E:o.trim().split(/\s+/),t=null==i||""===i?E:i.trim().split(/\s+/);let c=null==e.className||""===e.className?E:e.className.trim().split(/\s+/);for(r=0,l=n.length;r<l;r++)-1===t.indexOf(n[r])&&(c=c.filter(e=>e!==n[r]));for(r=0,l=t.length;r<l;r++)-1===n.indexOf(t[r])&&(c=[...c,t[r]]);e.className=c.join(" ")}}function y(n,e,t){try{n[e]=t}catch(n){}}function v(n,e){n&&(n.M&&n.M(e?null:n.P),n.w&&n.w.forEach(n=>{v(n,e)}))}function b(n,e,t,o,i){const c=n.Q(e);let f,r,l,s;if(i&&1===c){(r=n.H(e,g))&&(l=r.split("."))[0]===o&&((s=new A).m=n.G(s.P=e),t.w||(t.w=[]),t.w[l[1]]=s,t=s,i=""!==l[2]);for(let c=0;c<e.childNodes.length;c++)b(n,e.childNodes[c],t,o,i)}else 3===c&&(f=e.previousSibling)&&8===n.Q(f)&&"s"===(l=n.J(f).split("."))[0]&&l[1]===o&&((s=u(n.J(e))).P=e,t.w||(t.w=[]),t.w[l[2]]=s)}function M(n,e,t,o){t.connectedCallback=function(){(function t(n,e,o){n.C.delete(o),n.K.has(o)||(n.K.set(o,!0),function i(n,e,t){for(t=e;t=n.D.V(t);)if(n.X(t)){n.Y.has(e)||(n.p.set(e,t),(t.$activeLoading=t.$activeLoading||[]).push(e));break}}(n,o),n.g.add(()=>{n.Z(e,o),n.loadBundle(e,o.mode,()=>s(n,o))},3))})(n,e,this)},t.attributeChangedCallback=function(n,t,o){(function i(n,e,t,o,c,r,l){if(n&&o!==c)for(r in n)if((l=n[r])._&&x(l._)===x(t)){e[r]=f(l.nn,c);break}})(e.U,this,n,t,o)},t.disconnectedCallback=function(){(function e(n,t,o){!n.en&&function i(n,e){for(;e;){if(!n.o(e))return 9!==n.Q(e);e=n.o(e)}}(n.D,t)&&(n.C.set(t,!0),r(n,t),v(n.L.get(t),!0),n.D.I(t),n.tn.delete(t))})(n,this)},t.componentOnReady=function(e,t){return e||(t=new Promise(n=>e=n)),function o(n,e,t,i){n.C.has(e)||(n.Y.has(e)?t(e):((i=n.on.get(e)||[]).push(t),n.on.set(e,i)))}(n,this,e),t},t.$initLoad=function(){(function e(n,t,o,i,c){if(!n.Y.has(t)&&n.W.get(t)&&!n.C.has(t)&&(!t.$activeLoading||!t.$activeLoading.length)){delete t.$activeLoading,n.Y.set(t,!0);try{v(n.L.get(t)),(c=n.on.get(t))&&(c.forEach(n=>n(t)),n.on.delete(t))}catch(e){n.O(e,4,t)}t.classList.add(o),r(n,t)}})(n,this,o)},t.forceUpdate=function(){s(n,this)},function i(n,e,t){e&&Object.keys(e).forEach(o=>{const i=e[o].in;1===i||2===i?m(t,o,function e(){return(n.j.get(this)||{})[o]},function e(t){d(n,this,o,t)}):6===i&&function c(n,e,t){Object.defineProperty(n,e,{configurable:!0,value:t})}(t,o,O)})}(n,e.U,t)}function $(n,e,t,o){return function(){const i=arguments;return function c(n,e,t){return new Promise(o=>{let i=e[t];i||(i=n.cn.querySelector(t)),i||(i=e[t]=n.fn(t),n.rn(n.cn,i)),i.componentOnReady(o)})}(n,e,t).then(n=>n[o].apply(n,i))}}const k="data-ssrv",g="data-ssrc",C="$",W={},E=[],N={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},j=n=>void 0!==n&&null!==n,S=n=>void 0===n||null===n,x=n=>n.toLowerCase(),O=()=>{},T=[];class A{}const L="wc-",P={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},R="http://www.w3.org/1999/xlink";let q=!1;(function B(e,t,o,f,r,u){const s={html:{}},a={},p=o[e]=o[e]||{},d=function m(n,e,t){n.ln||(n.ln=((n,e,t,o)=>n.addEventListener(e,t,o)),n.un=((n,e,t,o)=>n.removeEventListener(e,t,o)));const o=new WeakMap,i={sn:t.documentElement,e:t.head,cn:t.body,an:!1,Q:n=>n.nodeType,fn:n=>t.createElement(n),pn:(n,e)=>t.createElementNS(n,e),dn:n=>t.createTextNode(n),mn:n=>t.createComment(n),c:(n,e,t)=>n.insertBefore(e,t),hn:n=>n.remove(),rn:(n,e)=>n.appendChild(e),wn:n=>n.childNodes,o:n=>n.parentNode,yn:n=>n.nextSibling,G:n=>x(n.tagName),J:n=>n.textContent,vn:(n,e)=>n.textContent=e,H:(n,e)=>n.getAttribute(e),bn:(n,e,t)=>n.setAttribute(e,t),Mn:(n,e,t,o)=>n.setAttributeNS(e,t,o),$n:(n,e)=>n.removeAttribute(e),kn:(n,o)=>"child"===o?n.firstElementChild:"parent"===o?i.V(n):"body"===o?i.cn:"document"===o?t:"window"===o?e:n,z:(e,t,c,f,r,l,u,s)=>{const a=t;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof l?p=i.kn(e,l):"object"==typeof l?p=l:(s=t.split(":")).length>1&&(p=i.kn(e,s[0]),t=s[1]),!p)return;let m=c;(s=t.split(".")).length>1&&(t=s[0],m=(n=>{n.keyCode===N[s[1]]&&c(n)})),u=i.an?{capture:!!f,passive:!!r}:!!f,n.ln(p,t,m,u),d||o.set(e,d={}),d[a]=(()=>{p&&n.un(p,t,m,u),d[a]=null})},I:(n,e)=>{const t=o.get(n);t&&(e?t[e]&&t[e]():Object.keys(t).forEach(n=>{t[n]&&t[n]()}))},gn:(n,e)=>n.attachShadow(e)};return i.t=!!i.sn.attachShadow,i.Cn=((n,t,o)=>n&&n.dispatchEvent(new e.CustomEvent(t,o))),i.V=((n,e)=>(e=i.o(n))&&11===i.Q(e)?e.host:e),i}(p,o,f);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=f,t.resourcesUrl=t.publicPath=r,p.h=l,p.Context=t;const w=o.$definedCmps=o.$definedCmps||{},y={Z:function v(n,e){e.mode||(e.mode=d.H(e,"mode")||t.mode),d.H(e,k)||function o(n,e){return n&&1===e.encapsulation}(d.t,n)||function i(n,e,t,o,c,f,r,l,u){for(t.$defaultHolder||e.c(t,t.$defaultHolder=e.mn(""),o[0]),u=0;u<o.length;u++)c=o[u],1===e.Q(c)&&null!=(f=e.H(c,"slot"))?(l=l||{})[f]?l[f].push(c):l[f]=[c]:r?r.push(c):r=[c];n.R.set(t,r),n.q.set(t,l)}(y,d,e,e.childNodes),d.t||1!==n.encapsulation||(e.shadowRoot=e)},D:d,Wn:function g(n,e){if(!w[n.n]){w[n.n]=!0,M(y,n,e.prototype,u);{const t=[];for(const e in n.U)n.U[e]._&&t.push(n.U[e]._);e.observedAttributes=t}o.customElements.define(n.n,e)}},En:t.emit,x:n=>s[d.G(n)],Nn:n=>t[n],isClient:!0,X:n=>!(!w[d.G(n)]&&!y.x(n)),loadBundle:function W(n,e,t){if(n.S)t();else{const o="string"==typeof n.jn?n.jn:n.jn[e],i=r+o+(function o(n,e){return 2===e.encapsulation||1===e.encapsulation&&!n}(d.t,n)?".sc":"")+".js";import(i).then(e=>{try{n.S=e[(n=>x(n).split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""))(n.n)],function o(n,e,t){const o=t.style;if(o){const i=t.is+(t.styleMode||C);if(!e[i]){const t=n.fn("template");e[i]=t,t.innerHTML=`<style>${o}</style>`,n.rn(n.e,t)}}}(d,n,n.S)}catch(e){n.S=class{}}t()}).catch(n=>void 0)}},O:(n,e,t)=>void 0,Sn:n=>(function e(n,t,o){return{create:$(n,t,o,"create"),componentOnReady:$(n,t,o,"componentOnReady")}})(d,a,n),g:function E(e,t,o,i){function c(){for(;s.length>0;)s.shift()();o=!1}function f(n){for(n=l(),c();a.length>0&&l()-n<40;)a.shift()();(i=a.length>0)&&e.raf(r)}function r(n){for(c(),n=4+l();a.length>0&&l()<n;)a.shift()();(i=a.length>0)&&e.raf(f)}const l=()=>t.performance.now(),u=Promise.resolve(),s=[],a=[];return e.raf||(e.raf=n.requestAnimationFrame.bind(n)),{add:(n,t)=>{3===t?(s.push(n),o||(o=!0,u.then(c))):(a.push(n),i||(i=!0,e.raf(f)))}}}(p,o),p:new WeakMap,i:new WeakMap,R:new WeakMap,K:new WeakMap,tn:new WeakMap,Y:new WeakMap,N:new WeakMap,W:new WeakMap,C:new WeakMap,k:new WeakMap,q:new WeakMap,on:new WeakMap,xn:new WeakMap,L:new WeakMap,j:new WeakMap};y.render=function O(n,e){function t(o,i,f,r,l,u,m,w,y){if("function"==typeof o.m&&!(o=o.m(Object.assign({},o.y,{On:o.w}))))return null;if(!p&&"slot"===o.m){if((s||a)&&(d&&e.bn(i,d+"-slot",""),m=o.y&&o.y.name,w=j(m)?a&&a[m]:s,j(w))){for(n.en=!0,r=0;r<w.length;r++)u=w[r],e.hn(u),e.rn(i,u),8!==u.nodeType&&(y=!0);!y&&o.w&&c(i,[],o.w),n.en=!1}return null}if(j(o.d))o.P=e.dn(o.d);else{l=o.P=e.fn(o.m),h(n,null,o,q),null!==d&&l.Tn!==d&&e.bn(l,l.Tn=d,"");const i=o.w;if(i)for(r=0;r<i.length;++r)(u=t(i[r],l))&&e.rn(l,u)}return o.P}function o(n,o,i,c,f,r,l){const u=n.$defaultHolder&&e.o(n.$defaultHolder)||n;for(;c<=f;++c)l=i[c],j(l)&&(r=j(l.d)?e.dn(l.d):t(l,n),j(r)&&(l.P=r,e.c(u,r,o)))}function i(n,t,o){for(;t<=o;++t)j(n[t])&&e.hn(n[t].P)}function c(n,c,u){let s,a,p,d,m=0,h=0,w=c.length-1,y=c[0],v=c[w],b=u.length-1,M=u[0],$=u[b];for(;m<=w&&h<=b;)null==y?y=c[++m]:null==v?v=c[--w]:null==M?M=u[++h]:null==$?$=u[--b]:f(y,M)?(l(y,M),y=c[++m],M=u[++h]):f(v,$)?(l(v,$),v=c[--w],$=u[--b]):f(y,$)?(l(y,$),e.c(n,y.P,e.yn(v.P)),y=c[++m],$=u[--b]):f(v,M)?(l(v,M),e.c(n,v.P,y.P),v=c[--w],M=u[++h]):(S(s)&&(s=r(c,m,w)),a=s[M.v],S(a)?(d=t(M,n),M=u[++h]):((p=c[a]).m!==M.m?d=t(M,n):(l(p,M),c[a]=void 0,d=p.P),M=u[++h]),d&&e.c(y.P&&y.P.parentNode||n,d,y.P));m>w?o(n,null==u[b+1]?null:u[b+1].P,u,h,b):h>b&&i(c,m,w)}function f(n,e){return n.m===e.m&&n.v===e.v}function r(n,e,t){const o={};let i,c,f;for(i=e;i<=t;++i)null!=(f=n[i])&&void 0!==(c=f.v)&&(o.An=i);return o}function l(t,f){const r=f.P=t.P,l=t.w,u=f.w;let s;if(S(f.d))"slot"!==f.m&&"function"!=typeof f.m&&h(n,t,f,q),j(l)&&j(u)?c(r,l,u):j(u)?(j(t.d)&&e.vn(r,""),o(r,null,u,0,u.length-1)):j(l)&&i(l,0,l.length-1);else if(s=n.R.get(r)){const t=s[0].parentElement;e.vn(t,f.d),n.R.set(r,[t.childNodes[0]])}else t.d!==f.d&&e.vn(r,f.d)}let u,s,a,p,d;return function n(t,o,i,c,f,r,m){return u=i,s=c,a=f,d="scoped"===r||"shadow"===r&&!e.t?"data-"+e.G(t.P):null,p="shadow"===r&&e.t,u||(p?t.P=e.gn(t.P,{mode:"open"}):d&&e.bn(t.P,d+"-host","")),l(t,o),o}}(y,d);const T=d.sn;T.$rendered=!0,T.$activeLoading=[],T.$initLoad=(()=>{y.Y.set(T,p.loaded=y.T=!0),d.Cn(o,"appload",{detail:{namespace:e}})}),function L(n,e,t){const o=t.querySelectorAll(`[${k}]`),i=o.length;let c,f,r,l,u,s;if(i>0)for(n.Y.set(t,!0),l=0;l<i;l++)for(c=o[l],f=e.H(c,k),(r=new A).m=e.G(r.P=c),n.L.set(c,r),u=0,s=c.childNodes.length;u<s;u++)b(e,c.childNodes[u],r,f,!0)}(y,d,T),y.B=i,(p.components||[]).map(n=>(function e(n,t,o,i){const f={n:n[0],U:{color:{_:"color"}}};f.jn=n[1];const r=n[3];if(r)for(o=0;o<r.length;o++)i=r[o],f.U[i[0]]={in:i[1],Ln:!!i[2],_:"string"==typeof i[3]?i[3]:i[3]?i[0]:0,nn:i[4]};return f.encapsulation=n[4],n[5]&&(f.Pn=n[5].map(c)),t[f.n]=f})(n,s)).forEach(n=>y.Wn(n,class extends HTMLElement{})),p.initialized=!0,d.Cn(n,"appinit",{detail:{namespace:e}})})(o,t,n,e,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"StencilApp","hydrated");