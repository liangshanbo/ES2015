'use strict';

//Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。
//常见的类似数组的对象是DOM操作返回的NodeList集合，以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组。
//只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组。

var arrayLike = {
	'0': 'a',
	'1': 'b',
	'2': 'c',
	'3': 'd',
	'length': 4
};

var arrayLike2 = {
	'0': 'a',
	'1': 'b',
	'length': 4
};
var arrayLike3 = {
	'a': 'a',
	'b': 'b',
	'length': 4
};

console.log(Array.from(arrayLike)); //[ 'a', 'b', 'c', 'd' ]
console.log(Array.from(arrayLike2)); //[ 'a', 'b', undefined, undefined ]
console.log(Array.from(arrayLike3)); //[ undefined, undefined, undefined, undefined ]
Array.from(document.querySelectorAll('p')).map(function (p) {
	return console.log(p.tagName);
});
//Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。

Array.from(arrayLike, function (x) {
	return x + 'x';
}); //["ax", "bx", "cx", "dx"]