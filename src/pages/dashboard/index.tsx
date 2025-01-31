import { useNavigate } from "react-router-dom";

import { useAuth } from "@/providers/auth-provider";

export const DashboardPage = () => {
  const { token, clearToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearToken();
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome, {token}!</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};
