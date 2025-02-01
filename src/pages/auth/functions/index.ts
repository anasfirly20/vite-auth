import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { TFunction } from "i18next";
import { useNavigate } from "react-router-dom";

import UserApi from "@/api/routes/user";
import { AuthCredentials } from "@/api/types";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/providers/auth-provider";
import { AuthSchema } from "@/schemas/auth";

interface UseAuthPageProps {
  mode: "login" | "register";
  t: TFunction<"translation", undefined>;
}

export const useAuthPage = ({ mode, t }: UseAuthPageProps) => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const loginMutation = useMutation({
    mutationFn: (body: AuthCredentials) => UserApi.login(body),
    onSuccess: (data) => {
      if (data.token) {
        setToken(data.token);
        navigate("/dashboard", { replace: true });
        toast({
          description: `✅ ${t("notification.success.login")}`,
        });
      }
    },
    onError: (error: Error) => {
      console.error(error);
      toast({
        description:
          error instanceof AxiosError
            ? `❌ ${error.response?.data?.message || error.message}`
            : `❌ ${t("notification.error.login")}`,
      });
    },
  });

  const registerMutation = useMutation({
    mutationFn: (body: AuthCredentials) => UserApi.register(body),
    onSuccess: (data) => {
      if (data.token) {
        setToken(data.token);
        navigate("/dashboard", { replace: true });
        toast({
          description: `✅ ${t("notification.success.register")}`,
        });
      }
    },
    onError: (error: Error) => {
      console.error(error);
      toast({
        description:
          error instanceof AxiosError
            ? `❌ ${error.response?.data?.message || error.message}`
            : `❌ ${t("notification.error.register")}`,
      });
    },
  });

  const handleSubmit = (values: AuthSchema) => {
    const credentials = {
      email: values.email,
      password: values.password,
    };

    if (mode === "login") {
      loginMutation.mutate(credentials);
    }

    if (mode === "register") {
      registerMutation.mutate(credentials);
    }
  };

  const handleToggleMode = () => {
    navigate(mode === "login" ? "/register" : "/login");
  };

  return {
    handleSubmit,
    handleToggleMode,
    isLoading: loginMutation.isPending || registerMutation.isPending,
  };
};
