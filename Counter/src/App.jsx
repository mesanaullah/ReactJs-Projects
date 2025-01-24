import { useState } from 'react'
import './App.css'
import Messege from './components/Messege'

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
      <Messege coder="Sanaullah" />
      <div className="">
        <h1 className='p-10 text-green-400'>{Count}</h1>
        <div className="btn">
          {/* <button className="bg-green-400 rounded-xl" onClick={Add} >Add</button> */}
          <button className="bg-green-400 rounded-xl" onClick={() => setCount(Count + 1)} >Add</button>
          <button className="bg-green-400 rounded-xl" onClick={Delete} >Delete</button>
        </div>
        <button className="bg-green-400 rounded-xl" onClick={Reset}>Reset</button>
      </div>
    </>
  )
}

export default App
