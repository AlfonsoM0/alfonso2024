'use client';

import lang from '@/config/Projects_lang';
import useUserStore from '@/store/userStore';
import ProyectCard from './projectCard';

export default function PageProyects() {
  const { appIsEnglish } = useUserStore((store) => store);

  const txt = appIsEnglish ? lang.en : lang.es;

  return (
    <>
      <h1 className="text-shadow-main text-4xl">{txt.pageTitle}</h1>

      {txt.projects.map((project, i) => (
        <ProyectCard {...project} key={i} />
      ))}
    </>
  );
}
