import { z } from "zod";

export const AccountInfo = z.object({
  name: z.string().nonempty("No Empty"),
  phone: z
    .string()
    .nonempty("No Empty")
    .regex(/^[0-9]+$/, "Phone is Number"),
  birthday: z
    .string()
    .nonempty("No Empty")
    .regex(/^[0-9]+$/, "Birthday is Number"),
  avatar: z.string().nonempty("No Empty"),
});

export type AccountType = z.infer<typeof AccountInfo>;
