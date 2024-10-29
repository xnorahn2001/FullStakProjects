// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="logo">RareGems</h1>
        <Menu items={items} />
      </div>
    </nav>
  );
};

export default Navbar;