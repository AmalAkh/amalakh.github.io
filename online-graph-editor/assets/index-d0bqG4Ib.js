var rl=Object.defineProperty;var al=(e,t,n)=>t in e?rl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Re=(e,t,n)=>(al(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Oa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const re={},Yt=[],Xe=()=>{},il=()=>!1,br=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Aa=e=>e.startsWith("onUpdate:"),ge=Object.assign,Ca=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ol=Object.prototype.hasOwnProperty,G=(e,t)=>ol.call(e,t),L=Array.isArray,Vt=e=>In(e)==="[object Map]",Qt=e=>In(e)==="[object Set]",di=e=>In(e)==="[object Date]",U=e=>typeof e=="function",ue=e=>typeof e=="string",pt=e=>typeof e=="symbol",te=e=>e!==null&&typeof e=="object",Eo=e=>(te(e)||U(e))&&U(e.then)&&U(e.catch),ko=Object.prototype.toString,In=e=>ko.call(e),sl=e=>In(e).slice(8,-1),Oo=e=>In(e)==="[object Object]",Pa=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,er=Oa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ll=/-(\w)/g,qe=yr(e=>e.replace(ll,(t,n)=>n?n.toUpperCase():"")),cl=/\B([A-Z])/g,en=yr(e=>e.replace(cl,"-$1").toLowerCase()),xr=yr(e=>e.charAt(0).toUpperCase()+e.slice(1)),jr=yr(e=>e?`on${xr(e)}`:""),Mt=(e,t)=>!Object.is(e,t),tr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},sr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},lr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let mi;const Qr=()=>mi||(mi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mn(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ue(r)?ml(r):Mn(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(ue(e)||te(e))return e}const fl=/;(?![^(]*\))/g,ul=/:([^]+)/,dl=/\/\*[^]*?\*\//g;function ml(e){const t={};return e.replace(dl,"").split(fl).forEach(n=>{if(n){const r=n.split(ul);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Me(e){let t="";if(ue(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=Me(e[n]);r&&(t+=r+" ")}else if(te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const pl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hl=Oa(pl);function Ao(e){return!!e||e===""}function gl(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Tt(e[r],t[r]);return n}function Tt(e,t){if(e===t)return!0;let n=di(e),r=di(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=pt(e),r=pt(t),n||r)return e===t;if(n=L(e),r=L(t),n||r)return n&&r?gl(e,t):!1;if(n=te(e),r=te(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!Tt(e[o],t[o]))return!1}}return String(e)===String(t)}function Sa(e,t){return e.findIndex(n=>Tt(n,t))}const nr=e=>ue(e)?e:e==null?"":L(e)||te(e)&&(e.toString===ko||!U(e.toString))?JSON.stringify(e,Co,2):String(e),Co=(e,t)=>t&&t.__v_isRef?Co(e,t.value):Vt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a],i)=>(n[$r(r,i)+" =>"]=a,n),{})}:Qt(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>$r(n))}:pt(t)?$r(t):te(t)&&!L(t)&&!Oo(t)?String(t):t,$r=(e,t="")=>{var n;return pt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Se;class Po{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function So(e){return new Po(e)}function vl(e,t=Se){t&&t.active&&t.effects.push(e)}function Io(){return Se}function bl(e){Se&&Se.cleanups.push(e)}const Ia=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Mo=e=>(e.w&ht)>0,To=e=>(e.n&ht)>0,yl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ht},xl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Mo(a)&&!To(a)?a.delete(e):t[n++]=a,a.w&=~ht,a.n&=~ht}t.length=n}},cr=new WeakMap;let ln=0,ht=1;const ea=30;let je;const St=Symbol(""),ta=Symbol("");class Ma{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,vl(this,r)}run(){if(!this.active)return this.fn();let t=je,n=ut;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=je,je=this,ut=!0,ht=1<<++ln,ln<=ea?yl(this):pi(this),this.fn()}finally{ln<=ea&&xl(this),ht=1<<--ln,je=this.parent,ut=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){je===this?this.deferStop=!0:this.active&&(pi(this),this.onStop&&this.onStop(),this.active=!1)}}function pi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ut=!0;const No=[];function tn(){No.push(ut),ut=!1}function nn(){const e=No.pop();ut=e===void 0?!0:e}function Ce(e,t,n){if(ut&&je){let r=cr.get(e);r||cr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ia()),Ro(a)}}function Ro(e,t){let n=!1;ln<=ea?To(e)||(e.n|=ht,n=!Mo(e)):n=!e.has(je),n&&(e.add(je),je.deps.push(e))}function et(e,t,n,r,a,i){const o=cr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&L(e)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!pt(u)&&u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":L(e)?Pa(n)&&s.push(o.get("length")):(s.push(o.get(St)),Vt(e)&&s.push(o.get(ta)));break;case"delete":L(e)||(s.push(o.get(St)),Vt(e)&&s.push(o.get(ta)));break;case"set":Vt(e)&&s.push(o.get(St));break}if(s.length===1)s[0]&&na(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);na(Ia(l))}}function na(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&hi(r);for(const r of n)r.computed||hi(r)}function hi(e,t){(e!==je||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function wl(e,t){var n;return(n=cr.get(e))==null?void 0:n.get(t)}const _l=Oa("__proto__,__v_isRef,__isVue"),zo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pt)),gi=El();function El(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=J(this);for(let i=0,o=this.length;i<o;i++)Ce(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(J)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){tn();const r=J(this)[t].apply(this,n);return nn(),r}}),e}function kl(e){const t=J(this);return Ce(t,"has",e),t.hasOwnProperty(e)}class Lo{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?Fl:Do:i?$o:jo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=L(t);if(!a){if(o&&G(gi,n))return Reflect.get(gi,n,r);if(n==="hasOwnProperty")return kl}const s=Reflect.get(t,n,r);return(pt(n)?zo.has(n):_l(n))||(a||Ce(t,"get",n),i)?s:de(s)?o&&Pa(n)?s:s.value:te(s)?a?Uo(s):_r(s):s}}class Fo extends Lo{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(!this._shallow){const l=Xt(i);if(!fr(r)&&!Xt(r)&&(i=J(i),r=J(r)),!L(t)&&de(i)&&!de(r))return l?!1:(i.value=r,!0)}const o=L(t)&&Pa(n)?Number(n)<t.length:G(t,n),s=Reflect.set(t,n,r,a);return t===J(a)&&(o?Mt(r,i)&&et(t,"set",n,r):et(t,"add",n,r)),s}deleteProperty(t,n){const r=G(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&et(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!pt(n)||!zo.has(n))&&Ce(t,"has",n),r}ownKeys(t){return Ce(t,"iterate",L(t)?"length":St),Reflect.ownKeys(t)}}class Ol extends Lo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Al=new Fo,Cl=new Ol,Pl=new Fo(!0),Ta=e=>e,wr=e=>Reflect.getPrototypeOf(e);function jn(e,t,n=!1,r=!1){e=e.__v_raw;const a=J(e),i=J(t);n||(Mt(t,i)&&Ce(a,"get",t),Ce(a,"get",i));const{has:o}=wr(a),s=r?Ta:n?za:bn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function $n(e,t=!1){const n=this.__v_raw,r=J(n),a=J(e);return t||(Mt(e,a)&&Ce(r,"has",e),Ce(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Dn(e,t=!1){return e=e.__v_raw,!t&&Ce(J(e),"iterate",St),Reflect.get(e,"size",e)}function vi(e){e=J(e);const t=J(this);return wr(t).has.call(t,e)||(t.add(e),et(t,"add",e,e)),this}function bi(e,t){t=J(t);const n=J(this),{has:r,get:a}=wr(n);let i=r.call(n,e);i||(e=J(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Mt(t,o)&&et(n,"set",e,t):et(n,"add",e,t),this}function yi(e){const t=J(this),{has:n,get:r}=wr(t);let a=n.call(t,e);a||(e=J(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&et(t,"delete",e,void 0),i}function xi(){const e=J(this),t=e.size!==0,n=e.clear();return t&&et(e,"clear",void 0,void 0),n}function Un(e,t){return function(r,a){const i=this,o=i.__v_raw,s=J(o),l=t?Ta:e?za:bn;return!e&&Ce(s,"iterate",St),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function Hn(e,t,n){return function(...r){const a=this.__v_raw,i=J(a),o=Vt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),u=n?Ta:t?za:bn;return!t&&Ce(i,"iterate",l?ta:St),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:s?[u(m[0]),u(m[1])]:u(m),done:h}},[Symbol.iterator](){return this}}}}function ot(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Sl(){const e={get(i){return jn(this,i)},get size(){return Dn(this)},has:$n,add:vi,set:bi,delete:yi,clear:xi,forEach:Un(!1,!1)},t={get(i){return jn(this,i,!1,!0)},get size(){return Dn(this)},has:$n,add:vi,set:bi,delete:yi,clear:xi,forEach:Un(!1,!0)},n={get(i){return jn(this,i,!0)},get size(){return Dn(this,!0)},has(i){return $n.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:Un(!0,!1)},r={get(i){return jn(this,i,!0,!0)},get size(){return Dn(this,!0)},has(i){return $n.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:Un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Hn(i,!1,!1),n[i]=Hn(i,!0,!1),t[i]=Hn(i,!1,!0),r[i]=Hn(i,!0,!0)}),[e,n,t,r]}const[Il,Ml,Tl,Nl]=Sl();function Na(e,t){const n=t?e?Nl:Tl:e?Ml:Il;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(G(n,a)&&a in r?n:r,a,i)}const Rl={get:Na(!1,!1)},zl={get:Na(!1,!0)},Ll={get:Na(!0,!1)},jo=new WeakMap,$o=new WeakMap,Do=new WeakMap,Fl=new WeakMap;function jl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $l(e){return e.__v_skip||!Object.isExtensible(e)?0:jl(sl(e))}function _r(e){return Xt(e)?e:Ra(e,!1,Al,Rl,jo)}function Dl(e){return Ra(e,!1,Pl,zl,$o)}function Uo(e){return Ra(e,!0,Cl,Ll,Do)}function Ra(e,t,n,r,a){if(!te(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=$l(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function dt(e){return Xt(e)?dt(e.__v_raw):!!(e&&e.__v_isReactive)}function Xt(e){return!!(e&&e.__v_isReadonly)}function fr(e){return!!(e&&e.__v_isShallow)}function Ho(e){return dt(e)||Xt(e)}function J(e){const t=e&&e.__v_raw;return t?J(t):e}function Er(e){return sr(e,"__v_skip",!0),e}const bn=e=>te(e)?_r(e):e,za=e=>te(e)?Uo(e):e;function Bo(e){ut&&je&&(e=J(e),Ro(e.dep||(e.dep=Ia())))}function Yo(e,t){e=J(e);const n=e.dep;n&&na(n)}function de(e){return!!(e&&e.__v_isRef===!0)}function xe(e){return Ul(e,!1)}function Ul(e,t){return de(e)?e:new Hl(e,t)}class Hl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:J(t),this._value=n?t:bn(t)}get value(){return Bo(this),this._value}set value(t){const n=this.__v_isShallow||fr(t)||Xt(t);t=n?t:J(t),Mt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:bn(t),Yo(this))}}function j(e){return de(e)?e.value:e}const Bl={get:(e,t,n)=>j(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return de(a)&&!de(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Vo(e){return dt(e)?e:new Proxy(e,Bl)}function Yl(e){const t=L(e)?new Array(e.length):{};for(const n in e)t[n]=Wl(e,n);return t}class Vl{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return wl(J(this._object),this._key)}}function Wl(e,t,n){const r=e[t];return de(r)?r:new Vl(e,t,n)}class Kl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ma(t,()=>{this._dirty||(this._dirty=!0,Yo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=J(this);return Bo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Xl(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=Xe):(r=e.get,a=e.set),new Kl(r,a,i||!a,n)}function mt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){kr(i,t,n)}return a}function Ue(e,t,n,r){if(U(e)){const i=mt(e,t,n,r);return i&&Eo(i)&&i.catch(o=>{kr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ue(e[i],t,n,r));return a}function kr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){mt(l,null,10,[e,o,s]);return}}ql(e,n,a,r)}function ql(e,t,n,r=!0){console.error(e)}let yn=!1,ra=!1;const ve=[];let We=0;const Wt=[];let Je=null,kt=0;const Wo=Promise.resolve();let La=null;function Ko(e){const t=La||Wo;return e?t.then(this?e.bind(this):e):t}function Gl(e){let t=We+1,n=ve.length;for(;t<n;){const r=t+n>>>1,a=ve[r],i=xn(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function Fa(e){(!ve.length||!ve.includes(e,yn&&e.allowRecurse?We+1:We))&&(e.id==null?ve.push(e):ve.splice(Gl(e.id),0,e),Xo())}function Xo(){!yn&&!ra&&(ra=!0,La=Wo.then(Go))}function Jl(e){const t=ve.indexOf(e);t>We&&ve.splice(t,1)}function Zl(e){L(e)?Wt.push(...e):(!Je||!Je.includes(e,e.allowRecurse?kt+1:kt))&&Wt.push(e),Xo()}function wi(e,t,n=yn?We+1:0){for(;n<ve.length;n++){const r=ve[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;ve.splice(n,1),n--,r()}}}function qo(e){if(Wt.length){const t=[...new Set(Wt)];if(Wt.length=0,Je){Je.push(...t);return}for(Je=t,Je.sort((n,r)=>xn(n)-xn(r)),kt=0;kt<Je.length;kt++)Je[kt]();Je=null,kt=0}}const xn=e=>e.id==null?1/0:e.id,Ql=(e,t)=>{const n=xn(e)-xn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Go(e){ra=!1,yn=!0,ve.sort(Ql);try{for(We=0;We<ve.length;We++){const t=ve[We];t&&t.active!==!1&&mt(t,null,14)}}finally{We=0,ve.length=0,qo(),yn=!1,La=null,(ve.length||Wt.length)&&Go()}}function ec(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||re;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[u]||re;h&&(a=n.map(y=>ue(y)?y.trim():y)),m&&(a=n.map(lr))}let s,l=r[s=jr(t)]||r[s=jr(qe(t))];!l&&i&&(l=r[s=jr(en(t))]),l&&Ue(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ue(c,e,6,a)}}function Jo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=c=>{const u=Jo(c,t,!0);u&&(s=!0,ge(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(te(e)&&r.set(e,null),null):(L(i)?i.forEach(l=>o[l]=null):ge(o,i),te(e)&&r.set(e,o),o)}function Or(e,t){return!e||!br(t)?!1:(t=t.slice(2).replace(/Once$/,""),G(e,t[0].toLowerCase()+t.slice(1))||G(e,en(t))||G(e,t))}let Te=null,Zo=null;function ur(e){const t=Te;return Te=e,Zo=e&&e.type.__scopeId||null,t}function tc(e,t=Te,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ti(-1);const i=ur(t);let o;try{o=e(...a)}finally{ur(i),r._d&&Ti(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Dr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:h,setupState:y,ctx:N,inheritAttrs:P}=e;let V,_;const E=ur(e);try{if(n.shapeFlag&4){const S=a||r,$=S;V=Ve(u.call($,S,m,i,y,h,N)),_=l}else{const S=t;V=Ve(S.length>1?S(i,{attrs:l,slots:s,emit:c}):S(i,null)),_=t.props?l:nc(l)}}catch(S){pn.length=0,kr(S,e,1),V=be(Nt)}let F=V;if(_&&P!==!1){const S=Object.keys(_),{shapeFlag:$}=F;S.length&&$&7&&(o&&S.some(Aa)&&(_=rc(_,o)),F=qt(F,_))}return n.dirs&&(F=qt(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),V=F,ur(E),V}const nc=e=>{let t;for(const n in e)(n==="class"||n==="style"||br(n))&&((t||(t={}))[n]=e[n]);return t},rc=(e,t)=>{const n={};for(const r in e)(!Aa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ac(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?_i(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const h=u[m];if(o[h]!==r[h]&&!Or(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?_i(r,o,c):!0:!!o;return!1}function _i(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Or(n,i))return!0}return!1}function ic({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ja="components";function oc(e,t){return es(ja,e,!0,t)||e}const Qo=Symbol.for("v-ndc");function sc(e){return ue(e)?es(ja,e,!1)||e:e||Qo}function es(e,t,n=!0,r=!1){const a=Te||he;if(a){const i=a.type;if(e===ja){const s=ef(i,!1);if(s&&(s===t||s===qe(t)||s===xr(qe(t))))return i}const o=Ei(a[e]||i[e],t)||Ei(a.appContext[e],t);return!o&&r?i:o}}function Ei(e,t){return e&&(e[t]||e[qe(t)]||e[xr(qe(t))])}const lc=e=>e.__isSuspense;function cc(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):Zl(e)}const Bn={};function un(e,t,n){return ts(e,t,n)}function ts(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=re){var s;const l=Io()===((s=he)==null?void 0:s.scope)?he:null;let c,u=!1,m=!1;if(de(e)?(c=()=>e.value,u=fr(e)):dt(e)?(c=()=>e,r=!0):L(e)?(m=!0,u=e.some(S=>dt(S)||fr(S)),c=()=>e.map(S=>{if(de(S))return S.value;if(dt(S))return At(S);if(U(S))return mt(S,l,2)})):U(e)?t?c=()=>mt(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Ue(e,l,3,[y])}:c=Xe,t&&r){const S=c;c=()=>At(S())}let h,y=S=>{h=E.onStop=()=>{mt(S,l,4),h=E.onStop=void 0}},N;if(En)if(y=Xe,t?n&&Ue(t,l,3,[c(),m?[]:void 0,y]):c(),a==="sync"){const S=af();N=S.__watcherHandles||(S.__watcherHandles=[])}else return Xe;let P=m?new Array(e.length).fill(Bn):Bn;const V=()=>{if(E.active)if(t){const S=E.run();(r||u||(m?S.some(($,ce)=>Mt($,P[ce])):Mt(S,P)))&&(h&&h(),Ue(t,l,3,[S,P===Bn?void 0:m&&P[0]===Bn?[]:P,y]),P=S)}else E.run()};V.allowRecurse=!!t;let _;a==="sync"?_=V:a==="post"?_=()=>ke(V,l&&l.suspense):(V.pre=!0,l&&(V.id=l.uid),_=()=>Fa(V));const E=new Ma(c,_);t?n?V():P=E.run():a==="post"?ke(E.run.bind(E),l&&l.suspense):E.run();const F=()=>{E.stop(),l&&l.scope&&Ca(l.scope.effects,E)};return N&&N.push(F),F}function fc(e,t,n){const r=this.proxy,a=ue(e)?e.includes(".")?ns(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=he;Gt(this);const s=ts(a,i.bind(r),n);return o?Gt(o):It(),s}function ns(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function At(e,t){if(!te(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),de(e))At(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)At(e[n],t);else if(Qt(e)||Vt(e))e.forEach(n=>{At(n,t)});else if(Oo(e))for(const n in e)At(e[n],t);return e}function st(e,t){const n=Te;if(n===null)return e;const r=Sr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=re]=t[i];o&&(U(o)&&(o={mounted:o,updated:o}),o.deep&&At(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function _t(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(tn(),Ue(l,n,8,[e.el,s,e,t]),nn())}}/*! #__NO_SIDE_EFFECTS__ */function uc(e,t){return U(e)?ge({name:e.name},t,{setup:e}):e}const rr=e=>!!e.type.__asyncLoader,rs=e=>e.type.__isKeepAlive;function dc(e,t){as(e,"a",t)}function mc(e,t){as(e,"da",t)}function as(e,t,n=he){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Ar(t,r,n),n){let a=n.parent;for(;a&&a.parent;)rs(a.parent.vnode)&&pc(r,t,n,a),a=a.parent}}function pc(e,t,n,r){const a=Ar(t,e,r,!0);os(()=>{Ca(r[t],a)},n)}function Ar(e,t,n=he,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;tn(),Gt(n);const s=Ue(t,n,e,o);return It(),nn(),s});return r?a.unshift(i):a.push(i),i}}const at=e=>(t,n=he)=>(!En||e==="sp")&&Ar(e,(...r)=>t(...r),n),hc=at("bm"),is=at("m"),gc=at("bu"),vc=at("u"),bc=at("bum"),os=at("um"),yc=at("sp"),xc=at("rtg"),wc=at("rtc");function _c(e,t=he){Ar("ec",e,t)}function Ur(e,t,n,r){let a;const i=n&&n[r];if(L(e)||ue(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(te(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const aa=e=>e?bs(e)?Sr(e)||e.proxy:aa(e.parent):null,dn=ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>aa(e.parent),$root:e=>aa(e.root),$emit:e=>e.emit,$options:e=>$a(e),$forceUpdate:e=>e.f||(e.f=()=>Fa(e.update)),$nextTick:e=>e.n||(e.n=Ko.bind(e.proxy)),$watch:e=>fc.bind(e)}),Hr=(e,t)=>e!==re&&!e.__isScriptSetup&&G(e,t),Ec={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const y=o[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Hr(r,t))return o[t]=1,r[t];if(a!==re&&G(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&G(c,t))return o[t]=3,i[t];if(n!==re&&G(n,t))return o[t]=4,n[t];ia&&(o[t]=0)}}const u=dn[t];let m,h;if(u)return t==="$attrs"&&Ce(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==re&&G(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,G(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Hr(a,t)?(a[t]=n,!0):r!==re&&G(r,t)?(r[t]=n,!0):G(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==re&&G(e,o)||Hr(t,o)||(s=i[0])&&G(s,o)||G(r,o)||G(dn,o)||G(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:G(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ki(e){return L(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ia=!0;function kc(e){const t=$a(e),n=e.proxy,r=e.ctx;ia=!1,t.beforeCreate&&Oi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:h,beforeUpdate:y,updated:N,activated:P,deactivated:V,beforeDestroy:_,beforeUnmount:E,destroyed:F,unmounted:S,render:$,renderTracked:ce,renderTriggered:ne,errorCaptured:K,serverPrefetch:A,expose:T,inheritAttrs:W,components:q,directives:pe,filters:H}=t;if(c&&Oc(c,r,null),o)for(const se in o){const Q=o[se];U(Q)&&(r[se]=Q.bind(n))}if(a){const se=a.call(n,n);te(se)&&(e.data=_r(se))}if(ia=!0,i)for(const se in i){const Q=i[se],xt=U(Q)?Q.bind(n,n):U(Q.get)?Q.get.bind(n,n):Xe,Ln=!U(Q)&&U(Q.set)?Q.set.bind(n):Xe,wt=Oe({get:xt,set:Ln});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>wt.value,set:He=>wt.value=He})}if(s)for(const se in s)ss(s[se],r,n,se);if(l){const se=U(l)?l.call(n):l;Reflect.ownKeys(se).forEach(Q=>{Mc(Q,se[Q])})}u&&Oi(u,e,"c");function B(se,Q){L(Q)?Q.forEach(xt=>se(xt.bind(n))):Q&&se(Q.bind(n))}if(B(hc,m),B(is,h),B(gc,y),B(vc,N),B(dc,P),B(mc,V),B(_c,K),B(wc,ce),B(xc,ne),B(bc,E),B(os,S),B(yc,A),L(T))if(T.length){const se=e.exposed||(e.exposed={});T.forEach(Q=>{Object.defineProperty(se,Q,{get:()=>n[Q],set:xt=>n[Q]=xt})})}else e.exposed||(e.exposed={});$&&e.render===Xe&&(e.render=$),W!=null&&(e.inheritAttrs=W),q&&(e.components=q),pe&&(e.directives=pe)}function Oc(e,t,n=Xe){L(e)&&(e=oa(e));for(const r in e){const a=e[r];let i;te(a)?"default"in a?i=mn(a.from||r,a.default,!0):i=mn(a.from||r):i=mn(a),de(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Oi(e,t,n){Ue(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ss(e,t,n,r){const a=r.includes(".")?ns(n,r):()=>n[r];if(ue(e)){const i=t[e];U(i)&&un(a,i)}else if(U(e))un(a,e.bind(n));else if(te(e))if(L(e))e.forEach(i=>ss(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&un(a,i,e)}}function $a(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>dr(l,c,o,!0)),dr(l,t,o)),te(t)&&i.set(t,l),l}function dr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&dr(e,i,n,!0),a&&a.forEach(o=>dr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ac[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ac={data:Ai,props:Ci,emits:Ci,methods:cn,computed:cn,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:cn,directives:cn,watch:Pc,provide:Ai,inject:Cc};function Ai(e,t){return t?e?function(){return ge(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function Cc(e,t){return cn(oa(e),oa(t))}function oa(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function cn(e,t){return e?ge(Object.create(null),e,t):t}function Ci(e,t){return e?L(e)&&L(t)?[...new Set([...e,...t])]:ge(Object.create(null),ki(e),ki(t??{})):t}function Pc(e,t){if(!e)return t;if(!t)return e;const n=ge(Object.create(null),e);for(const r in t)n[r]=ye(e[r],t[r]);return n}function ls(){return{app:null,config:{isNativeTag:il,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sc=0;function Ic(e,t){return function(r,a=null){U(r)||(r=ge({},r)),a!=null&&!te(a)&&(a=null);const i=ls(),o=new WeakSet;let s=!1;const l=i.app={_uid:Sc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:of,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(l,...u)):U(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const h=be(r,a);return h.appContext=i,u&&t?t(h,c):e(h,c,m),s=!0,l._container=c,c.__vue_app__=l,Sr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){wn=l;try{return c()}finally{wn=null}}};return l}}let wn=null;function Mc(e,t){if(he){let n=he.provides;const r=he.parent&&he.parent.provides;r===n&&(n=he.provides=Object.create(r)),n[e]=t}}function mn(e,t,n=!1){const r=he||Te;if(r||wn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:wn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r&&r.proxy):t}}function Tc(){return!!(he||Te||wn)}function Nc(e,t,n,r=!1){const a={},i={};sr(i,Pr,1),e.propsDefaults=Object.create(null),cs(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Dl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Rc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=J(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let h=u[m];if(Or(e.emitsOptions,h))continue;const y=t[h];if(l)if(G(i,h))y!==i[h]&&(i[h]=y,c=!0);else{const N=qe(h);a[N]=sa(l,s,N,y,e,!1)}else y!==i[h]&&(i[h]=y,c=!0)}}}else{cs(e,t,a,i)&&(c=!0);let u;for(const m in s)(!t||!G(t,m)&&((u=en(m))===m||!G(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=sa(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!G(t,m))&&(delete i[m],c=!0)}c&&et(e,"set","$attrs")}function cs(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(er(l))continue;const c=t[l];let u;a&&G(a,u=qe(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:Or(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=J(n),c=s||re;for(let u=0;u<i.length;u++){const m=i[u];n[m]=sa(a,l,m,c[m],e,!G(c,m))}}return o}function sa(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=G(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&U(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Gt(a),r=c[n]=l.call(null,t),It())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===en(n))&&(r=!0))}return r}function fs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const u=m=>{l=!0;const[h,y]=fs(m,t,!0);ge(o,h),y&&s.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return te(e)&&r.set(e,Yt),Yt;if(L(i))for(let u=0;u<i.length;u++){const m=qe(i[u]);Pi(m)&&(o[m]=re)}else if(i)for(const u in i){const m=qe(u);if(Pi(m)){const h=i[u],y=o[m]=L(h)||U(h)?{type:h}:ge({},h);if(y){const N=Mi(Boolean,y.type),P=Mi(String,y.type);y[0]=N>-1,y[1]=P<0||N<P,(N>-1||G(y,"default"))&&s.push(m)}}}const c=[o,s];return te(e)&&r.set(e,c),c}function Pi(e){return e[0]!=="$"}function Si(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ii(e,t){return Si(e)===Si(t)}function Mi(e,t){return L(t)?t.findIndex(n=>Ii(n,e)):U(t)&&Ii(t,e)?0:-1}const us=e=>e[0]==="_"||e==="$stable",Da=e=>L(e)?e.map(Ve):[Ve(e)],zc=(e,t,n)=>{if(t._n)return t;const r=tc((...a)=>Da(t(...a)),n);return r._c=!1,r},ds=(e,t,n)=>{const r=e._ctx;for(const a in e){if(us(a))continue;const i=e[a];if(U(i))t[a]=zc(a,i,r);else if(i!=null){const o=Da(i);t[a]=()=>o}}},ms=(e,t)=>{const n=Da(t);e.slots.default=()=>n},Lc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=J(t),sr(t,"_",n)):ds(t,e.slots={})}else e.slots={},t&&ms(e,t);sr(e.slots,Pr,1)},Fc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=re;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ge(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ds(t,a)),o=t}else t&&(ms(e,t),o={default:1});if(i)for(const s in a)!us(s)&&o[s]==null&&delete a[s]};function la(e,t,n,r,a=!1){if(L(e)){e.forEach((h,y)=>la(h,t&&(L(t)?t[y]:t),n,r,a));return}if(rr(r)&&!a)return;const i=r.shapeFlag&4?Sr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,u=s.refs===re?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ue(c)?(u[c]=null,G(m,c)&&(m[c]=null)):de(c)&&(c.value=null)),U(l))mt(l,s,12,[o,u]);else{const h=ue(l),y=de(l);if(h||y){const N=()=>{if(e.f){const P=h?G(m,l)?m[l]:u[l]:l.value;a?L(P)&&Ca(P,i):L(P)?P.includes(i)||P.push(i):h?(u[l]=[i],G(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,G(m,l)&&(m[l]=o)):y&&(l.value=o,e.k&&(u[e.k]=o))};o?(N.id=-1,ke(N,n)):N()}}}const ke=cc;function jc(e){return $c(e)}function $c(e,t){const n=Qr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:h,setScopeId:y=Xe,insertStaticContent:N}=e,P=(f,d,p,g=null,v=null,w=null,O=!1,x=null,k=!!d.dynamicChildren)=>{if(f===d)return;f&&!on(f,d)&&(g=Fn(f),He(f,v,w,!0),f=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:b,ref:R,shapeFlag:I}=d;switch(b){case Cr:V(f,d,p,g);break;case Nt:_(f,d,p,g);break;case Br:f==null&&E(d,p,g,O);break;case _e:q(f,d,p,g,v,w,O,x,k);break;default:I&1?$(f,d,p,g,v,w,O,x,k):I&6?pe(f,d,p,g,v,w,O,x,k):(I&64||I&128)&&b.process(f,d,p,g,v,w,O,x,k,Lt)}R!=null&&v&&la(R,f&&f.ref,w,d||f,!d)},V=(f,d,p,g)=>{if(f==null)r(d.el=s(d.children),p,g);else{const v=d.el=f.el;d.children!==f.children&&c(v,d.children)}},_=(f,d,p,g)=>{f==null?r(d.el=l(d.children||""),p,g):d.el=f.el},E=(f,d,p,g)=>{[f.el,f.anchor]=N(f.children,d,p,g,f.el,f.anchor)},F=({el:f,anchor:d},p,g)=>{let v;for(;f&&f!==d;)v=h(f),r(f,p,g),f=v;r(d,p,g)},S=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=h(f),a(f),f=p;a(d)},$=(f,d,p,g,v,w,O,x,k)=>{O=O||d.type==="svg",f==null?ce(d,p,g,v,w,O,x,k):A(f,d,v,w,O,x,k)},ce=(f,d,p,g,v,w,O,x)=>{let k,b;const{type:R,props:I,shapeFlag:z,transition:D,dirs:X}=f;if(k=f.el=o(f.type,w,I&&I.is,I),z&8?u(k,f.children):z&16&&K(f.children,k,null,g,v,w&&R!=="foreignObject",O,x),X&&_t(f,null,g,"created"),ne(k,f,f.scopeId,O,g),I){for(const Z in I)Z!=="value"&&!er(Z)&&i(k,Z,null,I[Z],w,f.children,g,v,Ge);"value"in I&&i(k,"value",null,I.value),(b=I.onVnodeBeforeMount)&&Ye(b,g,f)}X&&_t(f,null,g,"beforeMount");const ee=Dc(v,D);ee&&D.beforeEnter(k),r(k,d,p),((b=I&&I.onVnodeMounted)||ee||X)&&ke(()=>{b&&Ye(b,g,f),ee&&D.enter(k),X&&_t(f,null,g,"mounted")},v)},ne=(f,d,p,g,v)=>{if(p&&y(f,p),g)for(let w=0;w<g.length;w++)y(f,g[w]);if(v){let w=v.subTree;if(d===w){const O=v.vnode;ne(f,O,O.scopeId,O.slotScopeIds,v.parent)}}},K=(f,d,p,g,v,w,O,x,k=0)=>{for(let b=k;b<f.length;b++){const R=f[b]=x?ft(f[b]):Ve(f[b]);P(null,R,d,p,g,v,w,O,x)}},A=(f,d,p,g,v,w,O)=>{const x=d.el=f.el;let{patchFlag:k,dynamicChildren:b,dirs:R}=d;k|=f.patchFlag&16;const I=f.props||re,z=d.props||re;let D;p&&Et(p,!1),(D=z.onVnodeBeforeUpdate)&&Ye(D,p,d,f),R&&_t(d,f,p,"beforeUpdate"),p&&Et(p,!0);const X=v&&d.type!=="foreignObject";if(b?T(f.dynamicChildren,b,x,p,g,X,w):O||Q(f,d,x,null,p,g,X,w,!1),k>0){if(k&16)W(x,d,I,z,p,g,v);else if(k&2&&I.class!==z.class&&i(x,"class",null,z.class,v),k&4&&i(x,"style",I.style,z.style,v),k&8){const ee=d.dynamicProps;for(let Z=0;Z<ee.length;Z++){const fe=ee[Z],Fe=I[fe],Ft=z[fe];(Ft!==Fe||fe==="value")&&i(x,fe,Fe,Ft,v,f.children,p,g,Ge)}}k&1&&f.children!==d.children&&u(x,d.children)}else!O&&b==null&&W(x,d,I,z,p,g,v);((D=z.onVnodeUpdated)||R)&&ke(()=>{D&&Ye(D,p,d,f),R&&_t(d,f,p,"updated")},g)},T=(f,d,p,g,v,w,O)=>{for(let x=0;x<d.length;x++){const k=f[x],b=d[x],R=k.el&&(k.type===_e||!on(k,b)||k.shapeFlag&70)?m(k.el):p;P(k,b,R,null,g,v,w,O,!0)}},W=(f,d,p,g,v,w,O)=>{if(p!==g){if(p!==re)for(const x in p)!er(x)&&!(x in g)&&i(f,x,p[x],null,O,d.children,v,w,Ge);for(const x in g){if(er(x))continue;const k=g[x],b=p[x];k!==b&&x!=="value"&&i(f,x,b,k,O,d.children,v,w,Ge)}"value"in g&&i(f,"value",p.value,g.value)}},q=(f,d,p,g,v,w,O,x,k)=>{const b=d.el=f?f.el:s(""),R=d.anchor=f?f.anchor:s("");let{patchFlag:I,dynamicChildren:z,slotScopeIds:D}=d;D&&(x=x?x.concat(D):D),f==null?(r(b,p,g),r(R,p,g),K(d.children,p,R,v,w,O,x,k)):I>0&&I&64&&z&&f.dynamicChildren?(T(f.dynamicChildren,z,p,v,w,O,x),(d.key!=null||v&&d===v.subTree)&&ps(f,d,!0)):Q(f,d,p,R,v,w,O,x,k)},pe=(f,d,p,g,v,w,O,x,k)=>{d.slotScopeIds=x,f==null?d.shapeFlag&512?v.ctx.activate(d,p,g,O,k):H(d,p,g,v,w,O,k):oe(f,d,k)},H=(f,d,p,g,v,w,O)=>{const x=f.component=qc(f,g,v);if(rs(f)&&(x.ctx.renderer=Lt),Gc(x),x.asyncDep){if(v&&v.registerDep(x,B),!f.el){const k=x.subTree=be(Nt);_(null,k,d,p)}return}B(x,f,d,p,v,w,O)},oe=(f,d,p)=>{const g=d.component=f.component;if(ac(f,d,p))if(g.asyncDep&&!g.asyncResolved){se(g,d,p);return}else g.next=d,Jl(g.update),g.update();else d.el=f.el,g.vnode=d},B=(f,d,p,g,v,w,O)=>{const x=()=>{if(f.isMounted){let{next:R,bu:I,u:z,parent:D,vnode:X}=f,ee=R,Z;Et(f,!1),R?(R.el=X.el,se(f,R,O)):R=X,I&&tr(I),(Z=R.props&&R.props.onVnodeBeforeUpdate)&&Ye(Z,D,R,X),Et(f,!0);const fe=Dr(f),Fe=f.subTree;f.subTree=fe,P(Fe,fe,m(Fe.el),Fn(Fe),f,v,w),R.el=fe.el,ee===null&&ic(f,fe.el),z&&ke(z,v),(Z=R.props&&R.props.onVnodeUpdated)&&ke(()=>Ye(Z,D,R,X),v)}else{let R;const{el:I,props:z}=d,{bm:D,m:X,parent:ee}=f,Z=rr(d);if(Et(f,!1),D&&tr(D),!Z&&(R=z&&z.onVnodeBeforeMount)&&Ye(R,ee,d),Et(f,!0),I&&Fr){const fe=()=>{f.subTree=Dr(f),Fr(I,f.subTree,f,v,null)};Z?d.type.__asyncLoader().then(()=>!f.isUnmounted&&fe()):fe()}else{const fe=f.subTree=Dr(f);P(null,fe,p,g,f,v,w),d.el=fe.el}if(X&&ke(X,v),!Z&&(R=z&&z.onVnodeMounted)){const fe=d;ke(()=>Ye(R,ee,fe),v)}(d.shapeFlag&256||ee&&rr(ee.vnode)&&ee.vnode.shapeFlag&256)&&f.a&&ke(f.a,v),f.isMounted=!0,d=p=g=null}},k=f.effect=new Ma(x,()=>Fa(b),f.scope),b=f.update=()=>k.run();b.id=f.uid,Et(f,!0),b()},se=(f,d,p)=>{d.component=f;const g=f.vnode.props;f.vnode=d,f.next=null,Rc(f,d.props,g,p),Fc(f,d.children,p),tn(),wi(f),nn()},Q=(f,d,p,g,v,w,O,x,k=!1)=>{const b=f&&f.children,R=f?f.shapeFlag:0,I=d.children,{patchFlag:z,shapeFlag:D}=d;if(z>0){if(z&128){Ln(b,I,p,g,v,w,O,x,k);return}else if(z&256){xt(b,I,p,g,v,w,O,x,k);return}}D&8?(R&16&&Ge(b,v,w),I!==b&&u(p,I)):R&16?D&16?Ln(b,I,p,g,v,w,O,x,k):Ge(b,v,w,!0):(R&8&&u(p,""),D&16&&K(I,p,g,v,w,O,x,k))},xt=(f,d,p,g,v,w,O,x,k)=>{f=f||Yt,d=d||Yt;const b=f.length,R=d.length,I=Math.min(b,R);let z;for(z=0;z<I;z++){const D=d[z]=k?ft(d[z]):Ve(d[z]);P(f[z],D,p,null,v,w,O,x,k)}b>R?Ge(f,v,w,!0,!1,I):K(d,p,g,v,w,O,x,k,I)},Ln=(f,d,p,g,v,w,O,x,k)=>{let b=0;const R=d.length;let I=f.length-1,z=R-1;for(;b<=I&&b<=z;){const D=f[b],X=d[b]=k?ft(d[b]):Ve(d[b]);if(on(D,X))P(D,X,p,null,v,w,O,x,k);else break;b++}for(;b<=I&&b<=z;){const D=f[I],X=d[z]=k?ft(d[z]):Ve(d[z]);if(on(D,X))P(D,X,p,null,v,w,O,x,k);else break;I--,z--}if(b>I){if(b<=z){const D=z+1,X=D<R?d[D].el:g;for(;b<=z;)P(null,d[b]=k?ft(d[b]):Ve(d[b]),p,X,v,w,O,x,k),b++}}else if(b>z)for(;b<=I;)He(f[b],v,w,!0),b++;else{const D=b,X=b,ee=new Map;for(b=X;b<=z;b++){const Pe=d[b]=k?ft(d[b]):Ve(d[b]);Pe.key!=null&&ee.set(Pe.key,b)}let Z,fe=0;const Fe=z-X+1;let Ft=!1,ci=0;const an=new Array(Fe);for(b=0;b<Fe;b++)an[b]=0;for(b=D;b<=I;b++){const Pe=f[b];if(fe>=Fe){He(Pe,v,w,!0);continue}let Be;if(Pe.key!=null)Be=ee.get(Pe.key);else for(Z=X;Z<=z;Z++)if(an[Z-X]===0&&on(Pe,d[Z])){Be=Z;break}Be===void 0?He(Pe,v,w,!0):(an[Be-X]=b+1,Be>=ci?ci=Be:Ft=!0,P(Pe,d[Be],p,null,v,w,O,x,k),fe++)}const fi=Ft?Uc(an):Yt;for(Z=fi.length-1,b=Fe-1;b>=0;b--){const Pe=X+b,Be=d[Pe],ui=Pe+1<R?d[Pe+1].el:g;an[b]===0?P(null,Be,p,ui,v,w,O,x,k):Ft&&(Z<0||b!==fi[Z]?wt(Be,p,ui,2):Z--)}}},wt=(f,d,p,g,v=null)=>{const{el:w,type:O,transition:x,children:k,shapeFlag:b}=f;if(b&6){wt(f.component.subTree,d,p,g);return}if(b&128){f.suspense.move(d,p,g);return}if(b&64){O.move(f,d,p,Lt);return}if(O===_e){r(w,d,p);for(let I=0;I<k.length;I++)wt(k[I],d,p,g);r(f.anchor,d,p);return}if(O===Br){F(f,d,p);return}if(g!==2&&b&1&&x)if(g===0)x.beforeEnter(w),r(w,d,p),ke(()=>x.enter(w),v);else{const{leave:I,delayLeave:z,afterLeave:D}=x,X=()=>r(w,d,p),ee=()=>{I(w,()=>{X(),D&&D()})};z?z(w,X,ee):ee()}else r(w,d,p)},He=(f,d,p,g=!1,v=!1)=>{const{type:w,props:O,ref:x,children:k,dynamicChildren:b,shapeFlag:R,patchFlag:I,dirs:z}=f;if(x!=null&&la(x,null,p,f,!0),R&256){d.ctx.deactivate(f);return}const D=R&1&&z,X=!rr(f);let ee;if(X&&(ee=O&&O.onVnodeBeforeUnmount)&&Ye(ee,d,f),R&6)nl(f.component,p,g);else{if(R&128){f.suspense.unmount(p,g);return}D&&_t(f,null,d,"beforeUnmount"),R&64?f.type.remove(f,d,p,v,Lt,g):b&&(w!==_e||I>0&&I&64)?Ge(b,d,p,!1,!0):(w===_e&&I&384||!v&&R&16)&&Ge(k,d,p),g&&si(f)}(X&&(ee=O&&O.onVnodeUnmounted)||D)&&ke(()=>{ee&&Ye(ee,d,f),D&&_t(f,null,d,"unmounted")},p)},si=f=>{const{type:d,el:p,anchor:g,transition:v}=f;if(d===_e){tl(p,g);return}if(d===Br){S(f);return}const w=()=>{a(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:O,delayLeave:x}=v,k=()=>O(p,w);x?x(f.el,w,k):k()}else w()},tl=(f,d)=>{let p;for(;f!==d;)p=h(f),a(f),f=p;a(d)},nl=(f,d,p)=>{const{bum:g,scope:v,update:w,subTree:O,um:x}=f;g&&tr(g),v.stop(),w&&(w.active=!1,He(O,f,d,p)),x&&ke(x,d),ke(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ge=(f,d,p,g=!1,v=!1,w=0)=>{for(let O=w;O<f.length;O++)He(f[O],d,p,g,v)},Fn=f=>f.shapeFlag&6?Fn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),li=(f,d,p)=>{f==null?d._vnode&&He(d._vnode,null,null,!0):P(d._vnode||null,f,d,null,null,null,p),wi(),qo(),d._vnode=f},Lt={p:P,um:He,m:wt,r:si,mt:H,mc:K,pc:Q,pbc:T,n:Fn,o:e};let Lr,Fr;return t&&([Lr,Fr]=t(Lt)),{render:li,hydrate:Lr,createApp:Ic(li,Lr)}}function Et({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Dc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ps(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ft(a[i]),s.el=o.el),n||ps(o,s)),s.type===Cr&&(s.el=o.el)}}function Uc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Hc=e=>e.__isTeleport,_e=Symbol.for("v-fgt"),Cr=Symbol.for("v-txt"),Nt=Symbol.for("v-cmt"),Br=Symbol.for("v-stc"),pn=[];let $e=null;function we(e=!1){pn.push($e=e?null:[])}function Bc(){pn.pop(),$e=pn[pn.length-1]||null}let _n=1;function Ti(e){_n+=e}function hs(e){return e.dynamicChildren=_n>0?$e||Yt:null,Bc(),_n>0&&$e&&$e.push(e),e}function Ie(e,t,n,r,a,i){return hs(Y(e,t,n,r,a,i,!0))}function gs(e,t,n,r,a){return hs(be(e,t,n,r,a,!0))}function ca(e){return e?e.__v_isVNode===!0:!1}function on(e,t){return e.type===t.type&&e.key===t.key}const Pr="__vInternal",vs=({key:e})=>e??null,ar=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ue(e)||de(e)||U(e)?{i:Te,r:e,k:t,f:!!n}:e:null);function Y(e,t=null,n=null,r=0,a=null,i=e===_e?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&vs(t),ref:t&&ar(t),scopeId:Zo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Te};return s?(Ha(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ue(n)?8:16),_n>0&&!o&&$e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&$e.push(l),l}const be=Yc;function Yc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Qo)&&(e=Nt),ca(e)){const s=qt(e,t,!0);return n&&Ha(s,n),_n>0&&!i&&$e&&(s.shapeFlag&6?$e[$e.indexOf(e)]=s:$e.push(s)),s.patchFlag|=-2,s}if(tf(e)&&(e=e.__vccOpts),t){t=Vc(t);let{class:s,style:l}=t;s&&!ue(s)&&(t.class=Me(s)),te(l)&&(Ho(l)&&!L(l)&&(l=ge({},l)),t.style=Mn(l))}const o=ue(e)?1:lc(e)?128:Hc(e)?64:te(e)?4:U(e)?2:0;return Y(e,t,n,r,a,o,i,!0)}function Vc(e){return e?Ho(e)||Pr in e?ge({},e):e:null}function qt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Wc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&vs(s),ref:t&&t.ref?n&&a?L(a)?a.concat(ar(t)):[a,ar(t)]:ar(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_e?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qt(e.ssContent),ssFallback:e.ssFallback&&qt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Dt(e=" ",t=0){return be(Cr,null,e,t)}function Ua(e="",t=!1){return t?(we(),gs(Nt,null,e)):be(Nt,null,e)}function Ve(e){return e==null||typeof e=="boolean"?be(Nt):L(e)?be(_e,null,e.slice()):typeof e=="object"?ft(e):be(Cr,null,String(e))}function ft(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qt(e)}function Ha(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ha(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Pr in t)?t._ctx=Te:a===3&&Te&&(Te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:Te},n=32):(t=String(t),r&64?(n=16,t=[Dt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Wc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Me([t.class,r.class]));else if(a==="style")t.style=Mn([t.style,r.style]);else if(br(a)){const i=t[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ye(e,t,n,r=null){Ue(e,t,7,[n,r])}const Kc=ls();let Xc=0;function qc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Kc,i={uid:Xc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Po(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fs(r,a),emitsOptions:Jo(r,a),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ec.bind(null,i),e.ce&&e.ce(i),i}let he=null,Ba,jt,Ni="__VUE_INSTANCE_SETTERS__";(jt=Qr()[Ni])||(jt=Qr()[Ni]=[]),jt.push(e=>he=e),Ba=e=>{jt.length>1?jt.forEach(t=>t(e)):jt[0](e)};const Gt=e=>{Ba(e),e.scope.on()},It=()=>{he&&he.scope.off(),Ba(null)};function bs(e){return e.vnode.shapeFlag&4}let En=!1;function Gc(e,t=!1){En=t;const{props:n,children:r}=e.vnode,a=bs(e);Nc(e,n,a,t),Lc(e,r);const i=a?Jc(e,t):void 0;return En=!1,i}function Jc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Er(new Proxy(e.ctx,Ec));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Qc(e):null;Gt(e),tn();const i=mt(r,e,0,[e.props,a]);if(nn(),It(),Eo(i)){if(i.then(It,It),t)return i.then(o=>{Ri(e,o,t)}).catch(o=>{kr(o,e,0)});e.asyncDep=i}else Ri(e,i,t)}else ys(e,t)}function Ri(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:te(t)&&(e.setupState=Vo(t)),ys(e,n)}let zi;function ys(e,t,n){const r=e.type;if(!e.render){if(!t&&zi&&!r.render){const a=r.template||$a(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ge(ge({isCustomElement:i,delimiters:s},o),l);r.render=zi(a,c)}}e.render=r.render||Xe}{Gt(e),tn();try{kc(e)}finally{nn(),It()}}}function Zc(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ce(e,"get","$attrs"),t[n]}}))}function Qc(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Zc(e)},slots:e.slots,emit:e.emit,expose:t}}function Sr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Vo(Er(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in dn)return dn[n](e)},has(t,n){return n in t||n in dn}}))}function ef(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function tf(e){return U(e)&&"__vccOpts"in e}const Oe=(e,t)=>Xl(e,t,En);function nf(e,t,n){const r=arguments.length;return r===2?te(t)&&!L(t)?ca(t)?be(e,null,[t]):be(e,t):be(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ca(n)&&(n=[n]),be(e,t,n))}const rf=Symbol.for("v-scx"),af=()=>mn(rf),of="3.3.12",sf="http://www.w3.org/2000/svg",Ot=typeof document<"u"?document:null,Li=Ot&&Ot.createElement("template"),lf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Ot.createElementNS(sf,e):Ot.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Ot.createTextNode(e),createComment:e=>Ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Li.innerHTML=r?`<svg>${e}</svg>`:e;const s=Li.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},cf=Symbol("_vtc");function ff(e,t,n){const r=e[cf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ya=Symbol("_vod"),Yr={beforeMount(e,{value:t},{transition:n}){e[Ya]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):sn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),sn(e,!0),r.enter(e)):r.leave(e,()=>{sn(e,!1)}):sn(e,t))},beforeUnmount(e,{value:t}){sn(e,t)}};function sn(e,t){e.style.display=t?e[Ya]:"none"}const uf=Symbol("");function df(e,t,n){const r=e.style,a=ue(n);if(n&&!a){if(t&&!ue(t))for(const i in t)n[i]==null&&fa(r,i,"");for(const i in n)fa(r,i,n[i])}else{const i=r.display;if(a){if(t!==n){const o=r[uf];o&&(n+=";"+o),r.cssText=n}}else t&&e.removeAttribute("style");Ya in e&&(r.display=i)}}const Fi=/\s*!important$/;function fa(e,t,n){if(L(n))n.forEach(r=>fa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=mf(e,t);Fi.test(n)?e.setProperty(en(r),n.replace(Fi,""),"important"):e[r]=n}}const ji=["Webkit","Moz","ms"],Vr={};function mf(e,t){const n=Vr[t];if(n)return n;let r=qe(t);if(r!=="filter"&&r in e)return Vr[t]=r;r=xr(r);for(let a=0;a<ji.length;a++){const i=ji[a]+r;if(i in e)return Vr[t]=i}return t}const $i="http://www.w3.org/1999/xlink";function pf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS($i,t.slice(6,t.length)):e.setAttributeNS($i,t,n);else{const i=hl(t);n==null||i&&!Ao(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function hf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ao(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Ze(e,t,n,r){e.addEventListener(t,n,r)}function gf(e,t,n,r){e.removeEventListener(t,n,r)}const Di=Symbol("_vei");function vf(e,t,n,r,a=null){const i=e[Di]||(e[Di]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=bf(t);if(r){const c=i[t]=wf(r,a);Ze(e,s,c,l)}else o&&(gf(e,s,o,l),i[t]=void 0)}}const Ui=/(?:Once|Passive|Capture)$/;function bf(e){let t;if(Ui.test(e)){t={};let r;for(;r=e.match(Ui);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):en(e.slice(2)),t]}let Wr=0;const yf=Promise.resolve(),xf=()=>Wr||(yf.then(()=>Wr=0),Wr=Date.now());function wf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ue(_f(r,n.value),t,5,[r])};return n.value=e,n.attached=xf(),n}function _f(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Hi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ef=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?ff(e,r,a):t==="style"?df(e,n,r):br(t)?Aa(t)||vf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):kf(e,t,r,a))?hf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),pf(e,t,r,a))};function kf(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Hi(t)&&U(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return Hi(t)&&ue(n)?!1:t in e}const gt=e=>{const t=e.props["onUpdate:modelValue"]||!1;return L(t)?n=>tr(t,n):t};function Of(e){e.target.composing=!0}function Bi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Le=Symbol("_assign"),Ut={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e[Le]=gt(a);const i=r||a.props&&a.props.type==="number";Ze(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=lr(s)),e[Le](s)}),n&&Ze(e,"change",()=>{e.value=e.value.trim()}),t||(Ze(e,"compositionstart",Of),Ze(e,"compositionend",Bi),Ze(e,"change",Bi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e[Le]=gt(i),e.composing)return;const o=a||e.type==="number"?lr(e.value):e.value,s=t??"";o!==s&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===s)||(e.value=s))}},Af={deep:!0,created(e,t,n){e[Le]=gt(n),Ze(e,"change",()=>{const r=e._modelValue,a=Jt(e),i=e.checked,o=e[Le];if(L(r)){const s=Sa(r,a),l=s!==-1;if(i&&!l)o(r.concat(a));else if(!i&&l){const c=[...r];c.splice(s,1),o(c)}}else if(Qt(r)){const s=new Set(r);i?s.add(a):s.delete(a),o(s)}else o(xs(e,i))})},mounted:Yi,beforeUpdate(e,t,n){e[Le]=gt(n),Yi(e,t,n)}};function Yi(e,{value:t,oldValue:n},r){e._modelValue=t,L(t)?e.checked=Sa(t,r.props.value)>-1:Qt(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Tt(t,xs(e,!0)))}const Cf={created(e,{value:t},n){e.checked=Tt(t,n.props.value),e[Le]=gt(n),Ze(e,"change",()=>{e[Le](Jt(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[Le]=gt(r),t!==n&&(e.checked=Tt(t,r.props.value))}},Pf={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=Qt(t);Ze(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?lr(Jt(o)):Jt(o));e[Le](e.multiple?a?new Set(i):i:i[0])}),e[Le]=gt(r)},mounted(e,{value:t}){Vi(e,t)},beforeUpdate(e,t,n){e[Le]=gt(n)},updated(e,{value:t}){Vi(e,t)}};function Vi(e,t){const n=e.multiple;if(!(n&&!L(t)&&!Qt(t))){for(let r=0,a=e.options.length;r<a;r++){const i=e.options[r],o=Jt(i);if(n)L(t)?i.selected=Sa(t,o)>-1:i.selected=t.has(o);else if(Tt(Jt(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Jt(e){return"_value"in e?e._value:e.value}function xs(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Sf={created(e,t,n){Yn(e,t,n,null,"created")},mounted(e,t,n){Yn(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){Yn(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){Yn(e,t,n,r,"updated")}};function If(e,t){switch(e){case"SELECT":return Pf;case"TEXTAREA":return Ut;default:switch(t){case"checkbox":return Af;case"radio":return Cf;default:return Ut}}}function Yn(e,t,n,r,a){const o=If(e.tagName,n.props&&n.props.type)[a];o&&o(e,t,n,r)}const Mf=["ctrl","shift","alt","meta"],Tf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Mf.some(n=>e[`${n}Key`]&&!t.includes(n))},Ae=(e,t)=>e._withMods||(e._withMods=(n,...r)=>{for(let a=0;a<t.length;a++){const i=Tf[t[a]];if(i&&i(n,t))return}return e(n,...r)}),Nf=ge({patchProp:Ef},lf);let Wi;function Rf(){return Wi||(Wi=jc(Nf))}const zf=(...e)=>{const t=Rf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Lf(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Lf(e){return ue(e)?document.querySelector(e):e}function Ki(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ki(Object(n),!0).forEach(function(r){me(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ki(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mr(e){"@babel/helpers - typeof";return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(e)}function Ff(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function jf(e,t,n){return t&&Xi(e.prototype,t),n&&Xi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Va(e,t){return Df(e)||Hf(e,t)||ws(e,t)||Yf()}function Tn(e){return $f(e)||Uf(e)||ws(e)||Bf()}function $f(e){if(Array.isArray(e))return ua(e)}function Df(e){if(Array.isArray(e))return e}function Uf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Hf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function ws(e,t){if(e){if(typeof e=="string")return ua(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ua(e,t)}}function ua(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Bf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var qi=function(){},Wa={},_s={},Es=null,ks={mark:qi,measure:qi};try{typeof window<"u"&&(Wa=window),typeof document<"u"&&(_s=document),typeof MutationObserver<"u"&&(Es=MutationObserver),typeof performance<"u"&&(ks=performance)}catch{}var Vf=Wa.navigator||{},Gi=Vf.userAgent,Ji=Gi===void 0?"":Gi,vt=Wa,ie=_s,Zi=Es,Vn=ks;vt.document;var it=!!ie.documentElement&&!!ie.head&&typeof ie.addEventListener=="function"&&typeof ie.createElement=="function",Os=~Ji.indexOf("MSIE")||~Ji.indexOf("Trident/"),Wn,Kn,Xn,qn,Gn,tt="___FONT_AWESOME___",da=16,As="fa",Cs="svg-inline--fa",Rt="data-fa-i2svg",ma="data-fa-pseudo-element",Wf="data-fa-pseudo-element-pending",Ka="data-prefix",Xa="data-icon",Qi="fontawesome-i2svg",Kf="async",Xf=["HTML","HEAD","STYLE","SCRIPT"],Ps=function(){try{return!0}catch{return!1}}(),ae="classic",le="sharp",qa=[ae,le];function Nn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ae]}})}var kn=Nn((Wn={},me(Wn,ae,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),me(Wn,le,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Wn)),On=Nn((Kn={},me(Kn,ae,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),me(Kn,le,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Kn)),An=Nn((Xn={},me(Xn,ae,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),me(Xn,le,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Xn)),qf=Nn((qn={},me(qn,ae,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),me(qn,le,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),qn)),Gf=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ss="fa-layers-text",Jf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Zf=Nn((Gn={},me(Gn,ae,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),me(Gn,le,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Gn)),Is=[1,2,3,4,5,6,7,8,9,10],Qf=Is.concat([11,12,13,14,15,16,17,18,19,20]),eu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ct={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Cn=new Set;Object.keys(On[ae]).map(Cn.add.bind(Cn));Object.keys(On[le]).map(Cn.add.bind(Cn));var tu=[].concat(qa,Tn(Cn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ct.GROUP,Ct.SWAP_OPACITY,Ct.PRIMARY,Ct.SECONDARY]).concat(Is.map(function(e){return"".concat(e,"x")})).concat(Qf.map(function(e){return"w-".concat(e)})),hn=vt.FontAwesomeConfig||{};function nu(e){var t=ie.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ru(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ie&&typeof ie.querySelector=="function"){var au=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];au.forEach(function(e){var t=Va(e,2),n=t[0],r=t[1],a=ru(nu(n));a!=null&&(hn[r]=a)})}var Ms={styleDefault:"solid",familyDefault:"classic",cssPrefix:As,replacementClass:Cs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};hn.familyPrefix&&(hn.cssPrefix=hn.familyPrefix);var Zt=C(C({},Ms),hn);Zt.autoReplaceSvg||(Zt.observeMutations=!1);var M={};Object.keys(Ms).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Zt[e]=n,gn.forEach(function(r){return r(M)})},get:function(){return Zt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Zt.cssPrefix=t,gn.forEach(function(n){return n(M)})},get:function(){return Zt.cssPrefix}});vt.FontAwesomeConfig=M;var gn=[];function iu(e){return gn.push(e),function(){gn.splice(gn.indexOf(e),1)}}var lt=da,Ke={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ou(e){if(!(!e||!it)){var t=ie.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ie.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ie.head.insertBefore(t,r),e}}var su="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Pn(){for(var e=12,t="";e-- >0;)t+=su[Math.random()*62|0];return t}function rn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ga(e){return e.classList?rn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ts(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ts(e[n]),'" ')},"").trim()}function Ir(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ja(e){return e.size!==Ke.size||e.x!==Ke.x||e.y!==Ke.y||e.rotate!==Ke.rotate||e.flipX||e.flipY}function cu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function fu(e){var t=e.transform,n=e.width,r=n===void 0?da:n,a=e.height,i=a===void 0?da:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Os?l+="translate(".concat(t.x/lt-r/2,"em, ").concat(t.y/lt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/lt,"em), calc(-50% + ").concat(t.y/lt,"em)) "):l+="translate(".concat(t.x/lt,"em, ").concat(t.y/lt,"em) "),l+="scale(".concat(t.size/lt*(t.flipX?-1:1),", ").concat(t.size/lt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var uu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ns(){var e=As,t=Cs,n=M.cssPrefix,r=M.replacementClass,a=uu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var eo=!1;function Kr(){M.autoAddCss&&!eo&&(ou(Ns()),eo=!0)}var du={mixout:function(){return{dom:{css:Ns,insertCss:Kr}}},hooks:function(){return{beforeDOMElementCreation:function(){Kr()},beforeI2svg:function(){Kr()}}}},nt=vt||{};nt[tt]||(nt[tt]={});nt[tt].styles||(nt[tt].styles={});nt[tt].hooks||(nt[tt].hooks={});nt[tt].shims||(nt[tt].shims=[]);var De=nt[tt],Rs=[],mu=function e(){ie.removeEventListener("DOMContentLoaded",e),pr=1,Rs.map(function(t){return t()})},pr=!1;it&&(pr=(ie.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ie.readyState),pr||ie.addEventListener("DOMContentLoaded",mu));function pu(e){it&&(pr?setTimeout(e,0):Rs.push(e))}function Rn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ts(e):"<".concat(t," ").concat(lu(r),">").concat(i.map(Rn).join(""),"</").concat(t,">")}function to(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var hu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Xr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?hu(n,a):n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,t[c],c,t);return u};function gu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function pa(e){var t=gu(e);return t.length===1?t[0].toString(16):null}function vu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function no(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ha(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=no(t);typeof De.hooks.addPack=="function"&&!a?De.hooks.addPack(e,no(t)):De.styles[e]=C(C({},De.styles[e]||{}),i),e==="fas"&&ha("fa",t)}var Jn,Zn,Qn,Ht=De.styles,bu=De.shims,yu=(Jn={},me(Jn,ae,Object.values(An[ae])),me(Jn,le,Object.values(An[le])),Jn),Za=null,zs={},Ls={},Fs={},js={},$s={},xu=(Zn={},me(Zn,ae,Object.keys(kn[ae])),me(Zn,le,Object.keys(kn[le])),Zn);function wu(e){return~tu.indexOf(e)}function _u(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!wu(a)?a:null}var Ds=function(){var t=function(i){return Xr(Ht,function(o,s,l){return o[l]=Xr(s,i,{}),o},{})};zs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ls=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),$s=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ht||M.autoFetchSvg,r=Xr(bu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Fs=r.names,js=r.unicodes,Za=Mr(M.styleDefault,{family:M.familyDefault})};iu(function(e){Za=Mr(e.styleDefault,{family:M.familyDefault})});Ds();function Qa(e,t){return(zs[e]||{})[t]}function Eu(e,t){return(Ls[e]||{})[t]}function Pt(e,t){return($s[e]||{})[t]}function Us(e){return Fs[e]||{prefix:null,iconName:null}}function ku(e){var t=js[e],n=Qa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function bt(){return Za}var ei=function(){return{prefix:null,iconName:null,rest:[]}};function Mr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ae:n,a=kn[r][e],i=On[r][e]||On[r][a],o=e in De.styles?e:null;return i||o||null}var ro=(Qn={},me(Qn,ae,Object.keys(An[ae])),me(Qn,le,Object.keys(An[le])),Qn);function Tr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},me(t,ae,"".concat(M.cssPrefix,"-").concat(ae)),me(t,le,"".concat(M.cssPrefix,"-").concat(le)),t),o=null,s=ae;(e.includes(i[ae])||e.some(function(c){return ro[ae].includes(c)}))&&(s=ae),(e.includes(i[le])||e.some(function(c){return ro[le].includes(c)}))&&(s=le);var l=e.reduce(function(c,u){var m=_u(M.cssPrefix,u);if(Ht[u]?(u=yu[s].includes(u)?qf[s][u]:u,o=u,c.prefix=u):xu[s].indexOf(u)>-1?(o=u,c.prefix=Mr(u,{family:s})):m?c.iconName=m:u!==M.replacementClass&&u!==i[ae]&&u!==i[le]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var h=o==="fa"?Us(c.iconName):{},y=Pt(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||y||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!Ht.far&&Ht.fas&&!M.autoFetchSvg&&(c.prefix="fas")}return c},ei());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===le&&(Ht.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Pt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=bt()||"fas"),l}var Ou=function(){function e(){Ff(this,e),this.definitions={}}return jf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=C(C({},n.definitions[s]||{}),o[s]),ha(s,o[s]);var l=An[ae][s];l&&ha(l,o[s]),Ds()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),ao=[],Bt={},Kt={},Au=Object.keys(Kt);function Cu(e,t){var n=t.mixoutsTo;return ao=e,Bt={},Object.keys(Kt).forEach(function(r){Au.indexOf(r)===-1&&delete Kt[r]}),ao.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),mr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Bt[o]||(Bt[o]=[]),Bt[o].push(i[o])})}r.provides&&r.provides(Kt)}),n}function ga(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Bt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function zt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Bt[e]||[];a.forEach(function(i){i.apply(null,n)})}function rt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Kt[e]?Kt[e].apply(null,t):void 0}function va(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||bt();if(t)return t=Pt(n,t)||t,to(Hs.definitions,n,t)||to(De.styles,n,t)}var Hs=new Ou,Pu=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,zt("noAuto")},Su={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return it?(zt("beforeI2svg",t),rt("pseudoElements2svg",t),rt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,pu(function(){Mu({autoReplaceSvgRoot:n}),zt("watch",t)})}},Iu={icon:function(t){if(t===null)return null;if(mr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Pt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Mr(t[0]);return{prefix:r,iconName:Pt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(Gf))){var a=Tr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||bt(),iconName:Pt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=bt();return{prefix:i,iconName:Pt(i,t)||t}}}},Ne={noAuto:Pu,config:M,dom:Su,parse:Iu,library:Hs,findIconDefinition:va,toHtml:Rn},Mu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ie:n;(Object.keys(De.styles).length>0||M.autoFetchSvg)&&it&&M.autoReplaceSvg&&Ne.dom.i2svg({node:r})};function Nr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Rn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(it){var r=ie.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Tu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ja(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Ir(C(C({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Nu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},a),{},{id:o}),children:r}]}]}function ti(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,u=e.titleId,m=e.extra,h=e.watchable,y=h===void 0?!1:h,N=r.found?r:n,P=N.width,V=N.height,_=a==="fak",E=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(A){return m.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(m.classes).join(" "),F={children:[],attributes:C(C({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(V)})},S=_&&!~m.classes.indexOf("fa-fw")?{width:"".concat(P/V*16*.0625,"em")}:{};y&&(F.attributes[Rt]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(u||Pn())},children:[l]}),delete F.attributes.title);var $=C(C({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:C(C({},S),m.styles)}),ce=r.found&&n.found?rt("generateAbstractMask",$)||{children:[],attributes:{}}:rt("generateAbstractIcon",$)||{children:[],attributes:{}},ne=ce.children,K=ce.attributes;return $.children=ne,$.attributes=K,s?Nu($):Tu($)}function io(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=C(C(C({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Rt]="");var u=C({},o.styles);Ja(a)&&(u.transform=fu({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=Ir(u);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Ru(e){var t=e.content,n=e.title,r=e.extra,a=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ir(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var qr=De.styles;function ba(e){var t=e[0],n=e[1],r=e.slice(4),a=Va(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Ct.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Ct.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var zu={found:!1,width:512,height:512};function Lu(e,t){!Ps&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ya(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=bt()),new Promise(function(r,a){if(rt("missingIconAbstract"),n==="fa"){var i=Us(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&qr[t]&&qr[t][e]){var o=qr[t][e];return r(ba(o))}Lu(e,t),r(C(C({},zu),{},{icon:M.showMissingIcons&&e?rt("missingIconAbstract")||{}:{}}))})}var oo=function(){},xa=M.measurePerformance&&Vn&&Vn.mark&&Vn.measure?Vn:{mark:oo,measure:oo},fn='FA "6.5.1"',Fu=function(t){return xa.mark("".concat(fn," ").concat(t," begins")),function(){return Bs(t)}},Bs=function(t){xa.mark("".concat(fn," ").concat(t," ends")),xa.measure("".concat(fn," ").concat(t),"".concat(fn," ").concat(t," begins"),"".concat(fn," ").concat(t," ends"))},ni={begin:Fu,end:Bs},ir=function(){};function so(e){var t=e.getAttribute?e.getAttribute(Rt):null;return typeof t=="string"}function ju(e){var t=e.getAttribute?e.getAttribute(Ka):null,n=e.getAttribute?e.getAttribute(Xa):null;return t&&n}function $u(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function Du(){if(M.autoReplaceSvg===!0)return or.replace;var e=or[M.autoReplaceSvg];return e||or.replace}function Uu(e){return ie.createElementNS("http://www.w3.org/2000/svg",e)}function Hu(e){return ie.createElement(e)}function Ys(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Uu:Hu:n;if(typeof e=="string")return ie.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ys(o,{ceFn:r}))}),a}function Bu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var or={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ys(a),n)}),n.getAttribute(Rt)===null&&M.keepOriginalSource){var r=ie.createComment(Bu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ga(n).indexOf(M.replacementClass))return or.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Rn(s)}).join(`
`);n.setAttribute(Rt,""),n.innerHTML=o}};function lo(e){e()}function Vs(e,t){var n=typeof t=="function"?t:ir;if(e.length===0)n();else{var r=lo;M.mutateApproach===Kf&&(r=vt.requestAnimationFrame||lo),r(function(){var a=Du(),i=ni.begin("mutate");e.map(a),i(),n()})}}var ri=!1;function Ws(){ri=!0}function wa(){ri=!1}var hr=null;function co(e){if(Zi&&M.observeMutations){var t=e.treeCallback,n=t===void 0?ir:t,r=e.nodeCallback,a=r===void 0?ir:r,i=e.pseudoElementsCallback,o=i===void 0?ir:i,s=e.observeMutationsRoot,l=s===void 0?ie:s;hr=new Zi(function(c){if(!ri){var u=bt();rn(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!so(m.addedNodes[0])&&(M.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&M.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&so(m.target)&&~eu.indexOf(m.attributeName))if(m.attributeName==="class"&&ju(m.target)){var h=Tr(Ga(m.target)),y=h.prefix,N=h.iconName;m.target.setAttribute(Ka,y||u),N&&m.target.setAttribute(Xa,N)}else $u(m.target)&&a(m.target)})}}),it&&hr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Yu(){hr&&hr.disconnect()}function Vu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Wu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Tr(Ga(e));return a.prefix||(a.prefix=bt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Eu(a.prefix,e.innerText)||Qa(a.prefix,pa(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ku(e){var t=rn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Pn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Xu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ke,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Wu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Ku(e),s=ga("parseNodeAttributes",{},e),l=t.styleParser?Vu(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ke,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var qu=De.styles;function Ks(e){var t=M.autoReplaceSvg==="nest"?fo(e,{styleParser:!1}):fo(e);return~t.extra.classes.indexOf(Ss)?rt("generateLayersText",e,t):rt("generateSvgReplacementMutation",e,t)}var yt=new Set;qa.map(function(e){yt.add("fa-".concat(e))});Object.keys(kn[ae]).map(yt.add.bind(yt));Object.keys(kn[le]).map(yt.add.bind(yt));yt=Tn(yt);function uo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!it)return Promise.resolve();var n=ie.documentElement.classList,r=function(m){return n.add("".concat(Qi,"-").concat(m))},a=function(m){return n.remove("".concat(Qi,"-").concat(m))},i=M.autoFetchSvg?yt:qa.map(function(u){return"fa-".concat(u)}).concat(Object.keys(qu));i.includes("fa")||i.push("fa");var o=[".".concat(Ss,":not([").concat(Rt,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Rt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=rn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ni.begin("onTree"),c=s.reduce(function(u,m){try{var h=Ks(m);h&&u.push(h)}catch(y){Ps||y.name==="MissingIcon"&&console.error(y)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(h){Vs(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(h){l(),m(h)})})}function Gu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ks(e).then(function(n){n&&Vs([n],t)})}function Ju(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:va(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:va(a||{})),e(r,C(C({},n),{},{mask:a}))}}var Zu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ke:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,h=m===void 0?null:m,y=n.titleId,N=y===void 0?null:y,P=n.classes,V=P===void 0?[]:P,_=n.attributes,E=_===void 0?{}:_,F=n.styles,S=F===void 0?{}:F;if(t){var $=t.prefix,ce=t.iconName,ne=t.icon;return Nr(C({type:"icon"},t),function(){return zt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(h?E["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(N||Pn()):(E["aria-hidden"]="true",E.focusable="false")),ti({icons:{main:ba(ne),mask:l?ba(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:ce,transform:C(C({},Ke),a),symbol:o,title:h,maskId:u,titleId:N,extra:{attributes:E,styles:S,classes:V}})})}},Qu={mixout:function(){return{icon:Ju(Zu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=uo,n.nodeCallback=Gu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ie:r,i=n.callback,o=i===void 0?function(){}:i;return uo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,h=r.extra;return new Promise(function(y,N){Promise.all([ya(a,s),u.iconName?ya(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var V=Va(P,2),_=V[0],E=V[1];y([n,ti({icons:{main:_,mask:E},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(N)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Ir(s);l.length>0&&(a.style=l);var c;return Ja(o)&&(c=rt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},ed={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Nr({type:"layer"},function(){zt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Tn(i)).join(" ")},children:o}]})}}}},td={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return Nr({type:"counter",content:n},function(){return zt("beforeDOMElementCreation",{content:n,params:r}),Ru({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Tn(s))}})})}}}},nd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ke:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,h=r.styles,y=h===void 0?{}:h;return Nr({type:"text",content:n},function(){return zt("beforeDOMElementCreation",{content:n,params:r}),io({content:n,transform:C(C({},Ke),i),title:s,extra:{attributes:m,styles:y,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Tn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Os){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,io({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},rd=new RegExp('"',"ug"),mo=[1105920,1112319];function ad(e){var t=e.replace(rd,""),n=vu(t,0),r=n>=mo[0]&&n<=mo[1],a=t.length===2?t[0]===t[1]:!1;return{value:pa(a?t[0]:t),isSecondary:r||a}}function po(e,t){var n="".concat(Wf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=rn(e.children),o=i.filter(function(ne){return ne.getAttribute(ma)===t})[0],s=vt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Jf),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?le:ae,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?On[h][l[2].toLowerCase()]:Zf[h][c],N=ad(m),P=N.value,V=N.isSecondary,_=l[0].startsWith("FontAwesome"),E=Qa(y,P),F=E;if(_){var S=ku(P);S.iconName&&S.prefix&&(E=S.iconName,y=S.prefix)}if(E&&!V&&(!o||o.getAttribute(Ka)!==y||o.getAttribute(Xa)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var $=Xu(),ce=$.extra;ce.attributes[ma]=t,ya(E,y).then(function(ne){var K=ti(C(C({},$),{},{icons:{main:ne,mask:ei()},prefix:y,iconName:F,extra:ce,watchable:!0})),A=ie.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(A,e.firstChild):e.appendChild(A),A.outerHTML=K.map(function(T){return Rn(T)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function id(e){return Promise.all([po(e,"::before"),po(e,"::after")])}function od(e){return e.parentNode!==document.head&&!~Xf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ma)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ho(e){if(it)return new Promise(function(t,n){var r=rn(e.querySelectorAll("*")).filter(od).map(id),a=ni.begin("searchPseudoElements");Ws(),Promise.all(r).then(function(){a(),wa(),t()}).catch(function(){a(),wa(),n()})})}var sd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ho,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ie:r;M.searchPseudoElements&&ho(a)}}},go=!1,ld={mixout:function(){return{dom:{unwatch:function(){Ws(),go=!0}}}},hooks:function(){return{bootstrap:function(){co(ga("mutationObserverCallbacks",{}))},noAuto:function(){Yu()},watch:function(n){var r=n.observeMutationsRoot;go?wa():co(ga("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},vo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},cd={mixout:function(){return{parse:{transform:function(n){return vo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=vo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},y={outer:s,inner:m,path:h};return{tag:"g",attributes:C({},y.outer),children:[{tag:"g",attributes:C({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),y.path)}]}]}}}},Gr={x:0,y:0,width:"100%",height:"100%"};function bo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function fd(e){return e.tag==="g"?e.children:[e]}var ud={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Tr(a.split(" ").map(function(o){return o.trim()})):ei();return i.prefix||(i.prefix=bt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,h=o.icon,y=cu({transform:l,containerWidth:m,iconWidth:c}),N={tag:"rect",attributes:C(C({},Gr),{},{fill:"white"})},P=u.children?{children:u.children.map(bo)}:{},V={tag:"g",attributes:C({},y.inner),children:[bo(C({tag:u.tag,attributes:C(C({},u.attributes),y.path)},P))]},_={tag:"g",attributes:C({},y.outer),children:[V]},E="mask-".concat(s||Pn()),F="clip-".concat(s||Pn()),S={tag:"mask",attributes:C(C({},Gr),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,_]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:fd(h)},S]};return r.push($,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(E,")")},Gr)}),{children:r,attributes:a}}}},dd={provides:function(t){var n=!1;vt.matchMedia&&(n=vt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:C(C({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(C({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:C(C({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},md={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},pd=[du,Qu,ed,td,nd,sd,ld,cd,ud,dd,md];Cu(pd,{mixoutsTo:Ne});Ne.noAuto;Ne.config;var zn=Ne.library;Ne.dom;var _a=Ne.parse;Ne.findIconDefinition;Ne.toHtml;var hd=Ne.icon;Ne.layer;Ne.text;Ne.counter;function yo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yo(Object(n),!0).forEach(function(r){Ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gr(e){"@babel/helpers - typeof";return gr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gr(e)}function Ee(e,t,n){return t=yd(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function vd(e,t){if(e==null)return{};var n=gd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function bd(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function yd(e){var t=bd(e,"string");return typeof t=="symbol"?t:String(t)}var xd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xs={exports:{}};(function(e){(function(t){var n=function(_,E,F){if(!c(E)||m(E)||h(E)||y(E)||l(E))return E;var S,$=0,ce=0;if(u(E))for(S=[],ce=E.length;$<ce;$++)S.push(n(_,E[$],F));else{S={};for(var ne in E)Object.prototype.hasOwnProperty.call(E,ne)&&(S[_(ne,F)]=n(_,E[ne],F))}return S},r=function(_,E){E=E||{};var F=E.separator||"_",S=E.split||/(?=[A-Z])/;return _.split(S).join(F)},a=function(_){return N(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(E,F){return F?F.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},i=function(_){var E=a(_);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(_,E){return r(_,E).toLowerCase()},s=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return s.call(_)=="[object Array]"},m=function(_){return s.call(_)=="[object Date]"},h=function(_){return s.call(_)=="[object RegExp]"},y=function(_){return s.call(_)=="[object Boolean]"},N=function(_){return _=_-0,_===_},P=function(_,E){var F=E&&"process"in E?E.process:E;return typeof F!="function"?_:function(S,$){return F(S,_,$)}},V={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(_,E){return n(P(a,E),_)},decamelizeKeys:function(_,E){return n(P(o,E),_,E)},pascalizeKeys:function(_,E){return n(P(i,E),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=V:t.humps=V})(xd)})(Xs);var wd=Xs.exports,_d=["class","style"];function Ed(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=wd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function kd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function qs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return qs(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=kd(u);break;case"style":l.style=Ed(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=vd(n,_d);return nf(e.tag,Qe(Qe(Qe({},t),{},{class:a.class,style:Qe(Qe({},a.style),o)},a.attrs),s),r)}var Gs=!1;try{Gs=!0}catch{}function Od(){if(!Gs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Jr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ee({},e,t):{}}function Ad(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Ee(t,"fa-".concat(e.size),e.size!==null),Ee(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Ee(t,"fa-pull-".concat(e.pull),e.pull!==null),Ee(t,"fa-swap-opacity",e.swapOpacity),Ee(t,"fa-bounce",e.bounce),Ee(t,"fa-shake",e.shake),Ee(t,"fa-beat",e.beat),Ee(t,"fa-fade",e.fade),Ee(t,"fa-beat-fade",e.beatFade),Ee(t,"fa-flash",e.flash),Ee(t,"fa-spin-pulse",e.spinPulse),Ee(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function xo(e){if(e&&gr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(_a.icon)return _a.icon(e);if(e===null)return null;if(gr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Cd=uc({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Oe(function(){return xo(t.icon)}),i=Oe(function(){return Jr("classes",Ad(t))}),o=Oe(function(){return Jr("transform",typeof t.transform=="string"?_a.transform(t.transform):t.transform)}),s=Oe(function(){return Jr("mask",xo(t.mask))}),l=Oe(function(){return hd(a.value,Qe(Qe(Qe(Qe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});un(l,function(u){if(!u)return Od("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=Oe(function(){return l.value?qs(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Pd={prefix:"fas",iconName:"arrow-pointer",icon:[320,512,["mouse-pointer"],"f245","M0 55.2V426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320H297.9c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"]},Sd={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]},Id={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},Md={prefix:"fas",iconName:"grip-vertical",icon:[320,512,[],"f58e","M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"]},Td={prefix:"fas",iconName:"arrow-right-long",icon:[512,512,["long-arrow-right"],"f178","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},Nd=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Js;const Rr=e=>Js=e,Zs=Symbol();function Ea(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var vn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(vn||(vn={}));function Rd(){const e=So(!0),t=e.run(()=>xe({}));let n=[],r=[];const a=Er({install(i){Rr(a),a._a=i,i.provide(Zs,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Nd?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const Qs=()=>{};function wo(e,t,n,r=Qs){e.push(t);const a=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Io()&&bl(a),a}function $t(e,...t){e.slice().forEach(n=>{n(...t)})}const zd=e=>e();function ka(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],a=e[n];Ea(a)&&Ea(r)&&e.hasOwnProperty(n)&&!de(r)&&!dt(r)?e[n]=ka(a,r):e[n]=r}return e}const Ld=Symbol();function Fd(e){return!Ea(e)||!e.hasOwnProperty(Ld)}const{assign:ct}=Object;function jd(e){return!!(de(e)&&e.effect)}function $d(e,t,n,r){const{state:a,actions:i,getters:o}=t,s=n.state.value[e];let l;function c(){s||(n.state.value[e]=a?a():{});const u=Yl(n.state.value[e]);return ct(u,i,Object.keys(o||{}).reduce((m,h)=>(m[h]=Er(Oe(()=>{Rr(n);const y=n._s.get(e);return o[h].call(y,y)})),m),{}))}return l=el(e,c,t,n,r,!0),l}function el(e,t,n={},r,a,i){let o;const s=ct({actions:{}},n),l={deep:!0};let c,u,m=[],h=[],y;const N=r.state.value[e];!i&&!N&&(r.state.value[e]={}),xe({});let P;function V(K){let A;c=u=!1,typeof K=="function"?(K(r.state.value[e]),A={type:vn.patchFunction,storeId:e,events:y}):(ka(r.state.value[e],K),A={type:vn.patchObject,payload:K,storeId:e,events:y});const T=P=Symbol();Ko().then(()=>{P===T&&(c=!0)}),u=!0,$t(m,A,r.state.value[e])}const _=i?function(){const{state:A}=n,T=A?A():{};this.$patch(W=>{ct(W,T)})}:Qs;function E(){o.stop(),m=[],h=[],r._s.delete(e)}function F(K,A){return function(){Rr(r);const T=Array.from(arguments),W=[],q=[];function pe(B){W.push(B)}function H(B){q.push(B)}$t(h,{args:T,name:K,store:$,after:pe,onError:H});let oe;try{oe=A.apply(this&&this.$id===e?this:$,T)}catch(B){throw $t(q,B),B}return oe instanceof Promise?oe.then(B=>($t(W,B),B)).catch(B=>($t(q,B),Promise.reject(B))):($t(W,oe),oe)}}const S={_p:r,$id:e,$onAction:wo.bind(null,h),$patch:V,$reset:_,$subscribe(K,A={}){const T=wo(m,K,A.detached,()=>W()),W=o.run(()=>un(()=>r.state.value[e],q=>{(A.flush==="sync"?u:c)&&K({storeId:e,type:vn.direct,events:y},q)},ct({},l,A)));return T},$dispose:E},$=_r(S);r._s.set(e,$);const ne=(r._a&&r._a.runWithContext||zd)(()=>r._e.run(()=>(o=So()).run(t)));for(const K in ne){const A=ne[K];if(de(A)&&!jd(A)||dt(A))i||(N&&Fd(A)&&(de(A)?A.value=N[K]:ka(A,N[K])),r.state.value[e][K]=A);else if(typeof A=="function"){const T=F(K,A);ne[K]=T,s.actions[K]=A}}return ct($,ne),ct(J($),ne),Object.defineProperty($,"$state",{get:()=>r.state.value[e],set:K=>{V(A=>{ct(A,K)})}}),r._p.forEach(K=>{ct($,o.run(()=>K({store:$,app:r._a,pinia:r,options:s})))}),N&&i&&n.hydrate&&n.hydrate($.$state,N),c=!0,u=!0,$}function Dd(e,t,n){let r,a;const i=typeof t=="function";typeof e=="string"?(r=e,a=i?n:t):(a=e,r=e.id);function o(s,l){const c=Tc();return s=s||(c?mn(Zs,null):null),s&&Rr(s),s=Js,s._s.has(r)||(i?el(r,t,a,s):$d(r,a,s)),s._s.get(r)}return o.$id=r,o}let zr=Dd("editor-data-store",{state:()=>({selectedElement:null,currentElements:[],draggingMode:"",newElementName:"",zoom:1}),getters:{editorZoom:e=>Math.round(e.zoom*100),editorWidth:e=>400,editorHeight:e=>400},actions:{setSelectedElementProperty(e,t){this.selectedElement.properties[e].value=t.target.value},zoomin(){this.zoom+=.1},zoomout(){this.zoom-=.1}}});function Ud(){return Math.round(Math.random()*Math.pow(10,8))}class ai{constructor(t,n,r,a){Re(this,"x",100);Re(this,"y",100);Re(this,"componentName","");Re(this,"id");Re(this,"properties",{});this.name=t,this.x=n,this.y=r,this.componentName=a,this.id=Ud()}}class Hd extends ai{constructor(n,r,a,i,o=null){super("Edge",[n,a],[r,i],"EdgeSVG");Re(this,"weight");Re(this,"start");Re(this,"end");this.bezierPointX=(n+a)/2,this.bezierPointY=(r+i)/2,this.weight=null}}class Bd extends ai{constructor(t,n,r,a,i=null){super("DirectedEdge",[t,r],[n,a],"DirectedEdgeSVG"),this.bezierPointX=(t+r)/2,this.bezierPointY=(n+a)/2,this.weight=null}}const ii=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Yd=["fill","x","y"],Vd=["cx","cy","stroke-width","r","fill"],Wd={__name:"VertexSVG",props:{element:{type:Object}},setup(e){const t=zr(),n=e;function r(s){t.newElementName!="Edge"&&t.newElementName!="DirectedEdge"&&(t.selectedElement=n.element,t.draggingMode="moving_el")}function a(s){var l,c;if(t.selectedElement!=null&&(t.newElementName=="Edge"||t.newElementName=="DirectedEdge")&&n.element.name=="Vertex"&&t.selectedElement.name=="Vertex"&&((l=t.selectedElement)==null?void 0:l.id)!=n.element.id){let u;t.newElementName=="Edge"?u=new Hd(t.selectedElement.x,t.selectedElement.y,n.element.x,n.element.y):u=new Bd(t.selectedElement.x,t.selectedElement.y,n.element.x,n.element.y),u.start=t.selectedElement.id,u.end=n.element.id,t.currentElements.unshift(u),t.selectedElement.addConnection(n.element.id,u.id),n.element.addConnection(t.selectedElement.id,u.id)}((c=t.selectedElement)==null?void 0:c.id)==n.element.id||t.$patch({selectedElement:n.element})}function i(){t.draggingMode=""}function o(){var s;return((s=t.selectedElement)==null?void 0:s.id)==n.element.id?3:0}return(s,l)=>(we(),Ie(_e,null,[Y("text",{id:"vertex-name-text",fill:n.element.properties["text-color"].value,x:j(t).zoom*(n.element.x-10),ref:"vertexNameText",y:j(t).zoom*(n.element.y-16),class:"vertex-name",style:Mn({"font-size":(1.5*j(t).zoom).toString()+"rem"})},nr(n.element.properties.name.value),13,Yd),Y("circle",{onClick:Ae(a,["stop"]),onPointerup:i,onPointerdown:r,cx:j(t).zoom*e.element.x,cy:j(t).zoom*e.element.y,stroke:"red","stroke-width":o()*j(t).zoom,r:7*j(t).zoom,fill:n.element.properties.color.value},null,40,Vd)],64))}},Kd=ii(Wd,[["__scopeId","data-v-b22f81a3"]]),Xd=["d","stroke-width"],qd=["cx","cy"],Gd={__name:"EdgeSVG",props:{element:{type:Object}},setup(e){const t=zr(),n=e;function r(l){t.$patch({selectedElement:n.element})}function a(l){t.draggingMode="edge"}function i(l){t.draggingMode=""}const o=Oe(()=>n.element.bezierPointX*t.zoom),s=Oe(()=>n.element.bezierPointY*t.zoom);return(l,c)=>{var u,m,h;return we(),Ie(_e,null,[Y("path",{class:Me(["edge",{selected:((u=j(t).selectedElement)==null?void 0:u.id)==n.element.id}]),stroke:"black",onClick:Ae(r,["stop"]),d:`M ${e.element.x[0]*j(t).zoom} ${e.element.y[0]*j(t).zoom} Q ${e.element.bezierPointX*j(t).zoom} ${e.element.bezierPointY*j(t).zoom} ${e.element.x[1]*j(t).zoom} ${e.element.y[1]*j(t).zoom}`,"stroke-width":4*j(t).zoom,fill:"none"},null,10,Xd),((m=j(t).selectedElement)==null?void 0:m.id)==e.element.id?(we(),Ie("circle",{key:0,class:Me(["bezier-point",{active:((h=j(t).selectedElement)==null?void 0:h.id)==n.element.id&&j(t).draggingMode=="edge"}]),onClick:c[0]||(c[0]=Ae(()=>{},["stop"])),onMouseup:Ae(i,["stop"]),onMousedown:Ae(a,["stop"]),cx:o.value,cy:s.value,stroke:"gray",r:"5",fill:"white"},null,42,qd)):Ua("",!0)],64)}}},Jd=ii(Gd,[["__scopeId","data-v-5da95def"]]);function Zd(e,t,n,r){let a=[4,0],i=[n-e,r-t],o=Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2))*Math.sqrt(Math.pow(i[0],2)+Math.pow(i[1],2)),s=(a[0]*i[0]+a[1]*i[1])/o;return Math.acos(s)*(180/Math.PI)}const Qd=["d","stroke-width"],em=["points","transform"],tm=["cx","cy"],nm={__name:"DirectedEdgeSVG",props:{element:{type:Object}},setup(e){const t=zr(),n=e;function r(u){t.$patch({selectedElement:n.element})}function a(u){t.draggingMode="edge"}function i(u){t.draggingMode=""}const o=Oe(()=>n.element.bezierPointX*t.zoom),s=Oe(()=>n.element.bezierPointY*t.zoom),l=Oe(()=>`${n.element.x[1]+2}, ${n.element.y[1]}, ${n.element.x[1]-22}, ${n.element.y[1]+6}, ${n.element.x[1]-22}, ${n.element.y[1]-6}`),c=Oe(()=>{let u=Zd(o.value,s.value,n.element.x[1],n.element.y[1]);return n.element.y[1]<s.value&&(u*=-1),u});return(u,m)=>{var h,y,N,P;return we(),Ie(_e,null,[Y("path",{class:Me(["edge",{selected:((h=j(t).selectedElement)==null?void 0:h.id)==n.element.id}]),stroke:"black",onClick:Ae(r,["stop"]),d:`M ${e.element.x[0]*j(t).zoom} ${e.element.y[0]*j(t).zoom} Q ${e.element.bezierPointX*j(t).zoom} ${e.element.bezierPointY*j(t).zoom} ${e.element.x[1]*j(t).zoom} ${e.element.y[1]*j(t).zoom}`,"stroke-width":4*j(t).zoom,fill:"none"},null,10,Qd),Y("polygon",{class:Me({selected:((y=j(t).selectedElement)==null?void 0:y.id)==n.element.id}),points:l.value,fill:"black",transform:`rotate(${c.value},${n.element.x[1]},${n.element.y[1]})`},null,10,em),((N=j(t).selectedElement)==null?void 0:N.id)==e.element.id?(we(),Ie("circle",{key:0,class:Me(["bezier-point",{active:((P=j(t).selectedElement)==null?void 0:P.id)==n.element.id&&j(t).draggingMode=="edge"}]),onClick:m[0]||(m[0]=Ae(()=>{},["stop"])),onMousedown:Ae(a,["stop"]),onMouseup:Ae(i,["stop"]),cx:o.value,cy:s.value,stroke:"gray",r:"7",fill:"white"},null,42,tm)):Ua("",!0)],64)}}},rm=ii(nm,[["__scopeId","data-v-50dc4f3d"]]);class oi{constructor(t,n,r){this.label=t,this.icon=n,this.component=r}}const Sn=new Map;Sn.set("Vertex",new oi("Vertex","circle",Kd));Sn.set("Edge",new oi("Edge","minus",Jd));Sn.set("DirectedEdge",new oi("Directed edge","arrow-right-long",rm));class Zr{constructor(t,n,r,a){this.name=t,this.label=n,this.value=r,this.type=a}}const ze=class ze extends ai{constructor(n,r){super("Vertex",n,r,"VertexSVG");Re(this,"connectedVertices");this.connectedVertices=new Map,this.properties.name=new Zr("name","Name",ze.getNextName(),"text"),this.properties.color=new Zr("color","Color","#000000","color"),this.properties["text-color"]=new Zr("text-color","Text color","#000000","color")}static getNextName(){return ze._nextChar+1>90?(ze._nextChar=65,ze._nameCharCount+=1):ze._nextChar+=1,String.fromCharCode(ze._nextChar).repeat(ze._nameCharCount)}static castFromObject(n){let r=Object.assign(new ze(n.x,n.y),n);return console.log(n.connectedVertices),r.connectedVertices=new Map(Object.entries(n.connectedVertices).map(a=>[Number(a[0]),[...a[1]]])),r}addConnection(n,r){this.connectedVertices.has(n)?this.connectedVertices.set(n,[...this.connectedVertices.get(n),r]):this.connectedVertices.set(n,[r])}};Re(ze,"_nextChar",64),Re(ze,"_nameCharCount",1);let vr=ze;function _o(e,t="file"){let n=document.createElement("a");n.href=e,n.download=t,document.body.append(n),n.style.display="none",n.click(),n.remove(),URL.revokeObjectURL(e)}function am(e){let t=[];for(let n of e)n.name=="Vertex"?t.push(vr.castFromObject(n)):t.push(n);return t}const im={class:"panel-heading"},om=Y("p",null,null,-1),sm={class:"panel-tabs"},lm={class:"tab elements-tab"},cm={class:"panel-icon"},fm=["onClick"],um={class:"panel-icon"},dm={class:"tab file-tab"},mm=Y("p",null,"File name",-1),pm={class:"size-input"},hm=Y("p",null,"Size",-1),gm={class:"button is-small is-fullwidth",for:"open_json"},vm={class:"tab properties-tab"},bm={class:"property-input"},ym=["onUpdate:modelValue","type","onInput"],xm={class:"size-panel"},wm={class:"zoom-panel"},_m=["height","width"],Em=["width","height"],km={__name:"App",setup(e){const t=xe(10),n=xe(10),r=xe(null),a=xe(null),i=xe(!1),o=xe("file"),s=zr();function l(A){i.value=!0}function c(A){i.value=!1}function u(A){var T;if(s.draggingMode=="edge"){let W=y.value.getBoundingClientRect();s.selectedElement.bezierPointX=(A.clientX-W.x)/s.zoom,s.selectedElement.bezierPointY=(A.clientY-W.y)/s.zoom}if(s.draggingMode=="moving_el"&&((T=s==null?void 0:s.selectedElement)==null?void 0:T.name)=="Vertex"){let W=y.value.getBoundingClientRect();s.selectedElement.x=(A.clientX-W.x)/s.zoom,s.selectedElement.y=(A.clientY-W.y)/s.zoom;for(let[q,pe]of s.selectedElement.connectedVertices)for(let H of pe){let oe=s.currentElements.find(B=>B.id==H);oe.start==s.selectedElement.id?(oe.x[0]=s.selectedElement.x,oe.y[0]=s.selectedElement.y):(oe.x[1]=s.selectedElement.x,oe.y[1]=s.selectedElement.y)}}if(i.value){let W=a.value.getBoundingClientRect(),q=r.value.getBoundingClientRect(),pe=W.x-q.x,H=W.y-q.y,oe=A.clientX-pe,B=A.clientY-H-a.value.offsetWidth;oe>=0&&oe+q.width<=document.documentElement.clientWidth?t.value=A.clientX-pe:oe<=0?t.value=0:t.value=document.documentElement.clientWidth-q.width,B>=0&&B+q.height<=document.documentElement.clientHeight?n.value=B:B<=0?n.value=0:n.value=document.documentElement.clientHeight-q.width}}is(()=>{s.currentEditorHeight=document.documentElement.clientHeight,s.currentEditorWidth=document.documentElement.clientWidth});function m(A){s.draggingMode="new_element",s.selectedElement=null,s.newElementName=A}const h=xe(null),y=xe(null),N=xe(400),P=xe(400);function V(A){if((s.newElementName=="Edge"||s.newElementName=="DirectedEdge")&&(s.selectedElement=null),s.draggingMode=="new_element")switch(s.newElementName){case"Vertex":let T=y.value.getBoundingClientRect(),W=(A.clientX-T.x)/s.zoom,q=(A.clientY-T.y)/s.zoom;s.$patch({currentElements:[...s.currentElements,new vr(W,q)]});break}else s.draggingMode!="Edge"?s.selectedElement=null:s.draggingMode=""}const _=xe(null),E=xe(1),F=xe("mygraph");function S(){return s.selectedElement=null,new Promise((A,T)=>{let W=setInterval(()=>{document.getElementsByClassName("bezier-point").length==0&&(A(0),clearInterval(W))},10)})}async function $(){await S();const A=_.value.getContext("2d");A.clearRect(0,0,_.value.width,_.value.height);let T=y.value.outerHTML;console.log("svg xml saved");let W=new Blob([T],{type:"image/svg+xml"}),q=new Image,pe=s.zoom;s.zoom=E.value,y.value.style.display="none";let H=URL.createObjectURL(W);q.onload=function(){A.drawImage(q,0,0,N.value*E.value,P.value*E.value),_o(_.value.toDataURL(),F.value),s.zoom=pe,y.value.style.display="block",URL.revokeObjectURL(H)},q.src=H}function ce(){let A={canvasWidth:N.value,canvasHeight:P.value,elements:s.currentElements.map(W=>{if(W.name=="Vertex"){let q=Object.assign({},W);return q.connectedVertices=Object.fromEntries(W.connectedVertices),q}return W})},T=new Blob([JSON.stringify(A)],{type:"application/json"});_o(URL.createObjectURL(T),F.value)}const ne=["canvasWidth","canvasHeight","elements"];function K(A){if(A.target.files[0]!=null){let T=new FileReader;T.onload=W=>{let q=JSON.parse(T.result);for(let pe of ne)if(!q.hasOwnProperty(pe)){alert("Error occured");return}P.value=q.canvasHeight,N.value=q.canvasWidth,s.currentElements=am(q.elements)},T.readAsText(A.target.files[0])}}return(A,T)=>{var q,pe;const W=oc("font-awesome-icon");return we(),Ie("div",{ref_key:"appInner",ref:h,class:"app-inner",style:{width:"100%"},onMousemove:Ae(u,["stop"]),onMouseup:Ae(c,["prevent","stop"])},[Y("nav",{ref_key:"panel",ref:r,class:"panel is-info instruments-panel",style:Mn({top:`${n.value}px`,left:`${t.value}px`})},[Y("div",im,[om,Y("span",{ref_key:"dragElement",ref:a,class:"drag-element",onDragstart:T[0]||(T[0]=(...H)=>A.test&&A.test(...H)),onMousedown:Ae(l,["stop"])},[be(W,{icon:"grip-vertical"})],544)]),Y("p",sm,[Y("a",{class:Me({"is-active":o.value=="file"||o.value=="properties"&&j(s).selectedElement==null}),onClick:T[1]||(T[1]=H=>o.value="file")},"File",2),Y("a",{class:Me({"is-active":o.value=="elements"}),onClick:T[2]||(T[2]=H=>o.value="elements")},"Elements",2),j(s).selectedElement!=null?(we(),Ie("a",{key:0,class:Me({"is-active":o.value=="properties"}),onClick:T[3]||(T[3]=H=>o.value="properties")},"Properties",2)):Ua("",!0)]),st(Y("div",lm,[Y("a",{class:Me(["panel-block",{selected:j(s).newElementName==""}]),onClick:T[4]||(T[4]=H=>m(""))},[Y("span",cm,[be(W,{icon:["fas","arrow-pointer"]})]),Dt(" Cursor ")],2),(we(!0),Ie(_e,null,Ur(j(Sn),([H,oe])=>(we(),Ie("a",{class:Me(["panel-block",{selected:j(s).newElementName==H}]),onClick:B=>m(H)},[Y("span",um,[be(W,{icon:oe.icon},null,8,["icon"])]),Dt(" "+nr(oe.label),1)],10,fm))),256))],512),[[Yr,o.value=="elements"]]),st(Y("div",dm,[mm,st(Y("input",{type:"text","onUpdate:modelValue":T[5]||(T[5]=H=>F.value=H),class:"input is-small"},null,512),[[Ut,F.value]]),Y("div",pm,[hm,Dt("x "),st(Y("input",{type:"number",ref:"jsonFileInput","onUpdate:modelValue":T[6]||(T[6]=H=>E.value=H),class:"input is-small",min:"0.5"},null,512),[[Ut,E.value]])]),Y("button",{class:"button is-small is-fullwidth",onClick:ce},"Save"),Y("button",{class:"button is-small is-fullwidth",onClick:$},"Save as PNG"),Y("label",gm,[Dt(" Open "),Y("input",{type:"file",id:"open_json",accept:".json",onChange:K},null,32)])],512),[[Yr,o.value=="file"]]),st(Y("div",vm,[(we(!0),Ie(_e,null,Ur((pe=(q=j(s))==null?void 0:q.selectedElement)==null?void 0:pe.properties,(H,oe)=>(we(),Ie("div",bm,[Y("label",null,nr(H.label),1),st(Y("input",{class:"input is-small","onUpdate:modelValue":B=>H.value=B,type:H.type,onInput:B=>j(s).setSelectedElementProperty(oe,B)},null,40,ym),[[Sf,H.value]])]))),256))],512),[[Yr,o.value=="properties"]])],4),Y("div",xm,[st(Y("input",{class:"input is-small",type:"number","onUpdate:modelValue":T[7]||(T[7]=H=>N.value=H)},null,512),[[Ut,N.value]]),Dt(" x "),st(Y("input",{class:"input is-small",type:"number","onUpdate:modelValue":T[8]||(T[8]=H=>P.value=H)},null,512),[[Ut,P.value]])]),Y("div",wm,[Y("button",{class:"button",onClick:T[9]||(T[9]=Ae((...H)=>j(s).zoomout&&j(s).zoomout(...H),["stop"]))},"-"),Y("p",null,nr(j(s).editorZoom)+"%",1),Y("button",{class:"button",onClick:T[10]||(T[10]=Ae((...H)=>j(s).zoomin&&j(s).zoomin(...H),["stop"]))},"+")]),(we(),Ie("svg",{xmlns:"http://www.w3.org/2000/svg",class:"main-canvas",ref_key:"svgCanvas",ref:y,height:P.value*j(s).zoom,width:N.value*j(s).zoom,onClick:V},[(we(!0),Ie(_e,null,Ur(j(s).currentElements,H=>(we(),gs(sc(j(Sn).get(H.name).component),{element:H},null,8,["element"]))),256))],8,_m)),Y("canvas",{class:"canvas-for-save",width:N.value*j(s).zoom,height:P.value*j(s).zoom,ref_key:"canvasForSave",ref:_},null,8,Em)],544)}}},Om=Rd();zn.add(Sd);zn.add(Md);zn.add(Id);zn.add(Td);zn.add(Pd);zf(km).use(Om).component("font-awesome-icon",Cd).mount("#app");
