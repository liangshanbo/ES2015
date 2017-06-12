'use strict';

//Object.is用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
//+0不等于-0，二是NaN等于自身。

console.log(Object.is('a', 'a')); //true
console.log(Object.is({}, {})); //false
console.log(Object.is(NaN, NaN)); //true

Object.defineProperty(Object, 'iss', {
  value: function value(x, y) {
    if (x === y) {
      // 针对+0 不等于 -0的情况
      return x !== 0 || 1 / x === 1 / y;
    }
    // 针对NaN的情况
    return x !== x && y !== y;
  },
  configurable: true,
  enumerable: false,
  writable: true
});

console.log(Object.is('a', 'a')); //true
console.log(Object.is({}, {})); //false
console.log(Object.is(NaN, NaN)); //true