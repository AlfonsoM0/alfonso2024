'use client';

import DialogBot from './dialogAlfonsoBot';
import DialogUser from './dialogUser';
import SendInput from './sendInput';
import useUserStore from '@/store/userStore';
import Markdown from 'markdown-to-jsx';

export default function Alfonsobot() {
  const chat = useUserStore((store) => store.alfonsobotChat).slice(1);

  return (
    <div className="h-[65vh] flex flex-col">
      <div className="bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(0,0,0,0.7)] flex-1 overflow-y-scroll">
        <div className="px-4 py-2">
          {chat.map((dialog, i) => {
            if (dialog.role === 'model')
              return <DialogBot key={i} response={<Markdown>{dialog.parts as string}</Markdown>} />;
            else return <DialogUser key={i} response={<p>{dialog.parts as string}</p>} />;
          })}
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-inherit px-4 py-2">
        <SendInput />
      </div>
    </div>
  );
}
