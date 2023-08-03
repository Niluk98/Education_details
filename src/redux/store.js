import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducer/todoSlice";

const store=configureStore({
    reducer:{
        todoSlice,
        
    }
});
export default store;