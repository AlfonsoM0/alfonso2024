'use client';

import lang from '@/config/MainPage_lang';
import useUserStore from '@/store/userStore';
import CustomPopover from '../popover';

export default function LangAndTools() {
  const { appIsEnglish } = useUserStore((store) => store);
  const txt = appIsEnglish ? lang.en : lang.es;

  return (
    <div className="infocard">
      <h2>{txt.lenguagesAndTools}</h2>
      <div className="max-w-screen-lg flex flex-wrap justify-center my-4">
        {txt.lenguagesAndTools_ul.map((item, i) => (
          <CustomPopover key={i} popoverTitle={item.name} popoverUrl={item.href}>
            <div className="m-1 sm:m-3">{item.icon}</div>
          </CustomPopover>
        ))}
      </div>
    </div>
  );
}
