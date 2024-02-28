'use client';

import { Link } from '@nextui-org/react';
import { Lang } from '@config/Footer_lang';
import useUserStore from '@/store/userStore';

export default function Footer() {
  const { appIsEnglish } = useUserStore((store) => store);

  const txt = appIsEnglish ? Lang.en : Lang.es;

  return (
    <section className="container">
      <footer className="infocard w-full flex flex-wrap items-center justify-center mb-2 m-auto p-3 max-w-fit">
        <span className="mr-2 text-default-600 text-shadow-main">{txt[0]}</span>
        <span className="text-primary dark:text-blue-300 text-shadow-main">{txt[1]}</span>
      </footer>
    </section>
  );
}
