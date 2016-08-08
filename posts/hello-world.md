---
title: Hello world!
publishDate: 2016-08-07
tags: 
  - test
---

The first article which is posted by GrayChoi!

---

Hello world!

```jsx
import { Modal, Button } from 'antd';
function hello() {
  const modal = Modal.success({
    title: 'Hello World',
    content: 'Welcome to my blog!',
    okText: 'OK'
  });
}
ReactDOM.render(<Button type="primary" onClick={hello} style={{ marginBottom: '20px'}}>Click!</Button>, mountNode);
```
