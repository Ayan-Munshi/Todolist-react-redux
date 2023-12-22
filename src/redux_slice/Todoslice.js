import { createSlice, nanoid } from "@reduxjs/toolkit"; 

// first craete initial state of the app

const initialState = { todos : [{id:0, text : "Lets start"}]}

// now create slice

export const todoslice = createSlice({
    name : 'todo', initialState , 
    reducers : {
        addtodo: (state,action) => {
            const todo = {id : nanoid(), text : action.payload.text}
            state.todos.push(todo)
        },
        deletetodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },
        updatetodo: (state,action) => {}
    }
})