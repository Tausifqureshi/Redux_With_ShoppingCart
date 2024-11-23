import React, { useEffect, useState } from "react";
import Modal from "./UI/Modal";
import Cart from "./Cart";
import styles from "./Header.module.css";
import { BsCartFill } from "react-icons/bs";
import Container from "./UI/Container";
import { useCart } from "../contexts/CartProvider";
import { useSelector } from "react-redux";



function Header() {
    // const { cart } = useCart();
const cart = useSelector((state) => state.myCart);
// console.log("initial state mile gi", cart)
useSelector((state)=>{
console.log("state mile gi header page ke liye", state)
})
    const totalQuantity = cart .reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity; // quanty bade gi utne hi itme show hoge. agr only products dhekna hai tu cart.length kar sakta hai but amzone me quantity jaisa hi use hai.
    }, 0)
  const [isModalOpen, setIsModalOpen] = useState(false);
  function closeModal() {
    setIsModalOpen(false);
  }
  useEffect(() => {
    //jab modal open hoga tu products scroll nhi hoge.jab close modal tab scroll hoge ye conditions se.
    console.log("open Modal", isModalOpen);
    if (isModalOpen) {
      document.documentElement.style.overflowY = "hidden";
      // .documentElement is matlab hota hai HTML tag.
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isModalOpen]); //ye useEffect jab run hoga jitne bar modal open ya close hoga.

  return (
    <header className={styles.header}>
      <Container>
        {/* Warper ke liye use only container */}
        <nav className={styles.nav}>
          <h1>Shopping Cart</h1>

          <button
            className={styles.showCartBtn}
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <span className={styles.cartIconAndNumber}>
              <BsCartFill />
              {totalQuantity > 0 && <span className={styles.number}>
              {/*Agar totalQuantity zero se zyada hai tu ye Condition work tab hi zero show hoga */}
              {/* {cart.length} */}
              {totalQuantity}
            
              </span>
              }
              
            </span>
          </button>
        </nav>

        {isModalOpen && (
          //modal close liye ye function pass modal-components me.
          <Modal closeModal={closeModal}>
            <Cart />
          </Modal>
        )}
        {/* modal ki value ture hogi tabhi modal open hoga && is conditions se tab hi cartComponents ki details show hogi.*/}
      </Container>
    </header>
  );
}

export default Header;
