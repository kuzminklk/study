// ————————— Basics —————————
let userName;
userName = "Daniel";
let h1 = document.querySelector("h1");
if (h1) {
    h1.innerText = userName;
}
// ————————— Basic Types —————————
let isLoading;
let pi;
function sum(a, b) {
    return a + b;
}
const X = 10;
const Y = 2123;
console.log("From «Basic Types» topic. Sum: ", sum(X, Y));
// ————————— Arrays & Objects —————————
// ——— Array ———
let employees;
employees = [];
employees.push("Joe");
employees.push("Elen");
employees.push("Caira");
console.log("From «Arrays & Objects» topic. Employees: ", employees);
// ——— Tuple ———
let user; // Type annotation
user = ["Alex", 1976, true];
let guitarist = {
    name: "Eddie",
    active: false,
    albums: ["1984", "5050"]
};
function greetGuitarist(guitarist) {
    console.log("From «Arrays & Objects» topic. Greet! ", guitarist.name);
}
greetGuitarist(guitarist);
// ——— Enums ———
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
// ——— Literal types ———
let futureChildName;
// ——— Functions ———
function add(a, b) {
    return a + b;
}
/* interface mathFunction {
    (a: number, b: number): number
} */
let multiply = function (a, b) {
    return a * b;
};
// ——— Optional parameters ———
function addAll(a, b, c) {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    else {
        return a + b;
    }
}
// ——— Default parameters ———
function sumAll(a, b, c = 10) {
    return a + b + c;
}
// ——— Rest parameters ———
function total(...nums) {
    return nums.reduce((previous, current) => previous + current);
}
// ——— «Never» type ———
// Deprecated ?
function throwError(msg) {
    throw new Error(msg);
}
function infinite() {
    while (true) {
        console.log("Hm");
    }
}
let username = "Joe";
let processing = username;
let male = "Man";
// ——— DOM ———
let img = document.querySelector("img");
function logSource(img) {
    console.log("From «Assertions» topic. Image source: ", img.src);
}
if (img) {
    logSource(img);
}
let img2 = document.querySelector("img"); // Not null assertion
class Developer {
    name;
    age;
    language;
    constructor(name, age, language = "English") {
        this.name = name;
        this.age = age;
        this.language = language;
    }
    getAge() {
        return this.age;
    }
}
class FrontEndDeveloper extends Developer {
    framework;
    constructor(name, age, framework) {
        super(name, age);
        this.framework = framework;
    }
}
let developer = new Developer("Alex", 33);
let frontEndDeveloper = new FrontEndDeveloper("Sam", 44, "React");
class Guitarist {
    name;
    instrument = "Guitar";
    constructor(name) {
        this.name = name;
    }
    play() {
        console.log("From «Classes» topic. Playing: Do Re Mi Fa");
    }
}
let loudGuitarist = new Guitarist("Alex");
loudGuitarist.play();
// ——— Static properties ———
class Person {
    name;
    static count = 0;
    static getCount() {
        return Person.count;
    }
    id;
    constructor(name) {
        this.name = name;
        this.id = ++Person.count;
    }
}
let mailUser = new Person("Joe");
console.log("From «Classes» topic. Counter: ", Person.getCount());
// ——— Getters and setters ———
class Website {
    statusState;
    constructor(statusState = false) {
        this.statusState = statusState;
    }
    get status() {
        return `Status is ${this.statusState}`;
    }
    set status(value) {
        this.statusState = value;
    }
}
let google = new Website();
console.log("From «Classes» topic. Status: ", google.status);
export {};
//# sourceMappingURL=main.js.map