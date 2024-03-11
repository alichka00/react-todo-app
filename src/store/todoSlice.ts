import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from 'interfaces/todo'

interface IInitialState {
    todo: ITodo[]
}

const initialState: IInitialState = {
    todo: [],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.todo.push({
                text: action.payload,
                id: Math.floor(Math.random() * 100),
                completed: false,
            })
        },
        removeTodo(state, action: PayloadAction<ITodo>) {
            state.todo = state.todo.filter(
                (item) => item.id !== action.payload.id
            )
        },
        toggleComplete(state, action: PayloadAction<ITodo>) {
            const toggleTodo = state.todo.find(
                (item) => item.id === action.payload.id
            )
            if (toggleTodo) {
                toggleTodo.completed = !toggleTodo?.completed
            }
        },
    },
})
