import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://super-store-e2de4.firebaseio.com/',
});

export default instance;
