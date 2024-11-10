import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5125/api', 
});

export const fetchProducts = () => api.get('/products');
export const fetchUsers = () => api.get('/users');
export const fetchOrders = () => api.get('/orders');
