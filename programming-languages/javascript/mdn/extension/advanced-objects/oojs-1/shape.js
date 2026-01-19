
class Shape {
	name;
	sides;
	sideLength;

	constructor(name, sides, sideLength) {
		this.name = name;
		this.sides = sides;
		this.sideLength = sideLength;
	}

	calcPerimeter() {
		return this.sides * this.sideLength;
	}
}


class Square extends Shape {

	constructor(sideLength) {
		super("square", 4, sideLength);
	}

	calcArea() {
		return this.sideLength ** 2;
	}
}


let square = new Square(18);
console.log(square.calcArea());