// Implement getHTML to generate an HTML String for `this` unicorn 
class Unicorn {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  getHTML() {
    // TODO: use `this` to create a list item (<li/>) for the unicorn
  }
}

 const expectedResults = `<li>Charlie is 40</li>`

const charlie = new Unicorn("Charlie", 40)

const results = charlie.getHTML()

if (
  results === expectedResults
) {
  console.log("SUCCESS")
} else {
  console.log('FAILURE :_( got: ', unicorns, '\nexpected: ', expectedResults)
}