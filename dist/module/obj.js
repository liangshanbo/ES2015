'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function () {
	function Car() {
		_classCallCheck(this, Car);
	}

	_createClass(Car, [{
		key: 'conscrutor',
		value: function conscrutor(name) {
			if (new.target === undefined) {
				throw new Error('Car 必须实例化调用');
			} else {
				this.name = name;
			}
		}
	}, {
		key: 'run',
		value: function run() {
			console.log('I can fly!');
		}
	}]);

	return Car;
}();

exports.default = Car;