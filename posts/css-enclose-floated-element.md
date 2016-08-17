---
title: CSS Enclose Floated Element
publishDate: 2016-08-13
tags: 
  - css
  - float
---

---

### Three Ways to Enclose Floated Element

Because a floated element is not directly in the normal flow, its containing block(parent element)
doesn't see it and so doesn't enclose it. If you don't specify a fix height to a block element,
the height of it will be the total height of the children’s. So when parent element doesn't see the
children of it, the height of it is not always desirable. Typically, we have three ways to force
elements to enclose their children.

```html
<div className="demo-container-not-enclosed">
    <h4>Parent element doesn't enclose the children of it.</h4>
    <div className="box"></div>
    <div className="box pink"></div>
</div>
```

```css
.demo-container-not-enclosed {
    border: 1px #333 solid;
    padding: 10px;
    margin-bottom: 10px;
}
```

```jsx
const NotEnclosed = props => {
    return (
        <div className="demo-container-not-enclosed">
            <h4>Parent element doesn't enclose the children of it.</h4>
            <div className="box" style={{float: 'left'}}></div>
            <div className="box pink" style={{float: 'left'}}></div>
            <div style="clear: both"/>
        </div>
    );
}
ReactDOM.render(<NotEnclosed />, mountNode);
```

#### Add `overflow: hidden` to the Parent Element

```css
.demo-container-overflow-hidden {
    border: 1px #333 solid;
    padding: 10px;
    margin-bottom: 10px;
    overflow: hidden;
}
```

```jsx
const OverflowHidden = props => {
    return (
        <div className="demo-container-overflow-hidden">
            <h4>Overflow:Hidden</h4>
            <div className="box" style={{float: 'left'}}></div>
            <div className="box pink" style={{float: 'left'}}></div>
        </div>
    );
}
ReactDOM.render(<OverflowHidden />, mountNode);
```

#### Float the Parent, too.

```css
.demo-container-float {
    border: 1px #333 solid;
    padding: 10px;
    margin-bottom: 10px;
    float: left;
}
```

```jsx
const FloatParent = props => {
    return (
        <div className="demo-container-float">
            <h4>Floating Parent./h4>
            <div className="box" style={{float: 'left'}}></div>
            <div className="box pink" style={{float: 'left'}}></div>
            <div style="clear: both"/>
        </div>
    );
}
ReactDOM.render(<FloatParent />, mountNode);
```

#### Add a Non-Floated Clearing Element.

```css
.demo-container {
    border: 1px #333 solid;
    padding: 10px;
    margin-bottom: 10px;
}
.demo-container:after {
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
}
```

```jsx
const Clearfix = props => {
    return (
        <div className="demo-container">
            <h4>Magical :after is instead of a concrete non-floated clearing element.</h4>
            <div className="box" style={{float: 'left'}}></div>
            <div className="box pink" style={{float: 'left'}}></div>
        </div>
    );
}
ReactDOM.render(<Clearfix />, mountNode);
```

<style>
  .demo-container-not-enclosed {
      border: 1px #333 solid;
      padding: 10px;
      margin-bottom: 10px;
  }
  .demo-container-overflow-hidden {
    border: 1px #333 solid;
    padding: 10px;
    margin-bottom: 10px;
    overflow: hidden;
  }
  .demo-container-float {
    border: 1px #333 solid;
    padding: 10px;
    margin-bottom: 10px;
    float: left;
  }
  .demo-container {
      border: 1px #333 solid;
      padding: 10px;
      margin-bottom: 10px;
  }
  .demo-container:after {
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
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