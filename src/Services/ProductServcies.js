
export const getAllProducts = async (searchTerm, currentPage, pageSize) => {
  try {
    const response = await fetch(`https://sda-3-onsite-backend-teamwork-q22o.onrender.com/api/v1/products?Search=${searchTerm}&pageNumber=${currentPage}&pageSize=${pageSize}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`https://sda-3-onsite-backend-teamwork-q22o.onrender.com/api/v1/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};  



// // ProductServices.js

// export const getAllProducts = async (pageNumber, pageSize, sortBy, sortOrder) => {
//   const url = `https://your-api-url.com/products?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&sortOrder=${sortOrder}`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Failed to fetch products");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     throw error;
//   }
// };
