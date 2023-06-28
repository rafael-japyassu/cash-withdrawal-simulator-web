import { ReactNode } from "react";
import { AuthProvider } from "./auth";

interface ApplicationProviderProps {
  children: ReactNode;
}

export const ApplicationProvider = ({ children }: ApplicationProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};
