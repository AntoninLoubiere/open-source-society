import{S as f,i as u,s as c,v as _,w as m,x as $,f as r,t as i,y as p,D as g,F as d,G as y,H as b}from"./paths-971ee920.js";import{B as h}from"./BaseLayout-7ead8e28.js";function D(o){let s;const n=o[1].default,t=g(n,o,o[2],null);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,a){t&&t.m(e,a),s=!0},p(e,a){t&&t.p&&(!s||a&4)&&d(t,n,e,e[2],s?b(n,e[2],a,null):y(e[2]),null)},i(e){s||(r(t,e),s=!0)},o(e){i(t,e),s=!1},d(e){t&&t.d(e)}}}function w(o){let s,n;return s=new h({props:{title:o[0],$$slots:{default:[D]},$$scope:{ctx:o}}}),{c(){_(s.$$.fragment)},l(t){m(s.$$.fragment,t)},m(t,e){$(s,t,e),n=!0},p(t,[e]){const a={};e&1&&(a.title=t[0]),e&4&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){n||(r(s.$$.fragment,t),n=!0)},o(t){i(s.$$.fragment,t),n=!1},d(t){p(s,t)}}}function B(o,s,n){let{$$slots:t={},$$scope:e}=s,{title:a}=s;return o.$$set=l=>{"title"in l&&n(0,a=l.title),"$$scope"in l&&n(2,e=l.$$scope)},[a,t,e]}class v extends f{constructor(s){super(),u(this,s,B,w,c,{title:0})}}export{v as D};