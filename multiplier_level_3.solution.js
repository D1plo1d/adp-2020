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

const results = sets
  .map(set => {
    console.log('set', set)

    const [firstNumber, ...restOfNumbers] = set

    let product = 0

    if (restOfNumbers.length > 0) {
      product = restOfNumbers.reduce((acc, val) => acc * val)
    }

    console.log({ firstNumber, restOfNumbers, product })

    return product + firstNumber
  })
  .find(sum => sum % 2 === 0)

if (JSON.stringify(results) === JSON.stringify(expectedResults)) {
  console.log('SUCCESS :)')
} else {
  console.log('FAILURE :_( got: ', results, '\nexpected: ', expectedResults)
}