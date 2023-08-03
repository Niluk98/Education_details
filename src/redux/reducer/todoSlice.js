import {createSlice,as} from '@reduxjs/toolkit'

const todoSlice=createSlice({
    name:'Todo',
    initialState:{
        todos:[],
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todos=[...state.todos,action.payload]

        },
        removeTodo:(state,action)=>{
            let arr=[...state.todos];
            arr.splice(action.payload,1);
            state.todos=[...arr];
        }
    }
})

export const  {addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer