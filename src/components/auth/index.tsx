import { zodResolver } from "@hookform/resolvers/zod";
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
  onToggleMode: () => void;
}

export const AuthForm = ({ mode, onSubmit, onToggleMode }: AuthFormProps) => {
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
            {mode === "login" ? "Login" : "Register"}
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your password"
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
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Confirm your password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <Button type="submit" className="w-full">
                {mode === "login" ? "Sign in" : "Sign up"}
              </Button>
              <div className="text-center mt-4">
                <Button
                  variant="link"
                  type="button"
                  onClick={onToggleMode}
                  className="text-sm"
                >
                  {mode === "login"
                    ? "Don't have an account? Register"
                    : "Already have an account? Login"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
