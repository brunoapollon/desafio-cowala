import axios from 'axios';

const apiConversion = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/last',
});

export default apiConversion;
