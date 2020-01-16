class Unicorn {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const charlie = new Unicorn("Charlie", 40)

// functional programming
const functionalAgeAndName = (unicorn) => (
  `${unicorn.name} is ${unicorn.age}`
)

console.log(functionalAgeAndName(charlie))

// bind
const bindableAgeAndName = function () {
  return `${this.name} is ${this.age}`
}

// this will be charlie inside the function call
console.log(bindableAgeAndName.bind(charlie)())

// object oriented
const hello = () => console.log("hello")
charlie.hello = hello
hello()
charlie.hello()

// THESE ARE NOT THE SAME!
// console.log(bindableAgeAndName())
// this will be charlie inside the function call
charlie.ageAndName = bindableAgeAndName
console.log(charlie.ageAndName())

const anotherAgeAndName = charlie.ageAndName
console.log(anotherAgeAndName.bind(charlie)())
