import React from 'react';
import Products from '../components/Products';
import Items from '../components/Items';

const Home = ({ setCartCount, searchQuery }) => {
  return (
    <div>
      <Products setCartCount={setCartCount} searchQuery={searchQuery} />
      <Items />
    </div>
  );
}

export default Home;
