import axios from 'axios';
import { apiConfig } from './api.config';

const axiosInstance = axios.create({
  ...apiConfig,
  withCredentials: true,
});

const getTodos = async () => {
  const { data } = await axiosInstance.get('https://jsonplaceholder.typicode.com/todos');
  return data;
}

export { getTodos };
