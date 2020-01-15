const fruit = [
  {type: 'apple', color: 'red'},
  {type: 'apple', color: 'green'},
  {type: 'apple', color: 'red'},
  {type: 'apple', color: 'red'},
  {type: 'banana', color: 'yellow'},
  {type: 'banana', color: 'yellow'},
  {type: 'apple', color: 'blue'},
]

const apple = fruit.find(/* YOUR CODE HERE */)

if (apple === fruit[0]) {
  console.log('SUCCESS :)')
} else {
  console.log('FAILURE :_(')
}