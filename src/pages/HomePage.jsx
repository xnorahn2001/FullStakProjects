import React from 'react';
import { Link } from 'react-router-dom';
const Homepage = () => {
  return (
    
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1> Welcome to RareGems Store 🏬</h1>
      <p>Enjoy browsing the latest products and best offers!</p>
      <Link to="/products">
        <button style={{ padding: '10px 20px', fontSize: '18px' }}>Browse products</button>
      </Link>
    </div>
  );
};

export default Homepage;

