'use client';

import { Link } from '@nextui-org/link';
import { Lang } from '@config/Footer_lang';
import useUserStore from '@/store/userStore';

export default function Footer() {
  const { appIsEnglish } = useUserStore((store) => store);

  const txt = appIsEnglish ? Lang.en : Lang.es;

  return (
    <footer className="w-full flex items-center justify-center py-3">
      <Link className="flex items-center gap-1 text-current" href="/" title="alfonso.ar homepage">
        <span className="text-default-600 text-shadow shadow-white dark:shadow-black">
          {txt[0]}
        </span>
        <p className="text-primary text-shadow shadow-white dark:shadow-black">{txt[1]}</p>
      </Link>
    </footer>
  );
}
