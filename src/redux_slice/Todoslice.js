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
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);   // react will automatically compare the id from payload
    },
    updatetodo: (state, action) => {}
  }
});

export const { addtodo, deletetodo } = todoslice.actions;
export default todoslice.reducer;
