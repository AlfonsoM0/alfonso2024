'use client';

import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { Textarea } from '@components/ui/textarea';
import { Button } from '@components/ui/button';
import useUtilPetQrStore from '@/store/utilPetQrStore';
import useUserStore from '@/store/userStore';
import { Lang } from '@/config/UtilsPetQr_lang';
import downloadQrCode from './downloadQrCode';
import Link from 'next/link';

export default function PagePetQR() {
  const { appIsEnglish } = useUserStore();
  const txt = appIsEnglish ? Lang.en : Lang.es;

  const {
    n,
    a1,
    a2,
    p1,
    p2,
    i,
    e,
    setName,
    setAddress1,
    setAddress2,
    setPhone1,
    setPhone2,
    setInfo,
    setEmail,

    QrColor,
    QrColorBg,
    setQrColor,
    setQrColorBg,
  } = useUtilPetQrStore();

  const [qrValue, setQrValue] = useState('');

  const generateQr = (event: React.FormEvent) => {
    event.preventDefault();

    if (!n) {
      alert(txt.label_name + ' ' + (appIsEnglish ? 'is required.' : 'es requerido.'));
      return;
    }
    if (!p1) {
      alert(txt.label_phone1 + ' ' + (appIsEnglish ? 'is required.' : 'es requerido.'));
      return;
    }
    if (!e) {
      alert(txt.label_email + ' ' + (appIsEnglish ? 'is required.' : 'es requerido.'));
      return;
    }

    // Encode URI components to safely include in URL
    const url = `${window.location.origin}/u/petQR/${encodeURIComponent(n)}?a1=${encodeURIComponent(
      a1
    )}&a2=${encodeURIComponent(a2)}&p1=${encodeURIComponent(p1)}&p2=${encodeURIComponent(
      p2
    )}&i=${encodeURIComponent(i)}&e=${encodeURIComponent(e)}`;
    setQrValue(url);
  };

  useEffect(() => {
    setQrValue('');
  }, [n, a1, a2, p1, p2, i, e]);

  return (
    <div className="max-w-md m-auto p-4 bg-white bg-opacity-50 rounded shadow dark:bg-black dark:bg-opacity-50">
      <h1 className="text-shadow-main text-4xl mb-4">{txt.title}</h1>
      <p className="text-xs">{txt.info1}</p>
      <p className="text-xs">{txt.info2}</p>

      <br />

      <form onSubmit={generateQr} className="space-y-4">
        <div>
          <Label htmlFor="n">{txt.label_name}</Label>
          <Input
            placeholder={txt.placeholder_name}
            type="text"
            id="n"
            name="n"
            value={n}
            onChange={(e) => setName(e.currentTarget.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="a1">{txt.label_address1}</Label>
          <Input
            placeholder={txt.placeholder_address1}
            type="text"
            id="a1"
            name="a1"
            value={a1}
            onChange={(e) => setAddress1(e.currentTarget.value)}
          />
          <span className="text-xs">{txt.helper_address}</span>
        </div>
        <div>
          <Label htmlFor="a2">{txt.label_address2}</Label>
          <Input
            placeholder={txt.placeholder_address2}
            type="text"
            id="a2"
            name="a2"
            value={a2}
            onChange={(e) => setAddress2(e.currentTarget.value)}
          />
          <span className="text-xs">{txt.helper_address}</span>
        </div>
        <div>
          <Label htmlFor="p1">{txt.label_phone1}</Label>
          <Input
            placeholder={txt.placeholder_phone1}
            type="tel"
            id="p1"
            name="p1"
            value={p1}
            onChange={(e) => setPhone1(e.currentTarget.value)}
            required
          />
          <span className="text-xs">{txt.helper_phone}</span>
        </div>
        <div>
          <Label htmlFor="p2">{txt.label_phone2}</Label>
          <Input
            placeholder={txt.placeholder_phone2}
            type="tel"
            id="p2"
            name="p2"
            value={p2}
            onChange={(e) => setPhone2(e.currentTarget.value)}
          />
          <span className="text-xs">{txt.helper_phone}</span>
        </div>
        <div>
          <Label htmlFor="e">{txt.label_email}</Label>
          <Input
            placeholder={txt.placeholder_email}
            type="email"
            id="e"
            name="e"
            value={e}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
          />
          <span className="text-xs">{txt.helper_email}</span>
        </div>
        <div>
          <Label htmlFor="i">{txt.label_info}</Label>
          <Textarea
            placeholder={txt.placeholder_info}
            id="i"
            name="i"
            value={i}
            onChange={(e) => setInfo(e.currentTarget.value)}
            rows={4}
          />
          <span className="text-xs">{txt.helper_info}</span>
        </div>

        <Button type="submit" className="w-full">
          {txt.btn_generate}
        </Button>
      </form>

      {qrValue && (
        <div className="mt-6 text-center">
          <p className="mb-2 font-semibold">{txt.qr_instructions}</p>

          <div className="flex justify-center align-middle mb-2">
            <Label className="mt-2">{txt.helper_QrColor}</Label>
            <Input
              className="ml-2 w-8 h-8 border rounded p-[0.1rem] bg-black dark:bg-white"
              type="color"
              value={QrColor}
              onChange={(e) => setQrColor(e.currentTarget.value)}
            />
          </div>
          <div className="flex justify-center align-middle mb-2">
            <Label className="mt-2">{txt.helper_QrColorBg}</Label>
            <Input
              className="ml-2 w-8 h-8 border rounded p-[0.1rem] bg-black dark:bg-white"
              type="color"
              value={QrColorBg}
              onChange={(e) => setQrColorBg(e.currentTarget.value)}
            />
          </div>

          <div
            id="qr-code"
            className="inline-block p-4 rounded shadow"
            style={{ backgroundColor: QrColorBg, borderColor: QrColor }}
          >
            <QRCode value={qrValue} size={256} fgColor={QrColor} bgColor={QrColorBg} />
            <p
              className="text-center font-extrabold"
              style={{ color: QrColor }}
            >{`${window.location.origin}/u/petQR`}</p>
          </div>

          <div className="gap-2 flex justify-center align-middle">
            <Button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              <Link href={qrValue} target="_blank" rel="noopener noreferrer">
                {txt.btn_visitPetPage}
              </Link>
            </Button>
            <Button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => downloadQrCode(n)}
            >
              {txt.btn_download_qr}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
