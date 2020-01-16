const input = 3

const expectedResults = 'aaa'

const recursiveAs = number => {
  console.log('recursion!', number)
  if (number === 0) {
    console.log('FINAL EMPTY STRING')
    return ''
  } else {
    const string = 'a' + recursiveAs(number - 1)
    console.log(string, number)
    return string
  }
}


const results = recursiveAs(input)

if (JSON.stringify(results) === JSON.stringify(expectedResults)) {
  console.log('SUCCESS :)')
} else {
  console.log('FAILURE :_( got: ', results, '\nexpected: ', expectedResults)
}