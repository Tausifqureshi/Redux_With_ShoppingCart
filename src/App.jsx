import "./App.css";
import Header from "./components/Header";
import Products from "./components/products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Header />
      <Products />
    </Provider>
  );
}

export default App;
