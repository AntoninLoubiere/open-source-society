import{S as r,i as c,s as m,x as d,y as g,z as b,f as u,t as _,A as h,G as p,I as B,J as D,K as S}from"./paths-1a21f2eb.js";import{B as q}from"./BaseLayout-460ccc9e.js";function w(n){let i;const a=n[3].default,t=p(a,n,n[4],null);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,l){t&&t.m(e,l),i=!0},p(e,l){t&&t.p&&(!i||l&16)&&B(t,a,e,e[4],i?S(a,e[4],l,null):D(e[4]),null)},i(e){i||(u(t,e),i=!0)},o(e){_(t,e),i=!1},d(e){t&&t.d(e)}}}function y(n){let i,a;return i=new q({props:{title:n[0],edit_url:n[1],last_modification:n[2],$$slots:{default:[w]},$$scope:{ctx:n}}}),{c(){d(i.$$.fragment)},l(t){g(i.$$.fragment,t)},m(t,e){b(i,t,e),a=!0},p(t,[e]){const l={};e&1&&(l.title=t[0]),e&2&&(l.edit_url=t[1]),e&4&&(l.last_modification=t[2]),e&16&&(l.$$scope={dirty:e,ctx:t}),i.$set(l)},i(t){a||(u(i.$$.fragment,t),a=!0)},o(t){_(i.$$.fragment,t),a=!1},d(t){h(i,t)}}}function z(n,i,a){let{$$slots:t={},$$scope:e}=i,{title:l}=i,{edit_url:o}=i,{last_modification:f}=i;return n.$$set=s=>{"title"in s&&a(0,l=s.title),"edit_url"in s&&a(1,o=s.edit_url),"last_modification"in s&&a(2,f=s.last_modification),"$$scope"in s&&a(4,e=s.$$scope)},[l,o,f,t,e]}class G extends r{constructor(i){super(),c(this,i,z,y,m,{title:0,edit_url:1,last_modification:2})}}export{G as D};
