import React, { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

function cartReducer(cart, action) {
  // console.log("click");
  switch (action.type) {

    // Add Items ke liye.
    case "ADD_ITEM":
      // Add to cart ke liye.
      console.log("Add item id", action.payload); //shara product add hoge yaha se.
      return [...cart, action.payload]; //state change yaha se. tab hi share products add hoge.

      //Increase quantity ke liye.
      case "INCREASE_ITEM":
        return cart.map((item) => {
          if (item.id === action.payload.id) {
            console.log("increase item id",action.payload )
            return { ...item, quantity: item.quantity + 1 }; // Increase quantity if item matches
          }
          return item; // Return the item unchanged if it doesn't match
        });

      // Decrease quantity ke liye.
      case "DECREASE_ITEM":
        return cart.map((item) => {
          if (item.id === action.payload.id) {
            console.log("decrease item id",action.payload )
            return { ...item, quantity: item.quantity - 1 }; // Increase quantity if item matches
          }
          return item; // Return the item unchanged if it doesn't match
        });
       
        // Remove Itmes ke liye.
        case "REMOVE_ITEM":
        return cart.filter((item)=> item.id !== action.payload.id);
        
    default:
      return cart;
  }
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []); //initialValue empty[] hai abhi.jo bhi add item is me push hoge.
  // Cart State hai is me kuch bhi name de sakte hai but first state hi hota is me useReducer me.
  // console.log(cart)

  //Add itmes function
  const addItemsCart = (newCartItem) => { // is function ka referancd pass provider me  is ko hi bolte hai Context Api props deling matlab hota hai parent se chaild and grendChaild me pass but ContextAPI se ham direct us hi componets me pass kar sakte hai.
  dispatch({ type: "ADD_ITEM", payload: newCartItem }); // ye dispatch function se share products cart [] empty me jaye ga jab ham addtocart kar re ge.
  };


  //Increase Quantity ke liye.
  const increaseQty = (id) => {
  dispatch({ type: "INCREASE_ITEM", payload:{ id:id }});
  }
   //decrease Quantity ke liye.
  const decreaseQty = (id) => {
  dispatch({ type: "DECREASE_ITEM", payload: { id: id } });
  }

  //RemoveItmes ke liye.
  const removeItemFromCart = (id) => {
  dispatch({ type: "REMOVE_ITEM", payload: { id: id }});
  
  }

  // ContextApi use cartContext.Provider.
  return (
    <CartContext.Provider
      value={{
        //object pass contextAPI me ab is ke jitne bhi clid components hai jitne ko bhi is cartProvider se wrap o sub is data ko use kar sakte hai.
        cart: cart,
        dispatch: dispatch,
        addItemsCart: addItemsCart,
        increaseQty:increaseQty,
        decreaseQty:  decreaseQty ,
        removeItemFromCart: removeItemFromCart,

      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext); //bar bar har components me cartconrext na use karna pade is liye ye function bana liye hai jaha bhi cartcontext.provider me data ki zarurt bus is function ko hi import karna hoga.
}
export default CartProvider;
