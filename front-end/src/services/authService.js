import { tokenKey } from "../config.json";

const getToken = () => {
  return localStorage.getItem(tokenKey);
};

const setToken = (token) => {
  localStorage.setItem(tokenKey, token);
};

const deleteToken = () => {
  localStorage.deleteToken(tokenKey);
};

export default { getToken, setToken, deleteToken };
