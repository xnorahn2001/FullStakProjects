import React, { createContext, useEffect, useState } from "react";
import { getAllUsers } from "../services/UserService";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [userLogin, setUserLogin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(8);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await getAllUsers(searchTerm, currentPage, pageSize);
      setUsers(data.data.items);
      setTotalPages(data.data.totalPages);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (userInfo != null) {
      setUserLogin(userInfo);
      console.log("test if the user receved:", userInfo);
    }
  }, []);

  console.log("test if the user login:", userLogin);

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        isLoading,
        setIsLoading,
        setError,
        error,
        searchTerm,
        setSearchTerm,
        currentPage,
        setCurrentPage,
        totalPages,
        pageSize,
        userLogin,
        setUserLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;