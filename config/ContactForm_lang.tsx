const es = {
  pageTitle: 'Estemos en contacto',
  inputName: 'Nombre completo',
  inputEmail: 'Email',
  inputSubject: 'Asunto',
  inputConsult: 'Mensaje',
  buttonSend: 'Enviar',
  sendSuccess: 'Mensaje enviado con éxito',
  sendError: `El mensaje no pudo ser enviado a ${process.env.NEXT_PUBLIC_EMAIL_WEB}`,
  inputNameErr: 'Debe contener al menos tres caracteres.',
  inputEmailErr: 'Debe contener un email válido.',
  inputSubjectErr: 'Debe contener al menos cinco caracteres.',
  inputConsultErr: 'Debe contener al menos diez caracteres.',
};

const en = {
  pageTitle: "Let's be in touch",
  inputName: 'Full name',
  inputEmail: 'Email',
  inputSubject: 'Subject',
  inputConsult: 'Message',
  buttonSend: 'Send',
  sendSuccess: 'Message sent successfully',
  sendError: `The message could not be sent to ${process.env.NEXT_PUBLIC_EMAIL_WEB}`,
  inputNameErr: 'It must contain at least three characters.',
  inputEmailErr: 'It must be a valid email.',
  inputSubjectErr: 'It must contain at least five characters.',
  inputConsultErr: 'It must contain at least ten characters.',
};

const lang = { es, en };

export default lang;
