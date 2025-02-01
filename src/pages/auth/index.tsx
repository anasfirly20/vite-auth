import { useTranslation } from "react-i18next";

import { useAuthPage } from "./functions";

import { AuthForm } from "@/components/auth/auth-form";

interface AuthPageProps {
  mode: "login" | "register";
}

const AuthPage = ({ mode }: AuthPageProps) => {
  const { t } = useTranslation();

  const { handleSubmit, handleToggleMode, isLoading } = useAuthPage({
    mode,
    t,
  });

  return (
    <AuthForm
      mode={mode}
      onSubmit={handleSubmit}
      onToggleMode={handleToggleMode}
      isLoading={isLoading}
      t={t}
    />
  );
};

AuthPage.displayName = "AuthPage";

export default AuthPage;
