//ES6 允许在对象之中，直接写变量。这时，属性名为变量名, 属性值为变量的值。
//ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。

let pname = 'name',age = 28;

const persion = {
	[pname]:'shanbo',
	age,
	say(){
		console.log(`My name is ${this.name},I'm ${this.age} years old!`);
	}
};

persion.say();
persion.say.call({name:'yingtai'});
persion.say.call({name:'yingtai',age:26});

let ms = {};

function getItem (key) {
  return key in ms ? ms[key] : null;
}

function setItem (key, value) {
  ms[key] = value;
}

function clear () {
  ms = {};
}

module.exports = { getItem, setItem, clear };
// 等同于
module.exports = {
  getItem: getItem,
  setItem: setItem,
  clear: clear
};