!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueTagInput=e():t.VueTagInput=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=79)}([function(t,e,n){var r=n(27)("wks"),o=n(30),i=n(1).Symbol,u="function"==typeof i,s=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};s.store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(11),o=n(26);t.exports=n(5)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(22)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports={}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(12);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(2),o=n(43),i=n(64),u=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(10),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(11).f,o=n(9),i=n(0)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(27)("keys"),o=n(30);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(45),o=n(13);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(7),o=n(0)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(1),o=n(4),i=n(8),u=n(3),s="prototype",c=function(t,e,n){var a,f,l,p=t&c.F,d=t&c.G,h=t&c.S,v=t&c.P,m=t&c.B,g=t&c.W,y=d?o:o[e]||(o[e]={}),x=y[s],_=d?r:h?r[e]:(r[e]||{})[s];d&&(n=e);for(a in n)f=!p&&_&&void 0!==_[a],f&&a in y||(l=f?_[a]:n[a],y[a]=d&&"function"!=typeof _[a]?n[a]:m&&f?i(l,r):g&&_[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[s]=t[s],e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((y.virtual||(y.virtual={}))[a]=l,t&c.R&&x&&!x[a]&&u(x,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){t.exports=n(1).document&&document.documentElement},function(t,e,n){"use strict";var r=n(25),o=n(21),i=n(58),u=n(3),s=n(9),c=n(6),a=n(48),f=n(15),l=n(54),p=n(0)("iterator"),d=!([].keys&&"next"in[].keys()),h="@@iterator",v="keys",m="values",g=function(){return this};t.exports=function(t,e,n,y,x,_,b){a(n,e,y);var w,k,j,I=function(t){if(!d&&t in C)return C[t];switch(t){case v:return function(){return new n(this,t)};case m:return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",O=x==m,T=!1,C=t.prototype,M=C[p]||C[h]||x&&C[x],P=M||I(x),A=x?O?I("entries"):P:void 0,E="Array"==e?C.entries||M:M;if(E&&(j=l(E.call(new t)),j!==Object.prototype&&(f(j,S,!0),r||s(j,p)||u(j,p,g))),O&&M&&M.name!==m&&(T=!0,P=function(){return M.call(this)}),r&&!b||!d&&!T&&C[p]||u(C,p,P),c[e]=P,c[S]=g,x)if(w={values:O?P:I(m),keys:_?P:I(v),entries:A},b)for(k in w)k in C||i(C,k,w[k]);else o(o.P+o.F*(d||T),e,w);return w}},function(t,e){t.exports=!0},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(1),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var r,o,i,u=n(8),s=n(44),c=n(23),a=n(14),f=n(1),l=f.process,p=f.setImmediate,d=f.clearImmediate,h=f.MessageChannel,v=0,m={},g="onreadystatechange",y=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},x=function(t){y.call(t.data)};p&&d||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return m[++v]=function(){s("function"==typeof t?t:Function(t),e)},r(v),v},d=function(t){delete m[t]},"process"==n(7)(l)?r=function(t){l.nextTick(u(y,t,1))}:h?(o=new h,i=o.port2,o.port1.onmessage=x,r=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",x,!1)):r=g in a("script")?function(t){c.appendChild(a("script"))[g]=function(){c.removeChild(this),y.call(t)}}:function(t){setTimeout(u(y,t,1),0)}),t.exports={set:p,clear:d}},function(t,e,n){var r=n(17),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var u=e[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,i=t.default);var s="function"==typeof i?i.options:i;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),r){var c=Object.create(s.computed||null);Object.keys(r).forEach(function(t){var e=r[t];c[t]=function(){return e}}),s.computed=c}return{esModule:o,exports:i,options:s}}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=f[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(u(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(u(n.parts[o]));f[n.id]={id:n.id,refs:1,parts:i}}}}function o(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],u=i[0],s=i[1],c=i[2],a=i[3],f={css:s,media:c,sourceMap:a};r[u]?(f.id=t+":"+r[u].parts.length,r[u].parts.push(f)):(f.id=t+":0",n.push(r[u]={id:u,parts:[f]}))}return n}function i(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function u(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]'),o=null!=r;if(o&&h)return v;if(m){var u=d++;r=p||(p=i()),e=s.bind(null,r,u,!1),n=s.bind(null,r,u,!0)}else r=r||i(),e=c.bind(null,r),n=function(){r.parentNode.removeChild(r)};return o||e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function s(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}function c(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(78),f={},l=a&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var i=o(t,e);return r(i),function(e){for(var n=[],u=0;u<i.length;u++){var s=i[u],c=f[s.id];c.refs--,n.push(c)}e?(i=o(t,e),r(i)):i=[];for(var u=0;u<n.length;u++){var c=n[u];if(0===c.refs){for(var a=0;a<c.parts.length;a++)c.parts[a]();delete f[c.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){n(76);var r=n(32)(n(35),n(74),"data-v-29a7e559",null);t.exports=r.exports},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(37),i=r(o),u=n(73),s=r(u),c=function(t,e){return e.indexOf(t)!==-1};e.default={props:{value:{type:Array,required:!0},getItems:{type:Function,required:!0},labelKey:{type:String,default:"label"},height:{type:Number,default:280}},components:{tag:s.default},data:function(){return{items:[],currentIndex:0,searching:!1,requestApi:!1,keyword:"",prevKeyword:"",tmpInput:"",prevTmpInput:"",isScrollClick:!1}},computed:{itemAmount:function(){return this.items.length},tagsToShow:function(){var t=this;return this.value.map(function(e){return e[t.labelKey]})}},watch:{keyword:function(t,e){this.prevKeyword=e,t&&this.search()},tmpInput:function(t,e){this.prevTmpInput=e}},methods:{inArray:c,onScroll:function(){this.isScrollClick=!0},input:function(t){this.tmpInput=t.target.value},onFocus:function(){this.$refs.input.focus(),this.keyword&&this.search()},search:function(){var t=this;this.searching=!0,this.requestApi=!0,this.keyword!==this.prevKeyword&&i.default.resolve(this.getItems(this.keyword)).then(function(e){t.requestApi=!1,t.items=e}).catch(function(e){t.requestApi=!1,console.error(e)})},removeTag:function(t){this.value.splice(t,1)},popTag:function(){return this.prevTmpInput||this.tmpInput?this.prevTmpInput&&!this.tmpInput?void(this.prevTmpInput=""):void 0:void this.value.pop()},select:function(){var t=this,e=this.items[this.currentIndex];c(e,this.value)||this.value.push(e),this.keyword="",this.currentIndex=0,this.searching=!1,this.tmpInput="",this.isScrollClick=!1,setTimeout(function(){t.prevTmpInput=""})},plusIndex:function(){this.currentIndex=(this.currentIndex+1)%this.itemAmount},minusIndex:function(){this.currentIndex=(this.currentIndex-1+this.itemAmount)%this.itemAmount},selectItem:function(t){this.currentIndex=t,this.isScrollClick=!1,this.select()},stopHandleInput:function(){var t=this,e=200;setTimeout(function(){t.isScrollClick||(t.searching=!1,""===t.keyword&&(t.selectedItem=""))},e)},showNoResult:function(){return this.keyword&&!this.requestApi&&0===this.items.length}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{tag:{type:String,required:!0},index:{type:Number,required:!0}},methods:{removeTag:function(){this.$emit("remove-tag",this.index)}}}},function(t,e,n){t.exports={default:n(38),__esModule:!0}},function(t,e,n){n(67),n(69),n(70),n(68),t.exports=n(4).Promise},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(18),o=n(29),i=n(62);t.exports=function(t){return function(e,n,u){var s,c=r(e),a=o(c.length),f=i(u,a);if(t&&n!=n){for(;a>f;)if(s=c[f++],s!=s)return!0}else for(;a>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(8),o=n(47),i=n(46),u=n(2),s=n(29),c=n(65),a={},f={},e=t.exports=function(t,e,n,l,p){var d,h,v,m,g=p?function(){return t}:c(t),y=r(n,l,e?2:1),x=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(d=s(t.length);d>x;x++)if(m=e?y(u(h=t[x])[0],h[1]):y(t[x]),m===a||m===f)return m}else for(v=g.call(t);!(h=v.next()).done;)if(m=o(v,y,h.value,e),m===a||m===f)return m};e.BREAK=a,e.RETURN=f},function(t,e,n){t.exports=!n(5)&&!n(22)(function(){return 7!=Object.defineProperty(n(14)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(7);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(6),o=n(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(2);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){"use strict";var r=n(52),o=n(26),i=n(15),u={};n(3)(u,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(1),o=n(28).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,s=r.Promise,c="process"==n(7)(u);t.exports=function(){var t,e,n,a=function(){var r,o;for(c&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(c)n=function(){u.nextTick(a)};else if(i){var f=!0,l=document.createTextNode("");new i(a).observe(l,{characterData:!0}),n=function(){l.data=f=!f}}else if(s&&s.resolve){var p=s.resolve();n=function(){p.then(a)}}else n=function(){o.call(r,a)};return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},function(t,e,n){var r=n(2),o=n(53),i=n(20),u=n(16)("IE_PROTO"),s=function(){},c="prototype",a=function(){var t,e=n(14)("iframe"),r=i.length,o="<",u=">";for(e.style.display="none",n(23).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),a=t.F;r--;)delete a[c][i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(s[c]=r(t),n=new s,s[c]=null,n[u]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(11),o=n(2),i=n(56);t.exports=n(5)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),s=u.length,c=0;s>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){var r=n(9),o=n(63),i=n(16)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(9),o=n(18),i=n(41)(!1),u=n(16)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),c=0,a=[];for(n in s)n!=u&&r(s,n)&&a.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){var r=n(55),o=n(20);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(3);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";var r=n(1),o=n(4),i=n(11),u=n(5),s=n(0)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];u&&e&&!e[s]&&i.f(e,s,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(2),o=n(12),i=n(0)("species");t.exports=function(t,e){var n,u=r(t).constructor;return void 0===u||void 0==(n=r(u)[i])?e:o(n)}},function(t,e,n){var r=n(17),o=n(13);t.exports=function(t){return function(e,n){var i,u,s=String(o(e)),c=r(n),a=s.length;return c<0||c>=a?t?"":void 0:(i=s.charCodeAt(c),i<55296||i>56319||c+1===a||(u=s.charCodeAt(c+1))<56320||u>57343?t?s.charAt(c):i:t?s.slice(c,c+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e,n){var r=n(17),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(13);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(19),o=n(0)("iterator"),i=n(6);t.exports=n(4).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){"use strict";var r=n(39),o=n(50),i=n(6),u=n(18);t.exports=n(24)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){},function(t,e,n){"use strict";var r,o,i,u=n(25),s=n(1),c=n(8),a=n(19),f=n(21),l=n(10),p=n(12),d=n(40),h=n(42),v=n(60),m=n(28).set,g=n(51)(),y="Promise",x=s.TypeError,_=s.process,b=s[y],_=s.process,w="process"==a(_),k=function(){},j=!!function(){try{var t=b.resolve(1),e=(t.constructor={})[n(0)("species")]=function(t){t(k,k)};return(w||"function"==typeof PromiseRejectionEvent)&&t.then(k)instanceof e}catch(t){}}(),I=function(t,e){return t===e||t===b&&e===i},S=function(t){var e;return!(!l(t)||"function"!=typeof(e=t.then))&&e},O=function(t){return I(b,t)?new T(t):new o(t)},T=o=function(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw x("Bad Promise constructor");e=t,n=r}),this.resolve=p(e),this.reject=p(n)},C=function(t){try{t()}catch(t){return{error:t}}},M=function(t,e){if(!t._n){t._n=!0;var n=t._c;g(function(){for(var r=t._v,o=1==t._s,i=0,u=function(e){var n,i,u=o?e.ok:e.fail,s=e.resolve,c=e.reject,a=e.domain;try{u?(o||(2==t._h&&E(t),t._h=1),u===!0?n=r:(a&&a.enter(),n=u(r),a&&a.exit()),n===e.promise?c(x("Promise-chain cycle")):(i=S(n))?i.call(n,s,c):s(n)):c(r)}catch(t){c(t)}};n.length>i;)u(n[i++]);t._c=[],t._n=!1,e&&!t._h&&P(t)})}},P=function(t){m.call(s,function(){var e,n,r,o=t._v;if(A(t)&&(e=C(function(){w?_.emit("unhandledRejection",o,t):(n=s.onunhandledrejection)?n({promise:t,reason:o}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=w||A(t)?2:1),t._a=void 0,e)throw e.error})},A=function(t){if(1==t._h)return!1;for(var e,n=t._a||t._c,r=0;n.length>r;)if(e=n[r++],e.fail||!A(e.promise))return!1;return!0},E=function(t){m.call(s,function(){var e;w?_.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},R=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),M(e,!0))},F=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw x("Promise can't be resolved itself");(e=S(t))?g(function(){var r={_w:n,_d:!1};try{e.call(t,c(F,r,1),c(R,r,1))}catch(t){R.call(r,t)}}):(n._v=t,n._s=1,M(n,!1))}catch(t){R.call({_w:n,_d:!1},t)}}};j||(b=function(t){d(this,b,y,"_h"),p(t),r.call(this);try{t(c(F,this,1),c(R,this,1))}catch(t){R.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(57)(b.prototype,{then:function(t,e){var n=O(v(this,b));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=w?_.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&M(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),T=function(){var t=new r;this.promise=t,this.resolve=c(F,t,1),this.reject=c(R,t,1)}),f(f.G+f.W+f.F*!j,{Promise:b}),n(15)(b,y),n(59)(y),i=n(4)[y],f(f.S+f.F*!j,y,{reject:function(t){var e=O(this),n=e.reject;return n(t),e.promise}}),f(f.S+f.F*(u||!j),y,{resolve:function(t){if(t instanceof b&&I(t.constructor,this))return t;var e=O(this),n=e.resolve;return n(t),e.promise}}),f(f.S+f.F*!(j&&n(49)(function(t){b.all(t).catch(k)})),y,{all:function(t){var e=this,n=O(e),r=n.resolve,o=n.reject,i=C(function(){var n=[],i=0,u=1;h(t,!1,function(t){var s=i++,c=!1;n.push(void 0),u++,e.resolve(t).then(function(t){c||(c=!0,n[s]=t,--u||r(n))},o)}),--u||r(n)});return i&&o(i.error),n.promise},race:function(t){var e=this,n=O(e),r=n.reject,o=C(function(){h(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o&&r(o.error),n.promise}})},function(t,e,n){"use strict";var r=n(61)(!0);n(24)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(66);for(var r=n(1),o=n(3),i=n(6),u=n(0)("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var a=s[c],f=r[a],l=f&&f.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,e,n){e=t.exports=n(31)(),e.push([t.i,'.tag-input-container[data-v-29a7e559]{position:relative;z-index:1000;user-select:none;box-sizing:border-box;padding:0 5px 3px;border-radius:4px;border:1px solid #d9d9d9;outline:none;background-color:#fff;transition:all .3s cubic-bezier(.645,.045,.355,1);min-width:200px}.tag-input-container[data-v-29a7e559]:after{content:"";display:block;clear:both}.tag-input-container[data-v-29a7e559]:focus{outline:none}.tag-input-container input[data-v-29a7e559]{border:none;outline:none;line-height:20px;height:20px;padding:0;margin-top:3px;min-width:1em}.tag-input-container .search-result-container[data-v-29a7e559]{padding:0;margin:10px 0;border:1px solid #66afe9;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);border-radius:5px;background-color:#fff;cursor:pointer;list-style:none;position:absolute;left:0;top:100%;width:100%;overflow:auto}.tag-input-container .search-result-container .search-result-item[data-v-29a7e559]{padding:5px 10px;text-align:left}.tag-input-container .search-result-container .search-result-item.highlight[data-v-29a7e559]{background:#eee}',""])},function(t,e,n){e=t.exports=n(31)(),e.push([t.i,".tag-input-tag{position:relative;box-sizing:border-box;border-radius:4px;cursor:default;float:left;line-height:20px;height:20px;max-width:99%;padding:0 20px 0 10px;margin-top:3px;margin-right:4px;font-size:14px;background-color:#f3f3f3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;user-select:none;transition:padding .3s cubic-bezier(.645,.045,.355,1)}.tag-input-tag-remove{position:absolute;right:5px;cursor:pointer;padding-left:4px;vertical-align:baseline}",""])},function(t,e,n){n(77);var r=n(32)(n(36),n(75),null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tag-input-container",attrs:{tabindex:"-1"},on:{keyup:[function(e){return t._k(e.keyCode,"up",38)?null:void t.minusIndex(e)},function(e){return t._k(e.keyCode,"down",40)?null:void t.plusIndex(e)},function(e){return t._k(e.keyCode,"enter",13)?null:(e.preventDefault(),void t.select(e))},function(e){return t._k(e.keyCode,"delete",[8,46])?null:void t.popTag(e)}],focus:t.onFocus}},[t._l(t.tagsToShow,function(e,r){return n("tag",{key:r,attrs:{tag:e,index:r},on:{"remove-tag":t.removeTag}})}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],ref:"input",staticStyle:{float:"left"},style:"width:"+(t.tmpInput.length+1)+"em;",attrs:{type:"text"},domProps:{value:t.keyword},on:{focus:t.onFocus,blur:t.stopHandleInput,input:[function(e){e.target.composing||(t.keyword=e.target.value)},t.input]}}),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.items.length&&t.keyword&&t.searching,expression:"items.length && keyword && searching"}],staticClass:"search-result-container",style:"max-height:"+t.height+"px",on:{scroll:t.onScroll}},t._l(t.items,function(e,r){return n("li",{key:r,staticClass:"search-result-item",class:{highlight:t.currentIndex===r},on:{click:function(e){t.selectItem(r)}}},[t._v("\n      "+t._s(e[t.labelKey])+"\n    ")])})),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.showNoResult(),expression:"showNoResult()"}],staticClass:"search-result-container"},[n("li",{staticClass:"search-result-item text-danger"},[t._v("没有结果，请更换关键词")])])],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tag-input-tag"},[t._v("\n  "+t._s(t.tag)+"\n  "),n("span",{staticClass:"tag-input-tag-remove",on:{click:t.removeTag}},[t._v("×")])])},staticRenderFns:[]}},function(t,e,n){var r=n(71);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(33)("0e14bbdd",r,!0)},function(t,e,n){var r=n(72);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(33)("6f94ad65",r,!0)},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],u=i[0],s=i[1],c=i[2],a=i[3],f={id:t+":"+o,css:s,media:c,sourceMap:a};r[u]?r[u].parts.push(f):n.push(r[u]={id:u,parts:[f]})}return n}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(34),i=r(o);e.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("tag-input",i.default)}])});