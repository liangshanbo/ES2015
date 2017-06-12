'use strict';

var _persion;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//ES6 允许在对象之中，直接写变量。这时，属性名为变量名, 属性值为变量的值。
//ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。

var pname = 'name',
    age = 28;

var persion = (_persion = {}, _defineProperty(_persion, pname, 'shanbo'), _defineProperty(_persion, 'age', age), _defineProperty(_persion, 'say', function say() {
  console.log('My name is ' + this.name + ',I\'m ' + this.age + ' years old!');
}), _persion);

persion.say();
persion.say.call({ name: 'yingtai' });
persion.say.call({ name: 'yingtai', age: 26 });

var ms = {};

function getItem(key) {
  return key in ms ? ms[key] : null;
}

function setItem(key, value) {
  ms[key] = value;
}

function clear() {
  ms = {};
}

module.exports = { getItem: getItem, setItem: setItem, clear: clear };
// 等同于
module.exports = {
  getItem: getItem,
  setItem: setItem,
  clear: clear
};