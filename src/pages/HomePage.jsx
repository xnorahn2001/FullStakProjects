import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
const Homepage = () => {
  return (
    
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1> Welcome to RareGems Store 🏬</h1>
      <p>Enjoy browsing the latest products and best offers!</p>
      <ProductList/>
    </div>
  );
};

export default Homepage;