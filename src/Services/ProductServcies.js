export const getAllProducts = async () => {
    try {
      const response = await fetch('http://localhost:5125/api/v1/products');
      const data = await response.json();
      return data.product.items; 
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
 