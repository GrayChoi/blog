webpackJsonp([5,6],{291:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=s(2),o=t(e),p=s(27);t(p);n.exports={content:["article",["hr"],["h3","Three Ways to Enclose Floated Element"],["p","Because a floated element is not directly in the normal flow, its containing block(parent element)\ndoesn't see it and so doesn't enclose it. If you don't specify a fix height to a block element,\nthe height of it will be the total height of the children\u2019s. So when parent element doesn't see the\nchildren of it, the height of it is not always desirable. Typically, we have three ways to force\nelements to enclose their children."],function(){var n=function(n){return o["default"].createElement("div",null,o["default"].createElement("div",{className:"demo-container-not-enclosed"},o["default"].createElement("h4",null,"Parent element doesn't enclose the children of it."),o["default"].createElement("div",{className:"box",style:{"float":"left"}}),o["default"].createElement("div",{className:"box pink",style:{"float":"left"}})),o["default"].createElement("div",{style:{clear:"both"}}))};return o["default"].createElement(n,null)},["pre",{lang:"html",highlighted:'<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>demo-container-not-enclosed<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h4</span><span class="token punctuation" >></span></span>Parent element doesn\'t enclose the children of it.<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h4</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>box<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token attr-value" ><span class="token punctuation" >=</span>{{float:</span> <span class="token attr-name" >\'left\'}}</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>box pink<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token attr-value" ><span class="token punctuation" >=</span>{{float:</span> <span class="token attr-name" >\'left\'}}</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>'},["code",'<div className="demo-container-not-enclosed">\n    <h4>Parent element doesn\'t enclose the children of it.</h4>\n    <div className="box" style={{float: \'left\'}}></div>\n    <div className="box pink" style={{float: \'left\'}}></div>\n</div>']],["pre",{lang:"css",highlighted:'<span class="token selector" ><span class="token class" >.demo-container-not-enclosed</span> </span><span class="token punctuation" >{</span>\n    <span class="token property" >border</span><span class="token punctuation" >:</span> <span class="token number" >1</span>px <span class="token hexcode" >#333</span> solid<span class="token punctuation" >;</span>\n    <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >10</span>px<span class="token punctuation" >;</span>\n    <span class="token property" >margin-bottom</span><span class="token punctuation" >:</span> <span class="token number" >10</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'},["code",".demo-container-not-enclosed {\n    border: 1px #333 solid;\n    padding: 10px;\n    margin-bottom: 10px;\n}"]],["style",'\n  .demo-container-not-enclosed {\n      border: 1px #333 solid;\n      padding: 10px;\n      margin-bottom: 10px;\n  }\n  .demo-container-overflow-hidden {\n    border: 1px #333 solid;\n    padding: 10px;\n    margin-bottom: 10px;\n    overflow: hidden;\n  }\n  .demo-container-float {\n    border: 1px #333 solid;\n    padding: 10px;\n    margin-bottom: 10px;\n    float: left;\n  }\n  .demo-container {\n      border: 1px #333 solid;\n      padding: 10px;\n      margin-bottom: 10px;\n  }\n  .demo-container:after {\n    content: ".";\n    display: block;\n    height: 0;\n    visibility: hidden;\n    clear: both;\n  }\n  .box {\n      background-color: #26a69a;\n      height: 100px;\n      width: 100px;\n      margin-bottom: 10px;\n  }\n  .pink {\n      width: 150px;\n      height: 150px;\n      background-color: #e91e63;\n  }\n  .yellow {\n      background-color: #ffeb3b;\n  }\n']],meta:{title:"CSS Enclose Floated Element",publishDate:"2016-08-13T00:00:00.000Z",tags:["css","float"],filename:"posts/css-enclose-floated-element.md"}}}});