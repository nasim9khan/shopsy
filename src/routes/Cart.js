import React from 'react';
import { useCart } from '../components/CartContext';
import './CartStyles.css'; 

const Cart = () => {
  const { cartProducts, removeProductFromCart } = useCart();

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-list">
          {cartProducts.map(product => (
            <li key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} />
              <div className="cart-item-details">
                <span className="cart-item-title">{product.title}</span>
                <p className="cart-item-description">
                  {product.description}
                </p>
                <p className="cart-item-price">${product.price}</p>
              </div>
              <button 
                className="cart-item-remove" 
                onClick={() => removeProductFromCart(product.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
