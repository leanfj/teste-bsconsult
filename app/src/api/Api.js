import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/produtos'
});

export const listData = () => api.get();

export const filterByColor = (argCor) => api.get(`?${argCor}`);


const Apis = {
  listData,
  filterByColor
};

export default Apis;