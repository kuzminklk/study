
class Person {
	name;

	constructor(name) {
		this.name = name;	
	}

	introduce() {
		console.log(`Hi! I'm ${this.name}`);
	}
}


class Professor extends Person {
	teaches;

	constructor(name, teaches) {
		super(name);
		this.teaches = teaches;
	}

	introduce() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
    );
  }

	grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}


class Student extends Person {
	#year;

	constructor(name, year) {
		super(name);
		this.#year = year;
	}

	introduce() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}


const summers = new Student("Summers", 2);

summers.introduce();
summers.canStudyArchery();