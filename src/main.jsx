import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductsProvider } from "./context/products_context.jsx";
import { FilterProvider } from "./context/filter_context.jsx";
import { CartProvider } from "./context/cart_context.jsx";
import { UserProvider } from "./context/user_context.jsx";
import { OrderProvider } from "./context/order_context.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <OrderProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <ToastContainer position="top-center" limit={2} />
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </OrderProvider>
  </UserProvider>
);
