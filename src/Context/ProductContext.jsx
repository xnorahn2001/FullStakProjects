
import { createContext, useContext, useEffect, useState } from 'react';
import { getAllProducts } from '../Services/ProductServcies';


const ProductContext = createContext();


export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 

  
  useEffect(() => {
    
    const fetchProducts = async () => {
      setIsLoading(true);

      try {
        const response = await  getAllProducts; 
        setProducts(response); 
      } catch (err) {
        setError(err.message); 
      } finally {
        setIsLoading(false); 
      }
    };

    fetchProducts();
  }, []); 

  return (
    <ProductContext.Provider value={{ products, isLoading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
