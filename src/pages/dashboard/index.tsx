import { useAuth } from "@/providers/auth-provider";

export const DashboardPage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.username}!</h1>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};
