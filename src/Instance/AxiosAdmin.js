import axios from "axios";

const apiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/admin`, // Your API base URL
  withCredentials: true,
});

export default apiInstance;
