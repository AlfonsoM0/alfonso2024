'use server';

import nodemailer from 'nodemailer';

export type EmailParams = {
  bussinessName: string;
  fromName: string;
  fromEmail: string;
  to: string[];
  subject: string;
  text?: string;
  html?: string;
};

export async function sendEmail({
  bussinessName,
  fromName,
  fromEmail,
  to,
  subject,
  text,
  html,
}: EmailParams) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_CONTACT_USER,
      pass: process.env.EMAIL_CONTACT_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"${bussinessName} (${fromName})" <${fromEmail}>`, // sender address
      to: to.toString(), // list of receivers
      subject, // Subject line
      text, // plain text body
      html, // html body
    });

    console.info('Message sent: %s', info.messageId);

    return true;
    //
  } catch (error) {
    console.error(error);

    return false;
  }
}
