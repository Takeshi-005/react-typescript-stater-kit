import { AxiosError } from 'axios';
export interface ApiConfig {
  baseURL: string;
  timeout: number;
}

export type Products = {
  id: number;
  title: string;
  description: string;
  availableSizes: string[];
};

export type ApiState = {
  products: Products[];
  isLoading: boolean;
  error?: AxiosError | null;
}
