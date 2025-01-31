import { Navigate } from "react-router-dom";

import { useAuth } from "@/providers/auth-provider";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
