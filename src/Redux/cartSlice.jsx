import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    addItemsCart: (state, action) => {
      state.push(action.payload); //is tara bhi kar sakte hai dono me se jo hasan pare but kaam same hi hora hai ye immer library use kar ra hai aise karne se

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
