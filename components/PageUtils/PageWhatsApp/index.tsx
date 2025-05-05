'use client';

import useUtilWpStore from '@/store/utilWpStore';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useMemo } from 'react';
import useUserStore from '@/store/userStore';
import { Lang } from '@/config/UtilsWp_lang';
import GetUserData from '@/components/GetUserData';
import objectToHtmlString from '@/utils/objectToHtmlString';

export default function WhatsAppMsgBuilderPage() {
  const { appIsEnglish } = useUserStore();
  const txt = appIsEnglish ? Lang.en : Lang.es;

  const {
    phone_area1,
    phone_area2,
    phone_local,

    msgTemplate,
    msg1,
    msg2,
    msg3,
    setPArea1,
    setPArea2,
    setPLocal,

    setMsgTemplate,
    setMsg1,
    setMsg2,
    setMsg3,
  } = useUtilWpStore();

  const link1 = useMemo(
    () => `https://wa.me/${phone_area1}${phone_area2}${phone_local}?text=${encodeURI(msg1)}`,
    [phone_area1, phone_area2, phone_local, msg1]
  );
  const link2 = useMemo(
    () => `https://wa.me/${phone_area1}${phone_area2}${phone_local}?text=${encodeURI(msg2)}`,
    [phone_area1, phone_area2, phone_local, msg2]
  );
  const link3 = useMemo(
    () => `https://wa.me/${phone_area1}${phone_area2}${phone_local}?text=${encodeURI(msg3)}`,
    [phone_area1, phone_area2, phone_local, msg3]
  );

  const link = useMemo(() => {
    if (msgTemplate === 1) return link1;
    else if (msgTemplate === 2) return link2;
    else return link3;
  }, [msgTemplate, link1, link2, link3]);

  const msg = useMemo(() => {
    if (msgTemplate === 1) return msg1;
    else if (msgTemplate === 2) return msg2;
    else return msg3;
  }, [msgTemplate, msg1, msg2, msg3]);

  const setMsg = useMemo(() => {
    if (msgTemplate === 1) return setMsg1;
    else if (msgTemplate === 2) return setMsg2;
    else return setMsg3;
  }, [msgTemplate, setMsg1, setMsg2, setMsg3]);

  const metadata = useMemo(
    () =>
      objectToHtmlString({
        phone_area1,
        phone_area2,
        phone_local,

        msgTemplate,
        msg1,
        msg2,
        msg3,
      }),
    [phone_area1, phone_area2, phone_local, msgTemplate, msg1, msg2, msg3]
  );

  function validateNumbers(e: React.ChangeEvent<HTMLInputElement>, cb: (n?: string) => void) {
    let value = e.currentTarget.value;
    if (value === '') {
      cb(value);
    } else {
      value = value.replace(/[^0-9]/g, '');
      if (value.length > 0) cb(value);
    }
  }

  return (
    <div className="max-w-md m-auto p-4 bg-white bg-opacity-50 rounded shadow dark:bg-black dark:bg-opacity-50">
      <GetUserData metadata={metadata} />
      <h1 className="text-shadow-main text-4xl">{txt.title}</h1>

      <hr />
      <br />

      <div className="gap-2">
        <Label className="max-w-xs">
          <span className="text-shadow-main">{txt.label_phone}</span>
          <div className="grid grid-cols-12 gap-1">
            <Input
              name="country"
              className="col-span-2 text-center dark:caret-white"
              type="tel"
              min={0}
              placeholder={txt.placeholder_country}
              pattern="[0-9]"
              value={phone_area1}
              onChange={(e) => validateNumbers(e, setPArea1)}
            />
            <Input
              name="area"
              className="col-span-3 text-center dark:caret-white"
              type="tel"
              placeholder={txt.placeholder_area}
              pattern="[0-9]"
              value={phone_area2}
              onChange={(e) => validateNumbers(e, setPArea2)}
            />
            <Input
              name="phone"
              className="col-span-7 text-center dark:caret-white"
              type="tel"
              placeholder={txt.placeholder_phone}
              pattern="[0-9]"
              value={phone_local}
              onChange={(e) => validateNumbers(e, setPLocal)}
            />
          </div>
        </Label>

        <div className="flex justify-around mt-4 mb-2">
          <Button
            size={'sm'}
            variant={msgTemplate === 1 ? 'outline' : undefined}
            onClick={() => setMsgTemplate(1)}
          >
            {txt.btn_template1}
          </Button>
          <Button
            size={'sm'}
            variant={msgTemplate === 2 ? 'outline' : undefined}
            onClick={() => setMsgTemplate(2)}
          >
            {txt.btn_template2}
          </Button>
          <Button
            size={'sm'}
            variant={msgTemplate === 3 ? 'outline' : undefined}
            onClick={() => setMsgTemplate(3)}
          >
            {txt.btn_template3}
          </Button>
        </div>

        <Label className="max-w-xs">
          <span className="text-shadow-main">{txt.label_message}</span>
          <Textarea
            className="min-h-[30vh] dark:caret-white"
            value={msg}
            onChange={(e) => setMsg(e.currentTarget.value)}
          />
        </Label>

        <Button size={'fullWidth'} className="mt-4">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {txt.btn_send}
          </a>
        </Button>
      </div>
    </div>
  );
}
