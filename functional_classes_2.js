class Unicorn {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  getHTML() {
    // TODO: copy your getHTML function from functional_classes_1.js
  }
}

// Problem: use functional programming (eg. map, filter, find, reduce)
// and your getHTML function to generate an HTML list of the unicorns

 const expectedResults = `
  <ul>
    <li>Charlie is 40</li>
    <li>Dave is 107</li>
  </ul>
`

const unicorns = [
  new Unicorn("Charlie", 40),
  new Unicorn("Dave", 107),
]

const results = '' // TODO!


if (
  results === expectedResults
) {
  console.log("SUCCESS")
} else {
  console.log('FAILURE :_( got: ', unicorns, '\nexpected: ', expectedResults)
}