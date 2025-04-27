'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

interface PetInfoProps {
  params: {
    n: string;
  };
}

export default function PetInfoPage({ params }: PetInfoProps) {
  const searchParams = useSearchParams();

  const n = decodeURIComponent(params.n);
  const a1 = searchParams.get('a1') || '';
  const a2 = searchParams.get('a2') || '';
  const p1 = searchParams.get('p1') || '';
  const p2 = searchParams.get('p2') || '';
  const i = searchParams.get('i') || '';

  const googleMapsLink = (address: string) =>
    address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}` : '';

  const whatsappLink = (phone: string) =>
    phone
      ? `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Encontré a ${n}!`)}`
      : '';

  const telLink = (phone: string) => (phone ? `tel:${phone.replace(/\D/g, '')}` : '');

  return (
    <div className="max-w-md m-auto p-4 bg-white bg-opacity-30 rounded shadow dark:bg-black dark:bg-opacity-30">
      <h1 className="text-4xl font-bold mb-4">{n}</h1>

      {(a1 || a2) && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Direcciones</h2>
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
          <h2 className="text-xl font-semibold mb-2">Teléfonos de contacto</h2>
          {p1 && (
            <p className="flex space-x-4 items-center mb-1 justify-center">
              <span>{p1}</span>
              <a
                href={whatsappLink(p1)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                aria-label={`Enviar WhatsApp a ${p1}`}
              >
                WhatsApp
              </a>
              <a
                href={telLink(p1)}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                aria-label={`Llamar a ${p1}`}
              >
                Llamar
              </a>
            </p>
          )}
          {p2 && (
            <p className="flex space-x-4 items-center justify-center">
              <span>{p2}</span>
              <a
                href={whatsappLink(p2)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                aria-label={`Enviar WhatsApp a ${p2}`}
              >
                WhatsApp
              </a>
              <a
                href={telLink(p2)}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                aria-label={`Llamar a ${p2}`}
              >
                Llamar
              </a>
            </p>
          )}
        </div>
      )}

      {i && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Información importante</h2>
          <p className="whitespace-pre-wrap">{i}</p>
        </div>
      )}
    </div>
  );
}
