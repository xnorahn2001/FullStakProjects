import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddProduct from './AddProduct';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleDeleteProduct = async (id) => {
    await axios.delete(`/api/products/${id}`);
    setProducts(products.filter(product => product.id !== id));
    alert('The product has been deleted successfully');
  };

  return (
    <div>
      <h1>Control panel</h1>
      <AddProduct />

      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: {product.price} SAR</p>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete the product</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
