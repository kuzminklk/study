


// ————————— Basics —————————

let userName: string 

userName = "Daniel"

let h1 = document.querySelector("h1")
if (h1) {
	h1.innerText = userName
}



// ————————— Basic Types —————————

let isLoading: boolean
let pi: 3.14


function sum(a: number, b: number) {
	return a + b
}

const X = 10
const Y = 2123

console.log("From «Basic Types» topic. Sum: ", sum(X,Y))



// ————————— Arrays & Objects —————————


// ——— Array ———

let employees: string[]

employees = []

employees.push("Joe")
employees.push("Elen")
employees.push("Caira")

console.log("From «Arrays & Objects» topic. Employees: ", employees)


// ——— Tuple ———

let user: [string, number, boolean] // Type annotation

user = ["Alex", 1976, true]


// ——— Objects ———

/* type Guitarist = {
	name: string,
	active?: boolean,
	albums: string[]
} */

interface Guitarist {
	name: string,
	active?: boolean,
	albums: string[]
}

let guitarist: Guitarist = {
	name: "Eddie",
	active: false,
	albums: ["1984", "5050"]
}

function greetGuitarist(guitarist: Guitarist) {
	console.log("From «Arrays & Objects» topic. Greet! ", guitarist.name)
}

greetGuitarist(guitarist)


// ——— Enums ———

enum Grade {
	U,
	D,
	C,
	B,
	A
}



// ————————— Functions —————————


// ——— Type aliases ———

type stringOrNumber = string | number

type stringOrNumberArray = stringOrNumber[]

type Robot = {
	name: stringOrNumberArray
	purposes: string[]
}


// ——— Literal types ———

let futureChildName: "Sam" | "Daniel" | "Maxim"


// ——— Functions ———

function add (a: number, b: number): number {
	return a + b
}

type mathFunction = (a: number, b: number) => number

/* interface mathFunction {
	(a: number, b: number): number
} */

let multiply: mathFunction = function (a, b) {
	return a * b
}

// ——— Optional parameters ———

function addAll(a: number, b: number, c?: number): number {
	if (typeof c !== "undefined") {
		return a + b + c
	} else {
		return a + b
	}
}

// ——— Default parameters ———

function sumAll(a: number, b: number, c: number = 10): number {
	return a + b + c
}

// ——— Rest parameters ———

function total(...nums: number[]): number {
	return nums.reduce((previous, current) => previous + current)
}

// ——— «Never» type ———

// Deprecated ?

function throwError(msg: string): never {
	throw new Error(msg)
}

function infinite() {
	while(true) {
		console.log("Hm")
	}
}



// ————————— Assertions —————————

// ——— Conver to more or less specific ———

type Name = string
type Age = number
type Male = "Man" | "Female"

type Processing = string | number

let username: Name = "Joe"
let processing = username as Processing

let male = <Male>"Man"


// ——— DOM ———
let img = document.querySelector("img")

function logSource(img: HTMLImageElement) {
	console.log("From «Assertions» topic. Image source: ", img.src)
}

if (img) {
	logSource(img)
}

let img2 = document.querySelector("img")! // Not null assertion



// ————————— Classes —————————

type Language = "English" | "Russian" | "Spanish"

type Framework = "React" | "Angular" | "Vue"

class Developer {
	constructor(
		public readonly name: string,
		private age: number,
		public language: Language = "English"
	) { }

	public getAge(): number {
		return this.age
	}
}

class FrontEndDeveloper extends Developer {
	constructor(
		name: string,
		age: number,
		public framework: Framework
	) {
		super(name, age)
	}
}

let developer: Developer = new Developer("Alex", 33)

let frontEndDeveloper: FrontEndDeveloper = new FrontEndDeveloper("Sam", 44, "React")


// ——— Interface to a class ———

type Instrument = "Piano" | "Violin" | "Guitar" | "Voice"

interface Musician {
	name: string,
	instrument: Instrument,
	play(): void
}

class Pianist implements Musician {
	name: string
	instrument: Instrument = "Piano"

	constructor(name: string) {
		this.name = name
	}

	play(): void {
		console.log("From «Classes» topic. Playing: Do Re Mi Fa")
	}
}

