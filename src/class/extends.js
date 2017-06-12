//Class之间通过extends实现继承,super指代父类的实例（this）
//# 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。

class Point {
	constructor(x,y){
		this.x = x;
		this.y = y;
	}//,

	toString(){
		return `(${this.x},${this.y})`
	}
}


class cPonit extends Point{
	 constructor(x, y, color) {
	    super(x, y); // 调用父类的constructor(x, y)
	    this.color = color;
	  }
}

const cp = new cPonit(110,120,'red');
console.log(cp.color); //red
console.log(cp.toString()); //(110,120)

//# 在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，是基于对父类实例加工，只有super方法才能返回父类实例。

class ColorPoint extends Point {
  constructor(x, y, color) {
    // this.color = color; // ReferenceError
    super(x, y);
    this.color = color; // 正确
  }
}

//# Object.getPrototypeOf方法可以用来从子类上获取父类。

console.log(Object.getPrototypeOf(ColorPoint) === Point)  // true