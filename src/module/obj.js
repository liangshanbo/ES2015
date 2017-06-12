class Car {
	conscrutor(name){
		if(new.target === undefined) {
			throw new Error('Car 必须实例化调用');
		}else{
			this.name = name;
		}
	}

	run(){
		console.log('I can fly!');
	}
}

export default Car;