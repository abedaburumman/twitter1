import axios from "axios";
const jwtToken = localStorage.getItem("jwt")
export const API_BASE_URL = 'https://twitter1-server-production.up.railway.app/';
export const api = axios.create({
  baseURL: API_BASE_URL, 
  headers: {
    'Authorization':`Bearer ${jwtToken}`,
    'Content-Type': 'application/json',
  },
});

// Assuming you have the JWT token stored in a variable called jwtToken

