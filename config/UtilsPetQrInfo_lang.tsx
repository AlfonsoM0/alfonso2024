const es = {
  addresses: 'Direcciones',
  contactPhones: 'Teléfonos de contacto',
  sendWhatsAppTo: (phone: string) => `Enviar WhatsApp a ${phone}`,
  callTo: (phone: string) => `Llamar a ${phone}`,
  importantInfo: 'Información importante',
  foundPetMessage: (name: string) => `¡Encontré a ${name}!`,
};

const en = {
  addresses: 'Addresses',
  contactPhones: 'Contact Phones',
  sendWhatsAppTo: (phone: string) => `Send WhatsApp to ${phone}`,
  callTo: (phone: string) => `Call ${phone}`,
  importantInfo: 'Important Information',
  foundPetMessage: (name: string) => `I found ${name}!`,
};

export const Lang = { es, en };
