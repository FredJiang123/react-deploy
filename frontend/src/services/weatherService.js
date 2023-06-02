import axios from '../utils/axios';

const getAll = () => {
  return axios.get(`weatherforecast`);
};

const exportedObject = {
  getAll,
};

export default exportedObject;
