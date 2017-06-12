'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//dedine class和module内部默认就是严格模式
//# class内方法之间不需要逗号，加了报错。

var Point = function () {
	function Point(x, y) {
		_classCallCheck(this, Point);

		this.x = x;
		this.y = y;
	} //,

	_createClass(Point, [{
		key: 'toString',
		value: function toString() {
			return '(' + this.x + ',' + this.y + ')';
		}
	}]);

	return Point;
}();

var p = new Point(12, 56);
console.log(p.toString()); //(12,56)

//# class的所有方法都定义在class的prototype属性上。

console.log(p.constructor === Point.prototype.constructor); //true

//# Object.assign方法可以很方便地一次向类添加多个方法。

Object.assign(Point.prototype, {
	say: function say() {
		console.log('Hello Class');
	}
});
p.say(); //Hello Class

//# class内部定义的方法都是不可枚举的。

var keys = Object.keys(Point.prototype);
console.log(keys); //['say']

//# class不存在变量提升（hoist），这一点与 ES5 完全不同。

new Foo(); // ReferenceError

var Foo = function Foo() {
	_classCallCheck(this, Foo);
};