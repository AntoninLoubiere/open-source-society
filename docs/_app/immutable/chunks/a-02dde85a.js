import{S as w,i as y,s as O,e as k,a as m,g as S,t as p,c as T,b as h,d as _,J as b,E as v,h as A,j as L,k as E,l as u,G as I,H as N,I as R}from"./paths-4dc8f2f4.js";import{p as j}from"./stores-4d2abcbe.js";import{g as q,i as C}from"./utils-dec55694.js";import"./BaseLayout-c3896e4a.js";import{$ as G}from"./formatters-8088f95a.js";function H(i){let s,l;const r=i[6].default,t=v(r,i,i[5],null);return{c(){s=A("a"),t&&t.c(),this.h()},l(e){s=L(e,"A",{href:!0,class:!0});var o=E(s);t&&t.l(o),o.forEach(_),this.h()},h(){u(s,"href",i[1]),u(s,"class","link external svelte-1u1y0as")},m(e,o){m(e,s,o),t&&t.m(s,null),l=!0},p(e,o){t&&t.p&&(!l||o&32)&&I(t,r,e,e[5],l?R(r,e[5],o,null):N(e[5]),null),(!l||o&2)&&u(s,"href",e[1])},i(e){l||(h(t,e),l=!0)},o(e){p(t,e),l=!1},d(e){e&&_(s),t&&t.d(e)}}}function J(i){let s,l;const r=i[6].default,t=v(r,i,i[5],null);return{c(){s=A("a"),t&&t.c(),this.h()},l(e){s=L(e,"A",{href:!0,"data-sveltekit-preload-code":!0,"data-sveltekit-preload-data":!0,class:!0});var o=E(s);t&&t.l(o),o.forEach(_),this.h()},h(){u(s,"href",i[1]),u(s,"data-sveltekit-preload-code","viewport"),u(s,"data-sveltekit-preload-data","hover"),u(s,"class","link")},m(e,o){m(e,s,o),t&&t.m(s,null),l=!0},p(e,o){t&&t.p&&(!l||o&32)&&I(t,r,e,e[5],l?R(r,e[5],o,null):N(e[5]),null),(!l||o&2)&&u(s,"href",e[1])},i(e){l||(h(t,e),l=!0)},o(e){p(t,e),l=!1},d(e){e&&_(s),t&&t.d(e)}}}function P(i){let s,l,r,t,e;const o=[J,H],f=[];function c(a,n){return n&7&&(s=null),s==null&&(s=!!(a[0]||C(a[2].url,a[1]))),s?0:1}return l=c(i,-1),r=f[l]=o[l](i),{c(){r.c(),t=k()},l(a){r.l(a),t=k()},m(a,n){f[l].m(a,n),m(a,t,n),e=!0},p(a,[n]){let d=l;l=c(a,n),l===d?f[l].p(a,n):(S(),p(f[d],1,1,()=>{f[d]=null}),T(),r=f[l],r?r.p(a,n):(r=f[l]=o[l](a),r.c()),h(r,1),r.m(t.parentNode,t))},i(a){e||(h(r),e=!0)},o(a){p(r),e=!1},d(a){f[l].d(a),a&&_(t)}}}const g="internal:/";function U(i,s,l){let r,t,e,o;b(i,G,n=>l(4,e=n)),b(i,j,n=>l(2,o=n));let{$$slots:f={},$$scope:c}=s,{href:a}=s;return i.$$set=n=>{"href"in n&&l(3,a=n.href),"$$scope"in n&&l(5,c=n.$$scope)},i.$$.update=()=>{i.$$.dirty&8&&l(0,r=a.startsWith(g)),i.$$.dirty&25&&l(1,t=r?q(a.slice(g.length),e):a)},[r,t,o,a,e,c,f]}class K extends w{constructor(s){super(),y(this,s,U,P,O,{href:3})}}export{K as A};