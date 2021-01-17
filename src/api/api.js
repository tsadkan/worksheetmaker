import axios from 'axios';

const API = axios.create({
  baseURL: process.env.VUE_APP_API_ROOT,
  timeout: 3000,
});

export default API;
