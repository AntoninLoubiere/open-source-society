function _(){}function I(t,e){for(const n in e)t[n]=e[n];return t}function z(t){return t()}function M(){return Object.create(null)}function x(t){t.forEach(z)}function k(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let E;function ht(t,e){return E||(E=document.createElement("a")),E.href=e,t===E.href}function K(t){return Object.keys(t).length===0}function C(t,...e){if(t==null)return _;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function mt(t){let e;return C(t,n=>e=n)(),e}function pt(t,e,n){t.$$.on_destroy.push(C(e,n))}function yt(t,e,n,i){if(t){const r=B(t,e,n,i);return t[0](r)}}function B(t,e,n,i){return t[1]&&i?I(n.ctx.slice(),t[1](i(e))):n.ctx}function gt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(e.dirty.length,r.length);for(let u=0;u<c;u+=1)l[u]=e.dirty[u]|r[u];return l}return e.dirty|r}return e.dirty}function bt(t,e,n,i,r,l){if(r){const c=B(e,n,i,l);t.p(c,r)}}function xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function $t(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function wt(t,e,n){return t.set(n),e}let A=!1;function Q(){A=!0}function U(){A=!1}function V(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const o=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=o?r+1:V(1,r,m=>e[n[m]].claim_order,o))-1;i[s]=n[f]+1;const a=f+1;n[a]=s,r=Math.max(a,r)}const l=[],c=[];let u=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(l.push(e[s-1]);u>=s;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);l.reverse(),c.sort((s,o)=>s.claim_order-o.claim_order);for(let s=0,o=0;s<c.length;s++){for(;o<l.length&&c[s].claim_order>=l[o].claim_order;)o++;const f=o<l.length?l[o]:null;t.insertBefore(c[s],f)}}function Y(t,e){if(A){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Et(t,e,n){A&&!n?Y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Z(t){t.parentNode&&t.parentNode.removeChild(t)}function vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function q(t){return document.createTextNode(t)}function Nt(){return q(" ")}function At(){return q("")}function St(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function nt(t){return Array.from(t.childNodes)}function it(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,e,n,i,r=!1){it(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function O(t,e,n,i){return H(t,r=>r.nodeName===e,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];n[u.name]||l.push(u.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Tt(t,e,n){return O(t,e,n,tt)}function kt(t,e,n){return O(t,e,n,et)}function rt(t,e){return H(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>q(e),!0)}function Ct(t){return rt(t," ")}function qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Mt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Dt(t,e,n){t.classList[n?"add":"remove"](e)}function Lt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function zt(t,e){return new t(e)}let w;function $(t){w=t}function P(){if(!w)throw new Error("Function called outside component initialization");return w}function Bt(t){P().$$.on_mount.push(t)}function Ht(t){P().$$.after_update.push(t)}const b=[],D=[],v=[],L=[],F=Promise.resolve();let j=!1;function R(){j||(j=!0,F.then(W))}function Ot(){return R(),F}function T(t){v.push(t)}const S=new Set;let y=0;function W(){if(y!==0)return;const t=w;do{try{for(;y<b.length;){const e=b[y];y++,$(e),st(e.$$)}}catch(e){throw b.length=0,y=0,e}for($(null),b.length=0,y=0;D.length;)D.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];S.has(n)||(S.add(n),n())}v.length=0}while(b.length);for(;L.length;)L.pop()();j=!1,S.clear(),$(t)}function st(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const N=new Set;let h;function Pt(){h={r:0,c:[],p:h}}function Ft(){h.r||x(h.c),h=h.p}function ct(t,e){t&&t.i&&(N.delete(t),t.i(e))}function Rt(t,e,n,i){if(t&&t.o){if(N.has(t))return;N.add(t),h.c.push(()=>{N.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Wt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Gt(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const c=t[l],u=e[l];if(u){for(const s in c)s in u||(i[s]=1);for(const s in u)r[s]||(n[s]=u[s],r[s]=1);t[l]=u}else for(const s in c)r[s]=1}for(const c in i)c in n||(n[c]=void 0);return n}function It(t){return typeof t=="object"&&t!==null?t:{}}function Jt(t){t&&t.c()}function Kt(t,e){t&&t.l(e)}function ot(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||T(()=>{const c=t.$$.on_mount.map(z).filter(k);t.$$.on_destroy?t.$$.on_destroy.push(...c):x(c),t.$$.on_mount=[]}),l.forEach(T)}function ut(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(b.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qt(t,e,n,i,r,l,c,u=[-1]){const s=w;$(t);const o=t.$$={fragment:null,ctx:[],props:l,update:_,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:e.target||s.$$.root};c&&c(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,m,...d)=>{const p=d.length?d[0]:m;return o.ctx&&r(o.ctx[a],o.ctx[a]=p)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](p),f&&lt(t,a)),m}):[],o.update(),f=!0,x(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){Q();const a=nt(e.target);o.fragment&&o.fragment.l(a),a.forEach(Z)}else o.fragment&&o.fragment.c();e.intro&&ct(t.$$.fragment),ot(t,e.target,e.anchor,e.customElement),U(),W()}$(s)}class Ut{$destroy(){ut(this,1),this.$destroy=_}$on(e,n){if(!k(n))return _;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const g=[];function ft(t,e){return{subscribe:at(t,e).subscribe}}function at(t,e=_){let n;const i=new Set;function r(u){if(J(t,u)&&(t=u,n)){const s=!g.length;for(const o of i)o[1](),g.push(o,t);if(s){for(let o=0;o<g.length;o+=2)g[o][0](g[o+1]);g.length=0}}}function l(u){r(u(t))}function c(u,s=_){const o=[u,s];return i.add(o),i.size===1&&(n=e(r)||_),u(t),()=>{i.delete(o),i.size===0&&(n(),n=null)}}return{set:r,update:l,subscribe:c}}function Vt(t,e,n){const i=!Array.isArray(t),r=i?[t]:t,l=e.length<2;return ft(n,c=>{let u=!1;const s=[];let o=0,f=_;const a=()=>{if(o)return;f();const d=e(i?s[0]:s,c);l?c(d):f=k(d)?d:_},m=r.map((d,p)=>C(d,G=>{s[p]=G,o&=~(1<<p),u&&a()},()=>{o|=1<<p}));return u=!0,a(),function(){x(m),f()}})}const dt="/open-source-society";let _t=dt;function Xt(t){_t=t}export{$t as $,ut as A,Ot as B,dt as C,Xt as D,at as E,_t as F,yt as G,Dt as H,bt as I,xt as J,gt as K,pt as L,T as M,Y as N,St as O,x as P,Wt as Q,et as R,Ut as S,kt as T,_ as U,wt as V,mt as W,vt as X,I as Y,Gt as Z,It as _,Nt as a,ht as a0,Lt as a1,Vt as a2,Et as b,Ct as c,Ft as d,At as e,ct as f,Pt as g,Z as h,Qt as i,Ht as j,tt as k,Tt as l,nt as m,jt as n,Bt as o,Mt as p,q,rt as r,J as s,Rt as t,qt as u,D as v,zt as w,Jt as x,Kt as y,ot as z};
