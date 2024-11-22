import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
function Modal({ children,closeModal}) {
  return createPortal( //new root me ye sub ko push ke liye use.
    <>
      <div className={styles.modalBackdrop} onClick={closeModal}></div>
      <div className={styles.modalContent}> {children} </div>
    </>,

    document.getElementById("modal")
  );
}

export default Modal;
