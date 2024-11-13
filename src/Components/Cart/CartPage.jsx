import React, { useContext } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
  TextField,
} from "@mui/material";
import { CartContext } from "../context/CartContext";
import MyAlert from "../components/alerts/MyAlert";
import { Remove as RemoveIcon, Add as AddIcon } from "@mui/icons-material";

const CartPage = () => {
  const { cart, removeFromCart, alert } = useContext(CartContext);


  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return; 

    const updatedCart = cart.map((product) => {
      if (product.productId === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

 
  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + product.productPrice * product.quantity,
      0
    );
  };

  return (
    <Container>
      {alert.show && (
        <MyAlert variant={alert.variant} message={alert.message} />
      )}

      <Typography variant="h4" align="center" my={4}>
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6" align="center">
          Your cart is empty
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {cart.map((product) => (
            <Grid item key={product.productId} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{product.productName}</Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.productName}
                      style={{ width: "100%", maxWidth: "200px" }}
                    />
                  </Box>
                  <Typography variant="body1">
                    <strong>Price:</strong> SR{product.productPrice}
                  </Typography>

                  
                  <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <IconButton
                      onClick={() =>
                        handleQuantityChange(
                          product.productId,
                          product.quantity - 1
                        )
                      }
                    >
                      <RemoveIcon />
                    </IconButton>
                    <TextField
                      value={product.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          product.productId,
                          parseInt(e.target.value) || 1
                        )
                      }
                      size="small"
                      sx={{ width: "50px", textAlign: "center" }}
                    />
                    <IconButton
                      onClick={() =>
                        handleQuantityChange(
                          product.productId,
                          product.quantity + 1
                        )
                      }
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 2,
                    }}
                  >
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => removeFromCart(product.productId)}
                    >
                      Remove
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

   
      {cart.length > 0 && (
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="h6">
            <strong>Total Price:</strong> SR{calculateTotalPrice()}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default CartPage;