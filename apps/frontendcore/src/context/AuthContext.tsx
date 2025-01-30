import Router from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import { createContext, ReactNode, useState, useEffect } from 'react';

import { AuthService } from 'lib/login';
import { AuthContextType } from 'types/context';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authService = new AuthService();

  useEffect(() => {
    // Verifica se o token está presente no localStorage
    const { accessToken: token } = parseCookies();

    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (data: { username: string; password: string }): Promise<boolean> => {
    const token = await authService.login({
      username: data.username,
      password: data.password,
    });

    setCookie(null, 'accessToken', JSON.stringify(token), {
      maxAge: 60 * 60 * 1, // 1 hora
    });

    setIsAuthenticated(true);

    await Router.push('/dashboard'); // Aguarde a navegação antes de retornar

    return true;
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};
