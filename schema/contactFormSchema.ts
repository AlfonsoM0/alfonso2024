'use client';

import { z } from 'zod';
import lang from '@/config/ContactForm_lang';

export const contactFormSchemaEn = z.object({
  name: z.string().min(3, { message: lang.en.input_name_err }),
  email: z.string().email({ message: lang.en.input_email_err }),
  subject: z.string().min(3, { message: lang.en.input_subject_err }),
  consult: z.string().min(10, { message: lang.en.input_consult_err }),
});

export const contactFormSchemaEs = z.object({
  name: z.string().min(3, { message: lang.es.input_name_err }),
  email: z.string().email({ message: lang.es.input_email_err }),
  subject: z.string().min(3, { message: lang.es.input_subject_err }),
  consult: z.string().min(10, { message: lang.es.input_consult_err }),
});
