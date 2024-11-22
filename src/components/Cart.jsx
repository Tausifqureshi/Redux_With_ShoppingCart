import React from "react";
import styles from "./Cart.module.css";
import { useCart } from "../contexts/CartProvider";
import CartItem from "./CartItem";
function Cart() {
  const { cart } = useCart();
  const totalAmount = cart
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.quantity;
    }, 0)
    .toFixed(2);

  if (cart.length === 0) {
    // cart me products nhi tu ye show hoga emtyp tu.
    return <h1>Item Not Found</h1>;
  }

  return (
    <div className={styles.cart}>
      <h2 className={styles.cartHeading}>Shopping Cart</h2>
      <div>
        {/* Return statement ke sath */}
        {cart.map((itmecart, index) => {
          console.log(cart);
          return <CartItem key={itmecart.title} {...itmecart} />;
        })}
      </div>
      <h1>Total Amount: {totalAmount}</h1>
    </div>
  );
}

export default Cart;