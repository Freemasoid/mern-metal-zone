import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage.js";

const customFetch = axios.create({
  baseURL: "https://e-commerce-api-3xet.onrender.com/api/v1",
});

customFetch.interceptors.request.use(
  (config) => {
    const user = getUserFromLocalStorage();

    if (user) {
      config.headers["Authorization"] = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customFetch;
