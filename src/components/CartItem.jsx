import React from "react";
// import { useCart } from "../contexts/CartProvider";
import styles from "./CartItem.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeItemFromCart,
} from "../Redux/cartSlice";

function CartItem({ id, price, img, title, quantity }) {
  // const { increaseQty, decreaseQty, removeItemFromCart } = useCart();
  const dispatch = useDispatch();
  return (
    <div className={styles.cartItem}>
      {/* left  */}
      <div className={styles.imgAndTitle}>
        <div className={styles.imgContainer}>
          <img src={img} alt={title} className={styles.cartImage} />
        </div>
        <h3>{title}</h3>
      </div>
      {/* right  */}
      <div className={styles.otherControls}>
        <div className={styles.qtyInput}>
          <button
            onClick={() => {
              // if (quantity <= 1) { //1 se kam tu is se kam products kam nhi hoge.
              //     return;
              // }
              // decreaseQty(id);
              dispatch(decreaseQty({ id: id }));
            }}
          >
            <AiOutlineMinus />
          </button>

          <span className={styles.quantityDisplay}>{quantity}</span>
          <button
            onClick={() => {
              // increaseQty(id);
              dispatch(increaseQty({ id: id }));
            }}
          >
            <AiOutlinePlus />
          </button>
        </div>

        <p> &#8377;{price * quantity}</p>

        <button
          className={styles.removeItemBtn}
          onClick={() => {
            //removeItemFromCart(id);
            dispatch(removeItemFromCart({ id: id }));
          }}
        >
          <ImCross />
        </button>
      </div>
      {/* ----------------- old ------------  */}
    </div>
  );
}

export default CartItem;
