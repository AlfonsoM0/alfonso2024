import { contactFormSchemaEn } from '@/schema/contactFormSchema';
import { EmailParams } from '@/server/actions/sendEmail';
import { z } from 'zod';

export default function formToEmail(formRes: z.infer<typeof contactFormSchemaEn>) {
  const webEmail = process.env.NEXT_PUBLIC_EMAIL_WEB || '';
  const myEmail = process.env.NEXT_PUBLIC_EMAIL_MY || '';

  const infoForEmail: EmailParams = {
    bussinessName: 'alfonso.ar',
    fromName: 'contact form',
    fromEmail: webEmail,
    subject: formRes.subject,
    to: [myEmail],
    html: `
    <div>
    <p>
      <b>From: </b>${formRes.name} | ${formRes.email}
      <br />
      <br />
      <b>Message</b>
      <br />
      ${formRes.consult}
    </p>
  </div>
    `,
    text: `${formRes.name} <${formRes.email}> | ${formRes.consult}`,
  };

  return infoForEmail;
}
