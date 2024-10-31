import React, { useState,useEffect, useContext } from 'react'

import ProductList from '../components/Products/ProductList';
import { getAllProducts } from './Services/ProductService';
import { ProductContext } from './Context/ProductContext';

export const HomePage = () => {

 const {isLoading,error} = useContext(ProductContext);
  if (isLoading) {
    return <p>products are loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <>
      <ProductList />
    </>
  )
}

export default HomePage;