import { z } from 'zod';
const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'Role is Requred',
    }),
    password: z.string().optional(),
  }),
});

export const UserValidation = { createUserZodSchema };
//   await createUserZodSchema.parseAsync(req)
