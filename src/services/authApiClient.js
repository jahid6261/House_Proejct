
import axios from "axios";

const authApiClient = axios.create({
  baseURL: "https://house-rent-project-one.vercel.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT in format that your backend expects
authApiClient.interceptors.request.use(
  (config) => {
    const tokenString = localStorage.getItem("authTokens");
    if (tokenString) {
      const token = JSON.parse(tokenString)?.access;
      if (token) {
        config.headers.Authorization = `JWT ${token}`; 
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default authApiClient;