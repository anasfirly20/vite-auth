import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import UserApi from "@/api/routes/user";
import { useAuth } from "@/providers/auth-provider";

export const useDashboardPage = () => {
  const { token, clearToken } = useAuth();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    clearToken();
    navigate("/", {
      replace: true,
    });
    handleCloseModal();
  };

  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => UserApi.getMe(),
    enabled: !!token,
  });

  return {
    data,
    isLoading,
    handleLogout,
    showModal,
    handleShowModal,
    handleCloseModal,
  };
};
