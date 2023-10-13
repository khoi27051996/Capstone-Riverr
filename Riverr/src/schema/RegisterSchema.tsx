import { z } from "zod";

export const RegisterSchema = z.object({
  id: z
    .string()
    .nonempty("No empty")
    .min(3, "Minimum 3 characters")
    .max(10, "Maximum 10 characters")
    .regex(/^[0-9]+$/, "ID must be number"),
  email: z.string().nonempty("No empty").email("Email undefined"),
  password: z.string().nonempty("No empty"),
  name: z.string(),
  phone: z
    .string()
    .nonempty("No empty")
    .regex(/^[0-9]+$/, "Phone must be number"),
  birthday: z.string(),
  // gender: z.string()
  // certification: z.string().nonempty("No Empty"),
  // skill: z.string().nonempty("No Empty")
});

export type RegisterType = z.infer<typeof RegisterSchema>;
