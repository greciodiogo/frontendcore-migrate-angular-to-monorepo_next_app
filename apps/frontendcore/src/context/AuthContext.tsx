import Router from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

import { AuthService } from 'lib/login';

type AuthContextType = {
  isAuthenticated: boolean;
  login: (token: never) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

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

  const login = async (data: { username: string; password: string }) => {
    const token = await authService.login({
      username: data.username,
      password: data.password,
    });

    if (!token) {
      throw new Error('Login failed: Invalid token');
    }

    setCookie(null, 'accessToken', JSON.stringify(token), {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    setIsAuthenticated(true);

    Router.push('/');

    return true;
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
