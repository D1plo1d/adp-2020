import Cat from './Cat'
import Dog from './Dog'

// Create Dog and Cat subclasses of Animal and implement
// createNoise for each of them.

const results = [
  new Dog('Charlie'),
  new Cat('Cat'),
].map(animal => animal.makeNoise())

 const expectedResults = [
  "Charlie barks",
  "Cat meows",
 ]

 if (JSON.stringify(results) === JSON.stringify(expectedResults)) {
  console.log("SUCCESS")
} else {
  console.log('FAILURE :_( got: ', results, '\nexpected: ', expectedResults)
}