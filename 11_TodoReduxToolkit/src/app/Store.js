
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/TodosSlice'
export const store = configureStore({
    reducer:todoReducer
})
