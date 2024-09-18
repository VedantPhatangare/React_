import { createContext, useContext } from "react";

export const TodoContext = createContext({
    Todos: [{}],
    addTodo:()=>{},
    deleteTodo:()=>{},
    editTodo:()=>{},
    toggleTodo:()=>{}
})
export const TodoProvider = TodoContext.Provider
export function useTodo() {
    return useContext(TodoContext)
}

