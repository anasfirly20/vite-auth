import { Navigate } from "react-router-dom";

import { useAuth } from "@/providers/auth-provider";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
