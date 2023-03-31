import e,{Component as t,useState as r,useRef as n,useImperativeHandle as o,useEffect as i}from"react";import*as a from"react-dom";import s,{keyframes as c,css as l,ThemeProvider as p}from"styled-components";var u,f={},d={get exports(){return f},set exports(e){f=e}},m={},y={get exports(){return m},set exports(e){m=e}},h={};var g,x,v,b,$,w,z,S,E,O,k,T,C,j,N={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function P(){return x||(x=1,e=y,"production"===process.env.NODE_ENV?e.exports=function(){if(u)return h;u=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,x=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var u=e.$$typeof;switch(u){case t:switch(e=e.type){case c:case l:case n:case i:case o:case f:return e;default:switch(e=e&&e.$$typeof){case s:case p:case y:case m:case a:return e;default:return u}}case r:return u}}}function w(e){return $(e)===l}return h.AsyncMode=c,h.ConcurrentMode=l,h.ContextConsumer=s,h.ContextProvider=a,h.Element=t,h.ForwardRef=p,h.Fragment=n,h.Lazy=y,h.Memo=m,h.Portal=r,h.Profiler=i,h.StrictMode=o,h.Suspense=f,h.isAsyncMode=function(e){return w(e)||$(e)===c},h.isConcurrentMode=w,h.isContextConsumer=function(e){return $(e)===s},h.isContextProvider=function(e){return $(e)===a},h.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},h.isForwardRef=function(e){return $(e)===p},h.isFragment=function(e){return $(e)===n},h.isLazy=function(e){return $(e)===y},h.isMemo=function(e){return $(e)===m},h.isPortal=function(e){return $(e)===r},h.isProfiler=function(e){return $(e)===i},h.isStrictMode=function(e){return $(e)===o},h.isSuspense=function(e){return $(e)===f},h.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===l||e===i||e===o||e===f||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===a||e.$$typeof===s||e.$$typeof===p||e.$$typeof===x||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},h.typeOf=$,h}():e.exports=(g||(g=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,x=e?Symbol.for("react.scope"):60119;function v(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:var y=e.type;switch(y){case c:case l:case n:case i:case o:case u:return y;default:var h=y&&y.$$typeof;switch(h){case s:case p:case m:case d:case a:return h;default:return f}}case r:return f}}}var b=c,$=l,w=s,z=a,S=t,E=p,O=n,k=m,T=d,C=r,j=i,P=o,I=u,M=!1;function D(e){return v(e)===l}N.AsyncMode=b,N.ConcurrentMode=$,N.ContextConsumer=w,N.ContextProvider=z,N.Element=S,N.ForwardRef=E,N.Fragment=O,N.Lazy=k,N.Memo=T,N.Portal=C,N.Profiler=j,N.StrictMode=P,N.Suspense=I,N.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),D(e)||v(e)===c},N.isConcurrentMode=D,N.isContextConsumer=function(e){return v(e)===s},N.isContextProvider=function(e){return v(e)===a},N.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},N.isForwardRef=function(e){return v(e)===p},N.isFragment=function(e){return v(e)===n},N.isLazy=function(e){return v(e)===m},N.isMemo=function(e){return v(e)===d},N.isPortal=function(e){return v(e)===r},N.isProfiler=function(e){return v(e)===i},N.isStrictMode=function(e){return v(e)===o},N.isSuspense=function(e){return v(e)===u},N.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===l||e===i||e===o||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===d||e.$$typeof===a||e.$$typeof===s||e.$$typeof===p||e.$$typeof===h||e.$$typeof===g||e.$$typeof===x||e.$$typeof===y)},N.typeOf=v}()),N)),m;var e}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function I(){if(b)return v;b=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return v=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(n,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))t.call(i,l)&&(s[l]=i[l]);if(e){a=e(i);for(var p=0;p<a.length;p++)r.call(i,a[p])&&(s[a[p]]=i[a[p]])}}return s},v}function M(){if(w)return $;w=1;return $="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function D(){return S?z:(S=1,z=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var _=P();d.exports=function(){if(T)return k;T=1;var e=P(),t=I(),r=M(),n=D(),o=function(){if(O)return E;O=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=M(),r={},n=D();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function o(o,i,a,s,c){if("production"!==process.env.NODE_ENV)for(var l in o)if(n(o,l)){var p;try{if("function"!=typeof o[l]){var u=Error((s||"React class")+": "+a+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}p=o[l](i,l,s,a,null,t)}catch(e){p=e}if(!p||p instanceof Error||e((s||"React class")+": type specification of "+a+" `"+l+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof p+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),p instanceof Error&&!(p.message in r)){r[p.message]=!0;var f=c?c():"";e("Failed "+a+" type: "+p.message+(null!=f?f:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},E=o}(),i=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(i=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),k=function(s,c){var l="function"==typeof Symbol&&Symbol.iterator,p="@@iterator",u="<<anonymous>>",f={array:h("array"),bigint:h("bigint"),bool:h("boolean"),func:h("function"),number:h("number"),object:h("object"),string:h("string"),symbol:h("symbol"),any:y(a),arrayOf:function(e){return y((function(t,n,o,i,a){if("function"!=typeof e)return new m("Property `"+a+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new m("Invalid "+i+" `"+a+"` of type `"+v(s)+"` supplied to `"+o+"`, expected an array.");for(var c=0;c<s.length;c++){var l=e(s,c,o,i,a+"["+c+"]",r);if(l instanceof Error)return l}return null}))},element:y((function(e,t,r,n,o){var i=e[t];return s(i)?null:new m("Invalid "+n+" `"+o+"` of type `"+v(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:y((function(t,r,n,o,i){var a=t[r];return e.isValidElementType(a)?null:new m("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return y((function(t,r,n,o,i){if(!(t[r]instanceof e)){var a=e.name||u;return new m("Invalid "+o+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:y((function(e,t,r,n,o){return x(e[t])?null:new m("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return y((function(t,o,i,a,s){if("function"!=typeof e)return new m("Property `"+s+"` of component `"+i+"` has invalid PropType notation inside objectOf.");var c=t[o],l=v(c);if("object"!==l)return new m("Invalid "+a+" `"+s+"` of type `"+l+"` supplied to `"+i+"`, expected an object.");for(var p in c)if(n(c,p)){var u=e(c,p,i,a,s+"."+p,r);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?y((function(t,r,n,o,i){for(var a=t[r],s=0;s<e.length;s++)if(d(a,e[s]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===b(t)?String(t):t}));return new m("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+c+".")})):("production"!==process.env.NODE_ENV&&i(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&i("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var o=e[t];if("function"!=typeof o)return i("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+$(o)+" at index "+t+"."),a}return y((function(t,o,i,a,s){for(var c=[],l=0;l<e.length;l++){var p=(0,e[l])(t,o,i,a,s,r);if(null==p)return null;p.data&&n(p.data,"expectedType")&&c.push(p.data.expectedType)}return new m("Invalid "+a+" `"+s+"` supplied to `"+i+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return y((function(t,n,o,i,a){var s=t[n],c=v(s);if("object"!==c)return new m("Invalid "+i+" `"+a+"` of type `"+c+"` supplied to `"+o+"`, expected `object`.");for(var l in e){var p=e[l];if("function"!=typeof p)return g(o,i,a,l,b(p));var u=p(s,l,o,i,a+"."+l,r);if(u)return u}return null}))},exact:function(e){return y((function(o,i,a,s,c){var l=o[i],p=v(l);if("object"!==p)return new m("Invalid "+s+" `"+c+"` of type `"+p+"` supplied to `"+a+"`, expected `object`.");var u=t({},o[i],e);for(var f in u){var d=e[f];if(n(e,f)&&"function"!=typeof d)return g(a,s,c,f,b(d));if(!d)return new m("Invalid "+s+" `"+c+"` key `"+f+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(o[i],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=d(l,f,a,s,c+"."+f,r);if(y)return y}return null}))}};function d(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function m(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function y(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function o(o,a,s,l,p,f,d){if(l=l||u,f=f||s,d!==r){if(c){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var h=l+":"+s;!t[h]&&n<3&&(i("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[h]=!0,n++)}}return null==a[s]?o?null===a[s]?new m("The "+p+" `"+f+"` is marked as required in `"+l+"`, but its value is `null`."):new m("The "+p+" `"+f+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(a,s,l,p,f)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function h(e){return y((function(t,r,n,o,i,a){var s=t[r];return v(s)!==e?new m("Invalid "+o+" `"+i+"` of type `"+b(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function g(e,t,r,n,o){return new m((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function x(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(x);if(null===e||s(e))return!0;var t=function(e){var t=e&&(l&&e[l]||e[p]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!x(r.value))return!1}else for(;!(r=n.next()).done;){var o=r.value;if(o&&!x(o[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function b(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function $(e){var t=b(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return m.prototype=Error.prototype,f.checkPropTypes=o,f.resetWarningCache=o.resetWarningCache,f.PropTypes=f,f},k}()(_.isElement,!0)}else d.exports=function(){if(j)return C;j=1;var e=M();function t(){}function r(){}return r.resetWarningCache=t,C=function(){function n(t,r,n,o,i,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function o(){return n}n.isRequired=n;var i={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return i.PropTypes=i,i}}()();const R=s.span`
  font-size: ${({theme:{sizes:e}})=>e.fontSizes.xxl}px;
`,B=s.span`
  font-size: ${({theme:{sizes:e}})=>e.fontSizes.xl}px;
`,A=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${({theme:{sizes:e}})=>e.paddingSizes.md}px;
`;class V extends t{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromProps(){return{hasError:!0}}componentDidCatch(e,t){this.setState({error:e,errorInfo:t})}render(){const{state:t,props:r}=this;return t.error?e.createElement(A,null,e.createElement(R,null,t.error.message),e.createElement(B,null,t.errorInfo.componentStack)):r.children}}V.defaultProps={children:()=>{}},V.propTypes={children:f.func};var F={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},L=e.createContext&&e.createContext(F),U=function(){return U=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},U.apply(this,arguments)},W=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function q(t){return t&&t.map((function(t,r){return e.createElement(t.tag,U({key:r},t.attr),q(t.child))}))}function H(t){return function(r){return e.createElement(Y,U({attr:U({},t.attr)},r),q(t.child))}}function Y(t){var r=function(r){var n,o=t.attr,i=t.size,a=t.title,s=W(t,["attr","size","title"]),c=i||r.size||"1em";return r.className&&(n=r.className),t.className&&(n=(n?n+" ":"")+t.className),e.createElement("svg",U({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,s,{className:n,style:U(U({color:t.color||r.color},r.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),a&&e.createElement("title",null,a),t.children)};return void 0!==L?e.createElement(L.Consumer,null,(function(e){return r(e)})):r(F)}function J(e){return H({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"}}]})(e)}function Z(e){return H({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"}}]})(e)}function G(e){return H({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"}}]})(e)}function K(e){return H({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11 7h2v7h-2zm0 8h2v2h-2z"}},{tag:"path",attr:{d:"m21.707 7.293-5-5A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707zM20 15.586 15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414v7.172z"}}]})(e)}function Q(e){return H({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"}}]})(e)}const X={info:e.createElement(Q,null),warning:e.createElement(Z,null),error:e.createElement(K,null),success:e.createElement(G,null)},ee=(e,t)=>l`
  gap: ${t.marginSizes[e]}px;
  border-radius: ${t.borderRadiuses[e]}px;
  padding: ${t.paddingSizes[e]}px ${t.paddingSizes[e]}px;
  margin: ${t.marginSizes[e]/2}px;
  max-width: ${t.toastMaxWidth[e]}px;
  width: fit-content;
  min-width: ${t.toastMinWidth[e]}px;

  max-height: ${t.toastMaxHeight[e]}px;
  grid-template-columns:
    ${t.iconSizes[e]}px
    1fr
    ${t.titleFontSizes[e]}px;
  & > svg {
    font-size: ${t.iconSizes[e]}px;
    min-width: ${t.iconSizes[e]}px;
    flex-grow: 1;
  }
`,te=(e,t)=>l`
  font-size: ${t.titleFontSizes[e]}px;
  max-width: ${t.toastMaxWidth[e]-2*t.paddingSizes[e]-2*t.titleFontSizes[e]-t.iconSizes[e]-t.marginSizes[e]}px;
`,re=(e,t)=>l`
  font-size: ${t.descriptionFontSizes[e]}px;
  max-width: ${t.toastMaxWidth[e]-4*t.paddingSizes[e]-t.titleFontSizes[e]-t.iconSizes[e]-t.marginSizes[e]}px;
`,ne=(e,t)=>l`
  font-size: ${t.titleFontSizes[e]}px;
  right: ${t.paddingSizes[e]}px;
`,oe=e=>l`
  animation-delay: 0s, ${e/1e3-.5}s;
  animation-duration: 0.5s, 0.5s;
  animation-iteration-count: 1, 1;
  animation-fill-mode: forwards, forwards;
`,ie=c`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,ae=c`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    display: none;
  }`,se=(e,t)=>{switch(e){case"bottom":return l`
        transform: translate(0, ${t}px);
      `;case"left":return l`
        transform: translate(${-t}px, 0);
      `;case"right":return l`
        transform: translate(${t}px, 0);
      `;default:return l`
        transform: translate(0, ${-t}px);
      `}},ce=(e,t)=>l`
  ${oe(e)}
  animation-name: ${(e=>c`
  from {
    opacity: 0;
    ${se(e,200)}
}
to {
    opacity: 1;
    ${se(e,0)}
}
`)(t)}, ${(e=>c`
    from {
      opacity: 1;
      ${se(e,0)}
    }
    to {
      opacity: 0;
      ${se(e,200)}
    }
`)(t)};
`,le=s.div`
  position: relative;
  display: grid;
  pointer-events: all;
  place-items: center;
  box-sizing: border-box;
  background-color: ${({type:e,theme:{colors:t}})=>t[e].background};
  color: ${({type:e="info",theme:{colors:t}})=>t[e].color};
  ${({theme:{sizes:e}})=>ee("xxl",e)};
  @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.xl}px) {
    ${({theme:{sizes:e}})=>ee("xl",e)};
  }
  @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.lg}px) {
    ${({theme:{sizes:e}})=>ee("lg",e)};
  }
  @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.md}px) {
    ${({theme:{sizes:e}})=>ee("md",e)};
  }
  @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.sm}px) {
    ${({theme:{sizes:e}})=>ee("sm",e)};
  }
  ${({duration:e,slideDirection:t,animationName:r})=>r?"opacity"===r?(e=>l`
  animation-name: ${ie}, ${ae};
  ${oe(e)}
`)(e):ce(e,t):""}
`,pe=s.button`
  position: absolute;
  padding: 0;
  color: inherit;
  background: transparent;
  border: none;
  cursor: pointer;
  ${({theme:{sizes:e}})=>ne("xxl",e)};
  @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.xl}px) {
    ${({theme:{sizes:e}})=>ne("xl",e)};
  }
  @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.lg}px) {
    ${({theme:{sizes:e}})=>ne("lg",e)};
  }
  @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.md}px) {
    ${({theme:{sizes:e}})=>ne("md",e)};
  }
  @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.sm}px) {
    ${({theme:{sizes:e}})=>ne("sm",e)};
  }
`,ue=s.div`
  display: flex;
  justify-self: start;
  flex-direction: column;
`,fe=s.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${({theme:{sizes:e}})=>te("xxl",e)};
  @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.xl}px) {
    ${({theme:{sizes:e}})=>te("xl",e)};
  }
  @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.lg}px) {
    ${({theme:{sizes:e}})=>te("lg",e)};
  }
  @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.md}px) {
    ${({theme:{sizes:e}})=>te("md",e)};
  }
  @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.sm}px) {
    ${({theme:{sizes:e}})=>te("sm",e)};
  }
