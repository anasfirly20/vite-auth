import { z } from "zod";

export const authSchema = z
  .object({
    email: z.string().email(),
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
