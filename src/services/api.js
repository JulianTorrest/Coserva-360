import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // Asegúrate de tener tu API corriendo en esta dirección
});

export const getItems = async () => api.get('/items');
export const createItem = async (item) => api.post('/items', item);
export const updateItem = async (id, item) => api.put(`/items/${id}`, item);
export const deleteItem = async (id) => api.delete(`/items/${id}`);
