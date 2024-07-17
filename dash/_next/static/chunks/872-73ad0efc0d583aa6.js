"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[872],{54493:function(e,t,n){n.d(t,{Cp:function(){return s},RR:function(){return a},cv:function(){return p},dp:function(){return v},dr:function(){return h},oo:function(){return i},uY:function(){return m},x7:function(){return u}});var r=n(20842);function o(e,t,n){let o,{reference:i,floating:l}=e,u=(0,r.Qq)(t),a=(0,r.Wh)(t),c=(0,r.I4)(a),f=(0,r.k3)(t),s="y"===u,d=i.x+i.width/2-l.width/2,p=i.y+i.height/2-l.height/2,m=i[c]/2-l[c]/2;switch(f){case"top":o={x:d,y:i.y-l.height};break;case"bottom":o={x:d,y:i.y+i.height};break;case"right":o={x:i.x+i.width,y:p};break;case"left":o={x:i.x-l.width,y:p};break;default:o={x:i.x,y:i.y}}switch((0,r.hp)(t)){case"start":o[a]-=m*(n&&s?-1:1);break;case"end":o[a]+=m*(n&&s?-1:1)}return o}let i=async(e,t,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:l=[],platform:u}=n,a=l.filter(Boolean),c=await (null==u.isRTL?void 0:u.isRTL(t)),f=await u.getElementRects({reference:e,floating:t,strategy:i}),{x:s,y:d}=o(f,r,c),p=r,m={},h=0;for(let n=0;n<a.length;n++){let{name:l,fn:v}=a[n],{x:y,y:g,data:w,reset:b}=await v({x:s,y:d,initialPlacement:r,placement:p,strategy:i,middlewareData:m,rects:f,platform:u,elements:{reference:e,floating:t}});s=null!=y?y:s,d=null!=g?g:d,m={...m,[l]:{...m[l],...w}},b&&h<=50&&(h++,"object"==typeof b&&(b.placement&&(p=b.placement),b.rects&&(f=!0===b.rects?await u.getElementRects({reference:e,floating:t,strategy:i}):b.rects),{x:s,y:d}=o(f,p,c)),n=-1)}return{x:s,y:d,placement:p,strategy:i,middlewareData:m}};async function l(e,t){var n;void 0===t&&(t={});let{x:o,y:i,platform:l,rects:u,elements:a,strategy:c}=e,{boundary:f="clippingAncestors",rootBoundary:s="viewport",elementContext:d="floating",altBoundary:p=!1,padding:m=0}=(0,r.ku)(t,e),h=(0,r.yd)(m),v=a[p?"floating"===d?"reference":"floating":d],y=(0,r.JB)(await l.getClippingRect({element:null==(n=await (null==l.isElement?void 0:l.isElement(v)))||n?v:v.contextElement||await (null==l.getDocumentElement?void 0:l.getDocumentElement(a.floating)),boundary:f,rootBoundary:s,strategy:c})),g="floating"===d?{...u.floating,x:o,y:i}:u.reference,w=await (null==l.getOffsetParent?void 0:l.getOffsetParent(a.floating)),b=await (null==l.isElement?void 0:l.isElement(w))&&await (null==l.getScale?void 0:l.getScale(w))||{x:1,y:1},x=(0,r.JB)(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:g,offsetParent:w,strategy:c}):g);return{top:(y.top-x.top+h.top)/b.y,bottom:(x.bottom-y.bottom+h.bottom)/b.y,left:(y.left-x.left+h.left)/b.x,right:(x.right-y.right+h.right)/b.x}}let u=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:o,placement:i,rects:l,platform:u,elements:a,middlewareData:c}=t,{element:f,padding:s=0}=(0,r.ku)(e,t)||{};if(null==f)return{};let d=(0,r.yd)(s),p={x:n,y:o},m=(0,r.Wh)(i),h=(0,r.I4)(m),v=await u.getDimensions(f),y="y"===m,g=y?"clientHeight":"clientWidth",w=l.reference[h]+l.reference[m]-p[m]-l.floating[h],b=p[m]-l.reference[m],x=await (null==u.getOffsetParent?void 0:u.getOffsetParent(f)),E=x?x[g]:0;E&&await (null==u.isElement?void 0:u.isElement(x))||(E=a.floating[g]||l.floating[h]);let R=E/2-v[h]/2-1,O=(0,r.VV)(d[y?"top":"left"],R),A=(0,r.VV)(d[y?"bottom":"right"],R),P=E-v[h]-A,C=E/2-v[h]/2+(w/2-b/2),S=(0,r.uZ)(O,C,P),T=!c.arrow&&null!=(0,r.hp)(i)&&C!==S&&l.reference[h]/2-(C<O?O:A)-v[h]/2<0,L=T?C<O?C-O:C-P:0;return{[m]:p[m]+L,data:{[m]:S,centerOffset:C-S-L,...T&&{alignmentOffset:L}},reset:T}}}),a=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,o,i,u,a;let{placement:c,middlewareData:f,rects:s,initialPlacement:d,platform:p,elements:m}=t,{mainAxis:h=!0,crossAxis:v=!0,fallbackPlacements:y,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:b=!0,...x}=(0,r.ku)(e,t);if(null!=(n=f.arrow)&&n.alignmentOffset)return{};let E=(0,r.k3)(c),R=(0,r.k3)(d)===d,O=await (null==p.isRTL?void 0:p.isRTL(m.floating)),A=y||(R||!b?[(0,r.pw)(d)]:(0,r.gy)(d));y||"none"===w||A.push(...(0,r.KX)(d,b,w,O));let P=[d,...A],C=await l(t,x),S=[],T=(null==(o=f.flip)?void 0:o.overflows)||[];if(h&&S.push(C[E]),v){let e=(0,r.i8)(c,s,O);S.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:c,overflows:S}],!S.every(e=>e<=0)){let e=((null==(i=f.flip)?void 0:i.index)||0)+1,t=P[e];if(t)return{data:{index:e,overflows:T},reset:{placement:t}};let n=null==(u=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:u.placement;if(!n)switch(g){case"bestFit":{let e=null==(a=T.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:a[0];e&&(n=e);break}case"initialPlacement":n=d}if(c!==n)return{reset:{placement:n}}}return{}}}};function c(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function f(e){return r.mA.some(t=>e[t]>=0)}let s=function(e){return void 0===e&&(e={}),{name:"hide",options:e,async fn(t){let{rects:n}=t,{strategy:o="referenceHidden",...i}=(0,r.ku)(e,t);switch(o){case"referenceHidden":{let e=c(await l(t,{...i,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:f(e)}}}case"escaped":{let e=c(await l(t,{...i,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:f(e)}}}default:return{}}}}};async function d(e,t){let{placement:n,platform:o,elements:i}=e,l=await (null==o.isRTL?void 0:o.isRTL(i.floating)),u=(0,r.k3)(n),a=(0,r.hp)(n),c="y"===(0,r.Qq)(n),f=["left","top"].includes(u)?-1:1,s=l&&c?-1:1,d=(0,r.ku)(t,e),{mainAxis:p,crossAxis:m,alignmentAxis:h}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&"number"==typeof h&&(m="end"===a?-1*h:h),c?{x:m*s,y:p*f}:{x:p*f,y:m*s}}let p=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;let{x:o,y:i,placement:l,middlewareData:u}=t,a=await d(t,e);return l===(null==(n=u.offset)?void 0:n.placement)&&null!=(r=u.arrow)&&r.alignmentOffset?{}:{x:o+a.x,y:i+a.y,data:{...a,placement:l}}}}},m=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){let{x:n,y:o,placement:i}=t,{mainAxis:u=!0,crossAxis:a=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...f}=(0,r.ku)(e,t),s={x:n,y:o},d=await l(t,f),p=(0,r.Qq)((0,r.k3)(i)),m=(0,r.Rn)(p),h=s[m],v=s[p];if(u){let e="y"===m?"top":"left",t="y"===m?"bottom":"right",n=h+d[e],o=h-d[t];h=(0,r.uZ)(n,h,o)}if(a){let e="y"===p?"top":"left",t="y"===p?"bottom":"right",n=v+d[e],o=v-d[t];v=(0,r.uZ)(n,v,o)}let y=c.fn({...t,[m]:h,[p]:v});return{...y,data:{x:y.x-n,y:y.y-o}}}}},h=function(e){return void 0===e&&(e={}),{options:e,fn(t){let{x:n,y:o,placement:i,rects:l,middlewareData:u}=t,{offset:a=0,mainAxis:c=!0,crossAxis:f=!0}=(0,r.ku)(e,t),s={x:n,y:o},d=(0,r.Qq)(i),p=(0,r.Rn)(d),m=s[p],h=s[d],v=(0,r.ku)(a,t),y="number"==typeof v?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(c){let e="y"===p?"height":"width",t=l.reference[p]-l.floating[e]+y.mainAxis,n=l.reference[p]+l.reference[e]-y.mainAxis;m<t?m=t:m>n&&(m=n)}if(f){var g,w;let e="y"===p?"width":"height",t=["top","left"].includes((0,r.k3)(i)),n=l.reference[d]-l.floating[e]+(t&&(null==(g=u.offset)?void 0:g[d])||0)+(t?0:y.crossAxis),o=l.reference[d]+l.reference[e]+(t?0:(null==(w=u.offset)?void 0:w[d])||0)-(t?y.crossAxis:0);h<n?h=n:h>o&&(h=o)}return{[p]:m,[d]:h}}}},v=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){let n,o;let{placement:i,rects:u,platform:a,elements:c}=t,{apply:f=()=>{},...s}=(0,r.ku)(e,t),d=await l(t,s),p=(0,r.k3)(i),m=(0,r.hp)(i),h="y"===(0,r.Qq)(i),{width:v,height:y}=u.floating;"top"===p||"bottom"===p?(n=p,o=m===(await (null==a.isRTL?void 0:a.isRTL(c.floating))?"start":"end")?"left":"right"):(o=p,n="end"===m?"top":"bottom");let g=y-d[n],w=v-d[o],b=!t.middlewareData.shift,x=g,E=w;if(h){let e=v-d.left-d.right;E=m||b?(0,r.VV)(w,e):e}else{let e=y-d.top-d.bottom;x=m||b?(0,r.VV)(g,e):e}if(b&&!m){let e=(0,r.Fp)(d.left,0),t=(0,r.Fp)(d.right,0),n=(0,r.Fp)(d.top,0),o=(0,r.Fp)(d.bottom,0);h?E=v-2*(0!==e||0!==t?e+t:(0,r.Fp)(d.left,d.right)):x=y-2*(0!==n||0!==o?n+o:(0,r.Fp)(d.top,d.bottom))}await f({...t,availableWidth:E,availableHeight:x});let R=await a.getDimensions(c.floating);return v!==R.width||y!==R.height?{reset:{rects:!0}}:{}}}}},58610:function(e,t,n){n.d(t,{x7:function(){return z},Me:function(){return M},oo:function(){return B},RR:function(){return V},Cp:function(){return j},dr:function(){return H},uY:function(){return D},dp:function(){return F}});var r=n(20842),o=n(54493);function i(e){return a(e)?(e.nodeName||"").toLowerCase():"#document"}function l(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function u(e){var t;return null==(t=(a(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function a(e){return e instanceof Node||e instanceof l(e).Node}function c(e){return e instanceof Element||e instanceof l(e).Element}function f(e){return e instanceof HTMLElement||e instanceof l(e).HTMLElement}function s(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof l(e).ShadowRoot)}function d(e){let{overflow:t,overflowX:n,overflowY:r,display:o}=v(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function p(e){let t=m(),n=v(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function m(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function h(e){return["html","body","#document"].includes(i(e))}function v(e){return l(e).getComputedStyle(e)}function y(e){return c(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function g(e){if("html"===i(e))return e;let t=e.assignedSlot||e.parentNode||s(e)&&e.host||u(e);return s(t)?t.host:t}function w(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let o=function e(t){let n=g(t);return h(n)?t.ownerDocument?t.ownerDocument.body:t.body:f(n)&&d(n)?n:e(n)}(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),u=l(o);return i?t.concat(u,u.visualViewport||[],d(o)?o:[],u.frameElement&&n?w(u.frameElement):[]):t.concat(o,w(o,[],n))}function b(e){let t=v(e),n=parseFloat(t.width)||0,o=parseFloat(t.height)||0,i=f(e),l=i?e.offsetWidth:n,u=i?e.offsetHeight:o,a=(0,r.NM)(n)!==l||(0,r.NM)(o)!==u;return a&&(n=l,o=u),{width:n,height:o,$:a}}function x(e){return c(e)?e:e.contextElement}function E(e){let t=x(e);if(!f(t))return(0,r.ze)(1);let n=t.getBoundingClientRect(),{width:o,height:i,$:l}=b(t),u=(l?(0,r.NM)(n.width):n.width)/o,a=(l?(0,r.NM)(n.height):n.height)/i;return u&&Number.isFinite(u)||(u=1),a&&Number.isFinite(a)||(a=1),{x:u,y:a}}let R=(0,r.ze)(0);function O(e){let t=l(e);return m()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:R}function A(e,t,n,o){var i;void 0===t&&(t=!1),void 0===n&&(n=!1);let u=e.getBoundingClientRect(),a=x(e),f=(0,r.ze)(1);t&&(o?c(o)&&(f=E(o)):f=E(e));let s=(void 0===(i=n)&&(i=!1),o&&(!i||o===l(a))&&i)?O(a):(0,r.ze)(0),d=(u.left+s.x)/f.x,p=(u.top+s.y)/f.y,m=u.width/f.x,h=u.height/f.y;if(a){let e=l(a),t=o&&c(o)?l(o):o,n=e,r=n.frameElement;for(;r&&o&&t!==n;){let e=E(r),t=r.getBoundingClientRect(),o=v(r),i=t.left+(r.clientLeft+parseFloat(o.paddingLeft))*e.x,u=t.top+(r.clientTop+parseFloat(o.paddingTop))*e.y;d*=e.x,p*=e.y,m*=e.x,h*=e.y,d+=i,p+=u,r=(n=l(r)).frameElement}}return(0,r.JB)({width:m,height:h,x:d,y:p})}let P=[":popover-open",":modal"];function C(e){return P.some(t=>{try{return e.matches(t)}catch(e){return!1}})}function S(e){return A(u(e)).left+y(e).scrollLeft}function T(e,t,n){let o;if("viewport"===t)o=function(e,t){let n=l(e),r=u(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,c=0,f=0;if(o){i=o.width,a=o.height;let e=m();(!e||e&&"fixed"===t)&&(c=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:c,y:f}}(e,n);else if("document"===t)o=function(e){let t=u(e),n=y(e),o=e.ownerDocument.body,i=(0,r.Fp)(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),l=(0,r.Fp)(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight),a=-n.scrollLeft+S(e),c=-n.scrollTop;return"rtl"===v(o).direction&&(a+=(0,r.Fp)(t.clientWidth,o.clientWidth)-i),{width:i,height:l,x:a,y:c}}(u(e));else if(c(t))o=function(e,t){let n=A(e,!0,"fixed"===t),o=n.top+e.clientTop,i=n.left+e.clientLeft,l=f(e)?E(e):(0,r.ze)(1),u=e.clientWidth*l.x;return{width:u,height:e.clientHeight*l.y,x:i*l.x,y:o*l.y}}(t,n);else{let n=O(e);o={...t,x:t.x-n.x,y:t.y-n.y}}return(0,r.JB)(o)}function L(e,t){return f(e)&&"fixed"!==v(e).position?t?t(e):e.offsetParent:null}function N(e,t){let n=l(e);if(!f(e)||C(e))return n;let r=L(e,t);for(;r&&["table","td","th"].includes(i(r))&&"static"===v(r).position;)r=L(r,t);return r&&("html"===i(r)||"body"===i(r)&&"static"===v(r).position&&!p(r))?n:r||function(e){let t=g(e);for(;f(t)&&!h(t);){if(p(t))return t;t=g(t)}return null}(e)||n}let k=async function(e){let t=this.getOffsetParent||N,n=this.getDimensions;return{reference:function(e,t,n){let o=f(t),l=u(t),a="fixed"===n,c=A(e,!0,a,t),s={scrollLeft:0,scrollTop:0},p=(0,r.ze)(0);if(o||!o&&!a){if(("body"!==i(t)||d(l))&&(s=y(t)),o){let e=A(t,!0,a,t);p.x=e.x+t.clientLeft,p.y=e.y+t.clientTop}else l&&(p.x=S(l))}return{x:c.left+s.scrollLeft-p.x,y:c.top+s.scrollTop-p.y,width:c.width,height:c.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await n(e.floating)}}},W={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:o,strategy:l}=e,a="fixed"===l,c=u(o),s=!!t&&C(t.floating);if(o===c||s&&a)return n;let p={scrollLeft:0,scrollTop:0},m=(0,r.ze)(1),h=(0,r.ze)(0),v=f(o);if((v||!v&&!a)&&(("body"!==i(o)||d(c))&&(p=y(o)),f(o))){let e=A(o);m=E(o),h.x=e.x+o.clientLeft,h.y=e.y+o.clientTop}return{width:n.width*m.x,height:n.height*m.y,x:n.x*m.x-p.scrollLeft*m.x+h.x,y:n.y*m.y-p.scrollTop*m.y+h.y}},getDocumentElement:u,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:o,strategy:l}=e,u=[..."clippingAncestors"===n?function(e,t){let n=t.get(e);if(n)return n;let r=w(e,[],!1).filter(e=>c(e)&&"body"!==i(e)),o=null,l="fixed"===v(e).position,u=l?g(e):e;for(;c(u)&&!h(u);){let t=v(u),n=p(u);n||"fixed"!==t.position||(o=null),(l?!n&&!o:!n&&"static"===t.position&&!!o&&["absolute","fixed"].includes(o.position)||d(u)&&!n&&function e(t,n){let r=g(t);return!(r===n||!c(r)||h(r))&&("fixed"===v(r).position||e(r,n))}(e,u))?r=r.filter(e=>e!==u):o=t,u=g(u)}return t.set(e,r),r}(t,this._c):[].concat(n),o],a=u[0],f=u.reduce((e,n)=>{let o=T(t,n,l);return e.top=(0,r.Fp)(o.top,e.top),e.right=(0,r.VV)(o.right,e.right),e.bottom=(0,r.VV)(o.bottom,e.bottom),e.left=(0,r.Fp)(o.left,e.left),e},T(t,a,l));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}},getOffsetParent:N,getElementRects:k,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:n}=b(e);return{width:t,height:n}},getScale:E,isElement:c,isRTL:function(e){return"rtl"===v(e).direction}};function M(e,t,n,o){let i;void 0===o&&(o={});let{ancestorScroll:l=!0,ancestorResize:a=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:f="function"==typeof IntersectionObserver,animationFrame:s=!1}=o,d=x(e),p=l||a?[...d?w(d):[],...w(t)]:[];p.forEach(e=>{l&&e.addEventListener("scroll",n,{passive:!0}),a&&e.addEventListener("resize",n)});let m=d&&f?function(e,t){let n,o=null,i=u(e);function l(){var e;clearTimeout(n),null==(e=o)||e.disconnect(),o=null}return!function u(a,c){void 0===a&&(a=!1),void 0===c&&(c=1),l();let{left:f,top:s,width:d,height:p}=e.getBoundingClientRect();if(a||t(),!d||!p)return;let m=(0,r.GW)(s),h=(0,r.GW)(i.clientWidth-(f+d)),v={rootMargin:-m+"px "+-h+"px "+-(0,r.GW)(i.clientHeight-(s+p))+"px "+-(0,r.GW)(f)+"px",threshold:(0,r.Fp)(0,(0,r.VV)(1,c))||1},y=!0;function g(e){let t=e[0].intersectionRatio;if(t!==c){if(!y)return u();t?u(!1,t):n=setTimeout(()=>{u(!1,1e-7)},100)}y=!1}try{o=new IntersectionObserver(g,{...v,root:i.ownerDocument})}catch(e){o=new IntersectionObserver(g,v)}o.observe(e)}(!0),l}(d,n):null,h=-1,v=null;c&&(v=new ResizeObserver(e=>{let[r]=e;r&&r.target===d&&v&&(v.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var e;null==(e=v)||e.observe(t)})),n()}),d&&!s&&v.observe(d),v.observe(t));let y=s?A(e):null;return s&&function t(){let r=A(e);y&&(r.x!==y.x||r.y!==y.y||r.width!==y.width||r.height!==y.height)&&n(),y=r,i=requestAnimationFrame(t)}(),n(),()=>{var e;p.forEach(e=>{l&&e.removeEventListener("scroll",n),a&&e.removeEventListener("resize",n)}),null==m||m(),null==(e=v)||e.disconnect(),v=null,s&&cancelAnimationFrame(i)}}let D=o.uY,V=o.RR,F=o.dp,j=o.Cp,z=o.x7,H=o.dr,B=(e,t,n)=>{let r=new Map,i={platform:W,...n},l={...i.platform,_c:r};return(0,o.oo)(e,t,{...i,platform:l})}},69707:function(e,t,n){n.d(t,{YF:function(){return d},x7:function(){return l}});var r=n(58610),o=n(2265),i=n(54887);let l=e=>({name:"arrow",options:e,fn(t){let{element:n,padding:o}="function"==typeof e?e(t):e;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?(0,r.x7)({element:n.current,padding:o}).fn(t):{}:n?(0,r.x7)({element:n,padding:o}).fn(t):{}}});var u="undefined"!=typeof document?o.useLayoutEffect:o.useEffect;function a(e,t){let n,r,o;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!==t.length)return!1;for(r=n;0!=r--;)if(!a(e[r],t[r]))return!1;return!0}if((n=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){let n=o[r];if(("_owner"!==n||!e.$$typeof)&&!a(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function c(e){return"undefined"==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function f(e,t){let n=c(e);return Math.round(t*n)/n}function s(e){let t=o.useRef(e);return u(()=>{t.current=e}),t}function d(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:l=[],platform:d,elements:{reference:p,floating:m}={},transform:h=!0,whileElementsMounted:v,open:y}=e,[g,w]=o.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[b,x]=o.useState(l);a(b,l)||x(l);let[E,R]=o.useState(null),[O,A]=o.useState(null),P=o.useCallback(e=>{e!==L.current&&(L.current=e,R(e))},[]),C=o.useCallback(e=>{e!==N.current&&(N.current=e,A(e))},[]),S=p||E,T=m||O,L=o.useRef(null),N=o.useRef(null),k=o.useRef(g),W=null!=v,M=s(v),D=s(d),V=o.useCallback(()=>{if(!L.current||!N.current)return;let e={placement:t,strategy:n,middleware:b};D.current&&(e.platform=D.current),(0,r.oo)(L.current,N.current,e).then(e=>{let t={...e,isPositioned:!0};F.current&&!a(k.current,t)&&(k.current=t,i.flushSync(()=>{w(t)}))})},[b,t,n,D]);u(()=>{!1===y&&k.current.isPositioned&&(k.current.isPositioned=!1,w(e=>({...e,isPositioned:!1})))},[y]);let F=o.useRef(!1);u(()=>(F.current=!0,()=>{F.current=!1}),[]),u(()=>{if(S&&(L.current=S),T&&(N.current=T),S&&T){if(M.current)return M.current(S,T,V);V()}},[S,T,V,M,W]);let j=o.useMemo(()=>({reference:L,floating:N,setReference:P,setFloating:C}),[P,C]),z=o.useMemo(()=>({reference:S,floating:T}),[S,T]),H=o.useMemo(()=>{let e={position:n,left:0,top:0};if(!z.floating)return e;let t=f(z.floating,g.x),r=f(z.floating,g.y);return h?{...e,transform:"translate("+t+"px, "+r+"px)",...c(z.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,h,z.floating,g.x,g.y]);return o.useMemo(()=>({...g,update:V,refs:j,elements:z,floatingStyles:H}),[g,V,j,z,H])}},20842:function(e,t,n){n.d(t,{Fp:function(){return i},GW:function(){return u},I4:function(){return v},JB:function(){return A},KX:function(){return E},NM:function(){return l},Qq:function(){return y},Rn:function(){return h},VV:function(){return o},Wh:function(){return g},gy:function(){return b},hp:function(){return m},i8:function(){return w},k3:function(){return p},ku:function(){return d},mA:function(){return r},pw:function(){return R},uZ:function(){return s},yd:function(){return O},ze:function(){return a}});let r=["top","right","bottom","left"],o=Math.min,i=Math.max,l=Math.round,u=Math.floor,a=e=>({x:e,y:e}),c={left:"right",right:"left",bottom:"top",top:"bottom"},f={start:"end",end:"start"};function s(e,t,n){return i(e,o(t,n))}function d(e,t){return"function"==typeof e?e(t):e}function p(e){return e.split("-")[0]}function m(e){return e.split("-")[1]}function h(e){return"x"===e?"y":"x"}function v(e){return"y"===e?"height":"width"}function y(e){return["top","bottom"].includes(p(e))?"y":"x"}function g(e){return h(y(e))}function w(e,t,n){void 0===n&&(n=!1);let r=m(e),o=g(e),i=v(o),l="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=R(l)),[l,R(l)]}function b(e){let t=R(e);return[x(e),t,x(t)]}function x(e){return e.replace(/start|end/g,e=>f[e])}function E(e,t,n,r){let o=m(e),i=function(e,t,n){let r=["left","right"],o=["right","left"];switch(e){case"top":case"bottom":if(n)return t?o:r;return t?r:o;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(p(e),"start"===n,r);return o&&(i=i.map(e=>e+"-"+o),t&&(i=i.concat(i.map(x)))),i}function R(e){return e.replace(/left|right|bottom|top/g,e=>c[e])}function O(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function A(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}},44991:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},84104:function(e,t,n){n.d(t,{b:function(){return l},k:function(){return i}});var r=n(2265),o=n(57437);function i(e,t){let n=r.createContext(t);function i(e){let{children:t,...i}=e,l=r.useMemo(()=>i,Object.values(i));return(0,o.jsx)(n.Provider,{value:l,children:t})}return i.displayName=e+"Provider",[i,function(o){let i=r.useContext(n);if(i)return i;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function l(e,t=[]){let n=[],i=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return i.scopeName=e,[function(t,i){let l=r.createContext(i),u=n.length;function a(t){let{scope:n,children:i,...a}=t,c=n?.[e][u]||l,f=r.useMemo(()=>a,Object.values(a));return(0,o.jsx)(c.Provider,{value:f,children:i})}return n=[...n,i],a.displayName=t+"Provider",[a,function(n,o){let a=o?.[e][u]||l,c=r.useContext(a);if(c)return c;if(void 0!==i)return i;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(i,...t)]}},1260:function(e,t,n){n.d(t,{I0:function(){return y},XB:function(){return d},fC:function(){return v}});var r,o=n(2265),i=n(44991),l=n(29586),u=n(61266),a=n(39830),c=n(57437),f="dismissableLayer.update",s=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),d=o.forwardRef((e,t)=>{var n,d;let{disableOutsidePointerEvents:p=!1,onEscapeKeyDown:v,onPointerDownOutside:y,onFocusOutside:g,onInteractOutside:w,onDismiss:b,...x}=e,E=o.useContext(s),[R,O]=o.useState(null),A=null!==(d=null==R?void 0:R.ownerDocument)&&void 0!==d?d:null===(n=globalThis)||void 0===n?void 0:n.document,[,P]=o.useState({}),C=(0,u.e)(t,e=>O(e)),S=Array.from(E.layers),[T]=[...E.layersWithOutsidePointerEventsDisabled].slice(-1),L=S.indexOf(T),N=R?S.indexOf(R):-1,k=E.layersWithOutsidePointerEventsDisabled.size>0,W=N>=L,M=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,a.W)(e),i=o.useRef(!1),l=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!i.current){let t=function(){h("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",l.current),l.current=t,n.addEventListener("click",l.current,{once:!0})):t()}else n.removeEventListener("click",l.current);i.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",l.current)}},[n,r]),{onPointerDownCapture:()=>i.current=!0}}(e=>{let t=e.target,n=[...E.branches].some(e=>e.contains(t));!W||n||(null==y||y(e),null==w||w(e),e.defaultPrevented||null==b||b())},A),D=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,a.W)(e),i=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!i.current&&h("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}(e=>{let t=e.target;[...E.branches].some(e=>e.contains(t))||(null==g||g(e),null==w||w(e),e.defaultPrevented||null==b||b())},A);return!function(e,t=globalThis?.document){let n=(0,a.W)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{N!==E.layers.size-1||(null==v||v(e),!e.defaultPrevented&&b&&(e.preventDefault(),b()))},A),o.useEffect(()=>{if(R)return p&&(0===E.layersWithOutsidePointerEventsDisabled.size&&(r=A.body.style.pointerEvents,A.body.style.pointerEvents="none"),E.layersWithOutsidePointerEventsDisabled.add(R)),E.layers.add(R),m(),()=>{p&&1===E.layersWithOutsidePointerEventsDisabled.size&&(A.body.style.pointerEvents=r)}},[R,A,p,E]),o.useEffect(()=>()=>{R&&(E.layers.delete(R),E.layersWithOutsidePointerEventsDisabled.delete(R),m())},[R,E]),o.useEffect(()=>{let e=()=>P({});return document.addEventListener(f,e),()=>document.removeEventListener(f,e)},[]),(0,c.jsx)(l.WV.div,{...x,ref:C,style:{pointerEvents:k?W?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.M)(e.onFocusCapture,D.onFocusCapture),onBlurCapture:(0,i.M)(e.onBlurCapture,D.onBlurCapture),onPointerDownCapture:(0,i.M)(e.onPointerDownCapture,M.onPointerDownCapture)})});d.displayName="DismissableLayer";var p=o.forwardRef((e,t)=>{let n=o.useContext(s),r=o.useRef(null),i=(0,u.e)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,c.jsx)(l.WV.div,{...e,ref:i})});function m(){let e=new CustomEvent(f);document.dispatchEvent(e)}function h(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?(0,l.jH)(i,u):i.dispatchEvent(u)}p.displayName="DismissableLayerBranch";var v=d,y=p},38687:function(e,t,n){n.d(t,{M:function(){return a}});var r,o=n(2265),i=n(32618),l=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),u=0;function a(e){let[t,n]=o.useState(l());return(0,i.b)(()=>{e||n(e=>e??String(u++))},[e]),e||(t?`radix-${t}`:"")}},16025:function(e,t,n){n.d(t,{ee:function(){return M},Eh:function(){return V},VY:function(){return D},fC:function(){return W},D7:function(){return y}});var r=n(2265),o=n(69707),i=n(58610),l=n(54493),u=n(29586),a=n(57437),c=r.forwardRef((e,t)=>{let{children:n,width:r=10,height:o=5,...i}=e;return(0,a.jsx)(u.WV.svg,{...i,ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:(0,a.jsx)("polygon",{points:"0,0 30,0 15,10"})})});c.displayName="Arrow";var f=n(61266),s=n(84104),d=n(39830),p=n(32618),m=n(76769),h="Popper",[v,y]=(0,s.b)(h),[g,w]=v(h),b=e=>{let{__scopePopper:t,children:n}=e,[o,i]=r.useState(null);return(0,a.jsx)(g,{scope:t,anchor:o,onAnchorChange:i,children:n})};b.displayName=h;var x="PopperAnchor",E=r.forwardRef((e,t)=>{let{__scopePopper:n,virtualRef:o,...i}=e,l=w(x,n),c=r.useRef(null),s=(0,f.e)(t,c);return r.useEffect(()=>{l.onAnchorChange((null==o?void 0:o.current)||c.current)}),o?null:(0,a.jsx)(u.WV.div,{...i,ref:s})});E.displayName=x;var R="PopperContent",[O,A]=v(R),P=r.forwardRef((e,t)=>{var n,c,s,h,v,y,g,b;let{__scopePopper:x,side:E="bottom",sideOffset:A=0,align:P="center",alignOffset:C=0,arrowPadding:S=0,avoidCollisions:T=!0,collisionBoundary:W=[],collisionPadding:M=0,sticky:D="partial",hideWhenDetached:V=!1,updatePositionStrategy:F="optimized",onPlaced:j,...z}=e,H=w(R,x),[B,I]=r.useState(null),_=(0,f.e)(t,e=>I(e)),[Y,$]=r.useState(null),U=(0,m.t)(Y),q=null!==(g=null==U?void 0:U.width)&&void 0!==g?g:0,G=null!==(b=null==U?void 0:U.height)&&void 0!==b?b:0,X="number"==typeof M?M:{top:0,right:0,bottom:0,left:0,...M},J=Array.isArray(W)?W:[W],Q=J.length>0,Z={padding:X,boundary:J.filter(L),altBoundary:Q},{refs:K,floatingStyles:ee,placement:et,isPositioned:en,middlewareData:er}=(0,o.YF)({strategy:"fixed",placement:E+("center"!==P?"-"+P:""),whileElementsMounted:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.Me)(...t,{animationFrame:"always"===F})},elements:{reference:H.anchor},middleware:[(0,l.cv)({mainAxis:A+G,alignmentAxis:C}),T&&(0,i.uY)({mainAxis:!0,crossAxis:!1,limiter:"partial"===D?(0,i.dr)():void 0,...Z}),T&&(0,i.RR)({...Z}),(0,i.dp)({...Z,apply:e=>{let{elements:t,rects:n,availableWidth:r,availableHeight:o}=e,{width:i,height:l}=n.reference,u=t.floating.style;u.setProperty("--radix-popper-available-width","".concat(r,"px")),u.setProperty("--radix-popper-available-height","".concat(o,"px")),u.setProperty("--radix-popper-anchor-width","".concat(i,"px")),u.setProperty("--radix-popper-anchor-height","".concat(l,"px"))}}),Y&&(0,o.x7)({element:Y,padding:S}),N({arrowWidth:q,arrowHeight:G}),V&&(0,i.Cp)({strategy:"referenceHidden",...Z})]}),[eo,ei]=k(et),el=(0,d.W)(j);(0,p.b)(()=>{en&&(null==el||el())},[en,el]);let eu=null===(n=er.arrow)||void 0===n?void 0:n.x,ea=null===(c=er.arrow)||void 0===c?void 0:c.y,ec=(null===(s=er.arrow)||void 0===s?void 0:s.centerOffset)!==0,[ef,es]=r.useState();return(0,p.b)(()=>{B&&es(window.getComputedStyle(B).zIndex)},[B]),(0,a.jsx)("div",{ref:K.setFloating,"data-radix-popper-content-wrapper":"",style:{...ee,transform:en?ee.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ef,"--radix-popper-transform-origin":[null===(h=er.transformOrigin)||void 0===h?void 0:h.x,null===(v=er.transformOrigin)||void 0===v?void 0:v.y].join(" "),...(null===(y=er.hide)||void 0===y?void 0:y.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:(0,a.jsx)(O,{scope:x,placedSide:eo,onArrowChange:$,arrowX:eu,arrowY:ea,shouldHideArrow:ec,children:(0,a.jsx)(u.WV.div,{"data-side":eo,"data-align":ei,...z,ref:_,style:{...z.style,animation:en?void 0:"none"}})})})});P.displayName=R;var C="PopperArrow",S={top:"bottom",right:"left",bottom:"top",left:"right"},T=r.forwardRef(function(e,t){let{__scopePopper:n,...r}=e,o=A(C,n),i=S[o.placedSide];return(0,a.jsx)("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[i]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:(0,a.jsx)(c,{...r,ref:t,style:{...r.style,display:"block"}})})});function L(e){return null!==e}T.displayName=C;var N=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,i,l;let{placement:u,rects:a,middlewareData:c}=t,f=(null===(n=c.arrow)||void 0===n?void 0:n.centerOffset)!==0,s=f?0:e.arrowWidth,d=f?0:e.arrowHeight,[p,m]=k(u),h={start:"0%",center:"50%",end:"100%"}[m],v=(null!==(i=null===(r=c.arrow)||void 0===r?void 0:r.x)&&void 0!==i?i:0)+s/2,y=(null!==(l=null===(o=c.arrow)||void 0===o?void 0:o.y)&&void 0!==l?l:0)+d/2,g="",w="";return"bottom"===p?(g=f?h:"".concat(v,"px"),w="".concat(-d,"px")):"top"===p?(g=f?h:"".concat(v,"px"),w="".concat(a.floating.height+d,"px")):"right"===p?(g="".concat(-d,"px"),w=f?h:"".concat(y,"px")):"left"===p&&(g="".concat(a.floating.width+d,"px"),w=f?h:"".concat(y,"px")),{data:{x:g,y:w}}}});function k(e){let[t,n="center"]=e.split("-");return[t,n]}var W=b,M=E,D=P,V=T},37881:function(e,t,n){n.d(t,{h:function(){return a}});var r=n(2265),o=n(54887),i=n(29586),l=n(32618),u=n(57437),a=r.forwardRef((e,t)=>{var n,a;let{container:c,...f}=e,[s,d]=r.useState(!1);(0,l.b)(()=>d(!0),[]);let p=c||s&&(null===(a=globalThis)||void 0===a?void 0:null===(n=a.document)||void 0===n?void 0:n.body);return p?o.createPortal((0,u.jsx)(i.WV.div,{...f,ref:t}),p):null});a.displayName="Portal"},12642:function(e,t,n){n.d(t,{z:function(){return u}});var r=n(2265),o=n(54887),i=n(61266),l=n(32618),u=e=>{var t,n;let u,c;let{present:f,children:s}=e,d=function(e){var t,n;let[i,u]=r.useState(),c=r.useRef({}),f=r.useRef(e),s=r.useRef("none"),[d,p]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=a(c.current);s.current="mounted"===d?e:"none"},[d]),(0,l.b)(()=>{let t=c.current,n=f.current;if(n!==e){let r=s.current,o=a(t);e?p("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?p("UNMOUNT"):n&&r!==o?p("ANIMATION_OUT"):p("UNMOUNT"),f.current=e}},[e,p]),(0,l.b)(()=>{if(i){let e=e=>{let t=a(c.current).includes(e.animationName);e.target===i&&t&&o.flushSync(()=>p("ANIMATION_END"))},t=e=>{e.target===i&&(s.current=a(c.current))};return i.addEventListener("animationstart",t),i.addEventListener("animationcancel",e),i.addEventListener("animationend",e),()=>{i.removeEventListener("animationstart",t),i.removeEventListener("animationcancel",e),i.removeEventListener("animationend",e)}}p("ANIMATION_END")},[i,p]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(c.current=getComputedStyle(e)),u(e)},[])}}(f),p="function"==typeof s?s({present:d.isPresent}):r.Children.only(s),m=(0,i.e)(d.ref,(u=null===(t=Object.getOwnPropertyDescriptor(p.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in u&&u.isReactWarning?p.ref:(u=null===(n=Object.getOwnPropertyDescriptor(p,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in u&&u.isReactWarning?p.props.ref:p.props.ref||p.ref);return"function"==typeof s||d.isPresent?r.cloneElement(p,{ref:m}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}u.displayName="Presence"},29586:function(e,t,n){n.d(t,{WV:function(){return u},jH:function(){return a}});var r=n(2265),o=n(54887),i=n(59143),l=n(57437),u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...o}=e,u=r?i.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(u,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function a(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},39830:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(2265);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},9310:function(e,t,n){n.d(t,{T:function(){return i}});var r=n(2265),o=n(39830);function i({prop:e,defaultProp:t,onChange:n=()=>{}}){let[i,l]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[i]=n,l=r.useRef(i),u=(0,o.W)(t);return r.useEffect(()=>{l.current!==i&&(u(i),l.current=i)},[i,l,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,a=u?e:i,c=(0,o.W)(n);return[a,r.useCallback(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&c(n)}else l(t)},[u,e,l,c])]}},32618:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(2265),o=globalThis?.document?r.useLayoutEffect:()=>{}},76769:function(e,t,n){n.d(t,{t:function(){return i}});var r=n(2265),o=n(32618);function i(e){let[t,n]=r.useState(void 0);return(0,o.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,o;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,o=t.blockSize}else r=e.offsetWidth,o=e.offsetHeight;n({width:r,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}},11780:function(e,t,n){n.d(t,{T:function(){return l},f:function(){return u}});var r=n(2265),o=n(29586),i=n(57437),l=r.forwardRef((e,t)=>(0,i.jsx)(o.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));l.displayName="VisuallyHidden";var u=l},69703:function(e,t,n){n.d(t,{CR:function(){return u},Jh:function(){return l},_T:function(){return o},ev:function(){return a},mG:function(){return i},pi:function(){return r}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function i(e,t,n,r){return new(n||(n=Promise))(function(o,i){function l(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(l,u)}a((r=r.apply(e,t||[])).next())})}function l(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(a){return function(u){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(l=0)),l;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return l.label++,{value:u[1],done:!1};case 5:l.label++,r=u[1],u=[0];continue;case 7:u=l.ops.pop(),l.trys.pop();continue;default:if(!(o=(o=l.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){l=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){l.label=u[1];break}if(6===u[0]&&l.label<o[1]){l.label=o[1],o=u;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(u);break}o[2]&&l.ops.pop(),l.trys.pop();continue}u=t.call(e,l)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}function u(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return l}function a(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError}}]);