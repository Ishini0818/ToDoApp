import httpService from "./httpService";
import authService from "./authService";

const headers = {
  Authorization: `${authService.getToken()}`,
};

const login = (credential) => {
  return httpService.post("http://localhost:5000/users/login", credential);
};

const register = (data) => {
  return httpService.post("http://localhost:5000/users", data);
};

const getUser = () => {
  return httpService.get("http://localhost:5000/users/me", { headers });
};

const logoutUser = () => {
  return httpService.post(
    "http://localhost:5000/users/logout",
    {},
    { headers }
  );
};

export default { login, register, getUser, logoutUser };
