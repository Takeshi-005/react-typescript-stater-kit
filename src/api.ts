import axios from 'axios';
import { ApiConfig, Products } from '../types/api';

const baseConfig:ApiConfig = {
  baseURL: "http://localhost:8888/",
  timeout: 10000
}

export const api = (options?: ApiConfig) => {
  const config = {
    ...baseConfig,
    ...options
  };

  const instance = axios.create(config);
  const getApi = async (params:{}) => {
    try {
      const response = await instance.get("api/data", {params});
      if (response.status !== 200) {
        throw new Error("Server Error");
      }

      const data: Products = response.data.products
      return data;
    } catch (err) {
      throw err;
    }
  };

  return getApi
}
