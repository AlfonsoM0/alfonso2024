'use client';

import { z } from 'zod';
import lang from '@/config/ContactForm_lang';

export const contactFormSchemaEn = z.object({
  name: z.string().min(3, { message: lang.en.inputNameErr }),
  email: z.string().email({ message: lang.en.inputEmailErr }),
  subject: z.string().min(3, { message: lang.en.inputSubjectErr }),
  consult: z.string().min(10, { message: lang.en.inputConsultErr }),
});

export const contactFormSchemaEs = z.object({
  name: z.string().min(3, { message: lang.es.inputEmailErr }),
  email: z.string().email({ message: lang.es.inputEmailErr }),
  subject: z.string().min(3, { message: lang.es.inputSubjectErr }),
  consult: z.string().min(10, { message: lang.es.inputConsultErr }),
});
