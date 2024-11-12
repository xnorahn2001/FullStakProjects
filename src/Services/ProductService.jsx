import axios from "axios";


const URL = "http://localhost:5125/api/v1/products";
console.log(URL);

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