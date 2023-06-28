import { ReactNode, createContext, useCallback, useState } from "react";
import { AuthContextProps, UserLoggedInfo } from "./types";
import { AuthenticateDto, authService } from "@/services/auth";
import { httpClient } from "@/services/http-client";

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserLoggedInfo>(() => {
    const userStorage = localStorage.getItem('cws.user');

    if (userStorage) {
      const user = JSON.parse(userStorage);
      return user;
    }
    
    return {} as UserLoggedInfo;
  });

  const signIn = useCallback(async (data: AuthenticateDto) => {
    const response = await authService.auth(data);

    const { token, user } = response.data.data;
    httpClient.setAuthorization(`Bearer ${token}`);

    setUser(user);

    localStorage.setItem('cws.user', JSON.stringify(user));
    localStorage.setItem('cws.token', token);

  }, [])
  
  const signOut = useCallback(() => {
    localStorage.removeItem('cws.user');
    localStorage.removeItem('cws.token');

    setUser({} as UserLoggedInfo);
  }, [])
  
  const updateUserBalance = useCallback((balance: number) => {
    setUser(oldState => ({ ...oldState, balance }));
    localStorage.setItem('cws.user', JSON.stringify({ ...user, balance }));
  }, [user])

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, updateUserBalance }}>
      {children}
    </AuthContext.Provider>
  )
}
