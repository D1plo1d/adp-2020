const fruit = [
  {type: 'apple', color: 'red'},
  {type: 'apple', color: 'green'},
  {type: 'apple', color: 'red'},
  {type: 'apple', color: 'red'},
  {type: 'banana', color: 'yellow'},
  {type: 'banana', color: 'yellow'},
  {type: 'apple', color: 'blue'},
]

// Question

// const apple_counts = fruit
//   .filter(/* YOUR CODE HERE */)
//   .reduce(/* YOUR CODE HERE */, {})


const expected_apple_counts = {
  red_apple: 3,
  green_apple: 1,
  blue_apple: 1,
}





















// Solution 1: Static Keys and If Else
const initialCounts = {
  red_apple: 0,
  green_apple: 0,
  blue_apple: 0,
}

const apple_counts = fruit
  .filter(({ type }) => type === 'apple')
  .reduce(acc, ({ type, color }) => {
    let key = null
    if (color === 'red') {
      key = 'red_apple'
    } else if (color === 'green') {
      key = 'green_apple'
    } else if (color === 'blue') {
      key = 'blue apple'
    } else  {
      throw new Error(`Invalid color: ${color}`)
    }

    return {
      ...acc,
      [key]: acc[key] + 1,
    }
  }, {})















// Solution 2: Static Keys
const initialCounts = {
  red_apple: 0,
  green_apple: 0,
  blue_apple: 0,
}

const apple_counts = fruit
  .filter(({ type }) => type === 'apple')
  .reduce(acc, ({ type, color }) => {
    const key = `${type}_${color}`

    return {
      ...acc,
      [key]: acc[key] + 1,
    }
  }, {})















// Solution 3: Dynamic Keys
const apple_counts = fruit
  .filter(({ type }) => type === 'apple')
  .reduce(acc, ({ type, color }) => {
    const key = `${type}_${color}`

    return {
      ...acc,
      [key]: (acc[key] || 0) + 1,
    }
  }, {})












// const apples = fruit.filter(/* YOUR CODE HERE */)
// const apple_count = apples.reduce(/* YOUR CODE HERE */)

if (apple_counts === expected_apple_counts) {
  console.log('SUCCESS :)')
} else {
  console.log('FAILURE :_(', apple_counts)
}