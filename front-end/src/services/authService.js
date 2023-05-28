import { tokenKey } from "../config.json";
import jwtDecode from "jwt-decode";

const getToken = () => {
  return localStorage.getItem(tokenKey);
};

const setToken = (token) => {
  localStorage.setItem(tokenKey, token);
};

const deleteToken = () => {
  localStorage.removeItem(tokenKey);
};

const extractUserDetails = () => {
  try {
    const jwt = getToken();
    return jwtDecode(jwt);
  } catch (error) {}
};

export default { getToken, setToken, deleteToken, extractUserDetails };
