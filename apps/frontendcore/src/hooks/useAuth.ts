import { AuthService } from 'lib/login';

export const useAuth = () => {
  const authService = new AuthService();

  const login = async (username: string, password: string) => {
    return await authService.login({ username, password });
  };

  return { login };
};
