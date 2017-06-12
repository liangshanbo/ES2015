'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Class之间通过extends实现继承,super指代父类的实例（this）
//# 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。

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

var cPonit = function (_Point) {
	_inherits(cPonit, _Point);

	function cPonit(x, y, color) {
		_classCallCheck(this, cPonit);

		// 调用父类的constructor(x, y)
		var _this = _possibleConstructorReturn(this, (cPonit.__proto__ || Object.getPrototypeOf(cPonit)).call(this, x, y));

		_this.color = color;
		return _this;
	}

	return cPonit;
}(Point);

var cp = new cPonit(110, 120, 'red');
console.log(cp.color); //red
console.log(cp.toString()); //(110,120)

//# 在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，是基于对父类实例加工，只有super方法才能返回父类实例。

var ColorPoint = function (_Point2) {
	_inherits(ColorPoint, _Point2);

	function ColorPoint(x, y, color) {
		_classCallCheck(this, ColorPoint);

		var _this2 = _possibleConstructorReturn(this, (ColorPoint.__proto__ || Object.getPrototypeOf(ColorPoint)).call(this, x, y));
		// this.color = color; // ReferenceError


		_this2.color = color; // 正确
		return _this2;
	}

	return ColorPoint;
}(Point);

//# Object.getPrototypeOf方法可以用来从子类上获取父类。

console.log(Object.getPrototypeOf(ColorPoint) === Point // true
);