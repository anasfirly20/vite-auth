import { zodResolver } from "@hookform/resolvers/zod";
import { TFunction } from "i18next";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authSchema, AuthSchema } from "@/schemas/auth";

interface AuthFormProps {
  mode: "login" | "register";
  onSubmit: (values: AuthSchema) => void;
  onToggleMode: VoidFunction;
  isLoading: boolean;
  t: TFunction<"translation", undefined>;
}

export const AuthForm = ({
  mode,
  onSubmit,
  onToggleMode,
  isLoading,
  t,
}: AuthFormProps) => {
  const form = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {mode === "login" ? t("auth.login") : t("auth.register")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("auth.email")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("auth.emailPlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("auth.password")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("auth.password")}
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {mode === "register" && (
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {t("auth.confirmPasswordPlaceholder")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("auth.confirmPassword")}
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <Button type="submit" className="w-full" loading={isLoading}>
                {mode === "login" ? t("auth.signIn") : t("auth.signUp")}
              </Button>
              <div className="text-center mt-4">
                <Button
                  variant="link"
                  type="button"
                  onClick={onToggleMode}
                  className="text-sm"
                >
                  {mode === "login"
                    ? t("auth.noAccount")
                    : t("auth.haveAccount")}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
