(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var ie,f,pt,ee,ze,ht,fe={},mt=[],vn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function T(e,t){for(var n in t)e[n]=t[n];return e}function vt(e){var t=e.parentNode;t&&t.removeChild(e)}function D(e,t,n){var r,i,o,c={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:c[o]=t[o];if(arguments.length>2&&(c.children=arguments.length>3?ie.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)c[o]===void 0&&(c[o]=e.defaultProps[o]);return te(e,c,r,i,null)}function te(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++pt:i};return i==null&&f.vnode!=null&&f.vnode(o),o}function yt(){return{current:null}}function A(e){return e.children}function P(e,t){this.props=e,this.context=t}function J(e,t){if(t==null)return e.__?J(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?J(e):null}function gt(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return gt(e)}}function Ee(e){(!e.__d&&(e.__d=!0)&&ee.push(e)&&!de.__r++||ze!==f.debounceRendering)&&((ze=f.debounceRendering)||setTimeout)(de)}function de(){for(var e;de.__r=ee.length;)e=ee.sort(function(t,n){return t.__v.__b-n.__v.__b}),ee=[],e.some(function(t){var n,r,i,o,c,_;t.__d&&(c=(o=(n=t).__v).__e,(_=n.__P)&&(r=[],(i=T({},o)).__v=o.__v+1,Re(_,o,i,n.__n,_.ownerSVGElement!==void 0,o.__h!=null?[c]:null,r,c==null?J(o):c,o.__h),xt(r,o),o.__e!=c&&gt(o)))})}function bt(e,t,n,r,i,o,c,_,a,h){var u,m,s,l,d,E,v,S=r&&r.__k||mt,$=S.length;for(n.__k=[],u=0;u<t.length;u++)if((l=n.__k[u]=(l=t[u])==null||typeof l=="boolean"?null:typeof l=="string"||typeof l=="number"||typeof l=="bigint"?te(null,l,null,null,l):Array.isArray(l)?te(A,{children:l},null,null,null):l.__b>0?te(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l)!=null){if(l.__=n,l.__b=n.__b+1,(s=S[u])===null||s&&l.key==s.key&&l.type===s.type)S[u]=void 0;else for(m=0;m<$;m++){if((s=S[m])&&l.key==s.key&&l.type===s.type){S[m]=void 0;break}s=null}Re(e,l,s=s||fe,i,o,c,_,a,h),d=l.__e,(m=l.ref)&&s.ref!=m&&(v||(v=[]),s.ref&&v.push(s.ref,null,l),v.push(m,l.__c||d,l)),d!=null?(E==null&&(E=d),typeof l.type=="function"&&l.__k===s.__k?l.__d=a=wt(l,a,e):a=kt(e,l,s,S,d,a),typeof n.type=="function"&&(n.__d=a)):a&&s.__e==a&&a.parentNode!=e&&(a=J(s))}for(n.__e=E,u=$;u--;)S[u]!=null&&(typeof n.type=="function"&&S[u].__e!=null&&S[u].__e==n.__d&&(n.__d=J(r,u+1)),Et(S[u],S[u]));if(v)for(u=0;u<v.length;u++)St(v[u],v[++u],v[++u])}function wt(e,t,n){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,t=typeof r.type=="function"?wt(r,t,n):kt(n,r,r,i,r.__e,t));return t}function M(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){M(n,t)}):t.push(e)),t}function kt(e,t,n,r,i,o){var c,_,a;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),c=null;else{for(_=o,a=0;(_=_.nextSibling)&&a<r.length;a+=2)if(_==i)break e;e.insertBefore(i,o),c=o}return c!==void 0?c:i.nextSibling}function yn(e,t,n,r,i){var o;for(o in n)o==="children"||o==="key"||o in t||pe(e,o,null,n[o],r);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||pe(e,o,t[o],n[o],r)}function qe(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||vn.test(t)?n:n+"px"}function pe(e,t,n,r,i){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||qe(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||qe(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?Je:Ke,o):e.removeEventListener(t,o?Je:Ke,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Ke(e){this.l[e.type+!1](f.event?f.event(e):e)}function Je(e){this.l[e.type+!0](f.event?f.event(e):e)}function Re(e,t,n,r,i,o,c,_,a){var h,u,m,s,l,d,E,v,S,$,F,I,b,p=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(a=n.__h,_=t.__e=n.__e,t.__h=null,o=[_]),(h=f.__b)&&h(t);try{e:if(typeof p=="function"){if(v=t.props,S=(h=p.contextType)&&r[h.__c],$=h?S?S.props.value:h.__:r,n.__c?E=(u=t.__c=n.__c).__=u.__E:("prototype"in p&&p.prototype.render?t.__c=u=new p(v,$):(t.__c=u=new P(v,$),u.constructor=p,u.render=bn),S&&S.sub(u),u.props=v,u.state||(u.state={}),u.context=$,u.__n=r,m=u.__d=!0,u.__h=[]),u.__s==null&&(u.__s=u.state),p.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=T({},u.__s)),T(u.__s,p.getDerivedStateFromProps(v,u.__s))),s=u.props,l=u.state,m)p.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(p.getDerivedStateFromProps==null&&v!==s&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(v,$),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(v,u.__s,$)===!1||t.__v===n.__v){u.props=v,u.state=u.__s,t.__v!==n.__v&&(u.__d=!1),u.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(y){y&&(y.__=t)}),u.__h.length&&c.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(v,u.__s,$),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(s,l,d)})}if(u.context=$,u.props=v,u.__v=t,u.__P=e,F=f.__r,I=0,"prototype"in p&&p.prototype.render)u.state=u.__s,u.__d=!1,F&&F(t),h=u.render(u.props,u.state,u.context);else do u.__d=!1,F&&F(t),h=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++I<25);u.state=u.__s,u.getChildContext!=null&&(r=T(T({},r),u.getChildContext())),m||u.getSnapshotBeforeUpdate==null||(d=u.getSnapshotBeforeUpdate(s,l)),b=h!=null&&h.type===A&&h.key==null?h.props.children:h,bt(e,Array.isArray(b)?b:[b],t,n,r,i,o,c,_,a),u.base=t.__e,t.__h=null,u.__h.length&&c.push(u),E&&(u.__E=u.__=null),u.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=gn(n.__e,t,n,r,i,o,c,a);(h=f.diffed)&&h(t)}catch(y){t.__v=null,(a||o!=null)&&(t.__e=_,t.__h=!!a,o[o.indexOf(_)]=null),f.__e(y,t,n)}}function xt(e,t){f.__c&&f.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){f.__e(r,n.__v)}})}function gn(e,t,n,r,i,o,c,_){var a,h,u,m=n.props,s=t.props,l=t.type,d=0;if(l==="svg"&&(i=!0),o!=null){for(;d<o.length;d++)if((a=o[d])&&"setAttribute"in a==!!l&&(l?a.localName===l:a.nodeType===3)){e=a,o[d]=null;break}}if(e==null){if(l===null)return document.createTextNode(s);e=i?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l,s.is&&s),o=null,_=!1}if(l===null)m===s||_&&e.data===s||(e.data=s);else{if(o=o&&ie.call(e.childNodes),h=(m=n.props||fe).dangerouslySetInnerHTML,u=s.dangerouslySetInnerHTML,!_){if(o!=null)for(m={},d=0;d<e.attributes.length;d++)m[e.attributes[d].name]=e.attributes[d].value;(u||h)&&(u&&(h&&u.__html==h.__html||u.__html===e.innerHTML)||(e.innerHTML=u&&u.__html||""))}if(yn(e,s,m,i,_),u)t.__k=[];else if(d=t.props.children,bt(e,Array.isArray(d)?d:[d],t,n,r,i&&l!=="foreignObject",o,c,o?o[0]:n.__k&&J(n,0),_),o!=null)for(d=o.length;d--;)o[d]!=null&&vt(o[d]);_||("value"in s&&(d=s.value)!==void 0&&(d!==e.value||l==="progress"&&!d||l==="option"&&d!==m.value)&&pe(e,"value",d,m.value,!1),"checked"in s&&(d=s.checked)!==void 0&&d!==e.checked&&pe(e,"checked",d,m.checked,!1))}return e}function St(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){f.__e(r,n)}}function Et(e,t,n){var r,i;if(f.unmount&&f.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||St(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){f.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Et(r[i],t,typeof e.type!="function");n||e.__e==null||vt(e.__e),e.__=e.__e=e.__d=void 0}function bn(e,t,n){return this.constructor(e,n)}function G(e,t,n){var r,i,o;f.__&&f.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],Re(t,e=(!r&&n||t).__k=D(A,null,[e]),i||fe,fe,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?ie.call(t.childNodes):null,o,!r&&n?n:i?i.__e:t.firstChild,r),xt(o,e)}function $t(e,t){G(e,t,$t)}function wn(e,t,n){var r,i,o,c=T({},e.props);for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:c[o]=t[o];return arguments.length>2&&(c.children=arguments.length>3?ie.call(arguments,2):n),te(e.type,c,r||e.key,i||e.ref,null)}function Ct(e,t){var n={__c:t="__cC"+ht++,__:e,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,o;return this.getChildContext||(i=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&i.some(Ee)},this.sub=function(c){i.push(c);var _=c.componentWillUnmount;c.componentWillUnmount=function(){i.splice(i.indexOf(c),1),_&&_.call(c)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}ie=mt.slice,f={__e:function(e,t,n,r){for(var i,o,c;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),c=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),c=i.__d),c)return i.__E=i}catch(_){e=_}throw e}},pt=0,P.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=T({},this.state),typeof e=="function"&&(e=e(T({},n),this.props)),e&&T(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Ee(this))},P.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ee(this))},P.prototype.render=A,ee=[],de.__r=0,ht=0;function Nt(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Nt(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function k(){for(var e=0,t,n,r="";e<arguments.length;)(t=arguments[e++])&&(n=Nt(t))&&(r&&(r+=" "),r+=n);return r}const Pt=k,kn=k,xn=k,Sn=k,En=k,be=k,ye=k,$n=k,Le=k,Y=k,Ot=k,$e=k,Cn=k,Nn=k,Pn=k,L=k,On=k,Ce=k,Dn=k,Dt=k,he=k,At=k,W=k,An=k,ne=k,V=k,C=k,w=k;var U,x,we,Ge,Z=0,Rt=[],se=[],Ye=f.__b,Ze=f.__r,Xe=f.diffed,Qe=f.__c,et=f.unmount;function B(e,t){f.__h&&f.__h(x,e,Z||t),Z=0;var n=x.__H||(x.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:se}),n.__[e]}function ge(e){return Z=1,Te(jt,e)}function Te(e,t,n){var r=B(U++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):jt(void 0,t),function(o){var c=r.__N?r.__N[0]:r.__[0],_=r.t(c,o);c!==_&&(r.__N=[_,r.__[1]],r.__c.setState({}))}],r.__c=x,!x.u)){x.u=!0;var i=x.shouldComponentUpdate;x.shouldComponentUpdate=function(o,c,_){if(!r.__c.__H)return!0;var a=r.__c.__H.__.filter(function(u){return u.__c});if(a.every(function(u){return!u.__N}))return!i||i.call(this,o,c,_);var h=!1;return a.forEach(function(u){if(u.__N){var m=u.__[0];u.__=u.__N,u.__N=void 0,m!==u.__[0]&&(h=!0)}}),!!h&&(!i||i.call(this,o,c,_))}}return r.__N||r.__}function ue(e,t){var n=B(U++,3);!f.__s&&Ue(n.__H,t)&&(n.__=e,n.i=t,x.__H.__h.push(n))}function ce(e,t){var n=B(U++,4);!f.__s&&Ue(n.__H,t)&&(n.__=e,n.i=t,x.__h.push(n))}function oe(e){return Z=5,_e(function(){return{current:e}},[])}function Lt(e,t,n){Z=6,ce(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function _e(e,t){var n=B(U++,7);return Ue(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Me(e,t){return Z=8,_e(function(){return e},t)}function Tt(e){var t=x.context[e.__c],n=B(U++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(x)),t.props.value):e.__}function je(e,t){f.useDebugValue&&f.useDebugValue(t?t(e):e)}function Rn(e){var t=B(U++,10),n=ge();return t.__=e,x.componentDidCatch||(x.componentDidCatch=function(r,i){t.__&&t.__(r,i),n[1](r)}),[n[0],function(){n[1](void 0)}]}function Mt(){var e=B(U++,11);return e.__||(e.__="P"+function(t){for(var n=0,r=t.length;r>0;)n=(n<<5)-n+t.charCodeAt(--r)|0;return n}(x.__v.o)+U),e.__}function Ln(){for(var e;e=Rt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ae),e.__H.__h.forEach(Ne),e.__H.__h=[]}catch(t){e.__H.__h=[],f.__e(t,e.__v)}}f.__b=function(e){typeof e.type!="function"||e.o||e.type===A?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),x=null,Ye&&Ye(e)},f.__r=function(e){Ze&&Ze(e),U=0;var t=(x=e.__c).__H;t&&(we===x?(t.__h=[],x.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=se,n.__N=n.i=void 0})):(t.__h.forEach(ae),t.__h.forEach(Ne),t.__h=[])),we=x},f.diffed=function(e){Xe&&Xe(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Rt.push(t)!==1&&Ge===f.requestAnimationFrame||((Ge=f.requestAnimationFrame)||Tn)(Ln)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==se&&(n.__=n.__V),n.i=void 0,n.__V=se})),we=x=null},f.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ae),n.__h=n.__h.filter(function(r){return!r.__||Ne(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],f.__e(r,n.__v)}}),Qe&&Qe(e,t)},f.unmount=function(e){et&&et(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ae(r)}catch(i){t=i}}),n.__H=void 0,t&&f.__e(t,n.__v))};var tt=typeof requestAnimationFrame=="function";function Tn(e){var t,n=function(){clearTimeout(r),tt&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);tt&&(t=requestAnimationFrame(n))}function ae(e){var t=x,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),x=t}function Ne(e){var t=x;e.__c=e.__(),x=t}function Ue(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function jt(e,t){return typeof t=="function"?t(e):t}function Ut(e,t){for(var n in t)e[n]=t[n];return e}function Pe(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function me(e){this.props=e}function Ht(e,t){function n(i){var o=this.props.ref,c=o==i.ref;return!c&&o&&(o.call?o(null):o.current=null),t?!t(this.props,i)||!c:Pe(this.props,i)}function r(i){return this.shouldComponentUpdate=n,D(e,i)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(me.prototype=new P).isPureReactComponent=!0,me.prototype.shouldComponentUpdate=function(e,t){return Pe(this.props,e)||Pe(this.state,t)};var nt=f.__b;f.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),nt&&nt(e)};var Mn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Vt(e){function t(n){var r=Ut({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=Mn,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var rt=function(e,t){return e==null?null:M(M(e).map(t))},Wt={map:rt,forEach:rt,count:function(e){return e?M(e).length:0},only:function(e){var t=M(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:M},jn=f.__e;f.__e=function(e,t,n,r){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}jn(e,t,n,r)};var ot=f.unmount;function Bt(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=Ut({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return Bt(r,t,n)})),e}function Ft(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return Ft(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function K(){this.__u=0,this.t=null,this.__b=null}function It(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function zt(e){var t,n,r;function i(o){if(t||(t=e()).then(function(c){n=c.default||c},function(c){r=c}),r)throw r;if(!n)throw t;return D(n,o)}return i.displayName="Lazy",i.__f=!0,i}function q(){this.u=null,this.o=null}f.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),ot&&ot(e)},(K.prototype=new P).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=It(r.__v),o=!1,c=function(){o||(o=!0,n.__R=null,i?i(_):_())};n.__R=c;var _=function(){if(!--r.__u){if(r.state.__a){var h=r.state.__a;r.__v.__k[0]=Ft(h,h.__c.__P,h.__c.__O)}var u;for(r.setState({__a:r.__b=null});u=r.t.pop();)u.forceUpdate()}},a=t.__h===!0;r.__u++||a||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(c,c)},K.prototype.componentWillUnmount=function(){this.t=[]},K.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Bt(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__a&&D(A,null,e.fallback);return i&&(i.__h=null),[D(A,null,t.__a?null:e.children),i]};var it=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function Un(e){return this.getChildContext=function(){return e.context},e.children}function Hn(e){var t=this,n=e.i;t.componentWillUnmount=function(){G(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,i){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),G(D(Un,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function qt(e,t){var n=D(Hn,{__v:e,i:t});return n.containerInfo=t,n}(q.prototype=new P).__a=function(e){var t=this,n=It(t.__v),r=t.o.get(e);return r[0]++,function(i){var o=function(){t.props.revealOrder?(r.push(i),it(t,e,r)):i()};n?n(o):o()}},q.prototype.render=function(e){this.u=null,this.o=new Map;var t=M(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},q.prototype.componentDidUpdate=q.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){it(e,n,t)})};var Kt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Vn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Wn=typeof document<"u",Bn=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};function Jt(e,t,n){return t.__k==null&&(t.textContent=""),G(e,t),typeof n=="function"&&n(),e?e.__c:null}function Gt(e,t,n){return $t(e,t),typeof n=="function"&&n(),e?e.__c:null}P.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(P.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var ut=f.event;function Fn(){}function In(){return this.cancelBubble}function zn(){return this.defaultPrevented}f.event=function(e){return ut&&(e=ut(e)),e.persist=Fn,e.isPropagationStopped=In,e.isDefaultPrevented=zn,e.nativeEvent=e};var Yt,ct={configurable:!0,get:function(){return this.class}},_t=f.vnode;f.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t=="string"){var i=t.indexOf("-")===-1;for(var o in r={},n){var c=n[o];Wn&&o==="children"&&t==="noscript"||o==="value"&&"defaultValue"in n&&c==null||(o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&c===!0?c="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!Bn(n.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():i&&Vn.test(o)?o=o.replace(/[A-Z0-9]/g,"-$&").toLowerCase():c===null&&(c=void 0),/^oninput$/i.test(o)&&(o=o.toLowerCase(),r[o]&&(o="oninputCapture")),r[o]=c)}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=M(n.children).forEach(function(_){_.props.selected=r.value.indexOf(_.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=M(n.children).forEach(function(_){_.props.selected=r.multiple?r.defaultValue.indexOf(_.props.value)!=-1:r.defaultValue==_.props.value})),e.props=r,n.class!=n.className&&(ct.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",ct))}e.$$typeof=Kt,_t&&_t(e)};var lt=f.__r;f.__r=function(e){lt&&lt(e),Yt=e.__c};var Zt={ReactCurrentDispatcher:{current:{readContext:function(e){return Yt.__n[e.__c].props.value}}}},qn="17.0.2";function Xt(e){return D.bind(null,e)}function He(e){return!!e&&e.$$typeof===Kt}function Qt(e){return He(e)?wn.apply(null,arguments):e}function en(e){return!!e.__k&&(G(null,e),!0)}function tn(e){return e&&(e.base||e.nodeType===1&&e)||null}var nn=function(e,t){return e(t)},rn=function(e,t){return e(t)},on=A;function Ve(e){e()}function un(e){return e}function cn(){return[!1,Ve]}var _n=ce;function ln(e,t){var n=t(),r=ge({h:{__:n,v:t}}),i=r[0].h,o=r[1];return ce(function(){i.__=n,i.v=t,i.__!==t()&&o({h:i})},[e,n,t]),ue(function(){return i.__!==i.v()&&o({h:i}),e(function(){i.__!==i.v()&&o({h:i})})},[e]),n}var Kn={useState:ge,useId:Mt,useReducer:Te,useEffect:ue,useLayoutEffect:ce,useInsertionEffect:_n,useTransition:cn,useDeferredValue:un,useSyncExternalStore:ln,startTransition:Ve,useRef:oe,useImperativeHandle:Lt,useMemo:_e,useCallback:Me,useContext:Tt,useDebugValue:je,version:"17.0.2",Children:Wt,render:Jt,hydrate:Gt,unmountComponentAtNode:en,createPortal:qt,createElement:D,createContext:Ct,createFactory:Xt,cloneElement:Qt,createRef:yt,Fragment:A,isValidElement:He,findDOMNode:tn,Component:P,PureComponent:me,memo:Ht,forwardRef:Vt,flushSync:rn,unstable_batchedUpdates:nn,StrictMode:on,Suspense:K,SuspenseList:q,lazy:zt,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Zt};const Jn=Object.freeze(Object.defineProperty({__proto__:null,Children:Wt,PureComponent:me,StrictMode:on,Suspense:K,SuspenseList:q,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Zt,cloneElement:Qt,createFactory:Xt,createPortal:qt,default:Kn,findDOMNode:tn,flushSync:rn,forwardRef:Vt,hydrate:Gt,isValidElement:He,lazy:zt,memo:Ht,render:Jt,startTransition:Ve,unmountComponentAtNode:en,unstable_batchedUpdates:nn,useDeferredValue:un,useInsertionEffect:_n,useSyncExternalStore:ln,useTransition:cn,version:qn,Component:P,Fragment:A,createContext:Ct,createElement:D,createRef:yt,useCallback:Me,useContext:Tt,useDebugValue:je,useEffect:ue,useErrorBoundary:Rn,useId:Mt,useImperativeHandle:Lt,useLayoutEffect:ce,useMemo:_e,useReducer:Te,useRef:oe,useState:ge},Symbol.toStringTag,{value:"Module"})),Oe=Symbol(),Gn=Symbol(),We=Symbol();let Yn=(e,t)=>new Proxy(e,t);const De=Object.getPrototypeOf,Ae=new WeakMap,sn=e=>e&&(Ae.has(e)?Ae.get(e):De(e)===Object.prototype||De(e)===Array.prototype),ve=e=>typeof e=="object"&&e!==null,st=new WeakMap,Be=e=>e[We]||e,an=(e,t,n)=>{if(!sn(e))return e;const r=Be(e),i=(c=>Object.isFrozen(c)||Object.values(Object.getOwnPropertyDescriptors(c)).some(_=>!_.writable))(r);let o=n&&n.get(r);return o&&o[1].f===i||(o=((c,_)=>{const a={f:_};let h=!1;const u=(s,l)=>{if(!h){let d=a.a.get(c);d||(d=new Set,a.a.set(c,d)),l&&d.has(Oe)||d.add(s)}},m={get:(s,l)=>l===We?c:(u(l),an(s[l],a.a,a.c)),has:(s,l)=>l===Gn?(h=!0,a.a.delete(c),!0):(u(l),l in s),getOwnPropertyDescriptor:(s,l)=>(u(l,!0),Object.getOwnPropertyDescriptor(s,l)),ownKeys:s=>(u(Oe),Reflect.ownKeys(s))};return _&&(m.set=m.deleteProperty=()=>!1),[m,a]})(r,i),o[1].p=Yn(i?(c=>{let _=st.get(c);if(!_){if(Array.isArray(c))_=Array.from(c);else{const a=Object.getOwnPropertyDescriptors(c);Object.values(a).forEach(h=>{h.configurable=!0}),_=Object.create(De(c),a)}st.set(c,_)}return _})(r):r,o[0]),n&&n.set(r,o)),o[1].a=t,o[1].c=n,o[1].p},Zn=(e,t)=>{const n=Reflect.ownKeys(e),r=Reflect.ownKeys(t);return n.length!==r.length||n.some((i,o)=>i!==r[o])},fn=(e,t,n,r)=>{if(Object.is(e,t))return!1;if(!ve(e)||!ve(t))return!0;const i=n.get(Be(e));if(!i)return!0;if(r){const c=r.get(e);if(c&&c.n===t)return c.g;r.set(e,{n:t,g:!1})}let o=null;for(const c of i){const _=c===Oe?Zn(e,t):fn(e[c],t[c],n,r);if(_!==!0&&_!==!1||(o=_),o)break}return o===null&&(o=!0),r&&r.set(e,{n:t,g:o}),o},Xn=e=>sn(e)&&e[We]||null,at=(e,t=!0)=>{Ae.set(e,t)},Qn=(e,t)=>{const n=[],r=new WeakSet,i=(o,c)=>{if(r.has(o))return;ve(o)&&r.add(o);const _=ve(o)&&t.get(Be(o));_?_.forEach(a=>{i(o[a],c?[...c,a]:[a])}):c&&n.push(c)};return i(e),n};function er(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function tr(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var dn={exports:{}},pn={};const nr=tr(Jn);/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X=nr;function rr(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var or=typeof Object.is=="function"?Object.is:rr,ir=X.useState,ur=X.useEffect,cr=X.useLayoutEffect,_r=X.useDebugValue;function lr(e,t){var n=t(),r=ir({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return cr(function(){i.value=n,i.getSnapshot=t,ke(i)&&o({inst:i})},[e,n,t]),ur(function(){return ke(i)&&o({inst:i}),e(function(){ke(i)&&o({inst:i})})},[e]),_r(n),n}function ke(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!or(e,n)}catch{return!0}}function sr(e,t){return t()}var ar=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?sr:lr;pn.useSyncExternalStore=X.useSyncExternalStore!==void 0?X.useSyncExternalStore:ar;(function(e){e.exports=pn})(dn);const fr=er(dn.exports),xe=e=>typeof e=="object"&&e!==null,Se=new WeakSet,ft=({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?Symbol("VERSION"):Symbol(),N=({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?Symbol("LISTENERS"):Symbol(),re=({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?Symbol("SNAPSHOT"):Symbol(),dr=(e=Object.is,t=(u,m)=>new Proxy(u,m),n=u=>xe(u)&&!Se.has(u)&&(Array.isArray(u)||!(Symbol.iterator in u))&&!(u instanceof WeakMap)&&!(u instanceof WeakSet)&&!(u instanceof Error)&&!(u instanceof Number)&&!(u instanceof Date)&&!(u instanceof String)&&!(u instanceof RegExp)&&!(u instanceof ArrayBuffer),r=({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?Symbol("PROMISE_RESULT"):Symbol(),i=({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?Symbol("PROMISE_ERROR"):Symbol(),o=new WeakMap,c=(u,m,s)=>{const l=o.get(s);if((l==null?void 0:l[0])===u)return l[1];const d=Array.isArray(m)?[]:Object.create(Object.getPrototypeOf(m));return at(d,!0),o.set(s,[u,d]),Reflect.ownKeys(m).forEach(E=>{const v=Reflect.get(m,E,s);if(Se.has(v))at(v,!1),d[E]=v;else if(v instanceof Promise)if(r in v)d[E]=v[r];else{const S=v[i]||v;Object.defineProperty(d,E,{get(){if(r in v)return v[r];throw S}})}else v!=null&&v[N]?d[E]=v[re]:d[E]=v}),Object.freeze(d)},_=new WeakMap,a=[1],h=u=>{if(!xe(u))throw new Error("object required");const m=_.get(u);if(m)return m;let s=a[0];const l=new Set,d=(b,p=++a[0])=>{s!==p&&(s=p,l.forEach(y=>y(b,p)))},E=new Map,v=b=>{let p=E.get(b);return p||(p=(y,H)=>{const R=[...y];R[1]=[b,...R[1]],d(R,H)},E.set(b,p)),p},S=b=>{const p=E.get(b);return E.delete(b),p},$=Array.isArray(u)?[]:Object.create(Object.getPrototypeOf(u)),I=t($,{get(b,p,y){return p===ft?s:p===N?l:p===re?c(s,b,y):Reflect.get(b,p,y)},deleteProperty(b,p){const y=Reflect.get(b,p),H=y==null?void 0:y[N];H&&H.delete(S(p));const R=Reflect.deleteProperty(b,p);return R&&d(["delete",[p],y]),R},set(b,p,y,H){var R;const mn=Reflect.has(b,p),le=Reflect.get(b,p,H);if(mn&&e(le,y))return!0;const Ie=le==null?void 0:le[N];Ie&&Ie.delete(S(p)),xe(y)&&(y=Xn(y)||y);let O;return(R=Object.getOwnPropertyDescriptor(b,p))!=null&&R.set?O=y:y instanceof Promise?O=y.then(z=>(O[r]=z,d(["resolve",[p],z]),z)).catch(z=>{O[i]=z,d(["reject",[p],z])}):y!=null&&y[N]?(O=y,O[N].add(v(p))):n(y)?(O=hn(y),O[N].add(v(p))):O=y,Reflect.set(b,p,O,H),d(["set",[p],y,le]),!0}});return _.set(u,I),Reflect.ownKeys(u).forEach(b=>{const p=Object.getOwnPropertyDescriptor(u,b);p.get||p.set?Object.defineProperty($,b,p):I[b]=u[b]}),I})=>[h,Se,ft,N,re,e,t,n,r,i,o,c,_,a],[pr]=dr();function hn(e={}){return pr(e)}function hr(e,t,n){({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!(e!=null&&e[N])&&console.warn("Please use proxy object");let r;const i=[],o=c=>{if(i.push(c),n){t(i.splice(0));return}r||(r=Promise.resolve().then(()=>{r=void 0,t(i.splice(0))}))};return e[N].add(o),()=>{e[N].delete(o)}}function dt(e){return({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!(e!=null&&e[re])&&console.warn("Please use proxy object"),e[re]}const{useSyncExternalStore:mr}=fr,vr=(e,t)=>{const n=oe();ue(()=>{n.current=Qn(e,t)}),je(n.current)};function Fe(e,t){const n=t==null?void 0:t.sync,r=oe(),i=oe();let o=!0;const c=mr(Me(h=>{const u=hr(e,h,n);return h(),u},[e,n]),()=>{const h=dt(e);try{if(!o&&r.current&&i.current&&!fn(r.current,h,i.current,new WeakMap))return r.current}catch{}return h},()=>dt(e));o=!1;const _=new WeakMap;ue(()=>{r.current=c,i.current=_}),({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&vr(c,_);const a=_e(()=>new WeakMap,[]);return an(c,_,a)}function yr(e,t){return t=t||{},new Promise(function(n,r){var i=new XMLHttpRequest,o=[],c=[],_={},a=function(){return{ok:(i.status/100|0)==2,statusText:i.statusText,status:i.status,url:i.responseURL,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return c},get:function(u){return _[u.toLowerCase()]},has:function(u){return u.toLowerCase()in _}}}};for(var h in i.open(t.method||"get",e,!0),i.onload=function(){i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(u,m,s){o.push(m=m.toLowerCase()),c.push([m,s]),_[m]=_[m]?_[m]+","+s:s}),n(a())},i.onerror=r,i.withCredentials=t.credentials=="include",t.headers)i.setRequestHeader(h,t.headers[h]);i.send(t.body||null)})}async function gr(){return await(await yr("https://raw.githubusercontent.com/Moldoteck/nuaccident-frontend/main/src/linkContent.json")).json()}class br{constructor(){this.linkData=gr(),this.dark=!1}}const j=hn(new br);var wr=0;function g(e,t,n,r,i){var o,c,_={};for(c in t)c=="ref"?o=t[c]:_[c]=t[c];var a={type:e,props:_,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--wr,__source:i,__self:r};if(typeof e=="function"&&(o=e.defaultProps))for(c in o)_[c]===void 0&&(_[c]=o[c]);return f.vnode&&f.vnode(a),a}const kr=w(j.dark?C("text-white"):C("text-black-background")),xr=w(C("text-gray-300"));w(kr,ne("text-3xl","md:text-6xl"),V("font-bold"),W("text-center"));const Sr=w(xr,W("text-center"));function Er({children:e}){return g("p",{className:Sr,children:e})}const $r=w(j.dark?C("text-white"):C("text-black-background"));w(C("text-gray-300"));w($r,ne("text-3xl","md:text-6xl"),V("font-bold"),W("text-center"));function Cr(e){return e.includes("tv8.md")?"https://tv8.md/_next/static/files/logoDark.svg":e.includes("protv.md")?"https://assets.protv.md/articles/images/original/2022/09/19/Logositeprotv-1601057615stycldm-1631566502xk3o1ql-1663572145lt2p8sq.png":e.includes("jurnal.md")?"https://www.jurnal.md/img/logo/Jurnalmd_logo_pink.svg":e.includes("unimedia.info")?"https://unimedia.info/img/uni-logo.svg":e.includes("agora.md")?"https://agora.md/files/images/logo-white.png":e.includes("europalibera.org")?"https://moldova.europalibera.org/Content/responsive/RFE/ro-MD/img/logo.svg":e.includes("zdg.md")?"https://www.zdg.md/wp-content/uploads/2022/07/logo-footer-1.svg":e.includes("moldova.org")?"https://www.moldova.org/wp-content/uploads/2022/01/cropped-vertical-logo-3.png":e.includes("publika.md")?"https://assets.publika.md/new/svg/logo_ro.svg":e.includes("stiri.md")?"https://stiri.md/static/images/newLogo2.svg":""}function Nr(e){return g("div",{className:w(L("flex"),ye("flex-col"),Y("justify-center"),Pn("cursor-pointer"),Ce("w-1/5"),Dt("max-w-fit"),Dn("min-w-min"),he("h-fit"),At("2xl:min-h-max"),$e("m-2"),kn("!border-dashed"),xn(j.dark?"border-white":"border-black-background"),Pt(Fe(j).dark?"bg-black-background":"bg-gray-200"),Sn("rounded-xl"),En("border-2"),Ot("p-2")),onClick:()=>{window.open(e.children.link,"_blank")},children:[g("div",{className:w(L("flex"),Y("justify-center"),$e("m-2","my-5")),children:g("img",{src:Cr(e.children.link),className:w(L("flex"),he("h-32"))})}),g("div",{className:w(L("flex")),children:g("a",{href:e.children.link,className:w(C(j.dark?"text-white":"text-black-background","visited:text-purple-500"),Nn("pointer-events-none")),onClick:()=>!1,children:e.children.title})}),g("div",{className:w(L("flex"))})]})}const Pr=w(j.dark?C("text-white"):C("text-black-background"));w(C("text-gray-300"));const Or=w(Pr,V("font-bold"),W("text-center")),Dr=w(L("flex"),ye("flex-row"),$n("flex-wrap"),Y("justify-center"),Le("items-start"),he("h-fit"),Or);function Ar(){const{linkData:e}=Fe(j);return e?g("div",{className:Dr,children:e.map(t=>g(Nr,{children:t}))}):g("div",{children:"loading"})}const Rr=w(L("flex"),ye("flex-col"),Y("justify-start"),Le("items-center"),Cn("space-y-2"),he("h-fit"),At("min-h-screen")),Q=w(j.dark?C("text-white"):C("text-black-background"));w(C("text-gray-300"));w(Q,V("font-bold"),W("text-center"));function Lr(){return g("div",{className:Rr,children:[g("p",{className:w(Q,V("font-bold"),ne("text-3xl","md:text-6xl"),Ce("w-full"),be("animate-pulse")),children:"accident"}),g("p",{className:w(Q,ne("text-2xl","md:text-4xl"),W("text-justify")),children:["* Eveniment fortuit,"," ",g("span",{className:w(be("animate-pulse"),V("font-bold")),children:"imprevizibil"}),", care \xEEntrerupe mersul normal al lucrurilor (provoc\xE2nd avarii, r\u0103niri, mutil\u0103ri sau chiar moartea)."," "]}),g("br",{}),g("p",{id:"textAnimat"}),g("p",{className:w(Q,V("font-bold"),ne("text-2xl","md:text-4xl"),W("text-center"),Ce("w-full"),be("animate-pulse")),children:'"accidente imprevizibile" \xEEn \u0219tiri'}),g("div",{className:w(L("flex"),Y("justify-center")),children:g(K,{fallback:g(Er,{children:"Loading..."}),children:g(Ar,{})})}),g("div",{className:w(L("flex"),ye("flex-col"),Y("justify-center"),Le("items-center"),Q),children:[g("p",{children:"Creat cu triste\u021Be din Moldova"}),g("br",{}),g("p",{children:g("a",{href:"https://github.com/Moldoteck/nuaccident/issues",className:w(An("underline")),target:"_blank",children:"Contact"})})]})]})}const Tr=w(On("container"),$e("mx-auto"),Ot("pb-10","py-4"),Dt("max-w-7xl"));function Mr({children:e}){return g("div",{className:Pt(Fe(j).dark?"bg-black-background":"bg-gray-300"),children:g("div",{className:Tr,children:e})})}function jr(){return g(Mr,{children:g(Lr,{})})}G(g(jr,{}),document.getElementById("root"));
