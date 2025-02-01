import Cookies from "js-cookie";
import { createContext, useContext, useState } from "react";

interface AuthContextType {
  token: string | undefined;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setTokenState] = useState<string | undefined>(() =>
    Cookies.get("auth-token")
  );

  const setToken = (newToken: string) => {
    Cookies.set("auth-token", newToken, { secure: true });
    setTokenState(newToken);
  };

  const clearToken = () => {
    Cookies.remove("auth-token");
    setTokenState(undefined);
  };

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
