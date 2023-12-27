import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../redux_slice/Todoslice";


function Todoinput() {
  const [input, setinput] = useState("");
  const dispatch = useDispatch()

  const add = (x) => {
    x.preventDefault()
    dispatch(addtodo(input))   // here input is the payload which we are sending to addtodo function
    setinput("")             // means after dispatch the input field will be blank again 
  }

  return (
    
      <form onSubmit={add}>
        <input
          type="text"
          value={input}
          onChange={(x) => setinput(x.target.value)}
        />
        <button
        type="submit"
        >add</button>
      </form>
    
  );
}

export default Todoinput;
