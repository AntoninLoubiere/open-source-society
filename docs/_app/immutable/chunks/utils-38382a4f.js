import{R as o}from"./paths-971ee920.js";import i from"./ids-8b24376e.js";function u(t,n){return new URL(n,t).hostname==t.hostname}function m(t,n){if(t.startsWith("/")&&(t=t.slice(1)),t in i){const s=i[t];if(n in s)return o+"/"+s[n]}const e=t.lastIndexOf("/");if(e>=0){const s=t.slice(0,e);if(s in i){const f=i[s];if(n in f)return o+"/"+f[n]+t.slice(e)}}return o+"/"+n}function d(t){return t.endsWith("rem")&&(t=t.slice(0,-3)),Number(t)*parseFloat(getComputedStyle(document.documentElement).fontSize)}export{d as c,m as g,u as i};
