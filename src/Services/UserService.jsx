const URL = import.meta.env.VITE_USER_URL_LOCALHOST;
const AUTH_URL = import.meta.env.VITE_USER_AUTH_URL_LOCALHOST;

export const getAllUsers = async (searchTerm, currentPage, pageSize) => {
  const response = await fetch(
    `${URL}?Search=${searchTerm}&pageNumber=${currentPage}&pageSize=${pageSize}`
  );
  
  if (!response.ok) {
    throw new Error(`Error fetching users: ${response.statusText}`);
  }
  
  const data = await response.json();
  return data;
};

export const getSingleUser = async (userId) => {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log("Test the token from service:", token);
  console.log("Test the user ID from service:", userId);
  
  try {
    const response = await fetch(`${URL}/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching user: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    throw error;
  }
};

export const createUser = async (userData) => {
  console.log("Sending data to createUser:", userData);
  
  try {
    const response = await fetch(`${AUTH_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error creating user:", errorData);
      throw new Error(errorData.message || "Unknown error");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${AUTH_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error logging in:", errorData);
      throw new Error(errorData.message || "Unknown error");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error logging in:", error.message);
    throw error;
  }
};
