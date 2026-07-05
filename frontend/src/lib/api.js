import axios from "axios";

const rawApiUrl = import.meta.env.VITE_API_URL || "http://localhost:7001";
const baseUrl = rawApiUrl.replace(/\/chat\/?$/, "");

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
