import React from "react";
import { products } from "../data/productsData"; //Share products mile ge yaha se js. store.
import Product from "./Product";
import styles from "./Products.module.css";
import Container from "./UI/Container";

function Products() {
  return (
    <Container>
      <h1>Best All Products</h1>
      <div className={styles.products}>
        {products.map((items, index) => (
          <Product key={items.id} {...items} />
        ))}
      </div>
    </Container>
  );
}

export default Products;
