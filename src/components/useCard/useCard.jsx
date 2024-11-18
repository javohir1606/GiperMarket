import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const incrementCart = () => setCartCount(cartCount + 1);
  const decrementCart = () => {
    if (cartCount > 0) setCartCount(cartCount - 1);
  };

  return (
    <CartContext.Provider value={{ cartCount, incrementCart, decrementCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
