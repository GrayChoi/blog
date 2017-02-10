webpackJsonp([4,7],{277:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=a(2),o=(t(p),a(21));t(o);n.exports={content:["article",["p","Problem of shallowCompare In Pure render"],["hr"],["h3","What is Pure render ?"],["p",["em","Only the react component need to be re-rendered, it will be re-rendered."]],["p","In some case, you just want re-render a parent component, but since the ",["code","render()"]," method of react component is executed\nrecursive, the parent component will also re-render all child component of it. Although, when mounting the dom\nthat React will diff the current virtual dom tree with the previous virtual dom tree, and only apply diffrent part of\nthe dom tree to the real dom tree. Frequent Rendering of children component are also quite performance hungray."],["p","Fortunately, you can make your component implement the ",["code","shouldComponentUpdate"]," method with shallow equality checks.\nExamples of this are the ",["a",{title:null,href:"https://facebook.github.io/react/docs/pure-render-mixin.html"},"PureRenderMixin"],",\n",["a",{title:null,href:"https://github.com/acdlite/recompose#optimize-rendering-performance"},"recompose/pure"]," and ",["a",{title:null,href:"https://facebook.github.io/react/docs/shallow-compare.html"},"Shallow Compare"],"."],["p","When you implement the ",["code","shouldComponentUpdate"]," method, it will be called before update the component, if you implement it\nwith shallow equality checks."],["blockquote",["p",["code","shallowCompare"]," performs a shallow equality check on the current ",["code","props"]," and ",["code","nextProps"]," objects as well \nas the current ",["code","state"]," and ",["code","nextState"]," objects.It does this by iterating on the keys of the objects being \ncompared and returning true when the values of a key in each object are not strictly equal.  "],["p",["code","shallowCompare"]," returns ",["code","true"]," if the shallow comparison for props or state fails and therefore \nthe component should update.  "],["p",["code","shallowCompare"]," returns ",["code","false"]," if the shallow comparison for props and \nstate both pass and therefore the component does not need to update."]],["h3","shallowCompare will cause problems"],["p","We often need to pass a complex type property from parent component to child component,\nlet's see a example as following:"],["pre",{lang:"js",highlighted:'<span class="token keyword">function</span> <span class="token function">shallowCompare</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> nextProps<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token operator">!</span><span class="token function">shallowEqual</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>props<span class="token punctuation">,</span> nextProps<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">shallowEqual</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>state<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token keyword">function</span> <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">shallowCompare</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> nextProps<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> address <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>span<span class="token operator">></span>name<span class="token punctuation">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>\n        <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>\n        <span class="token operator">&lt;</span>span<span class="token operator">></span> age<span class="token punctuation">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>\n        <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>\n        <span class="token operator">&lt;</span>span<span class="token operator">></span> country<span class="token punctuation">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>\n        <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>address<span class="token punctuation">.</span>country<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">PersonList</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token keyword">function</span> <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token function">shallowEqual</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>props<span class="token punctuation">,</span> nextProps<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">shallowEqual</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>state<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> address <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>span<span class="token operator">></span>name<span class="token punctuation">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>\n        <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>\n        <span class="token operator">&lt;</span>span<span class="token operator">></span> age<span class="token punctuation">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>\n        <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>\n        <span class="token operator">&lt;</span>span<span class="token operator">></span> country<span class="token punctuation">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>\n        <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>address<span class="token punctuation">.</span>country<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","function shallowCompare(instance, nextProps, nextState) {\n  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);\n}\n\nclass Person extends React.Component {\n  function shouldComponentUpdate(nextProps, nextState) {\n    return shallowCompare(this, nextProps, nextState);\n  }\n  render() {\n  const { name, age, address } = this.props;\n    return (\n      <div>\n        <span>name:</span>\n        <span>{name}</span>\n        <span> age:</span>\n        <span>{age}</span>\n        <span> country:</span>\n        <span>{address.country}</span>\n      </div>\n    );\n  }\n}\n\nclass PersonList extends React.Component {\n  function shouldComponentUpdate(nextProps, nextState) {\n    return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);\n  }\n  render() {\n  const { name, age, address } = this.props;\n    return (\n      <div>\n        <span>name:</span>\n        <span>{name}</span>\n        <span> age:</span>\n        <span>{age}</span>\n        <span> country:</span>\n        <span>{address.country}</span>\n      </div>\n    );\n  }\n}"]],["p","In the case, Person is a complex type, sometimes this will cause a bug.\nWhy this will cause a bug, before I anwser this question, we need to know\n",["code","shallowEqual()"]," is how to work. Actually, ",["code","shallowEqual()"]," only compare\none depth of object with each other,  it don't perform a deep comparison between\ntwo values."],["ul",["li",["p","Bug: mutate value of deep property"]]],["pre",{lang:"js",highlighted:'<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'John Doe\'</span><span class="token punctuation">,</span>\n  age<span class="token punctuation">:</span> <span class="token string">\'20\'</span><span class="token punctuation">,</span>\n  address<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    country<span class="token punctuation">:</span> <span class="token string">\'US\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> p2 <span class="token operator">=</span> p1<span class="token punctuation">;</span>\n\n<span class="token function">shallowEqual</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// => true</span>\n\np1<span class="token punctuation">.</span>country <span class="token operator">=</span> <span class="token string">\'JAPAN\'</span><span class="token punctuation">;</span>\n\n<span class="token function">shallowEqual</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// => true</span>'},["code","let p1 = {\n  name: 'John Doe',\n  age: '20',\n  address: {\n    country: 'US'\n  }\n}\n\nlet p2 = p1;\n\nshallowEqual(p1, p2); // => true\n\np1.country = 'JAPAN';\n\nshallowEqual(p1, p2); // => true"]],["p","In this case, when we change the value of property ",["code","address"],", the child component\nwill not be re-rendered. This will cause a bug, to mutate state is not recommended\nby community."],["ul",["li",["p","Bug: Don't mutate value, just return a new object"]]],["pre",{lang:"js",highlighted:'<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'John Doe\'</span><span class="token punctuation">,</span>\n  age<span class="token punctuation">:</span> <span class="token string">\'20\'</span><span class="token punctuation">,</span>\n  address<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    country<span class="token punctuation">:</span> <span class="token string">\'US\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'John Doe\'</span><span class="token punctuation">,</span>\n  age<span class="token punctuation">:</span> <span class="token string">\'20\'</span><span class="token punctuation">,</span>\n  address<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    country<span class="token punctuation">:</span> <span class="token string">\'US\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">shallowEqual</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// => false</span>'},["code","let p1 = {\n  name: 'John Doe',\n  age: '20',\n  address: {\n    country: 'US'\n  }\n}\n\nlet p2 = {\n  name: 'John Doe',\n  age: '20',\n  address: {\n    country: 'US'\n  }\n}\n\nshallowEqual(p1, p2); // => false"]],["p","This will not cause a obviously bug. But this will cause a performance problem.\nwhen p1 and p2 have absolutely same value, because they reference different object,\nthe child component must be re-render. This is quite performance hungray."],["h3","Conclusion"],["p","So, use shallowCompare in simple case is no problem. But in a real, large project, it may be\nso hurt. In next post, I will provide a solution to resolve these problem, may be you have known\nwhat I will write about. Yes, that's Immutable.js of facebook."]],meta:{title:"Reactjs Pure Render (1)",publishDate:"2016-08-10T00:00:00.000Z",tags:["reactjs","JavaScript"],filename:"posts/reactjs-pure-render-1.md"}}}});