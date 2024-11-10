import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product details - {id}</h1>
      <p>Full details about the product will be displayed here.</p>
    </div>
  );
};

export default ProductDetailPage;
