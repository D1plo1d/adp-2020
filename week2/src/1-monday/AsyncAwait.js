import React, { useState, useEffect } from 'react'

// fetch('https://cat-fact.herokuapp.com/facts/')
// .then((res) => res.json())
// .then(nextData => setData(nextData))
// .catch(e => setError(e))

const App = () => {
  // useEffect(() => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  // const fetchCatFacts = () => {
  //   return fetch('https://cat-fact.herokuapp.com/facts/')
  // }

  const fetchCatFacts = async () => {
    const res = await fetch(
      'https://cat-fact.herokuapp.com/facts/'
    )

    // const nextData = res.json()
    const nextData = await res.json()

    // => Error
    console.log(nextData[0].catName)

    setData(nextData)
  }

  useEffect(() => {
    fetchCatFacts()
  }, [])

  if (error) {
    return (
      <div>
        Oh no something went wrong: {error.message}
      </div>
    )
  }

  return(
    <h1>Hello, world!</h1>
  )
}

export default App