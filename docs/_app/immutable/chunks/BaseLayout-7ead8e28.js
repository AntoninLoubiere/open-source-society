import{S as F,i as G,s as J,e as q,b as $,g as ee,t as k,d as te,f as g,h,I as Z,D as N,k as w,l as E,m,n as _,F as O,G as W,H as C,R as x,U as we,a as L,c as H,E as fe,M,N as z,J as b,v as le,w as re,x as se,y as ne,q as pe,r as ve,O as ge,V as Ee,u as $e}from"./paths-971ee920.js";import{p as be}from"./stores-d7420732.js";import{g as ye,i as Ie}from"./utils-df4aae27.js";import{$ as Ve}from"./locale-b86b8e40.js";function Ae(a){let e,r;const t=a[6].default,l=N(t,a,a[5],null);return{c(){e=w("a"),l&&l.c(),this.h()},l(n){e=E(n,"A",{href:!0,class:!0});var s=m(e);l&&l.l(s),s.forEach(h),this.h()},h(){_(e,"href",a[1]),_(e,"class","link external svelte-1u1y0as")},m(n,s){$(n,e,s),l&&l.m(e,null),r=!0},p(n,s){l&&l.p&&(!r||s&32)&&O(l,t,n,n[5],r?C(t,n[5],s,null):W(n[5]),null),(!r||s&2)&&_(e,"href",n[1])},i(n){r||(g(l,n),r=!0)},o(n){k(l,n),r=!1},d(n){n&&h(e),l&&l.d(n)}}}function Be(a){let e,r;const t=a[6].default,l=N(t,a,a[5],null);return{c(){e=w("a"),l&&l.c(),this.h()},l(n){e=E(n,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var s=m(e);l&&l.l(s),s.forEach(h),this.h()},h(){_(e,"href",a[1]),_(e,"sveltekit:prefetch",""),_(e,"class","link")},m(n,s){$(n,e,s),l&&l.m(e,null),r=!0},p(n,s){l&&l.p&&(!r||s&32)&&O(l,t,n,n[5],r?C(t,n[5],s,null):W(n[5]),null),(!r||s&2)&&_(e,"href",n[1])},i(n){r||(g(l,n),r=!0)},o(n){k(l,n),r=!1},d(n){n&&h(e),l&&l.d(n)}}}function De(a){let e,r,t,l,n;const s=[Be,Ae],i=[];function o(f,d){return d&7&&(e=null),e==null&&(e=!!(f[0]||Ie(f[2].url,f[1]))),e?0:1}return r=o(a,-1),t=i[r]=s[r](a),{c(){t.c(),l=q()},l(f){t.l(f),l=q()},m(f,d){i[r].m(f,d),$(f,l,d),n=!0},p(f,[d]){let u=r;r=o(f,d),r===u?i[r].p(f,d):(ee(),k(i[u],1,1,()=>{i[u]=null}),te(),t=i[r],t?t.p(f,d):(t=i[r]=s[r](f),t.c()),g(t,1),t.m(l.parentNode,l))},i(f){n||(g(t),n=!0)},o(f){k(t),n=!1},d(f){i[r].d(f),f&&h(l)}}}const ue="internal:/";function Le(a,e,r){let t,l,n,s;Z(a,Ve,d=>r(4,n=d)),Z(a,be,d=>r(2,s=d));let{$$slots:i={},$$scope:o}=e,{href:f}=e;return a.$$set=d=>{"href"in d&&r(3,f=d.href),"$$scope"in d&&r(5,o=d.$$scope)},a.$$.update=()=>{a.$$.dirty&8&&r(0,t=f.startsWith(ue)),a.$$.dirty&25&&r(1,l=t?ye(f.slice(ue.length),n):f)},[t,l,s,f,n,o,i]}class Qe extends F{constructor(e){super(),G(this,e,Le,De,J,{href:3})}}function He(a){let e,r,t;const l=a[2].default,n=N(l,a,a[1],null);return{c(){e=w("a"),n&&n.c(),this.h()},l(s){e=E(s,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var i=m(e);n&&n.l(i),i.forEach(h),this.h()},h(){_(e,"sveltekit:prefetch",""),_(e,"href",r=x+a[0]),_(e,"class","font-bold uppercase hover:text-secondary hover:underline")},m(s,i){$(s,e,i),n&&n.m(e,null),t=!0},p(s,[i]){n&&n.p&&(!t||i&2)&&O(n,l,s,s[1],t?C(l,s[1],i,null):W(s[1]),null),(!t||i&1&&r!==(r=x+s[0]))&&_(e,"href",r)},i(s){t||(g(n,s),t=!0)},o(s){k(n,s),t=!1},d(s){s&&h(e),n&&n.d(s)}}}function Se(a,e,r){let{$$slots:t={},$$scope:l}=e,{href:n}=e;return a.$$set=s=>{"href"in s&&r(0,n=s.href),"$$scope"in s&&r(1,l=s.$$scope)},[n,l,t]}class ke extends F{constructor(e){super(),G(this,e,Se,He,J,{href:0})}}function ce(a,e,r){const t=a.slice();t[3]=e[r].label,t[4]=e[r].href,t[5]=e[r].id;const l=t[5]==t[1].length-1;return t[6]=l,t}function Te(a){let e,r;return e=new ke({props:{href:a[4],$$slots:{default:[Ne]},$$scope:{ctx:a}}}),{c(){le(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,l){se(e,t,l),r=!0},p(t,l){const n={};l&512&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){ne(e,t)}}}function Re(a){let e,r;return e=new ke({props:{href:a[4],$$slots:{default:[Oe]},$$scope:{ctx:a}}}),{c(){le(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,l){se(e,t,l),r=!0},p(t,l){const n={};l&512&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){ne(e,t)}}}function Ne(a){let e=a[3]+"",r;return{c(){r=pe(e)},l(t){r=ve(t,e)},m(t,l){$(t,r,l)},p:ge,d(t){t&&h(r)}}}function Oe(a){let e,r;return{c(){e=M("svg"),r=M("path"),this.h()},l(t){e=z(t,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0});var l=m(e);r=z(l,"path",{d:!0}),m(r).forEach(h),l.forEach(h),this.h()},h(){_(r,"d","M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"class","h-5 w-5"),_(e,"viewBox","0 0 20 20"),_(e,"fill","currentColor")},m(t,l){$(t,e,l),b(e,r)},p:ge,d(t){t&&h(e)}}}function We(a){let e,r;return{c(){e=M("svg"),r=M("path"),this.h()},l(t){e=z(t,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0});var l=m(e);r=z(l,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),m(r).forEach(h),l.forEach(h),this.h()},h(){_(r,"stroke-linecap","round"),_(r,"stroke-linejoin","round"),_(r,"d","M9 5l7 7-7 7"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"class","h-5 w-5 text-gray-700"),_(e,"fill","none"),_(e,"viewBox","0 0 24 24"),_(e,"stroke","currentColor"),_(e,"stroke-width","2")},m(t,l){$(t,e,l),b(e,r)},d(t){t&&h(e)}}}function _e(a){let e,r,t,l,n,s;const i=[Re,Te],o=[];function f(u,p){return u[0]&&u[5]==0?0:1}r=f(a),t=o[r]=i[r](a);let d=!a[6]&&We();return{c(){e=w("div"),t.c(),l=L(),d&&d.c(),n=q(),this.h()},l(u){e=E(u,"DIV",{class:!0});var p=m(e);t.l(p),p.forEach(h),l=H(u),d&&d.l(u),n=q(),this.h()},h(){_(e,"class","inline-block"),fe(e,"text-gray-600",!a[6]),fe(e,"text-primary",a[6])},m(u,p){$(u,e,p),o[r].m(e,null),$(u,l,p),d&&d.m(u,p),$(u,n,p),s=!0},p(u,p){let D=r;r=f(u),r===D?o[r].p(u,p):(ee(),k(o[D],1,1,()=>{o[D]=null}),te(),t=o[r],t?t.p(u,p):(t=o[r]=i[r](u),t.c()),g(t,1),t.m(e,null))},i(u){s||(g(t),s=!0)},o(u){k(t),s=!1},d(u){u&&h(e),o[r].d(),u&&h(l),d&&d.d(u),u&&h(n)}}}function Ce(a){let e,r,t=a[1],l=[];for(let s=0;s<t.length;s+=1)l[s]=_e(ce(a,t,s));const n=s=>k(l[s],1,1,()=>{l[s]=null});return{c(){e=w("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=E(s,"DIV",{class:!0});var i=m(e);for(let o=0;o<l.length;o+=1)l[o].l(i);i.forEach(h),this.h()},h(){_(e,"class","min-h-6 flex flex-wrap items-center gap-1")},m(s,i){$(s,e,i);for(let o=0;o<l.length;o+=1)l[o].m(e,null);r=!0},p(s,[i]){if(i&3){t=s[1];let o;for(o=0;o<t.length;o+=1){const f=ce(s,t,o);l[o]?(l[o].p(f,i),g(l[o],1)):(l[o]=_e(f),l[o].c(),g(l[o],1),l[o].m(e,null))}for(ee(),o=t.length;o<l.length;o+=1)n(o);te()}},i(s){if(!r){for(let i=0;i<t.length;i+=1)g(l[i]);r=!0}},o(s){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)k(l[i]);r=!1},d(s){s&&h(e),we(l,s)}}}function Ue(a,e,r){let{url:t}=e,{startWithHome:l=!0}=e,n=[];return a.$$set=s=>{"url"in s&&r(2,t=s.url),"startWithHome"in s&&r(0,l=s.startWithHome)},a.$$.update=()=>{if(a.$$.dirty&4){const s=t.slice(x.length).split("/");let i="/";for(let o=0;o<s.length;o++)i+=s[o],n.push({label:s[o].replace("-"," "),href:i,id:o}),i+="/"}},[l,n,t]}class je extends F{constructor(e){super(),G(this,e,Ue,Ce,J,{url:2,startWithHome:0})}}const qe=a=>({}),he=a=>({isSide:!0}),Me=a=>({}),de=a=>({});function me(a){let e,r;return{c(){e=w("h1"),r=pe(a[0])},l(t){e=E(t,"H1",{});var l=m(e);r=ve(l,a[0]),l.forEach(h)},m(t,l){$(t,e,l),b(e,r)},p(t,l){l&1&&$e(r,t[0])},d(t){t&&h(e)}}}function ze(a){let e,r,t,l,n,s,i,o,f,d,u,p,D,P,K,S,B;document.title=e=a[2],f=new je({props:{url:a[3].url.pathname.slice(1)}});let v=a[1]&&me(a);const Q=a[5].sidebar,y=N(Q,a,a[4],de),X=a[5].default,I=N(X,a,a[4],null),Y=a[5].sidebar,V=N(Y,a,a[4],he);return{c(){r=L(),t=w("div"),l=w("div"),n=w("div"),s=L(),i=w("article"),o=w("nav"),le(f.$$.fragment),d=L(),u=w("div"),v&&v.c(),p=L(),D=w("div"),y&&y.c(),P=L(),I&&I.c(),K=L(),S=w("div"),V&&V.c(),this.h()},l(c){Ee('[data-svelte="svelte-1llm4vj"]',document.head).forEach(h),r=H(c),t=E(c,"DIV",{class:!0});var U=m(t);l=E(U,"DIV",{class:!0});var T=m(l);n=E(T,"DIV",{class:!0}),m(n).forEach(h),s=H(T),i=E(T,"ARTICLE",{class:!0});var j=m(i);o=E(j,"NAV",{class:!0});var ae=m(o);re(f.$$.fragment,ae),ae.forEach(h),d=H(j),u=E(j,"DIV",{class:!0});var R=m(u);v&&v.l(R),p=H(R),D=E(R,"DIV",{class:!0});var ie=m(D);y&&y.l(ie),ie.forEach(h),P=H(R),I&&I.l(R),R.forEach(h),j.forEach(h),K=H(T),S=E(T,"DIV",{class:!0});var oe=m(S);V&&V.l(oe),oe.forEach(h),T.forEach(h),U.forEach(h),this.h()},h(){_(n,"class","hidden xl:block"),_(o,"class","border-b border-gray-400 pb-2"),_(D,"class","not-prose border-y border-gray-400 lg:hidden"),_(u,"class","markdown"),_(i,"class","mx-auto h-min w-full min-w-min max-w-[125ch] bg-white px-4 py-2 lg:rounded-xl lg:border"),_(S,"class","prose hidden lg:block"),_(l,"class","grid gap-4 lg:grid-cols-page-layout-lg lg:p-4 xl:grid-cols-page-layout-xl"),_(t,"class","min-h-full-content bg-primary-variant-50")},m(c,A){$(c,r,A),$(c,t,A),b(t,l),b(l,n),b(l,s),b(l,i),b(i,o),se(f,o,null),b(i,d),b(i,u),v&&v.m(u,null),b(u,p),b(u,D),y&&y.m(D,null),b(u,P),I&&I.m(u,null),b(l,K),b(l,S),V&&V.m(S,null),B=!0},p(c,[A]){(!B||A&4)&&e!==(e=c[2])&&(document.title=e);const U={};A&8&&(U.url=c[3].url.pathname.slice(1)),f.$set(U),c[1]?v?v.p(c,A):(v=me(c),v.c(),v.m(u,p)):v&&(v.d(1),v=null),y&&y.p&&(!B||A&16)&&O(y,Q,c,c[4],B?C(Q,c[4],A,Me):W(c[4]),de),I&&I.p&&(!B||A&16)&&O(I,X,c,c[4],B?C(X,c[4],A,null):W(c[4]),null),V&&V.p&&(!B||A&16)&&O(V,Y,c,c[4],B?C(Y,c[4],A,qe):W(c[4]),he)},i(c){B||(g(f.$$.fragment,c),g(y,c),g(I,c),g(V,c),B=!0)},o(c){k(f.$$.fragment,c),k(y,c),k(I,c),k(V,c),B=!1},d(c){c&&h(r),c&&h(t),ne(f),v&&v.d(),y&&y.d(c),I&&I.d(c),V&&V.d(c)}}}function Fe(a,e,r){let t,l;Z(a,be,f=>r(3,l=f));let{$$slots:n={},$$scope:s}=e,{title:i}=e,{showTitle:o=!1}=e;return a.$$set=f=>{"title"in f&&r(0,i=f.title),"showTitle"in f&&r(1,o=f.showTitle),"$$scope"in f&&r(4,s=f.$$scope)},a.$$.update=()=>{a.$$.dirty&1&&r(2,t=i?i+" - Open Source Society":"Open Source Society")},[i,o,t,l,s,n]}class Xe extends F{constructor(e){super(),G(this,e,Fe,ze,J,{title:0,showTitle:1})}}export{Qe as A,Xe as B};