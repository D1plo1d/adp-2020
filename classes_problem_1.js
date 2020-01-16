class Unicorn {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

 // create a function that increments the unicorn's age
 // by 1 using this and use it to make each unicorn older

 const expectedResults = [
  new Unicorn("Charlie", 41),
  new Unicorn("Dave", 108),
 ]

 const unicorns = [
  new Unicorn("Charlie", 40),
  new Unicorn("Dave", 107),
 ]

 if (
   unicorns[0].age === 41 &&
   unicorns[1].age === 108
) {
  console.log("SUCCESS")
} else {
  console.log('FAILURE :_( got: ', results, '\nexpected: ', expectedResults)
}