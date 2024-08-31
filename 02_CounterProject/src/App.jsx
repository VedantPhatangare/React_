import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(5)
  // let counter = 5

  const addValue=()=>{
    counter  += 1
    if(counter > 20){
      setCount(counter = 20)
    }else{
      setCount(counter)
    }
    console.log("value added",counter)
  }
  const subsValue=()=>{
    counter-=1
    if(counter < 0){
      setCount(counter = 0)
    }else{

      setCount(counter)
    }
    console.log("value substracted",counter)
  }
  return(
    <>
    <h1>Chai aur React</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addValue}>add value{counter}</button>
    <br />
    <button onClick={subsValue}>Remove value{counter}</button>
    </>
  )
}

export default App
