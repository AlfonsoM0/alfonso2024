'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import useUserStore from '@/store/userStore';
import { Lang, setEmailHtml } from '@/config/UtilsPetQrInfo_lang';
import { sendEmail } from '@/server/actions/sendEmail';
// Import the improved getUserLocation function
import getUserLocation from '@/utils/getUserLocation';

interface PetInfoProps {
  params: {
    n: string;
  };
}

export default function PetInfoPage({ params }: PetInfoProps) {
  const { appIsEnglish } = useUserStore();
  const txt = appIsEnglish ? Lang.en : Lang.es;

  const searchParams = useSearchParams();

  const n = decodeURIComponent(params.n);
  const a1 = searchParams.get('a1') || '';
  const a2 = searchParams.get('a2') || '';
  const p1 = searchParams.get('p1') || '';
  const p2 = searchParams.get('p2') || '';
  const i = searchParams.get('i') || '';
  const e = searchParams.get('e') || '';

  const googleMapsLink = (address: string) =>
    address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}` : '';

  const whatsappLink = (phone: string) =>
    phone
      ? `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(
          txt.foundPetMessage(n)
        )}`
      : '';

  const telLink = (phone: string) => (phone ? `tel:${phone.replace(/\D/g, '')}` : '');

  // Updated function using getUserLocation
  const sendEmailWithTheUserData = async () => {
    const webEmail = process.env.NEXT_PUBLIC_EMAIL_WEB || '';

    // Use the imported getUserLocation function
    const { data: locationData, error: locationError } = await getUserLocation();

    if (locationData) {
      const { GoogleMapsLocation: location } = locationData;
      console.info('Attempting to send email with location:', location);
      const isSuccess = await sendEmail({
        bussinessName: 'Alfonso | Web Developer',
        fromEmail: webEmail,
        fromName: 'PetQR (alfonso.ar)',
        to: [e],
        subject: txt.email_subject,
        text: txt.setEmailText(location),
        html: setEmailHtml(appIsEnglish, location),
      });
      if (isSuccess) console.info('Message sent successfully:', `Location: ${location}`);
      else console.error('Error sending message:', `Location: ${location}`);
    } else if (locationError) {
      // Log the error from getUserLocation
      console.error('Error getting location for email:', locationError.message);
      // Optionally, send an email without location or notify the user
      // For now, we just log the error.
    }
  };

  // when user open the page, we send user data to the pet owner
  useEffect(() => {
    if (e) sendEmailWithTheUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [e]); // Keep dependency array as is if the intention is to run only when 'e' changes initially

  return (
    <div className="max-w-md m-auto p-4 bg-white bg-opacity-50 rounded shadow dark:bg-black dark:bg-opacity-50">
      <h1 className="text-4xl font-bold mb-4">{n}</h1>

      {(a1 || a2) && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">{txt.addresses}</h2>
          {a1 && (
            <p className="text-center">
              <a
                href={googleMapsLink(a1)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline dark:text-blue-300"
              >
                {a1}
              </a>
            </p>
          )}
          {a2 && (
            <p className="text-center">
              <a
                href={googleMapsLink(a2)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline dark:text-blue-300"
              >
                {a2}
              </a>
            </p>
          )}
        </div>
      )}

      {(p1 || p2) && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">{txt.contactPhones}</h2>
          {p1 && (
            <>
              <p className="text-center mb-1">{p1}</p>
              <p className="flex space-x-4 items-center mb-1 justify-center">
                <a
                  href={whatsappLink(p1)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  aria-label={txt.sendWhatsAppTo(p1)}
                >
                  WhatsApp
                </a>
                <a
                  href={telLink(p1)}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  aria-label={txt.callTo(p1)}
                >
                  Llamar
                </a>
              </p>
            </>
          )}
          {p2 && (
            <>
              <p className="text-center mb-1">{p2}</p>
              <p className="flex space-x-4 items-center mb-1 justify-center">
                <a
                  href={whatsappLink(p2)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  aria-label={txt.sendWhatsAppTo(p2)}
                >
                  WhatsApp
                </a>
                <a
                  href={telLink(p2)}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  aria-label={txt.callTo(p2)}
                >
                  Llamar
                </a>
              </p>
            </>
          )}
        </div>
      )}

      {i && (
        <div>
          <h2 className="text-xl font-semibold mb-2">{txt.importantInfo}</h2>
          <p className="whitespace-pre-wrap">{i}</p>
        </div>
      )}
    </div>
  );
}
