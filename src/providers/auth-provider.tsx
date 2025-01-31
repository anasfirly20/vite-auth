import Cookies from "js-cookie";
import { createContext, useContext } from "react";

interface AuthContextType {
  token: string | undefined;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const setToken = (token: string) => {
    Cookies.set("auth-token", token, { secure: true });
  };

  const clearToken = () => {
    Cookies.remove("auth-token");
  };

  const token = Cookies.get("auth-token");

  return (
    <AuthContext.Provider value={{ token, setToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
