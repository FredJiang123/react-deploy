import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7084',
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
);

export default axiosInstance;
