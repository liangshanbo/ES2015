"use strict";

//如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
[1, 2, 3].map(function (item) {
  return item * 2;
});
var add = function add(a, b) {
  return a + b;
};
console.log(add(1, 2));

//如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
var sum = function sum(num1, num2) {
  return num1 + num2;
};
//!
/*
（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
*/