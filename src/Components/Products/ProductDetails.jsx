import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { name, price } = location.state || {};

  const handleAddToCart = () => {
    navigate('/cart'); 
  };

  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        
        <CardMedia
          component="img"
          sx={{ width: 150, height: 150, marginRight: 3 }}
          image={logoImage}  
          alt="Product Image"
        />

        <Card sx={{ maxWidth: 500, width: '100%' }}>
          <CardContent>

            <Typography variant="h4" sx={{ marginTop: 2 }}>
              {name || 'Visionary Lenses - Glasses'} 
            </Typography>

            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Price: ${price || '77.90'} 
            </Typography>

            <Button variant="contained" sx={{ marginTop: 3 }} onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ProductDetails;
