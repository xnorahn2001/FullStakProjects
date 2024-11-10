import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products'); // يجب تعديل الرابط ليناسب الباك اند
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  // فلترة المنتجات حسب البحث والسعر
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (maxPrice === '' || product.price <= maxPrice)
  );

  return (
    <div>
      <h1>List Of Product </h1>
      
      {/* Search   */}
      <input 
        type="text" 
        placeholder="  Search for a product..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />

      {/* Price */}
      <input 
        type="number" 
        placeholder="Highest price " 
        value={maxPrice} 
        onChange={(e) => setMaxPrice(e.target.value)} 
      />

      {/* Show The Product */}
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: {product.price} SAR</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
