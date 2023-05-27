import httpService from "./httpService";
import authService from "./authService";

const headers = {
  Authorization: `${authService.getToken()}`,
};

export const getTasks = () => {
  return httpService.get("http://localhost:5000/tasks/me", { headers });
};

export const insertTask = (data) => {
  return httpService.post("http://localhost:5000/tasks", data, { headers });
};

export const updateTask = (id, data) => {
  return httpService.patch(`http://localhost:5000/tasks/${id}`, data, {
    headers,
  });
};

export const deleteTask = (id) => {
  return httpService.delete(`http://localhost:5000/tasks/${id}`, { headers });
};

export default { insertTask };
