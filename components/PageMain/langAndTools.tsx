'use client';

import lang from '@/config/MainPage_lang';
import useUserStore from '@/store/userStore';
import CustomPopover from '../popover';
import Link from 'next/link';

export default function LangAndTools() {
  const { appIsEnglish } = useUserStore((store) => store);
  const txt = appIsEnglish ? lang.en : lang.es;

  return (
    <>
      <h2 className="text-2xl text-shadow shadow-white dark:shadow-black">
        {txt.lenguagesAndTools}
      </h2>
      <div className="flex flex-wrap justify-center my-8">
        {txt.lenguagesAndTools_ul.map((item, i) => (
          <CustomPopover key={i} popoverTitle={item.name}>
            <Link href={item.href} className="m-3">
              {item.icon}
            </Link>
          </CustomPopover>
        ))}
      </div>
    </>
  );
}
