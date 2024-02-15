'use client';

import useUserStore from '@/store/userStore';
import lang from '@/config/MainPage_lang';

export default function AboutMe1() {
  const { appIsEnglish } = useUserStore((store) => store);
  const txt = appIsEnglish ? lang.en : lang.es;

  return (
    <div className="flex flex-col justify-center text-shadow shadow-white dark:shadow-black max-w-lg m-10">
      <h1 className="text-center uppercase text-2xl">{txt.presentation}</h1>
      <p className="mt-4 text-justify">{txt.presentation_p}</p>
    </div>
  );
}
