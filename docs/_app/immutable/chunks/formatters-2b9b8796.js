import{C as p,V as C}from"./paths-7322bcad.js";const O={number:{scientific:{notation:"scientific"},engineering:{notation:"engineering"},compactLong:{notation:"compact",compactDisplay:"long"},compactShort:{notation:"compact",compactDisplay:"short"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},Q={fallbackLocale:"",initialLocale:"",loadingDelay:200,formats:O,warnOnMissingMessages:!0},S=Q;let M;function l(){return M}function P(e){return M=e}function g(){return S}function L(e){return e.split("-").map((t,n,r)=>r.slice(0,n+1).join("-")).reverse()}function m(e,t=g().fallbackLocale){const n=L(e);return t?[...new Set([...n,...L(t)])]:n}let b;const h=p({});function T(e){return b[e]||null}function v(e){return e in b}function E(e,t){if(v(e)){const n=T(e);if(t in n)return n[t];const r=t.split(".");let i=n;for(let o=0;o<r.length;o++){if(typeof i[r[o]]!="object")return i[r[o]]||null;i=i[r[o]]}}return null}function N(e){if(e==null)return null;const t=m(e);for(let n=0;n<t.length;n++){const r=t[n];if(v(r))return r}return null}function q(e,...t){h.update(n=>(n[e]=Object.assign(n[e]||{},...t),n))}h.subscribe(e=>b=e);const $=p(!1),w={};function z(e){w[e]=new Set}function A(e){delete w[e]}function a(e){return w[e]}function x(e){return m(e).reverse().map(t=>{const n=a(t);return[t,n?[...n]:[]]}).filter(([,t])=>t.length>0)}function D(e){return m(e).reverse().some(a)}const c={};function V(e){if(!D(e))return Promise.resolve();if(e in c)return c[e];const t=x(e);if(t.length===0)return Promise.resolve();const n=setTimeout(()=>$.set(!0),g().loadingDelay);return c[e]=Promise.all(t.map(([r,i])=>Promise.all(i.map(o=>o())).then(o=>{A(r),o=o.map(s=>s.default||s),q(r,...o)}))).then(()=>{clearTimeout(n),$.set(!1),delete c[e]}),c[e]}function G(e,t){a(e)||z(e);const n=a(e);a(e).has(t)||(v(e)||h.update(r=>(r[e]={},r)),n.add(t))}const f=p("");f.subscribe(e=>{P(e),typeof window<"u"&&e!==""&&document.documentElement.setAttribute("lang",e)});const y=f.set;f.set=e=>N(e)&&D(e)?V(e).then(()=>y(e)):y(e);f.update=e=>{let t=l();e(t),y(t)};const u={},Z=(e,t,n)=>n&&(t in u||(u[t]={}),e in u[t]||(u[t][e]=n),n),J=(e,t)=>{if(t==null)return;if(t in u&&e in u[t])return u[t][e];const n=m(t);for(let r=0;r<n.length;r++){const i=n[r],o=E(i,e);if(o)return Z(e,t,o)}},K=e=>{const t=Object.create(null);return r=>{const i=JSON.stringify(r);return i in t||(t[i]=e(r)),t[i]}},F=(e,t)=>{const{formats:n}=g();if(e in n&&t in n[e])return n[e][t];throw new Error(`[precompile-intl-runtime] Unknown "${t}" ${e} format.`)},U=K(({locale:e,format:t,...n}={})=>{if(e=e||l(),e==null)throw new Error('[precompile-intl-runtime] A "locale" must be set to format dates');return t?n=F("date",t):Object.keys(n).length===0&&(n=F("date","short")),new Intl.DateTimeFormat(e,n)}),_=(e,t,n={})=>{const r=typeof t=="string"?t:t.id,i=typeof t=="string"?n:t,{values:o,locale:s=e||l(),default:j}=i;if(s==null)throw new Error("[svelte-intl-precompile] Cannot format a message without first setting the initial locale.");let d=J(r,s);return typeof d=="string"?d:typeof d=="function"?d(...Object.keys(i.values||{}).sort().map(k=>(i.values||{})[k])):(g().warnOnMissingMessages&&console.warn(`[svelte-intl-precompile] The message "${r}" was not found in "${m(s).join('", "')}".${D(l())?`

Note: there are at least one loader still registered to this locale that wasn't executed.`:""}`),j||r)},H=(e,t,n)=>{const r=e||l();return U({locale:r,...n}).format(t)},R=C([f,h],([e])=>_.bind(null,e));export{f as $,R as a,l as b,H as c,V as f,g,G as r};
