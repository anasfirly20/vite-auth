import { z } from "zod";

export const authSchema = (t: (arg: string) => string) =>
  z
    .object({
      email: z.string().email({ message: t("validation.email") }),
      password: z
        .string()
        .min(6, { message: t("validation.passwordMin") })
        .max(50, { message: t("validation.passwordMax") }),
      confirmPassword: z.string().optional(),
    })
    .refine(
      (data) => {
        if (data.confirmPassword) {
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
