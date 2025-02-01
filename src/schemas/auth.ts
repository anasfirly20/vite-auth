import { z } from "zod";

export const authSchema = (
  t: (arg: string) => string,
  mode: "login" | "register"
) =>
  z
    .object({
      email: z
        .string()
        .min(1, { message: t("validation.required") })
        .email({ message: t("validation.email") }),
      password: z
        .string()
        .min(6, { message: t("validation.passwordMin") })
        .max(50, { message: t("validation.passwordMax") }),
      confirmPassword:
        mode === "register"
          ? z.string().min(1, { message: t("validation.required") })
          : z.string().optional(),
    })
    .refine(
      (data) => {
        if (mode === "register") {
          return data.password === data.confirmPassword;
        }
        return true;
      },
      {
        message: t("validation.passwordMatch"),
        path: ["confirmPassword"],
      }
    );

export type AuthSchema = z.infer<ReturnType<typeof authSchema>>;
