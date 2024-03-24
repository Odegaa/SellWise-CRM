/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

import { BaseURL } from '../config';

const api = axios.create({ baseURL: BaseURL });
const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${
    JSON.parse(`${localStorage.getItem('token')}`).state.token
  }`;
  return config;
};

api.interceptors.request.use(authInterceptor);
export { api };
