import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
         
  reducers: {
    addItemsCart: (state, action) => {
      state.push(action.payload); //is tara bhi kar sakte hai dono me se jo hasan pare but kaam same hi hora hai ye immer library use kar ra hai aise karne se. Redux Toolkit me directly state ko modify kar sakte hain `state.push()` ka use karke. kyunki ye `immer` library ke through immutable updates handle karta hai.

      console.log("addItemsCart", action)  // Redux me action ek object hota hai, aur uske andar hamesha ek payload hota hai jo main data ko hold karta hai. Hum sirf payload ki value access karte hain, type ko alag se specify karne ki zarurat nahi hoti.  Ye thoda alag hai useReducer se, jisme hume type manually dena padta tha.

      // return [...state, action.payload]; 
    },

    increaseQty: (state, action) => {
    // Ye increaseQty cart me kisi specific item ki quantity badhane ke liye hai.
    // `find` ka use karke ek item dhoondhte hain aur uski quantity directly increment karte hain.

      console.log("increase item id", action.payload);  //Payload me wahi item ki id pass hoti hai jiska quantity badhana hai.
      const item = state.find((item) => item.id === action.payload.id); // `find` se wahi item milta hai jo `action.payload.id` se match karta hai.

      if (item) {
        console.log("increase item id", action.payload);
        item.quantity += 1; // Item ka `quantity` property directly increment kar diya.
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
      
    // Ye decreaseQty: cart me kisi specific item ki quantity kam karne ke liye hai.
    // `find` ka use karke ek item dhoondhte hain aur uski quantity decrement karte hain.
    // Quantity tabhi kam hoti hai jab wo 1 se zyada ho, taaki quantity negative na ho.

      console.log("decrease item id", action); // Payload me wahi item ki id hoti hai jiska quantity kam karna hai.
        const item = state.find((item) => item.id === action.payload.id); //find` ka use kiya kyunki sirf ek item modify karna hai.
        if (item && item.quantity > 1) {
          item.quantity -= 1; // Sirf tab kam karega jab quantity 1 se zyada ho.
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
    // Ye removeItemFromCart cart me kisi item ko completely remove karne ke liye hai.
    // `filter` ka use karke wo item hata dete hain jiska id `action.payload.id` se match karta hai.
    // `filter` naya array banata hai jo immutability ensure karta hai.
    return state.filter((item)=> item.id !== action.payload.id); //Payload me wahi id hoti hai jo delete karni hai.
    // Note: `filter` nayi array banata hai aur purani state ko nahi badalta. Isliye Redux me hume manually state copy karne ki zarurat nahi hoti.

        
    },
  },
});
console.log(cartSlice.actions);
// Reducer functions ko export karte hain taaki components me use kar sakein.
export const {  addItemsCart, increaseQty, decreaseQty, removeItemFromCart } = cartSlice.actions;

export default cartSlice; //Slice ko export karte hain taaki Redux store me include kar sakein.
