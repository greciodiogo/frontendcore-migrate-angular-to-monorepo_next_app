import { LoginProps } from 'modules/Dashboard/types';

import { StorageService } from './storage';
export class AuthService {
  auth = new StorageService();
  BASE_URL = 'http://localhost:3381/api';

  login = async ({ username, password }: LoginProps) => {
    try {
      return await fetch(`${this.BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.auth.setItemLocalStorage(data?.data);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            const token = {
              token: data?.data.token,
            };
            return token;
          } else {
            return false;
          }
        });
    } catch (error) {
      console.log('Error');
    }
  };
}
