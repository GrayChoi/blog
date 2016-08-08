---
title: Material Design Implementation of Shadow
publishDate: 2016-08-08
tags: 
  - material design
  - shadow
---

How to Implement Shadow

---

### Elevation and shadows
#### Objects in material design process similar qualities to objects in the physical world.

In the physical world, objects can be stacked or affixed to one another, but cannot pass through
each other. Objects also cast shadows and reflect light.

##### Shadows

Shadows provide important visual cues about object's depth and directional movemoment. They are the only
visual cue indicating the amount of separation between surfaces. An object's elevation determines the appearance
of its shadow.

<style>
.z-depth-0 {
  box-shadow: none !important;
}
.z-depth-1 {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
}
.z-depth-1-half {
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
}
.z-depth-2 {
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
}
.z-depth-3 {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);
}
.z-depth-4 {
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3);
}
.z-depth-5 {
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);
}
.shadow-demo {
    background-color: #26a69a;
    width: 100px;
    height: 100px;
}
</style>

```jsx
import { Row, Col } from 'antd';
const Demo = props => {
    return (
        <div>
            <Row>
                <Col xs={24} sm={12} md={12} lg={8}><p className="z-depth-1 shadow-demo"></p></Col>
                <Col xs={24} sm={12} md={12} lg={8}><p className="z-depth-2 shadow-demo"></p></Col>
                <Col xs={24} sm={12} md={12} lg={8}><p className="z-depth-3 shadow-demo"></p></Col>
                <Col xs={24} sm={12} md={12} lg={8}><p className="z-depth-4 shadow-demo"></p></Col>
                <Col xs={24} sm={12} md={12} lg={8}><p className="z-depth-5 shadow-demo"></p></Col>
            </Row>
        </div>
    );
}
ReactDOM.render(<Demo />, mountNode);
```

You can implement a 0 ~ 5 depth shadows as following:

```css
.z-depth-0 {
  box-shadow: none !important;
}
.z-depth-1 {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
}
.z-depth-1-half {
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
}
.z-depth-2 {
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
}
.z-depth-3 {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);
}
.z-depth-4 {
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3);
}
.z-depth-5 {
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);
}
```
