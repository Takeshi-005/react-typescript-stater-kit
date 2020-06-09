import axios from 'axios';

// import { User } from './models';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: 'https://madefor.github.io/postal-code-api/api/v1/',
  timeout: 10000
};

export const getApi = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig
  };
  const instance = axios.create(config);

  const getMembers = async (zipcode: string) => {
    const response = await instance.get(
      `/${zipcode.slice(0, 3)}/${zipcode.slice(3, 7)}.json`
    );

    if (response.status !== 200) {
      throw new Error('Server Error');
    }
    const members = response.data;

    return members;
  };

  return getMembers;
};