`,de=s.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${({theme:{sizes:e}})=>re("xxl",e)};
  @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.xl}px) {
    ${({theme:{sizes:e}})=>re("xl",e)};
  }
  @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.lg}px) {
    ${({theme:{sizes:e}})=>re("lg",e)};
  }
  @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.md}px) {
    ${({theme:{sizes:e}})=>re("md",e)};
  }
  @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.sm}px) {
    ${({theme:{sizes:e}})=>re("sm",e)};
  }
`;function me({type:t,toastTitle:r,toastDescription:n,handleClose:o,duration:i,slideDirection:a,animationName:s}){return e.createElement(le,{type:t,duration:i,slideDirection:a,animationName:s,draggable:!0,onDragEnd:o,onClick:e=>e.stopPropagation(),"data-cy":r},X[t],e.createElement(ue,null,e.createElement(fe,null,r.slice(0,29)),n&&e.createElement(de,null,n.slice(0,89))),e.createElement(pe,{onClick:e=>{e.stopPropagation(),o()}},e.createElement(J,null)))}me.propTypes={type:f.oneOf(["info","warning","error","success"]),toastTitle:f.string.isRequired,toastDescription:f.string,handleClose:f.func,duration:f.number,slideDirection:f.oneOf(["top","bottom","left","right"]),animationName:void 0|f.string},me.defaultProps={type:"info",toastDescription:"Description",handleClose:()=>{},duration:3e3,slideDirection:"top",animationName:void 0};const ye={topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right"};let he;const ge=new Uint8Array(16);function xe(){if(!he&&(he="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!he))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return he(ge)}const ve=[];for(let e=0;e<256;++e)ve.push((e+256).toString(16).slice(1));var be={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function $e(e,t,r){if(be.randomUUID&&!t&&!e)return be.randomUUID();const n=(e=e||{}).random||(e.rng||xe)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=n[e];return t}return function(e,t=0){return(ve[e[t+0]]+ve[e[t+1]]+ve[e[t+2]]+ve[e[t+3]]+"-"+ve[e[t+4]]+ve[e[t+5]]+"-"+ve[e[t+6]]+ve[e[t+7]]+"-"+ve[e[t+8]]+ve[e[t+9]]+"-"+ve[e[t+10]]+ve[e[t+11]]+ve[e[t+12]]+ve[e[t+13]]+ve[e[t+14]]+ve[e[t+15]]).toLowerCase()}(n)}const we="top-left",ze={info:{background:"#9A40D3",color:"#ffffff"},warning:{background:"#F4E048",color:"#000000"},error:{background:"#E25837",color:"#ffffff"},success:{background:"#37E29A",color:"#ffffff"}};class Se{constructor(){this.toastTheme=ze,this.containerMargin=10}getInstance(){return this.instance||(this.instance=new Se),this.instance}setToastContainer(e){this.toastContainer=e}setToastTheme(e){this.toastTheme=Object.assign(ze,e)}setToastContainerMargin(e){this.containerMargin=e}createToast({title:e,description:t="",position:r=we,type:n="info",duration:o=3e3,slideDirection:i="top",animationName:a}){this.toastContainer?.createNewToast({title:e,description:t,position:r,type:n,duration:o,slideDirection:i,animationName:a,id:$e()})}removeToast(e){this.toastContainer?.removeToast(e)}}var Ee=new Se;var Oe=Object.freeze({__proto__:null,borderRadiuses:{sm:10,md:20,lg:20,xl:20,xxl:20},descriptionFontSizes:{sm:10,md:10,lg:16,xl:16,xxl:16},displayBreackpoints:{xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400},iconSizes:{sm:14,md:14,lg:20,xl:20,xxl:20},marginSizes:{sm:10,md:10,lg:16,xl:16,xxl:16},paddingSizes:{sm:8,md:8,lg:16,xl:16,xxl:16},titleFontSizes:{sm:14,md:14,lg:20,xl:20,xxl:20},toastMaxHeight:{sm:100,md:100,lg:150,xl:150,xxl:150},toastMaxWidth:{sm:300,md:300,lg:400,xl:500,xxl:500},toastMinWidth:{sm:260,md:260,lg:300,xl:350,xxl:350}});const ke=()=>{const[e,t]=r([]),a=n(null);return o(a,(()=>({createNewToast(r){e.filter((e=>e.position===r.position)).length<3&&(t((e=>[...e,r])),setTimeout((()=>this.removeToast(r.id,r.position)),r.duration))},removeToast:e=>{t((t=>t.filter((t=>e!==t.id))))}}))),i((()=>{Ee.getInstance().setToastContainer(a.current)}),[e]),{toasts:e}},Te=s.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  overflow: hidden;
  margin: ${({theme:{containerMargin:e}})=>e}px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'tl tr'
    'bl br';
  @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.md}px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas: 'tr' 'br';
  }
