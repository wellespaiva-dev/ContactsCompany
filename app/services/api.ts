import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.1.113:3000/',
});
