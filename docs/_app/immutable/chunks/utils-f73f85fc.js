import{A as o}from"./paths-69893b53.js";import s from"./ids-aa291cde.js";function m(t,n){return new URL(n,t).hostname==t.hostname}function c(t){return t.endsWith("!")?t.slice(0,-1):t}function a(t,n){if(t.startsWith("/")&&(t=t.slice(1)),t in s){const i=s[t];if(n in i)return o+"/"+c(i[n])}const e=t.lastIndexOf("/");if(e>=0){const i=t.slice(0,e);if(i in s){const r=s[i];if(n in r)return o+"/"+c(r[n])+t.slice(e)}}return o+"/"+n}function d(t){return t.endsWith("rem")&&(t=t.slice(0,-3)),Number(t)*parseFloat(getComputedStyle(document.documentElement).fontSize)}export{d as c,a as g,m as i};