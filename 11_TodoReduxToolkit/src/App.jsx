import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'
import './App.css'
import { useSelector } from 'react-redux'
function App() {
  
  const todos = useSelector(state=>state.todos)
  return (
    <>
    <AddTodo/>
    {todos.map((todo)=>{
      return  (<div>
        <Todos key={todo.id} todo={todo}/>
        </div>)
    }
  )
  }
  </>
  )
}

export default App
