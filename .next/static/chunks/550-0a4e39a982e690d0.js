(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[550],{4203:function(e,t){"use strict";t.E=function(e,t){return e.split(",").map(function(e){var t=(e=e.trim()).match(r),i=t[1],s=t[2],a=t[3]||"",c={};return c.inverse=!!i&&"not"===i.toLowerCase(),c.type=s?s.toLowerCase():"all",a=a.match(/\([^\)]+\)/g)||[],c.expressions=a.map(function(e){var t=e.match(n),r=t[1].toLowerCase().match(o);return{modifier:r[1],feature:r[2],value:t[2]}}),c}).some(function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!(n||r))return!1;var o=e.expressions.every(function(e){var r=e.feature,n=e.modifier,o=e.value,i=t[r];if(!i)return!1;switch(r){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=u(o),i=u(i);break;case"resolution":o=c(o),i=c(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=a(o),i=a(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=o;case"max":return i<=o;default:return i===o}});return o&&!r||!o&&r})};var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,s=/(dpi|dpcm|dppx)?$/;function a(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(s)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},8155:function(e,t,r){"use strict";var n=r(4203).E,o="undefined"!=typeof window?window.matchMedia:null;function i(e,t,r){var i,s=this;function a(e){s.matches=e.matches,s.media=e.media}o&&!r&&(i=o.call(window,e)),i?(this.matches=i.matches,this.media=i.media,i.addListener(a)):(this.matches=n(e,t),this.media=e),this.addListener=function(e){i&&i.addListener(e)},this.removeListener=function(e){i&&i.removeListener(e)},this.dispose=function(){i&&i.removeListener(a)}}e.exports=function(e,t,r){return new i(e,t,r)}},9949:function(e,t,r){"use strict";var n=r(8877);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,s){if(s!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},1448:function(e,t,r){e.exports=r(9949)()},8877:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2916:function(e,t,r){"use strict";r.d(t,{ac:function(){return L}});var n=r(2265),o=r(8155),i=r.n(o),s=/[A-Z]/g,a=/^ms-/,c={};function u(e){return"-"+e.toLowerCase()}var l=function(e){if(c.hasOwnProperty(e))return c[e];var t=e.replace(s,u);return c[e]=a.test(t)?"-"+t:t},f=r(1448),p=r.n(f);let m=p().oneOfType([p().string,p().number]),d={all:p().bool,grid:p().bool,aural:p().bool,braille:p().bool,handheld:p().bool,print:p().bool,projection:p().bool,screen:p().bool,tty:p().bool,tv:p().bool,embossed:p().bool},{type:v,...h}={orientation:p().oneOf(["portrait","landscape"]),scan:p().oneOf(["progressive","interlace"]),aspectRatio:p().string,deviceAspectRatio:p().string,height:m,deviceHeight:m,width:m,deviceWidth:m,color:p().bool,colorIndex:p().bool,monochrome:p().bool,resolution:m,type:Object.keys(d)},b={minAspectRatio:p().string,maxAspectRatio:p().string,minDeviceAspectRatio:p().string,maxDeviceAspectRatio:p().string,minHeight:m,maxHeight:m,minDeviceHeight:m,maxDeviceHeight:m,minWidth:m,maxWidth:m,minDeviceWidth:m,maxDeviceWidth:m,minColor:p().number,maxColor:p().number,minColorIndex:p().number,maxColorIndex:p().number,minMonochrome:p().number,maxMonochrome:p().number,minResolution:m,maxResolution:m,...h};var y={...d,...b};let g=e=>`not ${e}`,O=(e,t)=>{let r=l(e);return("number"==typeof t&&(t=`${t}px`),!0===t)?r:!1===t?g(r):`(${r}: ${t})`},w=e=>e.join(" and "),E=e=>{let t=[];return Object.keys(y).forEach(r=>{let n=e[r];null!=n&&t.push(O(r,n))}),w(t)},x=(0,n.createContext)(void 0),S=e=>e.query||E(e),j=e=>{if(e)return Object.keys(e).reduce((t,r)=>(t[l(r)]=e[r],t),{})},P=()=>{let e=(0,n.useRef)(!1);return(0,n.useEffect)(()=>{e.current=!0},[]),e.current},C=e=>{let t=(0,n.useContext)(x),r=()=>j(e)||j(t),[o,i]=(0,n.useState)(r);return(0,n.useEffect)(()=>{let e=r();!function(e,t){if(e===t)return!0;if(!e||!t)return!1;let r=Object.keys(e),n=Object.keys(t),o=r.length;if(n.length!==o)return!1;for(let n=0;n<o;n++){let o=r[n];if(e[o]!==t[o]||!Object.prototype.hasOwnProperty.call(t,o))return!1}return!0}(o,e)&&i(e)},[e,t]),o},k=e=>{let t=()=>S(e),[r,o]=(0,n.useState)(t);return(0,n.useEffect)(()=>{let e=t();r!==e&&o(e)},[e]),r},D=(e,t)=>{let r=()=>i()(e,t||{},!!t),[o,s]=(0,n.useState)(r),a=P();return(0,n.useEffect)(()=>{if(a){let e=r();return s(e),()=>{e&&e.dispose()}}},[e,t]),o},R=e=>{let[t,r]=(0,n.useState)(e.matches);return(0,n.useEffect)(()=>{let t=e=>{r(e.matches)};return e.addListener(t),r(e.matches),()=>{e.removeListener(t)}},[e]),t},L=(e,t,r)=>{let o=C(t),i=k(e);if(!i)throw Error("Invalid or missing MediaQuery!");let s=D(i,o),a=R(s),c=P();return(0,n.useEffect)(()=>{c&&r&&r(a)},[a]),(0,n.useEffect)(()=>()=>{s&&s.dispose()},[]),a}},4492:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=n.useState,s=n.useEffect,a=n.useLayoutEffect,c=n.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=i({inst:{value:r,getSnapshot:t}}),o=n[0].inst,l=n[1];return a(function(){o.value=r,o.getSnapshot=t,u(o)&&l({inst:o})},[e,r,t]),s(function(){return u(o)&&l({inst:o}),e(function(){u(o)&&l({inst:o})})},[e]),c(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:l},5107:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o=r(554),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=o.useSyncExternalStore,a=n.useRef,c=n.useEffect,u=n.useMemo,l=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var f=a(null);if(null===f.current){var p={hasValue:!1,value:null};f.current=p}else p=f.current;var m=s(e,(f=u(function(){function e(e){if(!c){if(c=!0,s=e,e=n(e),void 0!==o&&p.hasValue){var t=p.value;if(o(t,e))return a=t}return a=e}if(t=a,i(s,e))return t;var r=n(e);return void 0!==o&&o(t,r)?t:(s=e,a=r)}var s,a,c=!1,u=void 0===r?null:r;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,r,n,o]))[0],f[1]);return c(function(){p.hasValue=!0,p.value=m},[m]),l(m),m}},554:function(e,t,r){"use strict";e.exports=r(4492)},5006:function(e,t,r){"use strict";e.exports=r(5107)},1810:function(e,t,r){"use strict";r.d(t,{w_:function(){return l}});var n=r(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),s=["attr","size","title"];function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function l(e){return t=>n.createElement(f,a({attr:u({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,u({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:o,size:i,title:c}=e,l=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,s),f=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}},9099:function(e,t,r){"use strict";r.d(t,{Ue:function(){return p}});let n=e=>{let t;let r=new Set,n=(e,n)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=n?n:"object"!=typeof o||null===o)?o:Object.assign({},t,o),r.forEach(r=>r(t,e))}},o=()=>t,i={setState:n,getState:o,getInitialState:()=>s,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},s=t=e(n,o,i);return i},o=e=>e?n(e):n;var i=r(2265),s=r(5006);let{useDebugValue:a}=i,{useSyncExternalStoreWithSelector:c}=s,u=!1,l=e=>e,f=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?o(e):e,r=(e,r)=>(function(e,t=l,r){r&&!u&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),u=!0);let n=c(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return a(n),n})(t,e,r);return Object.assign(r,t),r},p=e=>e?f(e):f}}]);