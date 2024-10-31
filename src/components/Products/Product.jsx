import React, { useEffect, useState } from 'react';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5125/api/v1/products')
        const data = await response.json();
        console.log("data",data.product.items);
        setProducts(data.product.items);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Available products 🛒</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Prics: {product.price} SAR</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;