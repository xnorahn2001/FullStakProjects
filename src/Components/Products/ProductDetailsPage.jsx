import React from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/products/ProductDetails";

const ProductDetailsPage = () => {
  const { id } = useParams();  
  
  
  
  return (
    <div>
      <h1> Our Product Details  {id}</h1>
      <ProductDetails productId={id} /> 
    </div>
  );
};

export default ProductDetailsPage;
