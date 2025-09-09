'use client';

/**
 * Esta es una página dedicatoria al "Encuentro Universitario 99" (EU99).
 *
 * Debe mostrar solo un botón que dice "Gracias", que al ser presionado muestra una foto grupal del evento y un mensaje de agradecimiento.
 */

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import BackgroundImg from '@/components/BackgroundImg';
import Clouds from '@public/EU99/CloudsBackground.jpg';
import GroupPhoto from '@public/EU99/EU99_Foto.jpg';

export default function EU99Page() {
  const [show, setShow] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Play when show becomes true (button click triggers handleShow)
  const handleShow = async () => {
    setShow(true);
    try {
      await audioRef.current?.play();
    } catch (err) {
      // Play can fail on some browsers; ignore silently but log for debugging
      // eslint-disable-next-line no-console
      console.warn('No se pudo reproducir el audio:', err);
    }
  };

  // Pause and reset when hide
  useEffect(() => {
    if (!show && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [show]);

  // Cleanup on unmount
  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  return (
    <main className="min-h-screen relative flex items-center justify-center p-6">
      {/* Fondo según tema (componente existente) */}
      <BackgroundImg src={Clouds} alt="Cielo" type="light" opacity={0.9} />
      <BackgroundImg src={Clouds} alt="Cielo" type="dark" opacity={0.9} />

      <div className="z-10 w-full max-w-3xl text-center">
        {/* Reproductor de audio invisible: se mantiene montado para que la ref exista */}
        <audio ref={audioRef} src="/EU99/Angels.mp3" preload="auto" />
        {!show ? (
          <button
            onClick={handleShow}
            className="mx-auto rounded-full bg-sky-900 hover:bg-sky-800 text-white px-8 py-4 text-2xl font-semibold shadow-lg ring-2 ring-sky-700/30"
            aria-label="Gracias"
          >
            Gracias
          </button>
        ) : (
          <section className="space-y-6">
            <h1
              className="text-3xl font-bold text-sky-900"
              style={{
                textShadow: '0 8px 22px rgba(255,255,255,0.85), 0 1px 2px rgba(0,0,0,0.12)',
              }}
            >
              Gracias a todos
            </h1>

            <p
              className="text-lg text-slate-800 px-4 leading-relaxed"
              style={{
                textShadow: '0 6px 18px rgba(255,255,255,0.80), 0 1px 2px rgba(0,0,0,0.10)',
              }}
            >
              Muchas gracias a todas las personas que hicieron de este encuentro un momento mágico,
              lleno de emociones, hermoso e inolvidable. Su cariño, esfuerzo y alegría transformaron
              cada instante en un recuerdo que guardaremos con gratitud para siempre.
            </p>

            <div className="mx-auto max-w-full">
              {/* Mostrar la foto grupal JPG con bordes redondeados */}
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={GroupPhoto}
                  alt="Foto grupal EU99"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="mt-4">
                <a
                  href="/EU99/EU99_Foto.jpg"
                  className="inline-block rounded-md bg-sky-900 text-white px-4 py-2 mr-3 hover:bg-sky-800"
                  download
                >
                  Descargar foto
                </a>

                <button
                  onClick={() => setShow(false)}
                  className="rounded-md bg-sky-500 hover:bg-sky-300 px-4 py-2"
                >
                  Volver
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
