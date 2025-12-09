
class Sun {
  static #instance = null

  constructor() {
    if (Sun.#instance) {
      return Sun.#instance
    }

    Sun.#instance = this
  }
}

// При первом вызове создастся новый объект:
const sun = new Sun()

// В дальнейшем instance будет возвращать
// ранее созданный объект:
const sun1 = new Sun()
const sun2 = new Sun()

console.log(sun === sun1)
console.log(sun === sun2)
