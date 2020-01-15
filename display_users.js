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

// You will need to use *ONE* of: 
// - Object.entries()
// - Object.keys()
// - Object.values()
// Look them up on MDN before you start.

// Using map and filter return the following strings excluding
// any non-human alien invadors (ie. users where isHuman is true)
expectedResults = [
  "rob [hair: purple(ish) eyes: brown]",
  "nondescript human [hair: brown eyes: brown]",
]


const usersArray = // TODO: convert the users into an array somehow

const results = usersArray
  .filter(user => /* TODO: your code here */)
  .map(user => /* TODO: your code here */)


if (JSON.stringify(results) === JSON.stringify(expectedResults)) {
  console.log('SUCCESS :)')
} else {
  console.log('FAILURE :_( got: ', results, '\nexpected: ', expectedResults)
}