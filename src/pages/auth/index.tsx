import { useNavigate } from "react-router-dom";

import { AuthForm } from "@/components/auth";
import { useAuth } from "@/providers/auth-provider";
import { AuthSchema } from "@/schemas/auth";

type AuthPageProps = {
  mode: "login" | "register";
};

export const AuthPage = (props: AuthPageProps) => {
  const { mode } = props;
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (values: AuthSchema) => {
    if (mode === "login") {
      login({ username: values.username });
      navigate("/dashboard");
    } else {
      console.log("Register:", values);
    }
  };

  const handleToggleMode = () => {
    navigate(mode === "login" ? "/register" : "/login");
  };

  return (
    <AuthForm
      mode={mode}
      onSubmit={handleSubmit}
      onToggleMode={handleToggleMode}
    />
  );
};
