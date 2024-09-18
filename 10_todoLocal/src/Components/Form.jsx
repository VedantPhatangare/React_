import {React,useState} from 'react'
import { useTodo } from '../Contexts/TodoContext'

function Form() {
  const [title, settitle] = useState("")
    const {addTodo} = useTodo()
    const handleSubmit=(e)=>{
      e.preventDefault()
      addTodo({title:title,isCompleted:false})
      settitle("")
    }
  return (
    <div className='flex flex-row w-full justify-center mb-10'>
      <form onSubmit={handleSubmit} >
        <input 
        className='text-black p-2 outline-none rounded-lg shadow-lg' 
        type="text" 
        name="" 
        value={title} 
        onChange={(e)=>settitle(e.target.value)

        }/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Form
