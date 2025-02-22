import { useState, useCallback, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, seCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    PasswordGenerator()
  }, [length, numAllowed, charAllowed, PasswordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <div className="w-full max-w-1/2 h-full min-h-full mx-auto shadow-md rounded-lg px-4 py-3 my-10 bg-gray-800 text-orange-500">
      <h1 className=' text-xl text-white font-semibold text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
        <input
          type="text"
          value={password}
          className="text-lg outline-none w-full py-2 px-3 bg-[#ffff]"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />

        {/* <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-lg font-semibold text-white px-3 py-0.5 shrink-0 cursor-pointer'>
          copy
        </button> */}

        <button onClick={copyPasswordToClipboard} class="relative outline-none bg-blue-700 text-[#ffff] text-lg font-semibold px-3 py-2 shrink-0 cursor-pointer after:h-full after:w-full after:outline-none after:bg-blue-700 active:scale-99 active:transition active:after:scale-x-125 active:after:scale-y-150 active:after:opacity-0 active:after:transition active:after:duration-500">
          copy
        </button>

      </div>

      <div className='flex text-lg gap-x-4'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length: {length}</label>
        </div>


        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
