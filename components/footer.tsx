'use client';

import { Link } from '@nextui-org/react';
import { Lang } from '@config/Footer_lang';
import useUserStore from '@/store/userStore';

export default function Footer() {
  const { appIsEnglish } = useUserStore((store) => store);

  const txt = appIsEnglish ? Lang.en : Lang.es;

  return (
    <section className="container">
      <footer className="w-full flex flex-wrap items-center justify-center mb-2 m-auto p-3 hover:bg-[rgba(255,255,255,0.8)] hover:dark:bg-[rgba(0,0,0,0.5)] rounded-2xl max-w-fit transition hover:delay-300">
        <span className="mr-2 text-default-600 text-shadow shadow-white dark:shadow-black">
          {txt[0]}
        </span>
        <span className="text-primary dark:text-blue-300 text-shadow shadow-white dark:shadow-black">
          {txt[1]}
        </span>
      </footer>
    </section>
  );
}
