import{_ as l}from"./preload-helper-41c905a7.js";import{$ as u,g as m,f as _,b as n,c as p,r as i}from"./formatters-f84f693e.js";import{R as L}from"./config-757f2d47.js";import{W as b,C as s}from"./paths-1a21f2eb.js";const d=!0,g=d;function O(t){const{formats:e,...a}=t,r=t.initialLocale||t.fallbackLocale,o=m();return Object.assign(o,a,{initialLocale:r}),e&&("number"in e&&Object.assign(o.formats.number,e.number),"date"in e&&Object.assign(o.formats.date,e.date),"time"in e&&Object.assign(o.formats.time,e.time)),u.set(r)}function h(t){return _(t||n()||m().initialLocale)}function k(t){return t===0?0:t||""}const c=Object.create(null);function R(t){let e=n(),r=(c[e]||(c[e]=new Intl.PluralRules(e))).select(t);return r==="other"?"h":r[0]}function v(t,e){return e[t]||e[R(t)]||""}function C(t,e="short"){return p(n(),t,{format:e})}function j(){i("en",()=>l(()=>import("./en-176ae4e8.js"),[],import.meta.url)),i("fr",()=>l(()=>import("./fr-d81731ca.js"),[],import.meta.url))}const y=!0;j();const E=async({url:t})=>{const e=f(t);return(!b(u)||!g)&&O({initialLocale:e,fallbackLocale:L,formats:{date:{datetime:{dateStyle:"full",timeStyle:"short"}}}}),await h(e),{}};function f(t){var a;const e=t.pathname.startsWith(s)?t.pathname.slice(s.length):t.pathname;return(a=/^\/([a-zA-Z]+)\/?/.exec(e))==null?void 0:a[1]}const D=Object.freeze(Object.defineProperty({__proto__:null,_getLocaleFromUrl:f,load:E,prerender:y},Symbol.toStringTag,{value:"Module"}));export{D as _,f as a,v as b,k as c,C as d,E as l,y as p};