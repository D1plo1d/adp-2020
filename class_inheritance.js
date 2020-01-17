class Plant {
  constructor(name, height) {
    this.name = name
    this.height = height
    this.growthRate = 1
  }

  description() {
    return `A generic plant named ${this.name}`
  }

  heightAndDescription() {
    return `${this.description()} is ${this.height}m tall`
  }

  grow() {
    this.height += this.growthRate
  }
}

class Tree extends Plant {
  constructor(name, height, barkColor) {
    super(name, height)
    this.growthRate = 10
    this.barkColor = barkColor
  }

  description() {
    return `A tree named ${this.name}`
  }
}

const alice = new Plant("Alice", 100)
const bob = new Plant("Bob", 10)
const carol = new Tree("Carol", 32, "Brown")

bob.grow()
carol.grow()

console.log(alice.heightAndDescription())
console.log(bob.heightAndDescription())
console.log(carol.heightAndDescription())
