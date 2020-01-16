
const Unicorn = function (name) {
  // // New implicitly creates a new `this` object
  // // of the type Unicorn
  // const this = {}

  console.log(this)
  this.name = name

  return this

  // // New implicitly returns `this`
  // return this
}

// Creates a new instance of a Unicorn
console.log(new Unicorn("Charlie"))

console.log(Unicorn.bind({})("Not A Unicorn"))
