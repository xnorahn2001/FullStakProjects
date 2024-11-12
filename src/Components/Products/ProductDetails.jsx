import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const ProductDetails = () => {
  const { id } = useParams(); // لجلب معرّف المنتج من URL
  const { state } = useLocation(); // لجلب البيانات من الحالة المرسلة عبر navigation
  const [product, setProduct] = useState(null);

  // إذا كانت البيانات غير موجودة في state، قم بتحميلها باستخدام id من URL
  useEffect(() => {
    if (!state) {
      const fetchProduct = async () => {
        try {
          const data = await fetchWrapper(`http://localhost:5125/api/products/${id}`);
          setProduct(data);
        } catch (error) {
          console.error('Failed to load product:', error);
        }
      };
      fetchProduct();
    } else {
      setProduct(state);  // في حال كانت البيانات موجودة في state من URL
    }
  }, [id, state]);

  if (!product) return <p>Loading...</p>;

  return (
    <Container>
      <Typography variant="h4">{product.name || product.productName}</Typography>
      <Typography variant="body1">{product.description}</Typography>
      <Typography variant="h6">
        Price: {product.price || `SR${product.productPrice}`}
      </Typography>
      {product.image && <img src={product.image} alt={product.name || product.productName} style={{ width: "100%", height: "auto" }} />}
      <Button variant="contained" color="primary">Add to Cart</Button>
      <Button variant="outlined" onClick={() => window.history.back()} style={{ marginTop: '10px' }}>
        Back
      </Button>
    </Container>
  );
};

export default ProductDetails;
