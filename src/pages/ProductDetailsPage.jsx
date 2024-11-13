import React from "react";
import { Typography, Box, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";

const ProductDetails = () => {
  // بيانات المنتج (يمكنك تعديل هذه البيانات لتكون ديناميكية من خلال props أو من API)
  const product = {
    name: "T-Shirt Example",
    price: "$19.99",
    imageUrl: "https://via.placeholder.com/150", 
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              alt={product.name}
              height="250"
              image={product.imageUrl}
              title={product.name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                {product.price}
              </Typography>
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
