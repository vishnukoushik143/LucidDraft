import axios from "axios";

const API_URL = "https://lucid-draft.vercel.app/"; // Replace with your API URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
