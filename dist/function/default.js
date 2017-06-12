'use strict';

//
//#参数变量是默认声明的，所以不能用let或const再次声明。
//#如果参数默认值是变量，那么参数就不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。
function hello(h) {
  var w = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'world';

  console.log(h, w);
}

hello('Hello'); //Hello world
hello('Hello', ''); //'Hello  '
hello('Hello', 'China'); //Hello China

var x = 99;
function foo() {
  var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x + 1;

  console.log(p);
}
foo(); // 100
x = 100;
foo(); // 101