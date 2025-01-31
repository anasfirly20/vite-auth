import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import UserApi from "@/api/routes/user";
import { AuthCredentials } from "@/api/types";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/providers/auth-provider";
import { AuthSchema } from "@/schemas/auth";

type UseAuthPage = {
  mode: "login" | "register";
};

export const useAuthPage = (props: UseAuthPage) => {
  const { mode } = props;
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (body: AuthCredentials) => {
    try {
      const res = await UserApi.login({
        email: body.email,
        password: body.password,
      });

      if (res.token) {
        setToken(res.token);
        navigate("/dashboard", {
          replace: true,
        });
        toast({
          description: "✅ Login successful!",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        description:
          error instanceof AxiosError
            ? `❌ ${error.response?.data?.message || error.message}`
            : "❌ Login failed!",
      });
    }
  };

  const handleRegister = async (body: AuthCredentials) => {
    try {
      const res = await UserApi.register({
        email: body.email,
        password: body.password,
      });

      if (res.token) {
        setToken(res.token);
        navigate("/dashboard", {
          replace: true,
        });
        toast({
          description: "✅ Registration successful!",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        description:
          error instanceof AxiosError
            ? `❌ ${error.response?.data?.message || error.message}`
            : "❌ Registration failed!",
      });
    }
  };

  const handleSubmit = (values: AuthSchema) => {
    if (mode === "login") {
      handleLogin({
        email: values.email,
        password: values.password,
      });
    }

    if (mode === "register") {
      handleRegister({
        email: values.email,
        password: values.password,
      });
    }
  };

  const handleToggleMode = () => {
    navigate(mode === "login" ? "/register" : "/login");
  };

  return {
    handleSubmit,
    handleToggleMode,
  };
};
