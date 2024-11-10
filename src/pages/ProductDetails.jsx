import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const { state } = useLocation();
  const { productId, productName,imageUrl, productPrice, description } = state || {};

  return (
    <div>
      {state ? (
        <div key={productId}>
          <h2>{productName}</h2>
          <img
            src={imageUrl}
            alt={productName}
            style={{ width: "50%", maxWidth: "200px" }}
          />
          <p>Product Price: {productPrice}</p>
          <p>Description: {description}</p>
          <button onClick={() => window.history.back()}>Back</button>
        </div>
      ) : (
        <div>No Product selected</div>
      )}
    </div>
  );
};

export default ProductDetails;