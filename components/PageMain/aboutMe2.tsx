'use client';

import useUserStore from '@/store/userStore';
import lang from '@/config/MainPage_lang';

export default function AboutMe2() {
  const { appIsEnglish } = useUserStore((store) => store);
  const txt = appIsEnglish ? lang.en : lang.es;

  return (
    <div className="infocard flex flex-col justify-center max-w-lg text-shadow-main">
      <h2>{txt.talents}</h2>
      <ul className="mt-4 ml-8">
        {txt.talents_ul.map((talent, i) => (
          <li key={i} className="list-disc">
            {talent}
          </li>
        ))}
      </ul>
    </div>
  );
}
