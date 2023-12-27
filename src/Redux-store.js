import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./redux_slice/Todoslice";

export const store = configureStore({

    reducer : todoreducer
})

