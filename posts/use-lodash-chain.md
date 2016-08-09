---
title: Chaining In LoDash
publishDate: 2016-08-09
tags: 
  - JavaScript
  - functional programming
  - LoDash
  - chain
---

Implementation of some usage with chaining in LoDash.

---

### What is Chaining

Function Chaining is a common pattern in functional programming. You can perform
several actions continuously, and don't need to define a variable to save intermediate results
of functions. This will reduce errors and improve the legibility of you code.


### Using `_.chain` of lodash to implement chaining function pattern

Let's see some examples of `_.chain` in lodash, you may understand why we need to use it as possible as
we can.

```js
import _ from 'lodash';

class Customer {
  constructor(name, company, title) {
    this.name = name;
    this.company = company;
    this.title = title;
  }
}

class Company {
  constructor(country, state) {
    this.country = country;
    this.state = state;
  }
}

const c1 = new Customer(
  'John Doe', 
  new Company('US', 'San Francisco'),
  'PG');
const c2 = new Customer(
  'okagawa', 
  new Company('JP', 'Tokyo'),
  'SE');
const c3 = new Customer(
  'Jane Doe', 
  new Company('US', 'Newyork'),
  'PG');
const c4 = new Customer(
  'Mike Doe', 
  new Company('US', 'Newyork'),
  'SE');

const jpSe = _
  .chain([c1, c2, c3])
  .filter(s => s.title === 'SE' && s.company.country === 'JP')
  .map(s => s.name)
  .startCase()
  .value(); // -> 'Okagawa'
```

Amzing, when using lodash, our code seem so easy and comprehensible. We use `_.chain` to wrap
an array of customers, and use functions that can be used with `_.chain` to transfrom the data
and get what we want. In this case, we filter the array, and just return the customers that
title is Senoir Engineer and country is Japan, then the intermediate result will be passed to
next chaining function `map`, this function will return a new array of customers' name, finally
we use `startCase` to capitalize the first character of customers' name and return the array.

As you see above, it's just so easy. You can just use `_.chain` in you project.


