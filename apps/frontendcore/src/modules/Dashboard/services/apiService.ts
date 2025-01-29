import { ApiService } from 'services/apiService';

import { DashboardResponse } from '../types';

export const getDashboardInit = async (): Promise<DashboardResponse> => {
  const response = await ApiService.get(`/dashboards/findDashboardInit`, {});
  return response.data as DashboardResponse;
};
