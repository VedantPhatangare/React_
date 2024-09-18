import {React,useState} from 'react'
import { useTodo } from '../Contexts/TodoContext'
function Card({todo}) {
  const {editTodo,deleteTodo,toggleTodo}= useTodo()
  const [title, settitle] = useState(todo.title)
  const [isEditable, setisEditable] = useState(false)

  const handleClick = ()=>{
    if(isEditable){
      editTodo(todo.id,{...todo,title:title})
    }
     setisEditable((prev)=>!prev)
  }
  
  return (
    <div className='text-black flex flex-row w-full justify-center mb-10 p-5 border gap-3' key={todo.id}>
      <input type="checkbox" name="" id="" onChange={()=>toggleTodo(todo.id)} />
      <input className={`p-2 outline-none rounded-lg shadow-lg ${todo.isCompleted? "line-through":""}`} type="text" value={title} onChange={(e)=>settitle(e.target.value)} readOnly={!isEditable}/> 
      <button onClick={handleClick} disabled={todo.isCompleted}>{isEditable? "Save":"Edit"}</button>
      <button onClick={()=>deleteTodo(todo.id)} disabled={todo.isCompleted}>Delete</button>
    </div>
  )
}

export default Card
