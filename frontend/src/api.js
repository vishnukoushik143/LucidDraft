import axios from "axios";

const API_URL = "https://lucid-draft.vercel.app/";
// const API_URL = "http://localhost:5000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
