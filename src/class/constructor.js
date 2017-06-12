//constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
//# constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。

class Point {
	constructor(x,y){
		return Object.create(null);
	}
}

const p = new Point(1,2);
console.log(p instanceof Point);  //false

//# 类必须使用new调用，否则会报错。

//Point(); //TypeError: Class constructor Point cannot be invoked without 'new'

//# 与 ES5 一样，类的所有实例共享一个原型对象。

var p1 = new Point(2,3);
var p2 = new Point(3,2);

console.log(p1.__proto__ === p2.__proto__);  //true
