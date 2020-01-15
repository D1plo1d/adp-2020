const sets = [
  [1, 2],
  [3, [5, 2]],
  [42, 1337],
  [[4, [2, [2, 2]]], 64],
]

// review recursion: https://www.sitepoint.com/recursion-functional-javascript/

// Using recursion and the functional programming functions we have covered return
// an array of each set of numbers multiplied together - recursing into any nested
// arrays in the set.

expectedResults = [
  2,
  30,
  56154,
  2048,
]

const results = /* TODO: Your Code Here */

if (JSON.stringify(results) === JSON.stringify(expectedResults)) {
  console.log('SUCCESS :)')
} else {
  console.log('FAILURE :_( got: ', results, '\nexpected: ', expectedResults)
}