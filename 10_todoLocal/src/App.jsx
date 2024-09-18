import { useEffect, useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Card from './Components/Card'
import { TodoProvider } from './Contexts/TodoContext'
function App() {
  const [Todos, setTodos] = useState([])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos.length !=0) setTodos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(Todos))
  }, [Todos])
  

  const addTodo = (todo)=>{
    setTodos((prev)=>(
      [{id:Date.now(),...todo},...prev]
    ))
  }
  const editTodo = (id,newTodo)=>{
    setTodos((prev)=>(
      prev.map((todo)=>(todo.id===id? newTodo : todo))
    ))
  }
  const deleteTodo = (id)=>{
    setTodos((prev)=>(
      prev.filter((todo)=>todo.id !==id)
    ))
  }
  const toggleTodo = (id)=>{
      setTodos((prev)=>(
        prev.map((todo)=>(
          todo.id === id? {...todo,isCompleted: !todo.isCompleted} :todo
        ))
      ))
  }
  return (
    <>
      <TodoProvider value={{Todos,addTodo,editTodo,deleteTodo,toggleTodo}}>
        <div className='bg-slate-700 min-h-screen py-8 flex flex-col items-center'>
          <div className='w-2/3 mx-auto rounded-lg shadow-sm  text-white px-4 flex flex-col'>
            <h1 className='text-center text-2xl font-bold mb-10'>Manage your Todos</h1>
            <Form />
          </div>
          <div>
            {
              Todos.map((todo)=>{
                return <>
                  <div key={todo.id}>
                  <Card todo={todo}/>
                  </div>
                </>
              })
            }
          </div>
        </div>
      </TodoProvider>
    </>
  )
}

export default App
