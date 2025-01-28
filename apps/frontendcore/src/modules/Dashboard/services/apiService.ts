import { ApiService } from 'services/apiservice';

import { DashboardResponse } from '../types';

const BASE_URL = 'http://localhost:3381/api';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTczNzk2Njc3MywiZXhwIjoxNzM4MDAyNzczfQ.8_Pt1MHZQ8Y5lDHIVg7DYHEkE_qQO7vu5Df57pj6GUM'
// services/apiService.js
export const getDashboardInit = async (): Promise<DashboardResponse> => {
  const response = await ApiService.get(`/dashboards/findDashboardInit`, {});

  if (response.statusCode !== 200) {
    throw new Error('Failed to fetch dashboard data');
  }

  return (await response.data) as DashboardResponse;
};

// `${BASE_URL}/users?page=1&perPage=5&search=&orderBy=&lojaId=&roleId=&typeOrderBy=DESC&typeFilter=&tipoContaAConsiderarNaListagem=Todas`,
export const getUsers = async ({ params }) => {
  const stringObject = params.toString()
  const response = await fetch(`${BASE_URL}/users?${stringObject}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch dashboard data');
  }

  return await response.json();
};
