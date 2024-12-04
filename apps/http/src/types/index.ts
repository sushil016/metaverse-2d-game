import { z } from "zod";

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  role: z.enum(["ADMIN", "USER"]),
});

export { signUpSchema };

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export { signInSchema };
