export const getAllProducts = async (
  searchValue = "",
  pageNumber = 1,
  limit = 10,
  sortBy = "name",
  sortOrder = "asc"
) => {
  const url = `http://localhost:5125/api/v1/products?search=${encodeURIComponent(
    searchValue
  )}&offset=${
    (pageNumber - 1) * limit
  }&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Response was not ok");
  }
  return await response.json();
};




export const getProductById = async (productId) => {
  try {
    const response = await fetch(
      ` http://localhost:5125/api/v1/products/${productId}`
    );
    const data = await response.json();
    console.log("API response:", data);

    if (!data.success) {
      throw new Error("Failed to fetch product details");
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};