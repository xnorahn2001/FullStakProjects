import React, { createContext, useEffect, useState } from "react";

import { getAllProducts } from "../services/ProductService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

const fetchProducts = async (
  searchValue = "",
  pageNumber = 1,
  limit = 10,
  sortBy = "name",
  sortOrder = "asc"
) => {
  setIsLoading(true);
  setProducts([]);
  try {
    const data = await getAllProducts(
      searchValue,
      pageNumber,
      limit,
      sortBy,
      sortOrder
    );
    setProducts(data.data.items);
  } catch (error) {
    setError(error);
    console.error("Error fetching:", error);
  } finally {
    setIsLoading(false);
  }
};


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        error,
        fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;