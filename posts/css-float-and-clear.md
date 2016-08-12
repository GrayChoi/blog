---
title: CSS Float and Clear
publishDate: 2016-08-11
tags: 
  - css
  - float
---

---

### The `Float` Property

The `float` property is primarily used to flow text around images, but it also provides a 
way to create multi-column layouts (If you don't need to design your website to be compatible
with IE < 11, you also can use new layout property-flexbox).

When making your block floating, it will float to one layer above the 
general document flow, and its position will be occupied by the next line block element
if it exist. Let's see some example about float.

```jsx
const NoFloatDemo = props => {
    return (
        <div className="demo-container">
            <h4>no float</h4>
            <div className="box"></div>
            <div className="box pink"></div>
        </div>
    );
}
ReactDOM.render(<NoFloatDemo />, mountNode);
```
```jsx
const FloatDemo = props => {
    return (
        <div className="demo-container">
            <h4>float left</h4>
            <div className="box" style={{float:'left'}}></div>
            <div className="box pink"></div>
        </div>
    );
}
ReactDOM.render(<FloatDemo />, mountNode);
```

In the first example, no element has `float` property. By default, a block element like `div` will
occupied one line by itself. And in the second example, since we apply `float: left` to teal green box, 
teal green box float up, and the pink box occupied the position of teal green box. If you also want
to make the pink box to sit to next the teal green box, you need to also apply float it up like
fllowing example:

```jsx
const AllFloatDemo = props => {
    return (
        <div className="demo-container">
            <h4>all float left</h4>
            <div className="box" style={{float:'left'}}></div>
            <div className="box pink" style={{float:'left'}}></div>
        </div>
    );
}
ReactDOM.render(<AllFloatDemo />, mountNode);
```

### The `Clear` Property

The `Clear` property enables you to stop such elements from moving up next to a floated element.
If, for example, you have two `div` box and only want to make the first to be adjacent to the 
floated element, you can "clear" the second one so it's positioned under the floated element. 
Let's see the example as following:

```jsx
const ClearFloatDemo = props => {
    return (
        <div className="demo-container">
            <h4>clear float left</h4>
            <div className="box" style={{float:'left'}}></div>
            <div className="box pink" style={{float:'left', width: '100px', height: '100px'}}></div>
            <div className="box yellow" style={{clear:'left'}}></div>
        </div>
    );
}
ReactDOM.render(<ClearFloatDemo />, mountNode);
```

<style>
  .demo-container {
      border: 1px #333 solid;
      padding: 10px;
      margin-bottom: 10px;
  }
  .demo-container:after {
    content: " ";
    display: block;
    visibility: none;
    clear: both;
  }
  .box {
      background-color: #26a69a;
      height: 100px;
      width: 100px;
      margin-bottom: 10px;
  }
  .pink {
      width: 150px;
      height: 150px;
      background-color: #e91e63;
  }
  .yellow {
      background-color: #ffeb3b;
  }
</style>