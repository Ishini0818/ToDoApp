import { tokenKey } from "../config.json";

const getToken = () => {
  return localStorage.getItem(tokenKey);
};

const setToken = (token) => {
  localStorage.setItem(tokenKey, token);
};

export default { getToken, setToken };
