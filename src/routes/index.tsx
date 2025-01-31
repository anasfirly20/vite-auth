import { Navigate, RouteObject } from "react-router-dom";

import { AuthForm } from "@/components/auth";
import { ProtectedRoute } from "@/components/protected-route";
import { Dashboard } from "@/pages/dashboard";

export const routes: RouteObject[] = [
  {
    path: "/login",
    element: <AuthForm mode="login" />,
  },
  {
    path: "/register",
    element: <AuthForm mode="register" />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
];
