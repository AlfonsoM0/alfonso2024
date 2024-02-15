'use client';

import useUserStore from '@/store/userStore';
import lang from '@/config/MainPage_lang';

export default function AboutMe2() {
  const { appIsEnglish } = useUserStore((store) => store);
  const txt = appIsEnglish ? lang.en : lang.es;

  return (
    <div className="flex flex-col justify-center text-shadow shadow-white dark:shadow-black m-10">
      <h1 className={`text-center text-2xl`}>{txt.talents}</h1>
      <ul className="mt-4 text-justify ml-8">
        {txt.talents_ul.map((talent, i) => (
          <li key={i} className="list-disc">
            {talent}
          </li>
        ))}
      </ul>
    </div>
  );
}
