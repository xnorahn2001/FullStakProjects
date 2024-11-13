import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState({ show: false, message: "", variant: "" });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
     
      const existingProduct = prevCart.find(
        (item) => item.productId === product.productId
      );

      if (existingProduct) {
       
        const updatedCart = prevCart.map((item) =>
          item.productId === product.productId
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
       
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
 
        const newProduct = { ...product, quantity: 1 };
        const updatedCart = [...prevCart, newProduct];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (item) => item.productId !== productId
      );
      
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setAlert({
        show: true,
        message: "Product removed from cart.",
        variant: "danger",
      });
      setTimeout(
        () => setAlert({ show: false, message: "", variant: "" }),
        3000
      );
      return updatedCart;
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return; 

    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: newQuantity } 
          : item
      );
      
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, alert, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};