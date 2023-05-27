import httpService from "./httpService";

const login = (credential) => {
  return httpService.post("http://localhost:5000/users/login", credential);
};

const register = (data) => {
  return httpService.post("http://localhost:5000/users", data);
};

export default { login, register };
