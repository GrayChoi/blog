webpackJsonp([2,3],{293:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=a(3),o=(t(p),a(37));t(o);n.exports={content:["article",["p","Implementation of some usage with chaining in LoDash."],["hr"],["h3","What is Chaining"],["p","Function Chaining is a common pattern in functional programming. You can perform\nseveral actions continuously, and don't need to define a variable to save intermediate results\nof functions. This will reduce errors and improve the legibility of you code."],["h3","Using ",["code","_.chain"]," of lodash to implement chaining function pattern"],["p","Let's see some examples of ",["code","_.chain"]," in lodash, you may understand why we need to use it as possible as\nwe can."],["pre",{lang:"js",highlighted:'<span class="token keyword" >import</span> _ <span class="token keyword" >from</span> <span class="token string" >\'lodash\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >class</span> <span class="token class-name" >Customer</span> <span class="token punctuation" >{</span>\n  <span class="token function" >constructor</span><span class="token punctuation" >(</span>name<span class="token punctuation" >,</span> company<span class="token punctuation" >,</span> title<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>name <span class="token operator" >=</span> name<span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>company <span class="token operator" >=</span> company<span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>title <span class="token operator" >=</span> title<span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >class</span> <span class="token class-name" >Company</span> <span class="token punctuation" >{</span>\n  <span class="token function" >constructor</span><span class="token punctuation" >(</span>country<span class="token punctuation" >,</span> state<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>country <span class="token operator" >=</span> country<span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>state <span class="token operator" >=</span> state<span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >const</span> c1 <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >Customer</span><span class="token punctuation" >(</span>\n  <span class="token string" >\'John Doe\'</span><span class="token punctuation" >,</span> \n  <span class="token keyword" >new</span> <span class="token class-name" >Company</span><span class="token punctuation" >(</span><span class="token string" >\'US\'</span><span class="token punctuation" >,</span> <span class="token string" >\'San Francisco\'</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token string" >\'PG\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> c2 <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >Customer</span><span class="token punctuation" >(</span>\n  <span class="token string" >\'okagawa\'</span><span class="token punctuation" >,</span> \n  <span class="token keyword" >new</span> <span class="token class-name" >Company</span><span class="token punctuation" >(</span><span class="token string" >\'JP\'</span><span class="token punctuation" >,</span> <span class="token string" >\'Tokyo\'</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token string" >\'SE\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> c3 <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >Customer</span><span class="token punctuation" >(</span>\n  <span class="token string" >\'Jane Doe\'</span><span class="token punctuation" >,</span> \n  <span class="token keyword" >new</span> <span class="token class-name" >Company</span><span class="token punctuation" >(</span><span class="token string" >\'US\'</span><span class="token punctuation" >,</span> <span class="token string" >\'Newyork\'</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token string" >\'PG\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> c4 <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >Customer</span><span class="token punctuation" >(</span>\n  <span class="token string" >\'Mike Doe\'</span><span class="token punctuation" >,</span> \n  <span class="token keyword" >new</span> <span class="token class-name" >Company</span><span class="token punctuation" >(</span><span class="token string" >\'US\'</span><span class="token punctuation" >,</span> <span class="token string" >\'Newyork\'</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token string" >\'SE\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> jpSe <span class="token operator" >=</span> _\n  <span class="token punctuation" >.</span><span class="token function" >chain</span><span class="token punctuation" >(</span><span class="token punctuation" >[</span>c1<span class="token punctuation" >,</span> c2<span class="token punctuation" >,</span> c3<span class="token punctuation" >]</span><span class="token punctuation" >)</span>\n  <span class="token punctuation" >.</span><span class="token function" >filter</span><span class="token punctuation" >(</span>s <span class="token operator" >=</span><span class="token operator" >></span> s<span class="token punctuation" >.</span>title <span class="token operator" >===</span> <span class="token string" >\'SE\'</span> <span class="token operator" >&amp;&amp;</span> s<span class="token punctuation" >.</span>company<span class="token punctuation" >.</span>country <span class="token operator" >===</span> <span class="token string" >\'JP\'</span><span class="token punctuation" >)</span>\n  <span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span>s <span class="token operator" >=</span><span class="token operator" >></span> s<span class="token punctuation" >.</span>name<span class="token punctuation" >)</span>\n  <span class="token punctuation" >.</span><span class="token function" >startCase</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span>\n  <span class="token punctuation" >.</span><span class="token function" >value</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span> <span class="token comment" spellcheck="true">// -> \'Okagawa\'</span>'},["code","import _ from 'lodash';\n\nclass Customer {\n  constructor(name, company, title) {\n    this.name = name;\n    this.company = company;\n    this.title = title;\n  }\n}\n\nclass Company {\n  constructor(country, state) {\n    this.country = country;\n    this.state = state;\n  }\n}\n\nconst c1 = new Customer(\n  'John Doe', \n  new Company('US', 'San Francisco'),\n  'PG');\nconst c2 = new Customer(\n  'okagawa', \n  new Company('JP', 'Tokyo'),\n  'SE');\nconst c3 = new Customer(\n  'Jane Doe', \n  new Company('US', 'Newyork'),\n  'PG');\nconst c4 = new Customer(\n  'Mike Doe', \n  new Company('US', 'Newyork'),\n  'SE');\n\nconst jpSe = _\n  .chain([c1, c2, c3])\n  .filter(s => s.title === 'SE' && s.company.country === 'JP')\n  .map(s => s.name)\n  .startCase()\n  .value(); // -> 'Okagawa'"]],["p","Amzing, when using lodash, our code seem so easy and comprehensible. We use ",["code","_.chain"]," to wrap\nan array of customers, and use functions that can be used with ",["code","_.chain"]," to transfrom the data\nand get what we want. In this case, we filter the array, and just return the customers that\ntitle is Senoir Engineer and country is Japan, then the intermediate result will be passed to\nnext chaining function ",["code","map"],", this function will return a new array of customers' name, finally\nwe use ",["code","startCase"]," to capitalize the first character of customers' name and return the array."],["p","As you see above, it's just so easy. You can just use ",["code","_.chain"]," in you project."]],meta:{title:"Chaining In LoDash",publishDate:"2016-08-08T00:00:00.000Z",tags:["JavaScript","functional programming","LoDash","chain"],filename:"posts/use-lodash-chain.md"}}}});