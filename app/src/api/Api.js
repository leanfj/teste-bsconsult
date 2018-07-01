import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/produtos'
});

export const listProducts = () => api.get();

export const filterByColor = (argCor) => api.get(`?${argCor}`);

const Apis = {
  listProducts,
  filterByColor
};

export default Apis;