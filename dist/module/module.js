'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var man = exports.man = {
	name: 'shangbo',
	age: 28,
	say: function say() {
		console.log('My name is %s, I am %d years old', this.name, this.age);
	},
	sleep: function sleep() {
		console.log('I want to sleep,good night!');
	}
};