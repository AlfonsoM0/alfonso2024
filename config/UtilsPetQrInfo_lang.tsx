const es = {
  addresses: 'Direcciones',
  contactPhones: 'Teléfonos de contacto',
  sendWhatsAppTo: (phone: string) => `Enviar WhatsApp a ${phone}`,
  callTo: (phone: string) => `Llamar a ${phone}`,
  importantInfo: 'Información importante',
  foundPetMessage: (name: string) => `¡Encontré a ${name}!`,

  email_subject: '¡El QR de tu mascota se ha leído!',
  setEmailText: (location: string) => `Ubicación: ${location}`,
};

const en = {
  addresses: 'Addresses',
  contactPhones: 'Contact Phones',
  sendWhatsAppTo: (phone: string) => `Send WhatsApp to ${phone}`,
  callTo: (phone: string) => `Call ${phone}`,
  importantInfo: 'Important Information',
  foundPetMessage: (name: string) => `I found ${name}!`,

  email_subject: 'The QR of your pet has been read!',
  setEmailText: (location: string) => `Location: ${location}`,
};

export function setEmailHtml(appIsEnglish: boolean, location: string) {
  // generate html for the email in English and Spanish.
  // ("El QR de tu mascota se ha leído")
  // If location.length > 0 => create a link using location as the URL.
  const txt = appIsEnglish ? en : es;
  const html = `
    <!DOCTYPE html>
    <html lang="${appIsEnglish ? 'en' : 'es'}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${txt.email_subject}</title>
    </head>
    <body>
        <h1>${txt.email_subject}</h1>
        ${
          location.length > 0
            ? `<p>${txt.setEmailText(
                `<a href="${location}" target="_blank" rel="noopener noreferrer">${location}</a>`
              )}</p>`
            : ''
        }
    </body>
    </html>
  `;

  return html;
}

export const Lang = { es, en };
