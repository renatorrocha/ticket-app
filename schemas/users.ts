import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3, "Name is required.").max(255).describe("User Name"),

  username: z
    .string()
    .min(3, "Username is required.")
    .max(255)
    .describe("User Username"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(255)
    .optional()
    .or(z.literal(""))
    .describe("User Password"),

  role: z.string().min(3, "Role is required.").max(10).describe("User Role"),
});

export type UserFormData = z.infer<typeof userSchema>;