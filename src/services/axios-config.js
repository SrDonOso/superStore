import axios from 'axios';

/**
 * Base configuration for axios
 */
const instance = axios.create({
  baseURL: 'https://super-store-e2de4.firebaseio.com/',
});

export default instance;
