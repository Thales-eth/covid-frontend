import axios from "axios";
import { API_URL } from "../consts/env.consts";

export const apiClient = axios.create({
  baseURL: API_URL || "http://localhost:3200/api",
  headers: {
    "Content-Type": "application/json",
  },
});
