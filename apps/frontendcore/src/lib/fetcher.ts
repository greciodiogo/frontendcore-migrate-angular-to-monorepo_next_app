import { ApiService } from 'services/apiService';

// eslint-disable-next-line import/no-default-export
export default async function fetcher(url: string, params: string) {
  const response = await ApiService.get(`/${url}?${params}`);
  return response.data;
}
