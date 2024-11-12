import { useContext } from "react";
import { UserContext } from "../Context/UserContext.jsx"; 

export const useUserContext = () => {
  return useContext(UserContext);
};