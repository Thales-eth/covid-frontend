import axios from "axios"
import { API_URL } from "../consts/env.consts"

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})
