const es = {
  pageTitle: 'Estemos en contacto',
  input_name: 'Nombre completo',
  input_email: 'Email',
  input_consult: 'Mensaje',
  input_subject: 'Asunto',
  button_send: 'Enviar',
  send_success: 'Mensaje enviado con éxito',
  send_error: `El mensaje no pudo ser enviado a ${process.env.NEXT_PUBLIC_EMAIL_WEB}`,

  input_name_err: 'Debe contener al menos tres caracteres.',
  input_email_err: 'Debe contener un email válido.',
  input_subject_err: 'Debe contener al menos cinco caracteres.',
  input_consult_err: 'Debe contener al menos diez caracteres.',
};

const en = {
  pageTitle: "Let's be in touch",
  input_name: 'Full name',
  input_email: 'Email',
  input_subject: 'Subject',
  input_consult: 'Message',
  button_send: 'Send',
  send_success: 'Message sent succesfully',
  send_error: `The message could not be sent to ${process.env.NEXT_PUBLIC_EMAIL_WEB}`,

  input_name_err: 'It must contain at least three characters.',
  input_email_err: 'It must be a valid email.',
  input_subject_err: 'It must contain at least five characters.',
  input_consult_err: 'It must contain at least ten characters.',
};

const lang = { es, en };

export default lang;
