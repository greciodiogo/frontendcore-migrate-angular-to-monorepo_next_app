import { DashboardResponse } from '../types';

const BASE_URL = 'http://localhost:3381/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTczNzQ0ODc4OSwiZXhwIjoxNzM3NDg0Nzg5fQ.DUDw5UT6kBa9MohMPhH-zvW6lHvLRdRS_lesU0p199A';

// services/apiService.js
export const getDashboardInit = async (): Promise<DashboardResponse> => {
  const response = await fetch(`${BASE_URL}/findDashboardInit`, {
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

  return (await response.json()) as DashboardResponse;
};
