import {React,useState} from 'react'
import {useDispatch} from 'react-redux'
import { removeTodo,updateTodo } from '../features/todo/TodosSlice'


function Todos({todo}) {
  const [editable, seteditable] = useState(false)
  
  const dispatch = useDispatch()
  const [newTodo, setnewTodo] = useState(todo.text)
  return (
    <>
      <li key={todo.id}>
        <input type="text" defaultValue={newTodo} onChange={(e)=>setnewTodo(e.target.value)} disabled={!editable}/>
        <button  onClick={()=>{
          if(editable){
            dispatch(updateTodo(todo.id,newTodo))
          }
        seteditable((prev)=>!prev)
       }}>
        {editable? "Update": "Edit"}
        </button>

        <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
      </li>
    
    </>
  )
}

export default Todos