let pianis: Pianist = new Pianist("Alex")
pianis.play()


// ——— Static properties ———

class Person {
	static count: number = 0

	static getCount(): number {
		return Person.count
	}

	public id: number

	constructor(
		public name: string
	) { 
		this.id = ++Person.count
	}
}

let mailUser: Person = new Person("Joe")
console.log("From «Classes» topic. Counter: ", Person.getCount())


// ——— Getters and setters ———

class Website {
	constructor(private statusState: boolean = false) { }

	public get status(): string {
		return `Status is ${this.statusState}`
	}

	public set status(value: boolean) {
		this.statusState = value
	}
}

let google:Website = new Website()
console.log("From «Classes» topic. Status: ", google.status)



// ————————— Index Signatures —————————

interface Transactions {
	[index: string]: number
}

const transactions: Transactions = {
	job: 100,
	book: 5,
	electricity: 10,
	water: 10,
	clothes: 10
}

Object.keys(transactions).map( key => { 
	console.log("From «Index Signatures» topic. Value: ", transactions[key])
} )

type Streams = "salary" | "bonus" | "sidehustle"

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
	"salary": 100,
	"bonus": 20,
	"sidehustle": 5
}

for (let revenue in monthlyIncomes) {
	console.log("From «Index Signatures» topic. Revenue: ", monthlyIncomes[revenue as keyof Incomes])
}



// ————————— Generics —————————

function isObject<Type>(arg: Type): boolean {
	return (typeof arg === "object" && !Array.isArray(arg) && arg !== null)
}

interface hasId {
	id: number
}

function getProperties<Type extends hasId, Key extends keyof Type>(objects: Type[], key: Key): Type[Key][] {
	return objects.map(property => property[key])
}

const users = [
	{
		"id": 1,
		"name": "Sara"
	},
	{
		"id": 2,
		"name": "Dave"
	}
]

console.log("From «Generics» topic. Properties:" ,getProperties(users, "name"))


// ——— In classes ———

class State<Type> {
	private savedState: Type

	constructor(arg: Type) {
		this.savedState = arg
	}

	get state(): Type {
		return this.savedState
	}

	set state(arg: Type) {
		this.savedState = arg
	}
}

let weather = new State<string[]>(["sunny","wet"])



// ————————— Utility Types —————————

// ——— Partial ———

interface User {
	id: number
	name: string
	age: number
	verified?: boolean
}

function updateUser(current: User, update: Partial<User>): User {
	return {...current, ...update}
}

const websiteUser: User = {
	id: 0,
	name: "Don",
	age: 27
}

updateUser(websiteUser, { age: 30 })


// ——— Required ———

function recordToDatabase(user: Required<User>) {
	// …
}


// ——— Readonly ———

const verifiedUser: Readonly<User> = updateUser(websiteUser, { verified: true })

// Restricted
// verifiedUser.verified = false


// ——— Record ———

const hexColorMap: Record<string, string> = {
	"red": "FF0000"
}


// ——— Pick and omit ———

let userAge: Pick<User, "age"> = {
	age: websiteUser.age
}

let hiddenUser: Omit<User, "id"> = {
	name: "Sara",
	age: 17
}


// ——— Exclude and extract ———

type Grades = "A" | "B" | "C" | "D" | "U"

type adjustedGrades = Exclude<Grades, "U">

type highGrades = 	Extract<Grades, "A" | "B">


// ——— Nonnullable ———

type Cars = "BMW" | "Audi" | null

type existedCars = NonNullable<Cars>


// ——— Return type ———

function writeBook(text:string[], author: string, price: number) {
	return [text, author, price]
}

type ReturnFromWiteBook = ReturnType<typeof writeBook>


// ——— Parameters ———

type ParametersFromWiteBook = Parameters<typeof writeBook>


// ——— Awaited ———

async function fetchUsers(): Promise<User[]> {
	const data = await fetch("https://jsonplaceholder.typicode.com/users")
	.then(responce => responce.json())
	.catch(error => console.error(reportError))

	return data
}

type fetchUserReturns = Awaited<ReturnType<typeof fetchUsers>>