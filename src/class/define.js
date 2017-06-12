//dedine class和module内部默认就是严格模式
//# class内方法之间不需要逗号，加了报错。

class Point {
	constructor(x,y){
		this.x = x;
		this.y = y;
	}//,

	toString(){
		return `(${this.x},${this.y})`
	}
}

const p = new Point(12,56);
console.log(p.toString());  //(12,56)

//# class的所有方法都定义在class的prototype属性上。
 
console.log(p.constructor === Point.prototype.constructor); //true

//# Object.assign方法可以很方便地一次向类添加多个方法。

Object.assign(Point.prototype,{
	say(){
		console.log('Hello Class');
	}
})
p.say(); //Hello Class

//# class内部定义的方法都是不可枚举的。

const keys = Object.keys(Point.prototype);
console.log(keys);  //['say']

//# class不存在变量提升（hoist），这一点与 ES5 完全不同。

new Foo(); // ReferenceError
class Foo {}

