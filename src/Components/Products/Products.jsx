import React from "react";

import { useProductContext } from "../../hooks/useProductContext ";
import Product from "./Product";
import Pagination from "../Pagination/Pagination";
import Search from '../Search/Search';
import Sorting from "../Sort/Sorting";

import {
  Container,
  Typography,
  CircularProgress,
  AppBar,
  Toolbar,
  Box,
  Grid2,
} from "@mui/material";


const Products = () => {
  const {
    products,
    isLoading,
    // error,
    searchTerm,
    setCurrentPage,
    totalPages,
    currentPage,
  } = useProductContext();

  console.log("products ", products)

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

  // if (error) {
  //   return (
  //     <Container>
  //       <Typography variant="h6" color="error">
  //         {error.message}
  //       </Typography>
  //     </Container>
  //   );
  // }



  // const filteredProducts = products.filter((product) =>
  //     product.product.sizetoLowerCase().includes(searchTerm.toLowerCase())
  // );

  const filteredProducts = products.filter((product) => {
    console.log("Type of product.color:", typeof product.color); 
    const searchLower = searchTerm.toLowerCase();
    return (
      String(product.color).toLowerCase().includes(searchLower) ||
        product.image.toLowerCase().includes(searchLower) ||
        product.material.toLowerCase().includes(searchLower) ||
        product.price.toString().includes(searchLower) ||
        product.size.toLowerCase().includes(searchLower)
    );
});
  


  return (
    <Container maxWidth="lg" sx={{ paddingY: 2 }}>
      <AppBar position="static" sx={{ backgroundColor: "#5F6F52" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            sx={{ flexGrow: 1, color: "#FEFAE0" }}
          >
            Our products
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", marginLeft: 2, marginTop:2 }}>
            <Search />
            <Sorting />
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginY: 2 }}>
        {filteredProducts && filteredProducts.length === 0 ? (
          <Typography
            variant="body1"
            sx={{ textAlign: "center", marginTop: 2 }}
          >
             We are sorry, there appear to be no products available!
          </Typography>
        ) : (
          
          <Grid2 container spacing={2}>
  {filteredProducts.map((product, index) => (
    <Grid2 item xs={12} sm={6} md={4} key={product.productId || index}>
    <Grid2 product={product} />

    </Grid2>
  ))}
</Grid2>

        )}
      
      </Box>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};

export default Products;