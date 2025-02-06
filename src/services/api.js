// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchListings = () => api.get('/listings');
export const login = (credentials) => api.post('/login', credentials);

