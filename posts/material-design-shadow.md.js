webpackJsonp([1,7],{64:function(n,s,a){var e,p;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function a(){for(var n=[],s=0;s<arguments.length;s++){var e=arguments[s];if(e){var p=typeof e;if("string"===p||"number"===p)n.push(e);else if(Array.isArray(e))n.push(a.apply(null,e));else if("object"===p)for(var o in e)t.call(e,o)&&e[o]&&n.push(o)}}return n.join(" ")}var t={}.hasOwnProperty;"undefined"!=typeof n&&n.exports?n.exports=a:(e=[],p=function(){return a}.apply(s,e),!(void 0!==p&&(n.exports=p)))}()},82:function(n,s){},171:function(n,s,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0}),s.Col=s.Row=void 0;var p=a(266),t=e(p),o=a(265),c=e(o);s.Row=t["default"],s.Col=c["default"]},206:function(n,s){},263:function(n,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(171);s["default"]=e.Col,n.exports=s["default"]},264:function(n,s,a){"use strict";a(82),a(206)},265:function(n,s,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function p(n,s,a){return s in n?Object.defineProperty(n,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[s]=a,n}function t(n,s){var a={};for(var e in n)s.indexOf(e)>=0||Object.prototype.hasOwnProperty.call(n,e)&&(a[e]=n[e]);return a}function o(n){var s,a=n.span,e=n.order,o=n.offset,l=n.push,b=n.pull,k=n.className,m=n.children,d=t(n,["span","order","offset","push","pull","className","children"]),f={};["xs","sm","md","lg"].forEach(function(s){var a,e={};"number"==typeof n[s]?e.span=n[s]:"object"===r(n[s])&&(e=n[s]||{}),delete d[s],f=c({},f,(a={},p(a,"ant-col-"+s+"-"+e.span,void 0!==e.span),p(a,"ant-col-"+s+"-order-"+e.order,e.order),p(a,"ant-col-"+s+"-offset-"+e.offset,e.offset),p(a,"ant-col-"+s+"-push-"+e.push,e.push),p(a,"ant-col-"+s+"-pull-"+e.pull,e.pull),a))});var x=(0,i["default"])(c((s={},p(s,"ant-col-"+a,void 0!==a),p(s,"ant-col-order-"+e,e),p(s,"ant-col-offset-"+o,o),p(s,"ant-col-push-"+l,l),p(s,"ant-col-pull-"+b,b),p(s,k,!!k),s),f));return u["default"].createElement("div",c({},d,{className:x}),m)}Object.defineProperty(s,"__esModule",{value:!0});var c=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};s["default"]=o;var l=a(2),u=e(l),b=a(64),i=e(b),k=l.PropTypes.oneOfType([l.PropTypes.string,l.PropTypes.number]),m=l.PropTypes.oneOfType([l.PropTypes.object,l.PropTypes.number]);o.propTypes={span:k,order:k,offset:k,push:k,pull:k,className:l.PropTypes.string,children:l.PropTypes.node,xs:m,sm:m,md:m,lg:m},n.exports=s["default"]},266:function(n,s,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function p(n,s){for(var a=Object.getOwnPropertyNames(s),e=0;e<a.length;e++){var p=a[e],t=Object.getOwnPropertyDescriptor(s,p);t&&t.configurable&&void 0===n[p]&&Object.defineProperty(n,p,t)}return n}function t(n,s,a){return s in n?Object.defineProperty(n,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[s]=a,n}function o(n,s){var a={};for(var e in n)s.indexOf(e)>=0||Object.prototype.hasOwnProperty.call(n,e)&&(a[e]=n[e]);return a}function c(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function r(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function l(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):p(n,s))}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var u,b,i=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},k=a(2),m=e(k),d=a(64),f=e(d),x=(b=u=function(n){function s(){return c(this,s),r(this,n.apply(this,arguments))}return l(s,n),s.prototype.render=function(){var n,s=this.props,a=s.type,e=s.justify,p=s.align,c=s.className,r=s.gutter,l=s.style,u=s.children,b=o(s,["type","justify","align","className","gutter","style","children"]),d=(0,f["default"])((n={"ant-row":!a},t(n,"ant-row-"+a,a),t(n,"ant-row-"+a+"-"+e,e),t(n,"ant-row-"+a+"-"+p,p),t(n,c,c),n)),x=r>0?i({marginLeft:r/-2,marginRight:r/-2},l):l,h=k.Children.map(u,function(n){return n?n.props?(0,k.cloneElement)(n,{style:r>0?i({paddingLeft:r/2,paddingRight:r/2},n.props.style):n.props.style}):n:null});return m["default"].createElement("div",i({},b,{className:d,style:x}),h)},s}(m["default"].Component),u.defaultProps={gutter:0},u.propTypes={type:m["default"].PropTypes.string,align:m["default"].PropTypes.string,justify:m["default"].PropTypes.string,className:m["default"].PropTypes.string,children:m["default"].PropTypes.node,gutter:m["default"].PropTypes.number},b);s["default"]=x,n.exports=s["default"]},271:function(n,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(171);s["default"]=e.Row,n.exports=s["default"]},272:function(n,s,a){"use strict";a(82),a(206)},276:function(n,s,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}var p=(a(272),a(271)),t=e(p),o=(a(264),a(263)),c=e(o),r=a(2),l=e(r),u=a(21);e(u);n.exports={content:["article",["p","A CSS implementation for box-shadows to Material Deisign style guide"],["hr"],["h3","Elevation and shadows"],["h4","Objects in material design process similar qualities to objects in the physical world."],["p","In the physical world, objects can be stacked or affixed to one another, but cannot pass through\neach other. Objects also cast shadows and reflect light."],["h5","Shadows"],["p","Shadows provide important visual cues about object's depth and directional movemoment. They are the only\nvisual cue indicating the amount of separation between surfaces. An object's elevation determines the appearance\nof its shadow."],["style","\n.z-depth-0 {\n  box-shadow: none !important;\n}\n.z-depth-1 {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n.z-depth-1-half {\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\n}\n.z-depth-2 {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n}\n.z-depth-3 {\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);\n}\n.z-depth-4 {\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3);\n}\n.z-depth-5 {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);\n}\n.shadow-demo {\n    background-color: #26a69a;\n    width: 100px;\n    height: 100px;\n}\n"],function(){var n=function(n){return l["default"].createElement("div",null,l["default"].createElement(t["default"],null,l["default"].createElement(c["default"],{xs:12,sm:12,md:12,lg:8},l["default"].createElement("p",{className:"z-depth-1 shadow-demo"})),l["default"].createElement(c["default"],{xs:12,sm:12,md:12,lg:8},l["default"].createElement("p",{className:"z-depth-2 shadow-demo"})),l["default"].createElement(c["default"],{xs:12,sm:12,md:12,lg:8},l["default"].createElement("p",{className:"z-depth-3 shadow-demo"})),l["default"].createElement(c["default"],{xs:12,sm:12,md:12,lg:8},l["default"].createElement("p",{className:"z-depth-4 shadow-demo"})),l["default"].createElement(c["default"],{xs:12,sm:12,md:12,lg:8},l["default"].createElement("p",{className:"z-depth-5 shadow-demo"}))))};return l["default"].createElement(n,null)},["p","You can implement a 0 ~ 5 depth shadows as following:"],["pre",{lang:"css",highlighted:'<span class="token selector"><span class="token class">.z-depth-0</span> </span><span class="token punctuation">{</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> none <span class="token important">!important</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.z-depth-1</span> </span><span class="token punctuation">{</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">2</span>px <span class="token number">2</span>px <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0.14</span><span class="token punctuation">)</span>, <span class="token number">0</span> <span class="token number">1</span>px <span class="token number">5</span>px <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0.12</span><span class="token punctuation">)</span>, <span class="token number">0</span> <span class="token number">3</span>px <span class="token number">1</span>px -<span class="token number">2</span>px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.z-depth-1-half</span> </span><span class="token punctuation">{</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">3</span>px <span class="token number">3</span>px <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0.14</span><span class="token punctuation">)</span>, <span class="token number">0</span> <span class="token number">1</span>px <span class="token number">7</span>px <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0.12</span><span class="token punctuation">)</span>, <span class="token number">0</span> <span class="token number">3</span>px <span class="token number">1</span>px -<span class="token number">1</span>px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.z-depth-2</span> </span><span class="token punctuation">{</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">4</span>px <span class="token number">5</span>px <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0.14</span><span class="token punctuation">)</span>, <span class="token number">0</span> <span class="token number">1</span>px <span class="token number">10</span>px <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0.12</span><span class="token punctuation">)</span>, <span class="token number">0</span> <span class="token number">2</span>px <span class="token number">4</span>px -<span class="token number">1</span>px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.z-depth-3</span> </span><span class="token punctuation">{</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">6</span>px <span class="token number">10</span>px <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0.14</span><span class="token punctuation">)</span>, <span class="token number">0</span> <span class="token number">1</span>px <span class="token number">18</span>px <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0.12</span><span class="token punctuation">)</span>, <span class="token number">0</span> <span class="token number">3</span>px <span class="token number">5</span>px -<span class="token number">1</span>px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.z-depth-4</span> </span><span class="token punctuation">{</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">8</span>px <span class="token number">10</span>px <span class="token number">1</span>px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0.14</span><span class="token punctuation">)</span>, <span class="token number">0</span> <span class="token number">3</span>px <span class="token number">14</span>px <span class="token number">2</span>px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0.12</span><span class="token punctuation">)</span>, <span class="token number">0</span> <span class="token number">5</span>px <span class="token number">5</span>px -<span class="token number">3</span>px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.z-depth-5</span> </span><span class="token punctuation">{</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">16</span>px <span class="token number">24</span>px <span class="token number">2</span>px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0.14</span><span class="token punctuation">)</span>, <span class="token number">0</span> <span class="token number">6</span>px <span class="token number">30</span>px <span class="token number">5</span>px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0.12</span><span class="token punctuation">)</span>, <span class="token number">0</span> <span class="token number">8</span>px <span class="token number">10</span>px -<span class="token number">5</span>px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code",".z-depth-0 {\n  box-shadow: none !important;\n}\n.z-depth-1 {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n.z-depth-1-half {\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\n}\n.z-depth-2 {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n}\n.z-depth-3 {\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);\n}\n.z-depth-4 {\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3);\n}\n.z-depth-5 {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);\n}"]]],meta:{title:"Material Design Shadow",publishDate:"2016-08-08T00:00:00.000Z",tags:["material design","shadow","css"],filename:"posts/material-design-shadow.md"}}}});