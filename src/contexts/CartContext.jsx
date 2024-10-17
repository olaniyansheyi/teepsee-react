import { createContext, useContext, useState, useEffect } from "react";

import useLocalStorage from "@/hooks/useLocalStorage";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("cart", []);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart && JSON.stringify(savedCart) !== JSON.stringify(cart)) {
      setCart(savedCart);
    }
  }, [cart, setCart]);

  const handleAddToCart = (currentProduct) => {
    const newItem = {
      id: currentProduct.id,
      name: currentProduct.name,
      image: currentProduct.image,
      quantity: 1,
      price: currentProduct.price,
      category: currentProduct.category,
    };
    setCart((prevCart) => [...prevCart, newItem]);
    console.log("cart");
  };

  const handleDeleteFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const isInCart = (productId) => {
    return cart?.some((item) => String(item.id) === String(productId));
  };
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartItemCount = cart.length;

  const totalPriceCost = cart.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleDeleteFromCart,
        isInCart,
        increaseQuantity,
        decreaseQuantity,
        handleClearCart,
        cartItemCount,
        totalPriceCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { CartProvider, useCart };
