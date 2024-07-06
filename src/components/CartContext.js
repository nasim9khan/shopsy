import React, { createContext, useContext, useState} from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  const removeProductFromCart = (productId) => {
    setCartProducts(cartProducts.filter(product => product.id !== productId));
  };

  const cartCount = cartProducts.length;

  return (
    <CartContext.Provider value={{ cartProducts, addProductToCart, removeProductFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
