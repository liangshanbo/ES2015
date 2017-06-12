'use strict';

//startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
//#第二个参数，表示开始搜索的位置。
//#第二个参数，如果是负数直接取0,如果是小数，会被取整。
//#第二个参数，如果是其他类型会转为整数或者是0。

console.log('Hello World'.startsWith('h')); //false
console.log('Hello World'.startsWith('H')); //true
console.log('Hello World'.startsWith('w', 6)); //false
console.log('Hello World'.startsWith('W', 6)); //true
console.log('Hello World'.startsWith('H', -2)); //true
console.log('Hello World'.startsWith('H', '0')); //true
console.log('Hello World'.startsWith('H', 'aa')); //true
console.log('Hello World'.startsWith('H', false)); //true
console.log('Hello World'.startsWith('H', 0.9)); //true