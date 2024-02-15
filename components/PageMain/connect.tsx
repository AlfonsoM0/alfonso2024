'use client';

import useUserStore from '@/store/userStore';
import lang from '@/config/MainPage_lang';
import Link from 'next/link';
import CustomPopover from '../popover';

export default function Connect() {
  const { appIsEnglish } = useUserStore((store) => store);
  const txt = appIsEnglish ? lang.en : lang.es;

  return (
    <div className="flex flex-col text-shadow shadow-white dark:shadow-black m-10">
      <h2 className={`text-center text-2xl`}>{txt.contactMe}</h2>
      <div className="flex justify-center">
        {txt.contactMe_ul.map((item, i) => (
          <CustomPopover key={i} popoverTitle={item.name}>
            <Link href={item.href} className="m-3">
              {item.icon}
            </Link>
          </CustomPopover>
        ))}
      </div>
      <h3 className="text-lg">{txt.knowMore}</h3>
      <Link href="/" className="text-center text-blue-800 dark:text-yellow-300">
        {txt.alfonsoBot}
      </Link>
    </div>
  );
}
