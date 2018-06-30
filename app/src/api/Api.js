import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/produtos'
});

export const listProducts = (argLimit) => api.get(`?_limit=${argLimit}`);

const Apis = {
  listProducts
};

export default Apis;