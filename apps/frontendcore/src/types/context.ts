export type AuthContextType = {
  isAuthenticated: boolean;
  login: (data: { username: string; password: string }) => Promise<boolean>;
  logout: () => void;
};
