import { jwtDecode } from "jwt-decode";

export const DecodeToken = (tokenKey) => {
  const token = tokenKey;
  const decoded = jwtDecode(token);

  console.log("Hi from DecodeToken", decoded);
  
  return decoded;
};

export default DecodeToken;