`,Ce=s.div`
  display: flex;
  flex-direction: column;
  &[data-cy='top-right'] {
    grid-area: tr;
  }
  &[data-cy='bottom-right'] {
    grid-area: br;
  }
  &[data-cy='bottom-left'] {
    grid-area: bl;
    @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.md}px) {
      grid-area: br;
      align-items: center;
    }
  }
  &[data-cy='top-left'] {
    grid-area: tl;
    @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.md}px) {
      grid-area: tr;
      align-items: center;
    }
  }
  &[data-cy='top-right'],
  &[data-cy='bottom-right'] {
    align-items: flex-end;
    @media screen and (max-width: ${({theme:{sizes:e}})=>e.displayBreackpoints.md}px) {
      align-items: center;
    }
  }
  &[data-cy='bottom-left'],
  &[data-cy='bottom-right'] {
    flex-direction: column-reverse;
  }
`,je=()=>{const{toasts:t}=ke();return a.createPortal(e.createElement(V,null,e.createElement(p,{theme:{colors:Ee.toastTheme,sizes:Oe,containerMargin:Ee.getInstance().containerMargin}},e.createElement(Te,null,Object.keys(ye).map((r=>e.createElement(Ce,{key:r,"data-cy":ye[r]},t.map((t=>t.position===ye[r]?e.createElement(me,{key:t.id,toastTitle:t.title,toastDescription:t.description,type:t.type,duration:t.duration,animationName:t.animationName,slideDirection:t.slideDirection,handleClose:()=>Ee.getInstance().removeToast(t.id)}):null)))))))),document.getElementsByTagName("body")[0])};export{Ee as Singleton,je as ToastContainer};
