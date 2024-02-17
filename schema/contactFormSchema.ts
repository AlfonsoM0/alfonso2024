'use client';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(3, { message: 'It must contain at least three characters.' }),
  email: z.string().email({ message: 'It must be a valid email' }),
  subject: z.string().min(3, { message: 'It must contain at least five characters.' }),
  consult: z.string().min(10, { message: 'It must contain at least ten characters.' }),
});

export default contactFormSchema;
