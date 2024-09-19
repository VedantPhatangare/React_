import React, { useState } from 'react'
import {useDispatch}  from 'react-redux'
import { addTodo } from '../features/todo/TodosSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const handleSubmit= (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <div>
      <div>Todos</div>  
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter a Todo..'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default AddTodo
