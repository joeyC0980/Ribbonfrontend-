
import { useState,useEffect } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (ribbonToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((ribbon) => ribbon._id !== ribbonToRemove._id)
    );
  };

  const addToCart = (ribbon) => {
    setCart((prevCart) => {
      const existingRibbon = prevCart.find((item) => item._id === ribbon._id);
      if (existingRibbon) {
        return prevCart.map((item) =>
          item._id === ribbon._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        const newCart = [...prevCart, { ...ribbon, quantity: 1 }];
        return newCart;
      }
   
    });
   

  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (ribbon, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === ribbon._id ? { ...item, quantity: parseInt(amount) } : item
      )
    );

  };

  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);


  return { cart, addToCart, removeFromCart, clearCart, setQuantity };
};
