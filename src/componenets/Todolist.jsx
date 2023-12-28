import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletetodo, updatetodo } from "../redux_slice/Todoslice";

function Todolist() {
  const[input,setinput] = useState()
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);  // selecting/picking  the todos from todoslice which is connected to the store (naming this var todos just for conveniece)

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}
        className="">
        {todo.text}
           <button onClick={() =>dispatch(updatetodo({ id: todo.id, text: input }))}> edit </button>
           <button onClick={() => dispatch(deletetodo(todo.id))}>    {/* dispatching/giving back the datas to the todos which is in the todoslice  */}
             delete </button>
        </div>
      ))}
    </>
  );
}

export default Todolist;
