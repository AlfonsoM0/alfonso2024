'use client';

import useUserStore from '@/store/userStore';
import lang from '@/config/MainPage_lang';
import Link from 'next/link';
import CustomPopover from '../popover';

export default function Connect() {
  const { appIsEnglish } = useUserStore((store) => store);
  const txt = appIsEnglish ? lang.en : lang.es;

  return (
    <div className="infocard flex flex-col text-shadow-main">
      <h2>{txt.contactMe}</h2>
      <div className="flex justify-center mt-4">
        {txt.contactMe_ul.map((item, i) => (
          <CustomPopover key={i} popoverTitle={item.name} popoverUrl={item.href}>
            <div className="m-3">{item.icon}</div>
          </CustomPopover>
        ))}
      </div>
      <h3 className="text-lg mt-4 text-center">{txt.knowMore}</h3>
      <Link
        href="/alfonsobot"
        className="text-center mt-4 text-blue-800 dark:text-yellow-300  hover:animate-pulse"
      >
        {txt.alfonsoBot}
      </Link>
    </div>
  );
}
