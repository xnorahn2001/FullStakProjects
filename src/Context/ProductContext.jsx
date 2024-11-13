import React, { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../Services/ProductService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(8);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  console.log("peoduct provider")

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await getAllProducts(
        searchTerm,
        currentPage,
        pageSize,
        sortBy,
        sortOrder
      );
      // console.log(data.data.$values)
      setProducts(data);
      setTotalPages(data.data.totalPages);
     
    } catch (error) {
      setError(error);
    }finally{
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, sortBy, sortOrder]);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        isLoading,
        error,
        searchTerm,
        setSearchTerm,
        currentPage,
        setCurrentPage,
        totalPages,
        pageSize,
        sortBy,
        setSortBy,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;