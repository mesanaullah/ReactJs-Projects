import { useState } from 'react'
import './App.css'

function App() {

  let [Count, setCount] = useState(0)

  // let Count = 10;

  const Add = () => {
    return (
      Count += 1,
      setCount(Count)
      // console.log({ Count })
    )
  }

  const Delete = () => {
    if (Count > 0) {
      Count -= 1,
        setCount(Count);
    }
  }

  const Reset = () => {
    return (
      setCount(0)
    )
  }

  return (
    <>
      <h1>{Count}</h1>
      <div className="btn">
        <button onClick={Add} >Add</button>
        <button onClick={Delete} >Delete</button>
      </div>
      <button onClick={Reset} >Reset</button>
    </>
  )
}

export default App
