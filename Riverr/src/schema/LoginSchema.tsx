import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().nonempty("No empty").email("Email undefined"),
  password: z.string().nonempty("No empty"),
});

export type LoginType = z.infer<typeof LoginSchema>;
