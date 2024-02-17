'use client';

import lang from '@/config/ContactForm_lang';
import useUserStore from '@/store/userStore';

export default function ContactForm() {
  const { appIsEnglish } = useUserStore((store) => store);
  const txt = appIsEnglish ? lang.en : lang.es;

  return (
    <div className="">
      <form action="" method="post" className="max-w-sm m-auto">
        <div>
          <label htmlFor="name">{txt.input_name}</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">{txt.input_email}</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="subject">{txt.input_subject}</label>
          <input type="text" name="subject" id="subject" />
        </div>
        <div>
          <label htmlFor="consult">{txt.input_consult}</label>
          <textarea name="consult" id="consult" />
        </div>

        <div>
          <input type="submit" value={txt.button_send} />
        </div>
      </form>
    </div>
  );
}
