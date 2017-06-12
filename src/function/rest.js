//#ES6 引入 rest 参数（形式为“...变量名”），用于获取函数的多余参数,rest 参数搭配的变量是一个数组。

function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
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
const sortNumbers2 = (...numbers) => numbers.sort();

//!rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。

//#扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
