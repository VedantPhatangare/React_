import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-screen h-screen flex justify-center'
      style={{ backgroundColor: color }}>

      <div className="flex flex-wrap justify-center w-10/12 h-10 fixed bottom-10 px-2 inset-x-0">

        <div className='flex flex-wrap gap-5 justify-center bg-white px-5 py-2 rounded-lg'>
          <button
          className='outline-none px-4 py-2 rounded-xl text-white shadow-lg'
          style={{backgroundColor:"red"}}
          onClick={()=>setColor("red")}
          >Red</button>
          <button
          className='outline-none px-4 py-2 rounded-xl text-white shadow-lg'
          style={{backgroundColor:"blue"}}
          onClick={()=>setColor("blue")}
          >blue</button>
          <button
          className='outline-none px-4 py-2 rounded-xl text-white shadow-lg'
          style={{backgroundColor:"green"}}
          onClick={()=>setColor("green")}
          >green</button>
          <button
          className='outline-none px-4 py-2 rounded-xl text-white shadow-lg'
          style={{backgroundColor:"yellow"}}
          onClick={()=>setColor("yellow")}
          >yellow</button>
          <button
          className='outline-none px-4 py-2 rounded-xl text-white shadow-lg'
          style={{backgroundColor:"purple"}}
          onClick={()=>setColor("purple")}
          >Red</button>
          <button
          className='outline-none px-4 py-2 rounded-xl text-white shadow-lg'
          style={{backgroundColor:"black"}}
          onClick={()=>setColor("black")}
          >Black</button>
          <button
          className='outline-none px-4 py-2 rounded-xl text-white shadow-lg'
          style={{backgroundColor:"orange"}}
          onClick={()=>setColor("purple")}
          >Red</button>
          
        </div>

      </div>



      `  </div>
  )
}

export default App
