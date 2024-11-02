
import { createContext, useContext, useEffect, useState } from 'react';
import { getAllProducts } from '../Services/ProductServcies';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10);


  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await getAllProducts(searchTerm, currentPage, pageSize);
        setProducts(response.product.items);
        setTotalPages(Math.ceil(response.product.totalCount / pageSize));
      } catch (error) {
        setError(error)
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false)
      }
    };
    fetchProducts();

  }, []);


  return (
    <ProductContext.Provider value={{
      products, setProducts, isLoading, error, searchTerm, setSearchTerm, currentPage, setCurrentPage, totalPages, pageSize,
    }}>
      {children}
    </ProductContext.Provider>
  );
};

// export const useProductContext = () => {
//   return useContext(ProductContext);
// };

// // ProductContext.jsx

// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { getAllProducts } from '../services/ProductServices';

// 1. إنشاء Context
// const ProductContext = createContext();

// 2. إنشاء Provider
// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [pageSize] = useState(10);
//   const [totalPages, setTotalPages] = useState(0);
//   const [sortBy, setSortBy] = useState("name");
//   const [sortOrder, setSortOrder] = useState("asc");

//   const fetchProducts = async () => {
//     try {
//       const data = await getAllProducts(pageNumber, pageSize, sortBy, sortOrder);
//       setProducts(data.products);
//       setTotalPages(data.totalPages);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [pageNumber, sortBy, sortOrder]);

//   return (
//     <ProductContext.Provider value={{
//       products, pageNumber, setPageNumber, totalPages, sortBy, setSortBy, sortOrder, setSortOrder
//     }}>
//       {children}
//     </ProductContext.Provider>
//   );
};

// 3. دالة custom hook للوصول للـ Context بسهولة
// export const useProductContext = () => useContext(ProductContext);
// // 