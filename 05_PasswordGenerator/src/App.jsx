import { useState,useCallback,useEffect,useRef } from 'react'

// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const passReference = useRef(null)

  let passwordGenerator = useCallback(
    () => {
      let pass= ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtuvwxyz"
      if(numAllowed) str+= "0123456789"
      if(charAllowed) str+= "@$%#&~+={}`"
      for (let i = 1; i  <=length; i++) {
        let char = Math.floor(Math.random() * str.length+1)
        pass += str.charAt(char)
      }
      setPassword(pass)
    },
    [length,numAllowed,charAllowed,setPassword],
  )

  useEffect(() => {
    passwordGenerator()
  }, [length,numAllowed,charAllowed,passwordGenerator])
  
  

  const copyToClipBoard =  useCallback(() => {
    // console.log(passReference.current)


    passReference.current?.select()
    // passReference.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(Password)
    // window.navigator.clipboard.writeText(passReference.current.value)
    },
    [Password]
  )

  // passwordGenerator()

  return (
    <div className='w-full max-w-lg  bg-gray-700 rounded-md my-10 px-6 py-2 mx-auto flex flex-col justify-center text-orange-500 text-lg'>
      <h1 className='text-white text-center my-2 text-xl font-semibold'>Password Generator</h1>
        <div className='rounded-lg mb-5 flex shadow-lg overflow-hidden '>
            <input 
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3 shadow-2xl '
            placeholder='Password'
            ref={passReference}
            readOnly
            />
            <button 
            className='bg-blue-600 text-white outline-none shrink-0 p-3'
            onClick={()=>{copyToClipBoard()
            }}
            >Copy</button>
        </div>
        <div className='flex flex-row gap-x-8 text-sm font-semibold'>
          <div className='flex flex-row gap-x-4 shrink-0 w-56'>
            <input 
            type="range" 
            min={8} 
            max={100}
            value={length}
            className='cursor-pointer' 
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>length: {length}</label>
          </div>
          <div className='flex flex-row justify-center content-center gap-x-4 shrink-0'>
            <input type="checkbox" onChange={()=>{setnumAllowed((prevValue)=>!prevValue)}} />
            <label>Numbers</label>
          </div>
          <div className='flex flex-row justify-center content-center gap-x-4 shrink-0'>
            <input type="checkbox" onChange={()=>{setcharAllowed((prevValue)=>!prevValue)}}/>
            <label>Character</label>
          </div>
        </div>
    </div>
  )
}

export default App
