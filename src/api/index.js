import axios from 'axios';

const URL = 'https://shop-app-tranlamm.herokuapp.com';

export const fetchProducts = () => axios.get(`${URL}/products`);
export const createProduct = (payload) => axios.post(`${URL}/products/add`, payload);
export const updateProduct = (payload) => axios.patch(`${URL}/products/update`, payload);
export const deleteProduct = (payload) => axios.delete(`${URL}/products/delete`, { data: payload });
