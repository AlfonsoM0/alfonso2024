import { contactFormSchemaEn } from '@/schema/contactFormSchema';
import { EmailParams } from '@/server/actions/sendEmail';
import getUserDevice from '@/utils/getUserDevice'; // Importar getUserDevice
import getUserLocation from '@/utils/getUserLocation'; // Importar getUserLocation
import { z } from 'zod';

// La función ahora es async y devuelve una Promise<EmailParams>
export default async function formToEmail(
  formRes: z.infer<typeof contactFormSchemaEn>
): Promise<EmailParams> {
  const webEmail = process.env.NEXT_PUBLIC_EMAIL_WEB || '';
  const myEmail = process.env.NEXT_PUBLIC_EMAIL_MY || '';

  // Obtener información del dispositivo (síncrono)
  const deviceInfo = getUserDevice();

  // Obtener información de ubicación (asíncrono)
  // Usamos try/catch por si getUserLocation rechazara la promesa (aunque actualmente resuelve con error)
  let locationInfoHtml = '<p><strong>Location:</strong> Not available or permission denied.</p>';
  let locationInfoText = 'Location: Not available or permission denied.';

  try {
    const locationResult = await getUserLocation();

    if (locationResult.data) {
      locationInfoHtml = `
        <p><strong>Location:</strong> <a href="${locationResult.data.GoogleMapsLocation}" target="_blank" style="color: #007bff; text-decoration: none;">View on Google Maps</a></p>
        <p style="margin-top: 5px;"><strong>Coordinates:</strong> Lat: ${locationResult.data.position.coords.latitude}, Lon: ${locationResult.data.position.coords.longitude}</p>
        <p style="margin-top: 5px;"><strong>Accuracy:</strong> ${locationResult.data.position.coords.accuracy} meters</p>
      `;
      locationInfoText = `Location: ${locationResult.data.GoogleMapsLocation} (Lat: ${locationResult.data.position.coords.latitude}, Lon: ${locationResult.data.position.coords.longitude}, Accuracy: ${locationResult.data.position.coords.accuracy}m)`;
    } else if (locationResult.error) {
      locationInfoHtml = `<p><strong>Location Error:</strong> ${
        locationResult.error.message
      } (Code: ${locationResult.error.code ?? 'N/A'})</p>`;
      locationInfoText = `Location Error: ${locationResult.error.message} (Code: ${
        locationResult.error.code ?? 'N/A'
      })`;
    }
  } catch (error: any) {
    // Captura errores si getUserLocation es modificado para rechazar en lugar de resolver con error
    console.error('Error fetching location in formToEmail:', error);
    locationInfoHtml = `<p><strong>Location Error:</strong> Failed to retrieve location (${
      error?.message || 'Unknown error'
    })</p>`;
    locationInfoText = `Location Error: Failed to retrieve location (${
      error?.message || 'Unknown error'
    })`;
  }

  const infoForEmail: EmailParams = {
    bussinessName: 'alfonso.ar',
    fromName: 'Contact Form - alfonso.ar', // Más descriptivo
    fromEmail: webEmail,
    subject: `Contact Form: ${formRes.subject}`, // Añadir prefijo al asunto
    to: [myEmail],
    html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #f8f9fa; padding: 15px 20px; border-bottom: 1px solid #ddd; display: flex; align-items: center;">
        <img src="https://alfonso.ar/android-chrome-512x512.png" alt="alfonso.ar Logo" style="width: 40px; height: 40px; margin-right: 15px; border-radius: 50%;">
        <h2 style="margin: 0; color: #0056b3; font-size: 1.5em;">New Contact Form Submission</h2>
      </div>
      <div style="padding: 20px;">
        <h3 style="color: #0056b3; border-bottom: 2px solid #eee; padding-bottom: 5px; margin-top: 0;">User Message</h3>
        <p style="margin-bottom: 5px;"><strong>From:</strong> ${formRes.name} (<a href="mailto:${
      formRes.email
    }" style="color: #007bff; text-decoration: none;">${formRes.email}</a>)</p>
        <p style="margin-top: 5px;"><strong>Subject:</strong> ${formRes.subject}</p>
        <p style="margin-top: 15px;"><strong>Message:</strong></p>
        <blockquote style="margin: 0 0 15px 0; padding: 10px 15px; border-left: 4px solid #007bff; background-color: #e9f5ff; color: #555;">
          ${formRes.consult.replace(/\n/g, '<br>')}
        </blockquote>
      </div>
      <div style="background-color: #f8f9fa; padding: 15px 20px; border-top: 1px solid #ddd;">
        <h3 style="color: #0056b3; border-bottom: 2px solid #eee; padding-bottom: 5px; margin-top: 0;">User Context</h3>
        <p style="margin-bottom: 5px;"><strong>Device:</strong> ${deviceInfo.device}</p>
        <p style="margin-top: 5px; margin-bottom: 5px;"><strong>Platform:</strong> ${
          deviceInfo.platform
        }</p>
        <p style="margin-top: 5px; margin-bottom: 15px; word-break: break-all;"><strong>User Agent:</strong> ${
          deviceInfo.userAgent
        }</p>
        ${locationInfoHtml}
      </div>
      <div style="text-align: center; padding: 10px; font-size: 0.8em; color: #aaa; background-color: #f1f1f1;">
        Sent from alfonso.ar contact form
      </div>
    </div>
    `,
    text: `
New Contact Form Submission
-----------------------------
From: ${formRes.name} <${formRes.email}>
Subject: ${formRes.subject}
Message:
${formRes.consult}

--- User Context ---
Device: ${deviceInfo.device}
Platform: ${deviceInfo.platform}
User Agent: ${deviceInfo.userAgent}
${locationInfoText}
-----------------------------
Sent from alfonso.ar
    `,
  };

  return infoForEmail;
}
