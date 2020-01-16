const input = [
  'a',
  [
    'b',
    [
      'c',
      'd',
    ],
  ],
]

const expectedResults = 'abcd'

const recursivelyAppendText = strings => (
  strings.reduce((acc, textOrArray) => {
    if (typeof textOrArray === 'string') {
      return acc + textOrArray
    } else {
      return acc + recursivelyAppendText(textOrArray)
    }
  }, '')
)

const results = recursivelyAppendText(input)

if (JSON.stringify(results) === JSON.stringify(expectedResults)) {
  console.log('SUCCESS :)')
} else {
  console.log('FAILURE :_( got: ', results, '\nexpected: ', expectedResults)
}