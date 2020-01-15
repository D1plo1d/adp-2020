const sets = [
  [1, 2],
  [3, 5],
  [42, 1337, 10, 10, 10],
  [32, 64, 128],
  [5],
]

// Using the functional programming functions we have covered return
// an array of each set of numbers multiplied together

expectedResults = [
  2,
  15,
  56154000,
  262144,
  5,
]

const results = /* TODO: Your Code Here */

if (JSON.stringify(results) === JSON.stringify(expectedResults)) {
  console.log('SUCCESS :)')
} else {
  console.log('FAILURE :_( got: ', results, '\nexpected: ', expectedResults)
}