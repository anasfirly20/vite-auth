import { Navigate, RouteObject } from "react-router-dom";

import { ProtectedRoute } from "./protected-route";

import { AuthPage } from "@/pages/auth";
import { DashboardPage } from "@/pages/dashboard";

export const routes: RouteObject[] = [
  {
    path: "/login",
    element: <AuthPage mode="login" />,
  },
  {
    path: "/register",
    element: <AuthPage mode="register" />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
];
