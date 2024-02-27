'use client';

import useUserStore from '@/store/userStore';
import lang from '@/config/MainPage_lang';

export default function AboutMe2() {
  const { appIsEnglish } = useUserStore((store) => store);
  const txt = appIsEnglish ? lang.en : lang.es;

  return (
    <div className="flex flex-col justify-center max-w-lg text-shadow shadow-white dark:shadow-black p-5 m-5 hover:bg-[rgba(255,255,255,0.8)] hover:dark:bg-[rgba(0,0,0,0.5)] rounded-2xl transition hover:delay-300">
      <h2 className={`text-center text-2xl`}>{txt.talents}</h2>
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
