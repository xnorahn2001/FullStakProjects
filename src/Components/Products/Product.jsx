import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const navigate = useNavigate();

  const handleShowDetails = () => {

    navigate(`/product/${product.id}`, { 
      state: { 
        image: product.image,
        name: product.name,
        description: product.description,
        price: product.price,
      }
    });
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>  
      <Card sx={{ maxWidth: 345, margin: 'auto', borderRadius: '16px', boxShadow: 3, background: 'linear-gradient(to right, #FFFFFF, #ECE9E6)' }}>
        <CardMedia
          component="img"
          height="200"
          image={product.image || 'https://source.unsplash.com/600x400/?computer'}
          alt={product.name}
          sx={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
        />
        <CardContent sx={{ padding: 2 }}>
          <Typography variant="h6" component="h4" sx={{ fontSize: '1.5rem', textTransform: 'capitalize', marginBottom: 1 }}>
            {product.name || 'Product Name'}
          </Typography>

          {/* عرض الوصف في قسم منفصل */}
          <Box sx={{ marginBottom: 1 }}>
            <Typography variant="body2" color="text.secondary">
              {product.description || 'Default product description goes here.'}
            </Typography>
          </Box>

          {/* عرض السعر في قسم منفصل */}
          <Box>
            <Typography variant="body1" color="text.primary" sx={{ fontWeight: 'bold' }}>
              Price: ${product.price || '0.0'}
            </Typography>
          </Box>
        </CardContent>
        
        <CardActions sx={{ justifyContent: 'center', padding: 2 }}>
          <Button
            size="small"
            variant="outlined"
            startIcon={<InfoIcon />}
            onClick={handleShowDetails}
          >
            Show Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
