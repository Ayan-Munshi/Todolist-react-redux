import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletetodo } from "../redux_slice/Todoslice";

function Todolist() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);  // selecting/picking  the todos from todoslice which is connected to the store (naming this var todos just for conveniece)

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}
        className="">
        {todo.text}
           <button onClick={() => dispatch(deletetodo(todo.id))}>    {/* dispatching/giving back the datas to the todos which is in the todoslice  */}
             delete </button>
        </li>
      ))}
    </>
  );
}

export default Todolist;
