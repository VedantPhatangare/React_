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
  const setCount_Callback=()=>{
    // setCount(counter+1)
    // setCount(counter+1)
    // setCount(counter+1)
    // setCount(counter+1)
    // value gets updated only once instead of 4 times, bcz react encloses all these line in batch as they are called back to back, and then checks if they are smilar, if yes then it only updates it once
    setCount(prevCounter=>prevCounter+1)
    setCount(prevCounter=>prevCounter+1)
    setCount((Counter)=>Counter+1) // we can  give parenthesis, and no matter what name we give to prevCounter it works as fuinction treats it as an prevCounter Anyway
    setCount((counter)=>counter+1)
    // to avoid this, setCounter also takes callback, which taked a previous updated value of counter (prevcounter), then it updates all values one after another as, its taking previous counter then again performing update operation
  }
  return(
    <>
    <h1>Chai aur React</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addValue}>add value{counter}</button>
    <br />
    <button onClick={subsValue}>Remove value{counter}</button>
    <br />
    <button onClick={setCount_Callback}>Interview Concept{counter}</button>
    </>
  )
}

export default App
