import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../features/todosFeatures/todoSlice";

const store = configureStore({
    reducer:{
        todos: todoReducer
    }
});

export default store;