import axios from "axios";


const URL = "https://sda-3-onsite-backend-teamwork-q22o.onrender.com/api/v1/products";

export const getAllProducts = async (
  searchTerm,
  currentPage,
  pageSize,
  sortBy,
  sortOrder
) => {
  const response = await axios(
    `${URL}?Search=${searchTerm}&pageNumber=${currentPage}&pageSize=${pageSize}&sortBy=${sortBy}&sortOrder=${sortOrder}`
  );
  console.log("response ", response)

  return response.data.data;
};

export const getSingleProduct = async (id) => {
  const response = await axios(`${URL}/${id}`);
  return response.data.data.items;
};