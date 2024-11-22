// import React from "react";
// import { useCart } from "../contexts/CartProvider";
// import styles from "./CartItem.module.css";

// function CartItem({ id, price, title, img, quantity }) {
//   const { increaseQty, decreaseQty, removeItmes } = useCart();
//   return (
//     <div>
//       <p>id: {id}</p>
//       <p>title: {title}</p>
//       <p>
//         Price: {price} * {quantity} = {price * quantity}
//       </p>
//       <p>quantity: {quantity}</p>
//       <p>id: {id}</p>
//       <img src={img} alt={title} height={40} />
//       <button
//         onClick={() => {
//           increaseQty(id);
//         }}
//       >
//         Increase
//       </button>

//       <button
//         onClick={() => {
//           if (quantity > 0) { //zero se kam tu is se kam products kam nhi hoge.
//             decreaseQty(id);
//           }
//         }}
//         disabled={quantity <= 0} //button disabled ho jaye ga zero ke baad.
//       >
//         Decrease
//       </button>

//       <button
//         onClick={() => {
//           removeItmes(id);
//         }}
//       >
//         Delete
//       </button>
//     </div>
//   );
// }

// export default CartItem;



import React from "react";
import { useCart } from "../contexts/CartProvider";
import styles from "./CartItem.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
function CartItem({ id, price, img, title, quantity }) {
    const { increaseQty, decreaseQty, removeItemFromCart } = useCart();
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
                            if (quantity <= 1) { //i se kam tu is se kam products kam nhi hoge.
                                return;
                            }
                            decreaseQty(id);
                        }}
                    >
                        <AiOutlineMinus />
                    </button>

                    <span className={styles.quantityDisplay}>{quantity}</span>
                    <button
                        onClick={() => {
                            increaseQty(id);
                        }}
                    >
                        <AiOutlinePlus />
                    </button>
                </div>

                <p> &#8377;{price * quantity}</p>
                
                <button
                    className={styles.removeItemBtn}
                    onClick={() => {
                        removeItemFromCart(id);
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