//Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
//Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。
//!如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
//Object.assign方法实行的是浅拷贝，而不是深拷贝。

let target = {};

const origin = {
	age:28,
	name:'shanbo',
	say() {
		console.log('hello world');
	}
};

Object.assign(target,origin);
console.log(origin);
console.log(target);
origin.name = 'yingtai';
console.log('----------------------------------------------------');
console.log(origin);
console.log(target);


//如果只有一个参数，Object.assign会直接返回该参数。
var obj = {a: 1};
console.log(Object.assign(obj) === obj); // true
//如果该参数不是对象，则会先转成对象，然后返回。

console.log(typeof Object.assign(2)); // "object"
//由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。

//Object.assign(undefined) // 报错
//Object.assign(null) // 报错