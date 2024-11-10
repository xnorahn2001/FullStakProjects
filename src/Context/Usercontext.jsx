import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  const [userData, setUserData] = useState(null);


  return (
    <UserContext.Provider value={{ userLoggedIn, setUserLoggedIn, userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};



export default UserContext