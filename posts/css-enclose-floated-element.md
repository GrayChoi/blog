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