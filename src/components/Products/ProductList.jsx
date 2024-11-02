import React, { useContext, useEffect, useState } from 'react';

import Product from './Product';
import { ProductContext } from '../../Context/Productcontext';
import SearchBar from '../SearchBar/SearchBar';



export const ProductList = () => {
  const { products } = useContext(ProductContext)

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchTerm) => {
    if (!products || products.length === 0) {
      return;
    }
    const results = products.filter(product =>
      product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results); // تأكد من تحديث الحالة هنا
  };


  useEffect(() => {
    setFilteredProducts(products); // إعادة تعيين المنتجات عند تحميل المكونات
  }, [products]);

  return (
    <div>
      <h2>Available products :</h2>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {
          Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))) : (
            <li>No products available</li> // عرض رسالة في حال عدم وجود منتجات
          )}
      </ul>
    </div>
  )
}

export default ProductList



// // ProductList.jsx

// import React from 'react';
// import { useProductContext } from '../../Context/ProductContext';

// const ProductList = () => {
//   const { products, pageNumber, setPageNumber, totalPages, sortBy, setSortBy, sortOrder, setSortOrder } = useProductContext();

//   return (
//     <div>
//       <h2>Product List</h2>
      
      {/* أزرار الترتيب */}
      {/* <div>
        <label>Sort by:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>

        <button onClick={() => setSortOrder("asc")}>Ascending</button>
        <button onClick={() => setSortOrder("desc")}>Descending</button>
      </div> */}

      {/* عرض قائمة المنتجات */}
      {/* <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul> */}

      {/* أزرار التنقل بين الصفحات */}
      {/* <div>
        <button onClick={() => setPageNumber(page => Math.max(page - 1, 1))} disabled={pageNumber === 1}>Previous</button>
        <span>Page {pageNumber} of {totalPages}</span>
        <button onClick={() => setPageNumber(page => Math.min(page + 1, totalPages))} disabled={pageNumber === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default ProductList; */}



