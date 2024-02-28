'use client';

import useUserStore from '@/store/userStore';
import lang from '@/config/MainPage_lang';

export default function AboutMe1() {
  const { appIsEnglish } = useUserStore((store) => store);
  const txt = appIsEnglish ? lang.en : lang.es;

  return (
    <div className="">
      <div className="infocard flex flex-col justify-center text-shadow-main max-w-lg">
        <h1>{txt.presentation}</h1>
        <p className="mt-4 text-justify">{txt.presentation_p}</p>
      </div>
    </div>
  );
}
