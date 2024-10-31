import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../Services/ProductServcies';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
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

export default ProductList;