import React, { useState } from 'react'

const App = () => {
  // useEffect(() => {
  const [data, setData] = useState(null)
  const [data2, setData2] = useState(null)

  if (!data) {
    const p1 = fetch('https://cat-fact.herokuapp.com/facts/')
      .then((res) => res.json())
      .then(({id}) => fetch(`https://cat-fact.herokuapp.com/facts/${id}`))

    const p2 = fetch('https://cat-fact.herokuapp.com/facts/')
      .then((res) => res.json())

    Promise.all([p1, p2])
      .then(([data, data2]) => {
        setData(data)
        setData2(data2)
      })
      .catch((e) => console.log('SOMETHING WENT WRONG', e))
  }

  return(
    <h1>Hello, world!</h1>
  )
}

export default App