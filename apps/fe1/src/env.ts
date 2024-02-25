import * as z from 'zod';

const envScheme = z.object({
  VITE_FE1_API_HOST: z.string(),
});

export const env = envScheme.parse(import.meta.env);
