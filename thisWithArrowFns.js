// Does not get added to this
var a = 4

this.a = 10

// console.log(global)
console.log(this) // => the file closure this (in node)

const addToA = (val) => this.a += val

addToA.bind(this)
console.log(addToA(1))
console.log(this)
console.log(addToA(3))
console.log(this)
