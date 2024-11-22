import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice ({
    name : "cart",
    initialState : [],

    reducers :{
        addItem : (state, action) =>{

        },
        increment : (state, action) =>{

        },
        decrement : (state, action) =>{

        },
        removeItem : (state, action) =>{
            
        },
    }
})
console.log(cartSlice.actions);
export const {addItem,increment,decrement,removeItem} = cartSlice.actions

export default cartSlice;