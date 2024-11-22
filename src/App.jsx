import "./App.css";
import Header from "./components/Header";
import Products from "./components/products";
import CartProvider from "./contexts/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    <provider store={store}>
      <CartProvider>
        <ToastContainer />
        <Header />
        <Products />
      </CartProvider>
    </provider>
  );
}

export default App;
