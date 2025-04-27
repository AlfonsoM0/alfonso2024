'use client';

import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { Textarea } from '@components/ui/textarea';
import { Button } from '@components/ui/button';
import useUtilPetQrStore from '@/store/utilPetQrStore';

export default function PagePetQR() {
  const { n, a1, a2, p1, p2, i, setName, setAddress1, setAddress2, setPhone1, setPhone2, setInfo } =
    useUtilPetQrStore();

  const [qrValue, setQrValue] = useState('');

  const generateQr = (e: React.FormEvent) => {
    e.preventDefault();

    if (!n) {
      alert('Por favor, ingresa el nombre de la mascota.');
      return;
    }
    // Encode URI components to safely include in URL
    const url = `${window.location.origin}/u/petQR/${encodeURIComponent(n)}?a1=${encodeURIComponent(
      a1
    )}&a2=${encodeURIComponent(a2)}&p1=${encodeURIComponent(p1)}&p2=${encodeURIComponent(
      p2
    )}&i=${encodeURIComponent(i)}`;
    setQrValue(url);
  };

  return (
    <div className="max-w-md m-auto p-4 bg-white bg-opacity-30 rounded shadow dark:bg-black dark:bg-opacity-30">
      <h1 className="text-shadow-main text-4xl mb-4">Generar QR para mi mascota</h1>
      <p className="text-xs">* Crea un QR para añadir al collar de tu mascota para su seguridad.</p>
      <p className="text-xs">* La información solo se guarda en tu dispositivo y en el QR.</p>

      <br />

      <form onSubmit={generateQr} className="space-y-4">
        <div>
          <Label htmlFor="n">Nombre de tu mascota</Label>
          <Input
            placeholder="Ej.: Matilda"
            type="text"
            id="n"
            name="n"
            value={n}
            onChange={(e) => setName(e.currentTarget.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="a1">Dirección 1</Label>
          <Input
            placeholder="Ej.: Calle 31, Santiago del Estero, Argentina"
            type="text"
            id="a1"
            name="a1"
            value={a1}
            onChange={(e) => setAddress1(e.currentTarget.value)}
          />
          <span className="text-xs">Ingresa la dirección completa: calle, provincia, país.</span>
        </div>
        <div>
          <Label htmlFor="a2">Dirección 2</Label>
          <Input
            placeholder="Ej.: Calle 31, Santiago del Estero, Argentina"
            type="text"
            id="a2"
            name="a2"
            value={a2}
            onChange={(e) => setAddress2(e.currentTarget.value)}
          />
          <span className="text-xs">Ingresa la dirección completa: calle, provincia, país.</span>
        </div>
        <div>
          <Label htmlFor="p1">Teléfono de contacto 1</Label>
          <Input
            placeholder="Ej.: 54 9385 611 22 33"
            type="tel"
            id="p1"
            name="p1"
            value={p1}
            onChange={(e) => setPhone1(e.currentTarget.value)}
          />
          <span className="text-xs">Ingresa el número completo con código de país y área.</span>
        </div>
        <div>
          <Label htmlFor="p2">Teléfono de contacto 2</Label>
          <Input
            placeholder="Ej.: 54 9385 611 22 33"
            type="tel"
            id="p2"
            name="p2"
            value={p2}
            onChange={(e) => setPhone2(e.currentTarget.value)}
          />
          <span className="text-xs">Ingresa el número completo con código de país y área.</span>
        </div>
        <div>
          <Label htmlFor="i">Información importante</Label>
          <Textarea
            placeholder="Ej.: Tiene todas las vacunas pero come un alimento especial..."
            id="i"
            name="i"
            value={i}
            onChange={(e) => setInfo(e.currentTarget.value)}
            rows={4}
          />
          <span className="text-xs">Alimentación especial, vacunación, etc...</span>
        </div>
        <Button type="submit" className="w-full">
          Generar QR para mi mascota
        </Button>
      </form>

      {qrValue && (
        <div className="mt-6 text-center">
          <p className="mb-2 font-semibold">Escanea este código QR o haz captura de pantalla:</p>
          <div className="inline-block bg-white p-4 rounded shadow">
            <QRCode value={qrValue} size={256} />
          </div>
          <p className="mt-2 text-sm break-words">
            <a
              href={qrValue}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline dark:text-blue-300"
            >
              {qrValue}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
