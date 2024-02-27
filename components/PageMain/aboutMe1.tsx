'use client';

import useUserStore from '@/store/userStore';
import lang from '@/config/MainPage_lang';

export default function AboutMe1() {
  const { appIsEnglish } = useUserStore((store) => store);
  const txt = appIsEnglish ? lang.en : lang.es;

  return (
    <div className="">
      <div className="flex flex-col justify-center text-shadow shadow-white dark:shadow-black max-w-lg p-5 m-5 bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.5)] rounded-2xl">
        <h1 className="text-center uppercase text-2xl">{txt.presentation}</h1>
        <p className="mt-4 text-justify">{txt.presentation_p}</p>
      </div>
    </div>
  );
}
