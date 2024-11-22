import "./App.css";
import Header from "./components/Header";
import Products from "./components/products";
import CartProvider from "./contexts/CartProvider";
import {ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <CartProvider>
    <ToastContainer />
      <Header />
      <Products />
    </CartProvider>
  );
}

export default App;
