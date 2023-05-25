import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ProductProvider } from "./context";
import "./index.css";
import { CartProvider } from "./cart_context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <ProductProvider>
        <Router>
          <App />
        </Router>
      </ProductProvider>
    </CartProvider>
  </React.StrictMode>
);
