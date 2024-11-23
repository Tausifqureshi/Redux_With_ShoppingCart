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
      return state.map((item) => {
        if (item.id === action.payload.id) {
          console.log("increase item id", action.payload);
          return { ...item, quantity: item.quantity + 1 }; // Increase quantity if item matches
        }
        return item; // Return the item unchanged if it doesn't match
      });


    },

    decreaseQty: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          console.log("decrease item id", action.payload);
          return { ...item, quantity: item.quantity - 1 }; // Increase quantity if item matches
        }
        return item; // Return the item unchanged if it doesn't match
      });

      
    },
    
    removeItemFromCart: (state, action) => {
    return state.filter((item)=> item.id !== action.payload.id);
        
    },
  },
});
console.log(cartSlice.actions);
export const {  addItemsCart, increaseQty, decreaseQty, removeItemFromCart } = cartSlice.actions;

export default cartSlice;
