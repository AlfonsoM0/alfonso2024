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
  const dateAndTieme = new Date().toISOString(); // Añadido para consistencia

  // Obtener información de ubicación (asíncrono)
  // Usamos try/catch por si getUserLocation rechazara la promesa (aunque actualmente resuelve con error)
  let locationInfo = 'Location could not be determined.';
  let locationLink = '#';
  let locationInfoText = 'Location: Not available or permission denied.';

  try {
    const locationResult = await getUserLocation();

    if (locationResult.data) {
      locationInfo = `Location obtained: Lat ${locationResult.data.position.coords.latitude}, Lon ${locationResult.data.position.coords.longitude}`;
      locationLink = locationResult.data.GoogleMapsLocation;
      locationInfoText = `Location: ${locationResult.data.GoogleMapsLocation} (Lat: ${locationResult.data.position.coords.latitude}, Lon: ${locationResult.data.position.coords.longitude}, Accuracy: ${locationResult.data.position.coords.accuracy}m)`;
      console.info('User location obtained for contact form.');
    } else if (locationResult.error) {
      locationInfo = `Error getting location: ${locationResult.error.message} (Code: ${
        locationResult.error.message
      } (Code: ${locationResult.error.code ?? 'N/A'})</p>`;
      locationInfoText = `Location Error: ${locationResult.error.message} (Code: ${
        locationResult.error.code ?? 'N/A'
      })`;
      console.warn('Could not get user location for contact form:', locationResult.error.message);
    }
  } catch (error: any) {
    // Captura errores si getUserLocation es modificado para rechazar en lugar de resolver con error
    console.error('Error fetching location in formToEmail:', error);
    locationInfo = `An unexpected error occurred while getting location: ${
      error?.message || 'Unknown error'
    }`;
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
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://alfonso.ar/android-chrome-512x512.png" alt="alfonso.ar Logo" style="width: 80px; height: 80px; border-radius: 50%;">
          <h2 style="color: #0056b3; margin-top: 10px;">New Contact Form Submission</h2>
        </div>

        <h3 style="color: #0056b3; border-bottom: 2px solid #eee; padding-bottom: 5px;">Sender Information</h3>
        <p><strong>From:</strong> ${formRes.name} (<a href="mailto:${
      formRes.email
    }" style="color: #007bff; text-decoration: none;">${formRes.email}</a>)</p>
        <p><strong>Subject:</strong> ${formRes.subject}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="margin: 0 0 15px 0; padding: 10px 15px; border-left: 4px solid #007bff; background-color: #e9f5ff; color: #555;">
          ${formRes.consult.replace(/\n/g, '<br>')}
        </blockquote>

        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">

        <h3 style="color: #0056b3; border-bottom: 2px solid #eee; padding-bottom: 5px;">User Context Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px 0; font-weight: bold;">Date:</td>
            <td style="padding: 8px 0;">${dateAndTieme}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px 0; font-weight: bold;">Device Type:</td>
            <td style="padding: 8px 0;">${deviceInfo.device}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px 0; font-weight: bold;">Platform:</td>
            <td style="padding: 8px 0;">${deviceInfo.platform}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px 0; font-weight: bold;">User Agent:</td>
            <td style="padding: 8px 0; word-break: break-all;">${deviceInfo.userAgent}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px 0; font-weight: bold;">Location Info:</td>
            <td style="padding: 8px 0;">${locationInfo}</td>
          </tr>
          ${
            locationLink !== '#'
              ? `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 0; font-weight: bold;">Map Link:</td><td style="padding: 8px 0;"><a href="${locationLink}" target="_blank" style="color: #007bff; text-decoration: none;">View on Google Maps</a></td></tr>`
              : ''
          }
        </table>

        <p style="margin-top: 20px; font-size: 0.9em; color: #777;">This is an automated notification from the alfonso.ar Contact Form.</p>
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
Date: ${dateAndTieme}
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
