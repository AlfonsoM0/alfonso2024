const es = {
  input_name: 'Nombre completo',
  input_email: 'Email',
  input_consult: 'Mensaje',
  input_subject: 'Asunto',
  button_send: 'Enviar',
  send_success: 'Mensaje enviado con éxito',
  send_error: `El mensaje no pudo ser enviado a ${process.env.NEXT_PUBLIC_EMAIL_DEVELOPER}`,
};

const en = {
  input_name: 'Full name',
  input_email: 'Email',
  input_subject: 'Subject',
  input_consult: 'Message',
  button_send: 'Send',
  send_success: 'Message sent succesfully',
  send_error: `The message could not be sent to ${process.env.NEXT_PUBLIC_EMAIL_DEVELOPER}`,
};

const lang = { es, en };

export default lang;
