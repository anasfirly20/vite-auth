import { useAuthPage } from "./functions";

import { AuthForm } from "@/components/auth/auth-form";

type AuthPageProps = {
  mode: "login" | "register";
};

export const AuthPage = (props: AuthPageProps) => {
  const { mode } = props;

  const { handleSubmit, handleToggleMode, isLoading } = useAuthPage({ mode });

  return (
    <AuthForm
      mode={mode}
      onSubmit={handleSubmit}
      onToggleMode={handleToggleMode}
      isLoading={isLoading}
    />
  );
};
