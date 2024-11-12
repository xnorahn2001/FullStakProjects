import React, { useEffect, useState } from 'react';
import Product from './Product';  // استيراد مكون Product لعرض تفاصيل المنتجات
import { Container, Grid } from '@mui/material';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetchWrapper('http://localhost:5125/api/products');
        setProducts(response);  // تعيين البيانات إلى حالة المنتجات
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ paddingY: 2 }}>
      <Grid container spacing={2}>
        {products.length === 0 ? (
          <p>No products available</p> // رسالة في حال عدم وجود منتجات
        ) : (
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.productId}>
              <Product product={product} />  {/* تمرير المنتج إلى مكون Product */}
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default ProductList;
