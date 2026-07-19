import axios from "axios";
import { API_BASE_URL, API_TIMEOUT } from "./config";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
