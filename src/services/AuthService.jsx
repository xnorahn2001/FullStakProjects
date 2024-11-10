/* eslint-disable no-useless-catch */
export const signUp = async (userData) => {
    try {
      console.log("user signup data ", userData);
      const response = await fetch("https://sda-3-onsite-backend-teamwork-q22o.onrender.com/api/v1/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to sign up");
      }
  
      return await response.json();
    } catch (error) {
      throw error;
    }
  };
  
  export const signIn = async (credentials) => {
    console.log("the credentials is ", credentials);
    try {
      const response = await fetch(" http://localhost:5125/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to sign in");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };