import axios from "axios";

export const configApi = () => {
  axios.defaults.baseURL = " http://localhost:3000";
  const token = localStorage.getItem("token");
  axios.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bear ${token}`;
    }
    return config;
  });
};
