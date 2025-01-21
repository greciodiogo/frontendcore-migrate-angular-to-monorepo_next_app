/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { ApiService } from 'api';

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface RequestConfig extends AxiosRequestConfig {}
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Response<T = any> extends AxiosResponse<T> {}
export async function fetchData<T>(url: string): Promise<Response<T>> {
  try {
    const response = await ApiService.get<T, Response<T>>(url);
    return response;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
}
