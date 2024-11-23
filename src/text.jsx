import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    // Item ko cart me add karne ki action
    addItemsCart: (state, action) => {
      state.push(action.payload); // 'push' method se item ko state me add kar rahe hain.
      console.log("addItemsCart", action)  // Action ka payload hamesha wo data hota hai jo hum store karna chahte hain.

      // return [...state, action.payload]; // Dusra tareeka jisme state ko spread karke naya item add karte.
    },

    // Quantity ko increase karne ka action
    increaseQty: (state, action) => {
      // 'find' method se hum us item ko dhund rahe hain jiska 'id' action se match kare.
      const item = state.find((item) => item.id === action.payload.id); 
      if (item) {
        console.log("increase item id", action.payload);
        item.quantity += 1; // Agar item mil gaya, to uski quantity 1 se increase kar denge.
      }

      // return state.map((item) => {
      //   if (item.id === action.payload.id) {
      //     console.log("increase item id", action.payload);
      //     return { ...item, quantity: item.quantity + 1 }; // Dusra tareeka jisme map use karke item ki quantity update karte.
      //   }
      //   return item; // Agar item match nahi karta to vo waise ka waise reh jaega.
      // });
    },

    // Quantity ko decrease karne ka action
    decreaseQty: (state, action) => {
      // 'find' method se hum us item ko dhund rahe hain jiska 'id' action se match kare.
      const item = state.find((item) => item.id === action.payload.id); 
      if (item && item.quantity > 1) { // Agar item mil gaya aur quantity 1 se zyada hai, to quantity decrease karo.
        console.log("decrease item id", action.payload);
        item.quantity -= 1; // Quantity ko 1 se kam kar denge.
      }

      // return state.map((item) => {
      //   if (item.id === action.payload.id) {
      //     console.log("decrease item id", action.payload);
      //     return { ...item, quantity: item.quantity - 1 }; // Dusra tareeka jisme map use karke item ki quantity update karte.
      //   }
      //   return item;
      // });
    },

    // Cart se item remove karne ka action
    removeItemFromCart: (state, action) => {
      // 'filter' method se item ko remove kar rahe hain jiska 'id' action payload ke 'id' se match karta hai.
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

console.log(cartSlice.actions); // Ye log check karne ke liye ki actions correctly generate ho rahe hain ya nahi.
export const { addItemsCart, increaseQty, decreaseQty, removeItemFromCart } = cartSlice.actions;

export default cartSlice;
