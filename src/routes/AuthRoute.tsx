import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks";

interface AuthRouteProps {
  children: ReactNode;
}

export const AuthRoute = ({ children }: AuthRouteProps) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!Object.keys(user).length) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};
