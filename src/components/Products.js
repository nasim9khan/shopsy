import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Style from "./ProductStyle.css";
import {useCart} from "../components/CartContext";

function Products({ setCartCount, searchQuery }) {
  const [products, setProducts] = useState([]);
  const [addedProducts, setAddedProducts] = useState([]);
  const { addProductToCart } = useCart(); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addToCart = (productId) => {
    if (!addedProducts.includes(productId)) {
      setAddedProducts(prevAddedProducts => [...prevAddedProducts, productId]);
      setCartCount(prevCount => prevCount + 1);
      toast.success('Item added', { autoClose: 1000 });
    }
  };

  const filteredProducts = products.filter(product =>
    product.title && product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-card-container d-flex flex-row flex-wrap">
      {filteredProducts.map(product => (
        <div className="card mt-1 pt-1" key={product.id}>
          <img
            src={product.image}
            className="card-img-top"
            alt="image"
            style={{ width: '200px', height: '200px' }}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title ? product.title.slice(0, 15) : 'No Title'}...</h5>
            <p className="card-text">{product.description ? product.description.slice(0, 50) : 'No Description'}...</p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-secondary">
                BuyNow
              </button>
              <button className="btn btn-outline-secondary" onClick={() => { addProductToCart(product); toast.success('Item added', { autoClose: 1000 }); }}>
                AddToCart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
