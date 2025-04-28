const es = {
  addresses: 'Direcciones',
  contactPhones: 'Teléfonos de contacto',
  sendWhatsAppTo: (phone: string) => `Enviar WhatsApp a ${phone}`,
  callTo: (phone: string) => `Llamar a ${phone}`,
  importantInfo: 'Información importante',
  foundPetMessage: (name: string) => `¡Encontré a ${name}!`,

  email_subject: '¡El QR de tu mascota se ha leído!',
  setEmailText: (location: string) => `Ubicación: ${location}`,

  // Textos para donación
  donation_request: 'Si te resultó útil esta aplicación, por favor considera donarme un cafesito.',
  transfer_details: 'Datos para transferencia:',
  cbu_label: 'CBU:',
  alias_label: 'Alias:',
  recipient_label: 'Nombre:', // Nueva etiqueta para el nombre
  copy_button_text: 'Copiar',
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

  // Donation texts
  donation_request: 'If you found this application useful, please consider donating a coffee.',
  transfer_details: 'Transfer details:',
  cbu_label: 'CBU:',
  alias_label: 'Alias:',
  recipient_label: 'Name:', // New label for the name
  copy_button_text: 'Copy',
};

// Datos de transferencia
const CBU = '1430001713024337790016';
const ALIAS = 'alfonso.ar';
const RECIPIENT_NAME = 'Alfonso Montes de Oca'; // Nombre completo
const APP_ICON_URL = 'https://alfonso.ar/android-chrome-512x512.png'; // URL del icono

export function setEmailHtml(appIsEnglish: boolean, location: string) {
  const txt = appIsEnglish ? en : es;
  // Estilos básicos (puedes personalizarlos más)
  const boxStyle =
    'border: 1px solid #ccc; padding: 15px; margin-top: 20px; background-color: #f9f9f9; border-radius: 5px;';
  const buttonStyle =
    'display: inline-block; background-color: #e0e0e0; color: #333; padding: 5px 10px; margin-left: 10px; border-radius: 3px; font-family: sans-serif; font-size: 0.9em; text-decoration: none; vertical-align: middle;'; // Alineación vertical añadida
  const iconStyle = 'max-width: 60px; height: auto; display: block; margin: 0 auto 15px auto;'; // Estilo para el icono centrado

  const html = `
    <!DOCTYPE html>
    <html lang="${appIsEnglish ? 'en' : 'es'}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${txt.email_subject}</title>
        <style>
            /* Estilos generales */
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            h1 { color: #222; }
            a { color: #007bff; text-decoration: none; }
            a:hover { text-decoration: underline; }
            hr { border: 0; border-top: 1px solid #eee; margin: 25px 0; }

            /* Estilos específicos */
            .app-icon { ${iconStyle} }
            .transfer-box { ${boxStyle} }
            .copy-button { ${buttonStyle} }
            .transfer-details p { margin: 10px 0; line-height: 1.4; } /* Ajuste de margen y línea */
            .transfer-details strong { display: inline-block; min-width: 50px; } /* Para alinear etiquetas */
        </style>
    </head>
    <body>
        <!-- Icono de la App -->
        <img src="${APP_ICON_URL}" alt="App Icon" class="app-icon">

        <h1>${txt.email_subject}</h1>
        ${
          location.length > 0
            ? `<p>${txt.setEmailText(
                `<a href="${location}" target="_blank" rel="noopener noreferrer">${location}</a>`
              )}</p>`
            : ''
        }

        <hr>

        <p>${txt.donation_request}</p>

        <div class="transfer-box">
            <strong>${txt.transfer_details}</strong>
            <div class="transfer-details">
                 <p>
                    <strong>${txt.recipient_label}</strong> ${RECIPIENT_NAME}
                </p>
                <p>
                    <strong>${txt.cbu_label}</strong> ${CBU}
                    <span class="copy-button">${txt.copy_button_text}</span> <!-- Botón visual -->
                </p>
                <p>
                    <strong>${txt.alias_label}</strong> ${ALIAS}
                    <span class="copy-button">${txt.copy_button_text}</span> <!-- Botón visual -->
                </p>
            </div>
        </div>

    </body>
    </html>
  `;

  return html;
}

export const Lang = { es, en };
