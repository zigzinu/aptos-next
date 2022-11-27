import { NextPage } from 'next'
import { useState } from 'react'
import Seo from '../components/Seo'

const Counter: NextPage = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <Seo title="Counter"></Seo>
      <h1>Hello {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  )
}

export default Counter