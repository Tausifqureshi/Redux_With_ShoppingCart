import React from 'react'
import { useCart } from '../contexts/CartProvider'
import styles from "./Product.module.css";
import {toast} from "react-toastify";
import { addItemsCart } from '../Redux/cartSlice';
import { useDispatch } from 'react-redux';

function Product({id,img,  title, price}) {
const dispatch = useDispatch();
const { addItemsCart, cart} = useCart()

function handleAdd (){  
  const isProductInCart = cart.some(item => item.id === id);
  //check ek products agar add hai fir se add nhi hoga. cart ko ham useCart se lere hai Destructuring se.
  if (isProductInCart) {
   toast.info("Product already added",{
    autoClose: 1000, 
   });
    return;
  }

  const newCartItem ={
    id: id,
    price: price,
    title: title,
    img: img,   
    quantity: 1,
  }

 console.log("products add", newCartItem)
 addItemsCart(newCartItem);

 toast.success("Product added", {
  autoClose: 1000,  // Toast will disappear after 2 seconds
});
}

  return (

    <div className={styles.product}>
       <img src= {img} alt={title} className={styles.productImage} />
       <p className={styles.title}>{title}</p>
       <p className={styles.price}> {price}</p>
       <button type="button" onClick={handleAdd}className={styles.addToCartBtn}>Add to Cart</button>
      
    </div>
  )
}

export default Product
