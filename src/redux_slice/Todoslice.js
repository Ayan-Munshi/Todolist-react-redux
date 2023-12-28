import { createSlice, nanoid } from "@reduxjs/toolkit";

// first craete initial state of the app

const initialState = { todos: [{ id : 0, text: " start" }] };

// now create slice

export const todoslice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };    // react will automatically select text from payload
      state.todos.push(todo);
    },
    deletetodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);   // react will automatically compare the id from payload
    },
    updatetodo: (state, action) => {
      state.todos = state.todos.map((t) => t.id === action.payload ? {...t, text : action.payload} : t )
    }
  }
});

export const { addtodo, deletetodo,updatetodo } = todoslice.actions;
export default todoslice.reducer;
