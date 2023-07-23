import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Count is {count}</h1>
    <div className='card'>
      <button onClick={() => {setCount(count + 1)}}>Add Count</button>
    </div>
    </>
  )
}

export default App
