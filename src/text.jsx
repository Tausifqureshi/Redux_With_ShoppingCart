import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    // Ye reducer cart me new item add karne ke liye hai.
    // Redux Toolkit me directly state ko modify kar sakte hain `state.push()` ka use karke,
    // kyunki ye `immer` library ke through immutable updates handle karta hai.
    addItemsCart: (state, action) => {
      state.push(action.payload); 
      console.log("addItemsCart", action); // Action me payload hota hai jo new item ki details rakhta hai.
    },

   

  

  },
});





























import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    // 1️⃣ **addItemsCart**: Cart me ek naya item add karta hai.
    // Use Case: Jab ek item ko cart me add karna ho.
    // Implementation: `state.push()` ka use kiya hai, jo Redux Toolkit ke `immer` ke through immutability maintain karta hai.
    addItemsCart: (state, action) => {
      state.push(action.payload); // Directly cart me payload (new item) ko add kar diya.
      console.log("addItemsCart", action); // Payload me wahi data hota hai jo item add karte time pass kiya gaya.
      // Alternate approach: Agar immutability manually maintain karni ho to `return [...state, action.payload]` ka use hota.
    },


  

  },
});

