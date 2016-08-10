---
title: Reactjs Pure Render (1)
publishDate: 2016-08-10
tags: 
  - reactjs
  - JavaScript
---

Problem of shallowCompare In Pure render

---

### What is Pure render ?

*Only the react component need to be re-rendered, it will be re-rendered.*

In some case, you just want re-render a parent component, but since the `render()` method of react component is executed
recursive, the parent component will also re-render all child component of it. Although, when mounting the dom
that React will diff the current virtual dom tree with the previous virtual dom tree, and only apply diffrent part of
the dom tree to the real dom tree. Frequent Rendering of children component are also quite performance hungray.

Fortunately, you can make your component implement the `shouldComponentUpdate` method with shallow equality checks.
Examples of this are the [PureRenderMixin](https://facebook.github.io/react/docs/pure-render-mixin.html),
[recompose/pure](https://github.com/acdlite/recompose#optimize-rendering-performance) and [Shallow Compare](https://facebook.github.io/react/docs/shallow-compare.html).

When you implement the `shouldComponentUpdate` method, it will be called before update the component, if you implement it
with shallow equality checks.

>`shallowCompare` performs a shallow equality check on the current `props` and `nextProps` objects as well 
as the current `state` and `nextState` objects.It does this by iterating on the keys of the objects being 
compared and returning true when the values of a key in each object are not strictly equal.  
>
>`shallowCompare` returns `true` if the shallow comparison for props or state fails and therefore 
the component should update.  
>
>`shallowCompare` returns `false` if the shallow comparison for props and 
state both pass and therefore the component does not need to update.

### shallowCompare will cause problems

We often need to pass a complex type property from parent component to child component,
let's see a example as following:

```js
function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}

class Person extends React.Component {
  function shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  render() {
  const { name, age, address } = this.props;
    return (
      <div>
        <span>name:</span>
        <span>{name}</span>
        <span> age:</span>
        <span>{age}</span>
        <span> country:</span>
        <span>{address.country}</span>
      </div>
    );
  }
}

class PersonList extends React.Component {
  function shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
  }
  render() {
  const { name, age, address } = this.props;
    return (
      <div>
        <span>name:</span>
        <span>{name}</span>
        <span> age:</span>
        <span>{age}</span>
        <span> country:</span>
        <span>{address.country}</span>
      </div>
    );
  }
}
```

In the case, Person is a complex type, sometimes this will cause a bug.
Why this will cause a bug, before I anwser this question, we need to know
`shallowEqual()` is how to work. Actually, `shallowEqual()` only compare
one depth of object with each other,  it don't perform a deep comparison between
two values.

- Bug: mutate value of deep property

```js
let p1 = {
  name: 'John Doe',
  age: '20',
  address: {
    country: 'US'
  }
}

let p2 = p1;

shallowEqual(p1, p2); // => true

p1.country = 'JAPAN';

shallowEqual(p1, p2); // => true
```

In this case, when we change the value of property `address`, the child component
will not be re-rendered. This will cause a bug, to mutate state is not recommended
by community.

- Bug: Don't mutate value, just return a new object

```js
let p1 = {
  name: 'John Doe',
  age: '20',
  address: {
    country: 'US'
  }
}

let p2 = {
  name: 'John Doe',
  age: '20',
  address: {
    country: 'US'
  }
}

shallowEqual(p1, p2); // => false
```

This will not cause a obviously bug. But this will cause a performance problem.
when p1 and p2 have absolutely same value, because they reference different object,
the child component must be re-render. This is quite performance hungray.

### Conclusion

So, use shallowCompare in simple case is no problem. But in a real, large project, it may be
so hurt. In next post, I will provide a solution to resolve these problem, may be you have known
what I will write about. Yes, that's Immutable.js of facebook.




