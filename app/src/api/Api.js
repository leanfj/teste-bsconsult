import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/produtos'
});

export const listData = () => api.get();

export const filterByColor = (argCor) => api.get(`?${argCor}`);
export const filterBySize = (argSize) => api.get(`?${argSize}`);
export const filterByPrice = (argPrice) => api.get(`?${argPrice}`);
export const filterData = (argConsult) => api.get(`?${argConsult}`);


const Apis = {
  listData,
  filterByColor,
  filterBySize,
  filterByPrice,
  filterData
};

export default Apis;