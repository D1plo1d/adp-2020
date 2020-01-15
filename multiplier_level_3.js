const sets = [
  [1, 2],
  [4, 5],
  [42, 1337, 10, 10, 10],
  [32, 64, 128],
  [5],
]

// Using the functional programming functions we have covered return
// take the first number of each set added to the remaining
// numbers of that set multiplied together.
// Then return the first even result.

expectedResults = 1337042 // 42 + (1337 * 10 * 10 * 10)

const results = /* TODO: Your Code Here */

if (JSON.stringify(results) === JSON.stringify(expectedResults)) {
  console.log('SUCCESS :)')
} else {
  console.log('FAILURE :_( got: ', results, '\nexpected: ', expectedResults)
}