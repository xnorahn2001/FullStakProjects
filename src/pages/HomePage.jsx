import React from "react";
import "./HomeStyle.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleNavigateToProducts = () => {
    navigate("/products");
  };
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Welcome to  Visionary Lenses </h1>
        <p>specializing in selling sunglasses and prescription glasses,including options designed for individuals with color blindness.</p>
        <button className="shop-now-btn" onClick={handleNavigateToProducts}>
          Shop Now
        </button>
      </div>
    </div>
  );
};
export default Home;