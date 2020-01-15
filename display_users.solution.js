const users = {
  "rob": {
    hairColor: "purple(ish)",
    eyeColor: "brown",
    isHuman: true,
  },

  "nondescript human": {
    hairColor: "brown",
    eyeColor: "brown",
    isHuman: true,
  },

  "alien": {
    hairColor: "fire",
    eyeColor: "grey",
    isHuman: false,
  },

  "invador zim": {
    hairColor: "black",
    eyeColor: "red",
    isHuman: false,
  },
}

// console.log(Object.entries(users))

// // You will need to use *ONE* of: 
// // - Object.entries()
// // - Object.keys()
// // - Object.values()
// // Look them up on MDN before you start.

// // Using map and filter return the following strings excluding
// // any non-human alien invadors (ie. users where isHuman is true)
expectedResults = [
  "rob [hair: purple(ish) eyes: brown]",
  "nondescript human [hair: brown eyes: brown]",
]


// const usersArray = Object.entries(users)

// console.log(usersArray)


// ALT SOLUTION 1
// const results = userArray
//   .filter(([, user]) => user.isHuman)
//   .map((userInfo) => {
//     return (
//       userInfo[0]
//       + ' [hair: '
//       + userInfo[1].hairColor
//       + ' eyes: '
//       + userInfo[1].eyeColor
//       + ']'
//     )
//   })

// ALT SOLUTION 2
//   .map(([username, user]) => {
//     const { eyeColor, hairColor } = user
//     return username + ' [hair: ' + hairColor + ' eyes: ' + eyeColor + ']'
//   })

// ALT SOLUTION 3
//   .map(([username, { eyeColor, hairColor }]) => {
//     return username + ' [hair: ' + hairColor + ' eyes: ' + eyeColor + ']'
//   })

// ALT SOLUTION 4
//   .map(([username, { eyeColor, hairColor }]) => (
//     username + ' [hair: ' + hairColor + ' eyes: ' + eyeColor + ']'
//   ))


const results = Object.entries(users)
  .filter(([, user]) => user.isHuman)
  .map(([username, { eyeColor, hairColor }]) => (
    `${username} [hair: ${hairColor} eyes: ${eyeColor}]`
  ))

  // [
//   'rob',
//   { hairColor: 'purple(ish)', eyeColor: 'brown', isHuman: true }
// ][1].isHuman


if (JSON.stringify(results) === JSON.stringify(expectedResults)) {
  console.log('\n\nSUCCESS :)')
} else {
  console.log('\n\nFAILURE :_(\ngot:\n', results, '\n\nexpected:\n', expectedResults)
}