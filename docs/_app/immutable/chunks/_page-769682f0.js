import{_ as a}from"./preload-helper-41c905a7.js";import{L as u,R as c}from"./config-757f2d47.js";import{H as d}from"./control-e7f5239e.js";const m=(o,t)=>{const s=o[t];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((r,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t)))})};function l(o,t){return new d(o,t)}new TextEncoder;const f=async({params:{lang:o,path:t}})=>{if(!u.includes(o))throw l(404);const s=m(Object.assign({"../../en/ids.json":()=>a(()=>import("./ids-8f820630.js"),[],import.meta.url),"../../fr/ids.json":()=>a(()=>import("./ids-fb7a7da7.js"),[],import.meta.url)}),`../../${c}/ids.json`).then(e=>e.default);let r;if(o==c)r=t;else{const e=(await m(Object.assign({"../../en/ids.json":()=>a(()=>import("./ids-8f820630.js"),[],import.meta.url),"../../fr/ids.json":()=>a(()=>import("./ids-fb7a7da7.js"),[],import.meta.url)}),`../../${o}/ids.json`)).default;if(t in e)r=t;else{const n=t.lastIndexOf("/");if(n<0)throw l(404);const _=t.slice(0,n);if(_ in e)r=e[_]+t.slice(n);else throw l(404)}}const i=await s;if(r in i){let e=r;for(;e&&!(e in i&&o in i[e]);){const n=e.lastIndexOf("/");e=e.slice(0,n)}return{available_lang:i[r],backPath:i[e][o]}}throw l(404)},b=Object.freeze(Object.defineProperty({__proto__:null,load:f},Symbol.toStringTag,{value:"Module"}));export{b as _,f as l};