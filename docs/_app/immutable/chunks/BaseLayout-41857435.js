import{S as z,i as F,s as G,e as q,b as I,g as Z,t as g,d as x,f as v,h,I as X,D as R,k as E,l as y,m as p,n as _,F as N,G as O,H as W,R as Y,U as pe,a as S,c as H,E as oe,M,N as T,J as $,v as ee,w as te,x as le,y as re,q as ve,r as ge,O as he,V as be}from"./paths-971ee920.js";import{p as de}from"./stores-392876ab.js";import{g as ke,i as we}from"./utils-38382a4f.js";import{$ as $e}from"./locale-b86b8e40.js";function Ee(a){let e,r;const t=a[6].default,l=R(t,a,a[5],null);return{c(){e=E("a"),l&&l.c(),this.h()},l(n){e=y(n,"A",{href:!0,class:!0});var s=p(e);l&&l.l(s),s.forEach(h),this.h()},h(){_(e,"href",a[1]),_(e,"class","link external svelte-1u1y0as")},m(n,s){I(n,e,s),l&&l.m(e,null),r=!0},p(n,s){l&&l.p&&(!r||s&32)&&N(l,t,n,n[5],r?W(t,n[5],s,null):O(n[5]),null),(!r||s&2)&&_(e,"href",n[1])},i(n){r||(v(l,n),r=!0)},o(n){g(l,n),r=!1},d(n){n&&h(e),l&&l.d(n)}}}function ye(a){let e,r;const t=a[6].default,l=R(t,a,a[5],null);return{c(){e=E("a"),l&&l.c(),this.h()},l(n){e=y(n,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var s=p(e);l&&l.l(s),s.forEach(h),this.h()},h(){_(e,"href",a[1]),_(e,"sveltekit:prefetch",""),_(e,"class","link")},m(n,s){I(n,e,s),l&&l.m(e,null),r=!0},p(n,s){l&&l.p&&(!r||s&32)&&N(l,t,n,n[5],r?W(t,n[5],s,null):O(n[5]),null),(!r||s&2)&&_(e,"href",n[1])},i(n){r||(v(l,n),r=!0)},o(n){g(l,n),r=!1},d(n){n&&h(e),l&&l.d(n)}}}function Ie(a){let e,r,t,l,n;const s=[ye,Ee],i=[];function o(f,d){return d&7&&(e=null),e==null&&(e=!!(f[0]||we(f[2].url,f[1]))),e?0:1}return r=o(a,-1),t=i[r]=s[r](a),{c(){t.c(),l=q()},l(f){t.l(f),l=q()},m(f,d){i[r].m(f,d),I(f,l,d),n=!0},p(f,[d]){let u=r;r=o(f,d),r===u?i[r].p(f,d):(Z(),g(i[u],1,1,()=>{i[u]=null}),x(),t=i[r],t?t.p(f,d):(t=i[r]=s[r](f),t.c()),v(t,1),t.m(l.parentNode,l))},i(f){n||(v(t),n=!0)},o(f){g(t),n=!1},d(f){i[r].d(f),f&&h(l)}}}const ie="internal:/";function Ve(a,e,r){let t,l,n,s;X(a,$e,d=>r(4,n=d)),X(a,de,d=>r(2,s=d));let{$$slots:i={},$$scope:o}=e,{href:f}=e;return a.$$set=d=>{"href"in d&&r(3,f=d.href),"$$scope"in d&&r(5,o=d.$$scope)},a.$$.update=()=>{a.$$.dirty&8&&r(0,t=f.startsWith(ie)),a.$$.dirty&25&&r(1,l=t?ke(f.slice(ie.length),n):f)},[t,l,s,f,n,o,i]}class Ge extends z{constructor(e){super(),F(this,e,Ve,Ie,G,{href:3})}}function Ae(a){let e,r,t;const l=a[2].default,n=R(l,a,a[1],null);return{c(){e=E("a"),n&&n.c(),this.h()},l(s){e=y(s,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var i=p(e);n&&n.l(i),i.forEach(h),this.h()},h(){_(e,"sveltekit:prefetch",""),_(e,"href",r=Y+a[0]),_(e,"class","font-bold uppercase hover:text-secondary hover:underline")},m(s,i){I(s,e,i),n&&n.m(e,null),t=!0},p(s,[i]){n&&n.p&&(!t||i&2)&&N(n,l,s,s[1],t?W(l,s[1],i,null):O(s[1]),null),(!t||i&1&&r!==(r=Y+s[0]))&&_(e,"href",r)},i(s){t||(v(n,s),t=!0)},o(s){g(n,s),t=!1},d(s){s&&h(e),n&&n.d(s)}}}function Be(a,e,r){let{$$slots:t={},$$scope:l}=e,{href:n}=e;return a.$$set=s=>{"href"in s&&r(0,n=s.href),"$$scope"in s&&r(1,l=s.$$scope)},[n,l,t]}class me extends z{constructor(e){super(),F(this,e,Be,Ae,G,{href:0})}}function fe(a,e,r){const t=a.slice();t[3]=e[r].label,t[4]=e[r].href,t[5]=e[r].id;const l=t[5]==t[1].length-1;return t[6]=l,t}function De(a){let e,r;return e=new me({props:{href:a[4],$$slots:{default:[Se]},$$scope:{ctx:a}}}),{c(){ee(e.$$.fragment)},l(t){te(e.$$.fragment,t)},m(t,l){le(e,t,l),r=!0},p(t,l){const n={};l&512&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){re(e,t)}}}function Le(a){let e,r;return e=new me({props:{href:a[4],$$slots:{default:[He]},$$scope:{ctx:a}}}),{c(){ee(e.$$.fragment)},l(t){te(e.$$.fragment,t)},m(t,l){le(e,t,l),r=!0},p(t,l){const n={};l&512&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){re(e,t)}}}function Se(a){let e=a[3]+"",r;return{c(){r=ve(e)},l(t){r=ge(t,e)},m(t,l){I(t,r,l)},p:he,d(t){t&&h(r)}}}function He(a){let e,r;return{c(){e=M("svg"),r=M("path"),this.h()},l(t){e=T(t,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0});var l=p(e);r=T(l,"path",{d:!0}),p(r).forEach(h),l.forEach(h),this.h()},h(){_(r,"d","M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"class","h-5 w-5"),_(e,"viewBox","0 0 20 20"),_(e,"fill","currentColor")},m(t,l){I(t,e,l),$(e,r)},p:he,d(t){t&&h(e)}}}function Re(a){let e,r;return{c(){e=M("svg"),r=M("path"),this.h()},l(t){e=T(t,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0});var l=p(e);r=T(l,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),p(r).forEach(h),l.forEach(h),this.h()},h(){_(r,"stroke-linecap","round"),_(r,"stroke-linejoin","round"),_(r,"d","M9 5l7 7-7 7"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"class","h-5 w-5 text-gray-700"),_(e,"fill","none"),_(e,"viewBox","0 0 24 24"),_(e,"stroke","currentColor"),_(e,"stroke-width","2")},m(t,l){I(t,e,l),$(e,r)},d(t){t&&h(e)}}}function ue(a){let e,r,t,l,n,s;const i=[Le,De],o=[];function f(u,m){return u[0]&&u[5]==0?0:1}r=f(a),t=o[r]=i[r](a);let d=!a[6]&&Re();return{c(){e=E("div"),t.c(),l=S(),d&&d.c(),n=q(),this.h()},l(u){e=y(u,"DIV",{class:!0});var m=p(e);t.l(m),m.forEach(h),l=H(u),d&&d.l(u),n=q(),this.h()},h(){_(e,"class","inline-block"),oe(e,"text-gray-600",!a[6]),oe(e,"text-primary",a[6])},m(u,m){I(u,e,m),o[r].m(e,null),I(u,l,m),d&&d.m(u,m),I(u,n,m),s=!0},p(u,m){let B=r;r=f(u),r===B?o[r].p(u,m):(Z(),g(o[B],1,1,()=>{o[B]=null}),x(),t=o[r],t?t.p(u,m):(t=o[r]=i[r](u),t.c()),v(t,1),t.m(e,null))},i(u){s||(v(t),s=!0)},o(u){g(t),s=!1},d(u){u&&h(e),o[r].d(),u&&h(l),d&&d.d(u),u&&h(n)}}}function Ne(a){let e,r,t=a[1],l=[];for(let s=0;s<t.length;s+=1)l[s]=ue(fe(a,t,s));const n=s=>g(l[s],1,1,()=>{l[s]=null});return{c(){e=E("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=y(s,"DIV",{class:!0});var i=p(e);for(let o=0;o<l.length;o+=1)l[o].l(i);i.forEach(h),this.h()},h(){_(e,"class","min-h-6 flex flex-wrap items-center gap-1")},m(s,i){I(s,e,i);for(let o=0;o<l.length;o+=1)l[o].m(e,null);r=!0},p(s,[i]){if(i&3){t=s[1];let o;for(o=0;o<t.length;o+=1){const f=fe(s,t,o);l[o]?(l[o].p(f,i),v(l[o],1)):(l[o]=ue(f),l[o].c(),v(l[o],1),l[o].m(e,null))}for(Z(),o=t.length;o<l.length;o+=1)n(o);x()}},i(s){if(!r){for(let i=0;i<t.length;i+=1)v(l[i]);r=!0}},o(s){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)g(l[i]);r=!1},d(s){s&&h(e),pe(l,s)}}}function Oe(a,e,r){let{url:t}=e,{startWithHome:l=!0}=e,n=[];return a.$$set=s=>{"url"in s&&r(2,t=s.url),"startWithHome"in s&&r(0,l=s.startWithHome)},a.$$.update=()=>{if(a.$$.dirty&4){const s=t.slice(Y.length-1).split("/");let i="";for(let o=0;o<s.length;o++)i+=s[o],n.push({label:s[o].replace("-"," "),href:i,id:o}),i+="/"}},[l,n,t]}class We extends z{constructor(e){super(),F(this,e,Oe,Ne,G,{url:2,startWithHome:0})}}const Ce=a=>({}),ce=a=>({isSide:!0}),Ue=a=>({}),_e=a=>({});function je(a){let e,r,t,l,n,s,i,o,f,d,u,m,B,J,D,A;document.title=e=a[0],f=new We({props:{url:a[1].url.pathname.slice(1)}});const P=a[4].sidebar,b=R(P,a,a[3],_e),K=a[4].default,k=R(K,a,a[3],null),Q=a[4].sidebar,w=R(Q,a,a[3],ce);return{c(){r=S(),t=E("div"),l=E("div"),n=E("div"),s=S(),i=E("article"),o=E("nav"),ee(f.$$.fragment),d=S(),u=E("div"),m=E("div"),b&&b.c(),B=S(),k&&k.c(),J=S(),D=E("div"),w&&w.c(),this.h()},l(c){be('[data-svelte="svelte-1llm4vj"]',document.head).forEach(h),r=H(c),t=y(c,"DIV",{class:!0});var C=p(t);l=y(C,"DIV",{class:!0});var L=p(l);n=y(L,"DIV",{class:!0}),p(n).forEach(h),s=H(L),i=y(L,"ARTICLE",{class:!0});var U=p(i);o=y(U,"NAV",{class:!0});var se=p(o);te(f.$$.fragment,se),se.forEach(h),d=H(U),u=y(U,"DIV",{class:!0});var j=p(u);m=y(j,"DIV",{class:!0});var ne=p(m);b&&b.l(ne),ne.forEach(h),B=H(j),k&&k.l(j),j.forEach(h),U.forEach(h),J=H(L),D=y(L,"DIV",{class:!0});var ae=p(D);w&&w.l(ae),ae.forEach(h),L.forEach(h),C.forEach(h),this.h()},h(){_(n,"class","hidden xl:block"),_(o,"class","border-b border-gray-400 pb-2"),_(m,"class","not-prose border-y border-gray-400 lg:hidden"),_(u,"class","markdown"),_(i,"class","mx-auto h-min w-full min-w-min max-w-[125ch] bg-white px-4 py-2 lg:rounded-xl lg:border"),_(D,"class","prose hidden lg:block"),_(l,"class","grid gap-4 lg:grid-cols-page-layout-lg lg:p-4 xl:grid-cols-page-layout-xl"),_(t,"class","min-h-full-content bg-primary-variant-50")},m(c,V){I(c,r,V),I(c,t,V),$(t,l),$(l,n),$(l,s),$(l,i),$(i,o),le(f,o,null),$(i,d),$(i,u),$(u,m),b&&b.m(m,null),$(u,B),k&&k.m(u,null),$(l,J),$(l,D),w&&w.m(D,null),A=!0},p(c,[V]){(!A||V&1)&&e!==(e=c[0])&&(document.title=e);const C={};V&2&&(C.url=c[1].url.pathname.slice(1)),f.$set(C),b&&b.p&&(!A||V&8)&&N(b,P,c,c[3],A?W(P,c[3],V,Ue):O(c[3]),_e),k&&k.p&&(!A||V&8)&&N(k,K,c,c[3],A?W(K,c[3],V,null):O(c[3]),null),w&&w.p&&(!A||V&8)&&N(w,Q,c,c[3],A?W(Q,c[3],V,Ce):O(c[3]),ce)},i(c){A||(v(f.$$.fragment,c),v(b,c),v(k,c),v(w,c),A=!0)},o(c){g(f.$$.fragment,c),g(b,c),g(k,c),g(w,c),A=!1},d(c){c&&h(r),c&&h(t),re(f),b&&b.d(c),k&&k.d(c),w&&w.d(c)}}}function qe(a,e,r){let t,l;X(a,de,o=>r(1,l=o));let{$$slots:n={},$$scope:s}=e,{title:i}=e;return a.$$set=o=>{"title"in o&&r(2,i=o.title),"$$scope"in o&&r(3,s=o.$$scope)},a.$$.update=()=>{a.$$.dirty&4&&r(0,t=i?i+" - Open Source Society":"Open Source Society")},[t,l,i,s,n]}class Je extends z{constructor(e){super(),F(this,e,qe,je,G,{title:2})}}export{Ge as A,Je as B};