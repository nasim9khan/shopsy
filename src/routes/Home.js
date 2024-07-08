import React from 'react';
import Products from '../components/Products';

const Home = ({ setCartCount, searchQuery }) => {
  return (
    <div>
      <Products setCartCount={setCartCount} searchQuery={searchQuery} />
    </div>
  );
}

export default Home;
