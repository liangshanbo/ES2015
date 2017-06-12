//includes()：返回布尔值，表示是否找到了参数字符串。
//#第二个参数，表示开始搜索的位置。
//#第二个参数，如果是负数直接取0,如果是小数，会被取整。
//#第二个参数，如果是其他类型会转为整数或者是0。


let str = 'abcdabcd';

console.log(str.includes('e'));   //false
console.log(str.includes('b'));   //true
console.log(str.includes('b',5)); //true
console.log(str.includes('b',5)); //true
console.log(str.includes('b',-7));//true
console.log(str.includes('b','5'));//true
console.log(str.includes('b',5.9));//true