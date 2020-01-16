class Unicorn {
  constructor(name) {
    // if (this.__proto__ !== Unicorn) {
    //   throw new Error(
    //     "TypeError: Class constructor Unicorn cannot be invoked without 'new'"
    //   )
    // }
    // const this = {} // <- with __proto__ set to Unicorn

    console.log(this)
    this.name = name

    // return this
  }
}

// Creates two new instances of Unicorns
const charlie = new Unicorn("Charlie")
const dave = new Unicorn("Dave")

console.log(charlie)
console.log(dave)
