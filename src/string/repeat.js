//repeat方法返回一个新字符串，表示将原字符串重复n次。
//#参数如果是小数，会被取整。
//#如果repeat的参数是负数或者Infinity，会报错。如果参数是0到-1之间的小数，则等同于0，这是因为会先进行取整运算。0到-1之间的小数，取整以后等于-0，repeat视同为0。
//#如果repeat的参数是字符串，则会先转换成数字。


console.log('x'.repeat(3));//xxx
console.log('x'.repeat(3.1));//xxx
console.log('x'.repeat(3.9));//xxx
console.log('x'.repeat(0));//''
console.log('x'.repeat(0.9));//''
console.log('x'.repeat(-0.9));//''
console.log('x'.repeat(NaN));//''
console.log('x'.repeat('aa'));//''
console.log('x'.repeat('2'));//xx
console.log('x'.repeat(-1));//RangeError
