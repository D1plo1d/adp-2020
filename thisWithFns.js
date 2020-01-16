this.a = 10

// console.log(global)
console.log(this) // => file closure (in node)

const fileClosureSelf = this

const addToA = function (val) {
  console.log(
    this === global,
    this === fileClosureSelf,
  )
  return this.a = this.a + val
}

// console.log(addToA(1))
// console.log(addToA.bind(this)(1))

const unicorn = { a: 3 }
console.log(addToA.bind(unicorn)(30))

console.log({ closureThis: this, unicorn })
