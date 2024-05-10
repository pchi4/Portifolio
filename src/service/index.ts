import axios from "axios";

export const apiInstance = axios.create({
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
  baseURL: "https://api.github.com/",
  withCredentials: true,
});
