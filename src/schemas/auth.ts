import { z } from "zod";

export const authSchema = z
  .object({
    username: z.string().min(2).max(50),
    password: z.string().min(8).max(50),
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
      message: "Passwords don't match",
      path: ["confirmPassword"],
    }
  );

export type AuthSchema = z.infer<typeof authSchema>;
