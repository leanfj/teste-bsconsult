import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/produtos'
});

export const listData = () => api.get();

export const filterByColor = (argCor) => api.get(`?${argCor}`);
export const filterBySize = (argSize) => api.get(`?${argSize}`);


const Apis = {
  listData,
  filterByColor,
  filterBySize
};

export default Apis;