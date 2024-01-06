// types.ts
import { z } from 'zod';

const schemaForm = z.object({
  name: z.string().min(2).max(25),
  email: z.string().email(),
  message: z.string().min(5).max(500),
});

export type FormValues = z.infer<typeof schemaForm>;
