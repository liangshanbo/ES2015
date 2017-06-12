//padStart()用于头部补全，padEnd()用于尾部补全。
//第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。
//#如果省略第二个参数，默认使用空格补全长度。
//#如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。
//#如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。

console.log('a'.padStart(5,'bc')); //bcbca
console.log('a'.padStart(6));	//     a
console.log('abcde'.padStart(5,'bc')); //abcde
console.log('a'.padStart(6,'bc')); //bcbcba
