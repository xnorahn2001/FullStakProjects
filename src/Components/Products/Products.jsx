import React from "react";

import { useProductContext } from "../../hooks/useProductContext ";
import Product from "./Product";

import {
  Container,
  CircularProgress,
  Box,
  Grid2,
} from "@mui/material";

const Products = () => {
  const {
    products,
    isLoading,
  } = useProductContext();

  if (isLoading) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", 
        paddingY: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ marginY: 2 }}>
          <Grid2 container spacing={4} justifyContent="center" alignItems="flex-start">
            {products.map((product, index) => (
              <div size={{ xs: 12, sm: 6, md: 4 }} key={product.productId || index}>
                <Product product={product} />
              </div>
            ))}
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
};

export default Products;
