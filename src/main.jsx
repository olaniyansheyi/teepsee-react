import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.jsx";
import "@/index.css";

import { ProductsProvider } from "@/contexts/ProductsContext";
import { CartProvider } from "@/contexts/CartContext";
import { MenuProvider } from "@/contexts/MenuContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
