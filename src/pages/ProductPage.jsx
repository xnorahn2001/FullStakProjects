import React from 'react';
import { useProducts } from '../context/ProductContext';
import usePagination from '../hooks/usePagination';
import useSort from '../hooks/useSort';
import useSearch from '../hooks/useSearch';

const ProductPage = () => {
  const { products } = useProducts();

  // Use hooks for pagination, sorting, and searching
  const { paginate, currentPage, nextPage, prevPage, setPage } = usePagination(5); // 5 products per page
  const { sortItems, setSorting } = useSort();
  const { query, setQuery, searchItems } = useSearch();

  // Apply filtering, searching, and sorting
  const processedProducts = paginate(sortItems(searchItems(products)));

  return (
    <div className="product-page">
      <h1>Products</h1>

      {/* Search */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a product"
        className="search-input"
      />

      {/* Sorting */}
      <div className="sorting-buttons">
        <button onClick={() => setSorting('name')}>Sort by Name</button>
        <button onClick={() => setSorting('price')}>Sort by Price</button>
      </div>

      {/* Display products */}
      <ul className="product-list">
        {processedProducts.map(product => (
          <li key={product.id} className="product-item">
            <h2>{product.name}</h2>
            <p>Price: {product.price} SAR</p>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage}</span>
        <button onClick={nextPage} disabled={processedProducts.length < 5}>Next</button>
      </div>
    </div>
  );
};

export default ProductPage;
