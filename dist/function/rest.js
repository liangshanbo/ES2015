"use strict";

//#ES6 引入 rest 参数（形式为“...变量名”），用于获取函数的多余参数,rest 参数搭配的变量是一个数组。

function add() {
  var sum = 0;

  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var val = _step.value;

      sum += val;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return sum;
}

add(2, 5, 3); // 10

//#rest 参数代替arguments变量

// arguments变量的写法
function sortNumbers1() {
  return Array.prototype.slice.call(arguments).sort();
}

// rest参数的写法
var sortNumbers2 = function sortNumbers2() {
  for (var _len2 = arguments.length, numbers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }

  return numbers.sort();
};

//!rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。

//#扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。