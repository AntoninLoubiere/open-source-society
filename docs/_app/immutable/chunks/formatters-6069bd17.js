import{T as d}from"./paths-971ee920.js";import{b as c,c as m,$ as h,d as p,g as $,h as w,a as u}from"./locale-b86b8e40.js";const i={},y=(t,e,n)=>n&&(e in i||(i[e]={}),t in i[e]||(i[e][t]=n),n),v=(t,e)=>{if(e==null)return;if(e in i&&t in i[e])return i[e][t];const n=c(e);for(let s=0;s<n.length;s++){const o=n[s],a=m(o,t);if(a)return y(t,e,a)}},b=(t,e,n={})=>{const s=typeof e=="string"?e:e.id,o=typeof e=="string"?n:e,{values:a,locale:l=t||u(),default:f}=o;if(l==null)throw new Error("[svelte-intl-precompile] Cannot format a message without first setting the initial locale.");let r=v(s,l);return typeof r=="string"?r:typeof r=="function"?r(...Object.keys(o.values||{}).sort().map(g=>(o.values||{})[g])):($().warnOnMissingMessages&&console.warn(`[svelte-intl-precompile] The message "${s}" was not found in "${c(l).join('", "')}".${w(u())?`

Note: there are at least one loader still registered to this locale that wasn't executed.`:""}`),f||s)},k=d([h,p],([t])=>b.bind(null,t));export{k as $};