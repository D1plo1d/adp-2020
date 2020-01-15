const fruit = ['apples', 'bannanas', 'oranges']

const addFruit = (acc, val) => ({
  ...acc,
  [val]: true,
})

const trueFruit = fruit.reduce(addFruit, {})

const trueFruit = fruit.reduce((acc, val) => {
  return {
    ...acc,
    [val]: true,
  }
}, {})

console.log(trueFruit)

// const explicitCreateObject = () => {
//   return {
//     a: true,
//   }
// }

// console.log((1 + 2))

// const implicitCreateObject = () => ({
//   a: true,
// })

// // // WRONG
// // const explicitCreateObject = () => {
// //   a: true,
// // }

// // // ALSO WRONG
// // function explicitCreateObject() {
// //   a: true,
// // }

// const arr = [1,2]
// const secondArr = [...arr, 3] // [1, 2, 3]
// const thirdArr = [arr, 3] // [[1,2], 3]
// const thirdArr = [arr, 3].flat() // [1, 2, 3]
