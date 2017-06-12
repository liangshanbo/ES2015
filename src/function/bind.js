//函数绑定运算符是并排的两个冒号（::），双冒号左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面。

const boy = {
	name:'shanbo'
};
const show = () => console.log(this.name);

// boy::show();