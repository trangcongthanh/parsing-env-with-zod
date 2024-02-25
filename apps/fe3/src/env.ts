import * as z from 'zod';

const envScheme = z.object({
  VITE_FE3_API_HOST: z.string(),
});

export const env = envScheme.parse({
  VITE_FE3_API_HOST: import.meta.env.VITE_FE3_API_HOST,
});
