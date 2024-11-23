import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    addItemsCart: (state, action) => {
      state.push(action.payload); //is tara bhi kar sakte hai dono me se jo hasan pare but kaam same hi hora hai ye immer library use kar ra hai aise karne se.
      console.log("addItemsCart", action)  // Redux me action ek object hota hai, aur uske andar hamesha ek payload hota hai jo main data ko hold karta hai. Hum sirf payload ki value access karte hain, type ko alag se specify karne ki zarurat nahi hoti.  Ye thoda alag hai useReducer se, jisme hume type manually dena padta tha.

      // return [...state, action.payload];
    },

    increaseQty: (state, action) => {
      console.log("increase item id", action.payload);
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        console.log("increase item id", action.payload);
        item.quantity += 1; 
      }
      

      // return state.map((item) => {
      //   if (item.id === action.payload.id) {
      //     console.log("increase item id", action.payload);
      //     return { ...item, quantity: item.quantity + 1 }; 
      //   }
      //   return item; 
      // });
    },

    
    decreaseQty: (state, action) => {
      console.log("decrease item id", action);
      // state.forEach((item)=>{
      //   if(item.id === action.payload.id){
      //      item.quantity -=1
      //   }
      // })

        const item = state.find((item) => item.id === action.payload.id);
        if (item && item.quantity > 1) {
          console.log("decrease item id", action.payload);
          item.quantity -= 1; // Decrement quantity
        }
  
      // return state.map((item) => {
      //   if (item.id === action.payload.id) {
      //     console.log("decrease item id", action.payload);
      //     return { ...item, quantity: item.quantity - 1 }; // Increase quantity if item matches
      //   }
      //   return item; 
      // });
       
     

    },
    
    removeItemFromCart: (state, action) => {
      // Redux Toolkit automatically ensures immutability
    return state.filter((item)=> item.id !== action.payload.id);
        
    },
  },
});
console.log(cartSlice.actions);
export const {  addItemsCart, increaseQty, decreaseQty, removeItemFromCart } = cartSlice.actions;

export default cartSlice;
