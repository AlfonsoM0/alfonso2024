'use client';

import useUtilWpStore from '@/store/utilWpStore';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useMemo } from 'react';

export default function WhatsAppMsgBuilderPage() {
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

  function validateNumbers(e: React.ChangeEvent<HTMLInputElement>, cb: (n?: string) => void) {
    const value = e.currentTarget.value;
    const isNumber = /[0-9]/g.test(value);
    if (isNumber) cb(value);
  }

  return (
    <div className="max-w-md m-auto">
      <h1 className="text-shadow-main text-4xl">
        Utils <br /> WhatsApp msg Builder
      </h1>

      <hr />
      <br />

      <div className="gap-2">
        <Label className="max-w-xs">
          <span className="text-shadow-main">Phone</span>
          <div className="grid grid-cols-12 gap-1">
            <Input
              name="country"
              className="col-span-2 text-center"
              type="tel"
              min={0}
              placeholder="XX"
              pattern="[0-9]"
              value={phone_area1}
              onChange={(e) => validateNumbers(e, setPArea1)}
            />
            <Input
              name="area"
              className="col-span-3 text-center"
              type="tel"
              placeholder="XXXX"
              pattern="[0-9]"
              value={phone_area2}
              onChange={(e) => validateNumbers(e, setPArea2)}
            />
            <Input
              name="phone"
              className="col-span-7 text-center"
              type="tel"
              placeholder="XXXX-XXXX"
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
            Template 1
          </Button>
          <Button
            size={'sm'}
            variant={msgTemplate === 2 ? 'outline' : undefined}
            onClick={() => setMsgTemplate(2)}
          >
            Template 2
          </Button>
          <Button
            size={'sm'}
            variant={msgTemplate === 3 ? 'outline' : undefined}
            onClick={() => setMsgTemplate(3)}
          >
            Template 3
          </Button>
        </div>

        <Label className="max-w-xs">
          <span className="text-shadow-main">Message</span>
          <Textarea
            className="min-h-[30vh]"
            value={msg}
            onChange={(e) => setMsg(e.currentTarget.value)}
          />
        </Label>

        <Button size={'fullWidth'} className="mt-4">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Send on WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
