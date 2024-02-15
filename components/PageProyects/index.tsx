'use client';

import lang from '@/config/Proyects_lang';
import useUserStore from '@/store/userStore';
import ProyectCard from './proyectCard';

export default function PageProyects() {
  const { appIsEnglish } = useUserStore((store) => store);

  const txt = appIsEnglish ? lang.en : lang.es;

  return (
    <>
      <h1 className="text-center text-4xl text-shadow shadow-white dark:shadow-black">
        {txt.pageTitle}
      </h1>

      {txt.proyects.map((proyect, i) => (
        <ProyectCard {...proyect} key={i} />
      ))}
    </>
  );
}
