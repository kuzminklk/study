const personPrototype = {
	greet() {
		console.log(`Hello ${this.name}`);
	}
}

function Person(name) {
	this.name = name;
}

Object.assign(Person.prototype, personPrototype);

const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!