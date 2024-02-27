'use client';

import lang from '@/config/MainPage_lang';
import useUserStore from '@/store/userStore';
import CustomPopover from '../popover';
import Link from 'next/link';

export default function LangAndTools() {
  const { appIsEnglish } = useUserStore((store) => store);
  const txt = appIsEnglish ? lang.en : lang.es;

  return (
    <div className="p-10  hover:bg-[rgba(255,255,255,0.8)] hover:dark:bg-[rgba(0,0,0,0.5)] rounded-2xl transition hover:delay-300">
      <h2 className="text-center text-2xl text-shadow shadow-white dark:shadow-black">
        {txt.lenguagesAndTools}
      </h2>
      <div className="max-w-screen-lg flex flex-wrap justify-center my-4">
        {txt.lenguagesAndTools_ul.map((item, i) => (
          <CustomPopover key={i} popoverTitle={item.name}>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="m-1 sm:m-3"
              aria-label={item.name}
            >
              {item.icon}
            </Link>
          </CustomPopover>
        ))}
      </div>
    </div>
  );
}
