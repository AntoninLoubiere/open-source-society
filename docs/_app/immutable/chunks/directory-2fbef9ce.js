import{S as c,i as g,s as d,v as y,w as b,x as h,b as _,t as r,y as w,E as B,G as D,H as S,I as q}from"./paths-69893b53.js";/* empty css                                        */import{B as C}from"./BaseLayout-1ffc142b.js";function E(n){let i;const a=n[5].default,t=B(a,n,n[6],null);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,l){t&&t.m(e,l),i=!0},p(e,l){t&&t.p&&(!i||l&64)&&D(t,a,e,e[6],i?q(a,e[6],l,null):S(e[6]),null)},i(e){i||(_(t,e),i=!0)},o(e){r(t,e),i=!1},d(e){t&&t.d(e)}}}function G(n){let i,a;return i=new C({props:{title:n[0],summary:n[1],img:n[2],edit_url:n[3],last_modification:n[4],$$slots:{default:[E]},$$scope:{ctx:n}}}),{c(){y(i.$$.fragment)},l(t){b(i.$$.fragment,t)},m(t,e){h(i,t,e),a=!0},p(t,[e]){const l={};e&1&&(l.title=t[0]),e&2&&(l.summary=t[1]),e&4&&(l.img=t[2]),e&8&&(l.edit_url=t[3]),e&16&&(l.last_modification=t[4]),e&64&&(l.$$scope={dirty:e,ctx:t}),i.$set(l)},i(t){a||(_(i.$$.fragment,t),a=!0)},o(t){r(i.$$.fragment,t),a=!1},d(t){w(i,t)}}}function H(n,i,a){let{$$slots:t={},$$scope:e}=i,{title:l}=i,{summary:o}=i,{img:m}=i,{edit_url:f}=i,{last_modification:u}=i;return n.$$set=s=>{"title"in s&&a(0,l=s.title),"summary"in s&&a(1,o=s.summary),"img"in s&&a(2,m=s.img),"edit_url"in s&&a(3,f=s.edit_url),"last_modification"in s&&a(4,u=s.last_modification),"$$scope"in s&&a(6,e=s.$$scope)},[l,o,m,f,u,t,e]}class k extends c{constructor(i){super(),g(this,i,H,G,d,{title:0,summary:1,img:2,edit_url:3,last_modification:4})}}export{k as D};