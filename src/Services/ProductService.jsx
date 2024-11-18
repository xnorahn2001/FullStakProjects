import axios from "axios";

const URL = "http://localhost:5125/api/v1/products";

export const getAllProducts = async (
  searchTerm = "",
  currentPage =1 ,
  pageSize =1 ,
  sortBy = "name ",
  sortOrder = "desc"
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