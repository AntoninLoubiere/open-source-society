import{S as x,i as z,s as C,G as B,k as b,l as E,m,h as c,n as f,H as y,b as H,I as F,J as P,K as J,f as k,t as $,L as I,q as K,r as Q,u as W,M as X,x as L,a as j,y as R,c as A,N as v,z as D,O as G,A as M,P as Y,Q as Z,R as S,T as U,U as ee,V as te}from"../../chunks/paths-1a21f2eb.js";import{b as ae}from"../../chunks/navigation-d9d8ca1d.js";import{H as se,M as le,R as re}from"../../chunks/config-757f2d47.js";import{g as ne,c as oe}from"../../chunks/utils-b97a2183.js";import{p as ie}from"../../chunks/stores-706fc2dd.js";import{$ as O,a as fe}from"../../chunks/formatters-f84f693e.js";import{a as ce}from"../../chunks/_layout-46c79f62.js";function ue(r){let t=r[3]("header.nav."+r[0])+"",a;return{c(){a=K(t)},l(s){a=Q(s,t)},m(s,n){H(s,a,n)},p(s,n){n&9&&t!==(t=s[3]("header.nav."+s[0])+"")&&W(a,t)},d(s){s&&c(a)}}}function _e(r){let t,a;const s=r[9].default,n=B(s,r,r[8],null),l=n||ue(r);return{c(){t=b("a"),l&&l.c(),this.h()},l(e){t=E(e,"A",{href:!0,class:!0});var i=m(t);l&&l.l(i),i.forEach(c),this.h()},h(){f(t,"href",r[1]),f(t,"class","hover:text-secondary hover:underline svelte-1gv8ddj"),y(t,"active",r[2])},m(e,i){H(e,t,i),l&&l.m(t,null),a=!0},p(e,[i]){n?n.p&&(!a||i&256)&&F(n,s,e,e[8],a?J(s,e[8],i,null):P(e[8]),null):l&&l.p&&(!a||i&9)&&l.p(e,a?i:-1),(!a||i&2)&&f(t,"href",e[1]),(!a||i&4)&&y(t,"active",e[2])},i(e){a||(k(l,e),a=!0)},o(e){$(l,e),a=!1},d(e){e&&c(t),l&&l.d(e)}}}function he(r,t,a){let s,n,l,e,i;I(r,ie,o=>a(6,l=o)),I(r,O,o=>a(7,e=o)),I(r,fe,o=>a(3,i=o));let{$$slots:p={},$$scope:u}=t,{pathId:_}=t,{label:g=""}=t,{activeExact:w=!1}=t;return r.$$set=o=>{"pathId"in o&&a(4,_=o.pathId),"label"in o&&a(0,g=o.label),"activeExact"in o&&a(5,w=o.activeExact),"$$scope"in o&&a(8,u=o.$$scope)},r.$$.update=()=>{var o;r.$$.dirty&144&&a(1,s=ne(_,e)),r.$$.dirty&98&&a(2,n=w?l.url.pathname==s:(o=l.url)==null?void 0:o.pathname.startsWith(s))},[g,s,n,i,_,w,l,e,u,p]}class q extends x{constructor(t){super(),z(this,t,he,_e,C,{pathId:4,label:0,activeExact:5})}}const{window:V}=Z;function de(r){let t,a;return{c(){t=S("svg"),a=S("path"),this.h()},l(s){t=U(s,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0});var n=m(t);a=U(n,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),m(a).forEach(c),n.forEach(c),this.h()},h(){f(a,"stroke-linecap","round"),f(a,"stroke-linejoin","round"),f(a,"d","M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"),f(t,"xmlns","http://www.w3.org/2000/svg"),f(t,"class","h-6 w-6"),f(t,"fill","none"),f(t,"viewBox","0 0 24 24"),f(t,"stroke","currentColor"),f(t,"stroke-width","2")},m(s,n){H(s,t,n),v(t,a)},p:ee,d(s){s&&c(t)}}}function me(r){let t,a,s,n,l,e,i,p,u,_,g,w;return X(r[3]),n=new q({props:{pathId:"",activeExact:!0,$$slots:{default:[de]},$$scope:{ctx:r}}}),i=new q({props:{pathId:"projects",label:"projects"}}),{c(){t=b("div"),a=b("header"),s=b("div"),L(n.$$.fragment),l=j(),e=b("nav"),L(i.$$.fragment),p=j(),u=b("div"),this.h()},l(o){t=E(o,"DIV",{class:!0});var d=m(t);a=E(d,"HEADER",{class:!0});var h=m(a);s=E(h,"DIV",{class:!0});var N=m(s);R(n.$$.fragment,N),N.forEach(c),l=A(h),e=E(h,"NAV",{class:!0});var T=m(e);R(i.$$.fragment,T),T.forEach(c),p=A(h),u=E(h,"DIV",{class:!0}),m(u).forEach(c),h.forEach(c),d.forEach(c),this.h()},h(){f(s,"class","text-xl font-bold sm:w-52"),f(e,"class","hidden w-52 justify-evenly gap-2 sm:flex"),f(u,"class","flex justify-end sm:w-52"),f(a,"class","fixed top-0 left-0 right-0 z-50 flex h-header-bar -translate-y-header-bar items-center justify-between bg-white px-3 shadow-md transition-transform svelte-vtgb4e"),y(a,"opened",r[1]),f(t,"class","h-header-bar print:hidden")},m(o,d){H(o,t,d),v(t,a),v(a,s),D(n,s,null),v(a,l),v(a,e),D(i,e,null),v(a,p),v(a,u),_=!0,g||(w=[G(V,"scroll",r[2]),G(V,"resize",r[3])],g=!0)},p(o,[d]){const h={};d&64&&(h.$$scope={dirty:d,ctx:o}),n.$set(h),(!_||d&2)&&y(a,"opened",o[1])},i(o){_||(k(n.$$.fragment,o),k(i.$$.fragment,o),_=!0)},o(o){$(n.$$.fragment,o),$(i.$$.fragment,o),_=!1},d(o){o&&c(t),M(n),M(i),g=!1,Y(w)}}}function pe(r,t,a){let s=oe(se),n=0,l=!0,e=0;function i(){const u=window.pageYOffset;a(1,l=n>=le||u<s||u<e),e=u}function p(){a(0,n=V.innerHeight)}return[n,l,i,p]}class ve extends x{constructor(t){super(),z(this,t,pe,me,C,{})}}function ge(r){let t,a,s;t=new ve({});const n=r[1].default,l=B(n,r,r[0],null);return{c(){L(t.$$.fragment),a=j(),l&&l.c()},l(e){R(t.$$.fragment,e),a=A(e),l&&l.l(e)},m(e,i){D(t,e,i),H(e,a,i),l&&l.m(e,i),s=!0},p(e,[i]){l&&l.p&&(!s||i&1)&&F(l,n,e,e[0],s?J(n,e[0],i,null):P(e[0]),null)},i(e){s||(k(t.$$.fragment,e),k(l,e),s=!0)},o(e){$(t.$$.fragment,e),$(l,e),s=!1},d(e){M(t,e),e&&c(a),l&&l.d(e)}}}function we(r,t,a){let s;I(r,O,e=>a(2,s=e));let{$$slots:n={},$$scope:l}=t;return ae(({to:e})=>{e!=null&&e.url&&te(O,s=ce(e.url)||re,s)}),r.$$set=e=>{"$$scope"in e&&a(0,l=e.$$scope)},[l,n]}class Le extends x{constructor(t){super(),z(this,t,we,ge,C,{})}}export{Le as default};
