import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import UserApi from "@/api/routes/user";
import { useAuth } from "@/providers/auth-provider";

export const useDashbaord = () => {
  const { token, clearToken } = useAuth();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => UserApi.getMe(),
    enabled: !!token,
  });

  const handleLogout = () => {
    clearToken();
    navigate("/", {
      replace: true,
    });
  };

  return {
    data,
    isLoading,
    handleLogout,
  };
};
