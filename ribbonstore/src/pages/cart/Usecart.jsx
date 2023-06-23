import { useState } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem !== item));
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (item, quantity) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem === item ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  return { cart, addToCart, removeFromCart, clearCart, setQuantity };
};
