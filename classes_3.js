class Unicorn {
  constructor(name, age, fn) {
    this.name = name
    this.age = age
    this.ageAndName = fn
  }

  // ageAndName() {
  //   return `${this.name} is ${this.age}`
  // }
}

const ageAndName = () => {
  return `${this.name} is ${this.age}`
}
// Unicorn.prototype.ageAndName = ageAndName

const charlie = new Unicorn("Charlie", 40, ageAndName)


console.log(Unicorn.ageAndName) // undefined
console.log(Unicorn.prototype.ageAndName); // Function
console.log(charlie.ageAndName) // Function
console.log(charlie.ageAndName()) // Charlie is 40

