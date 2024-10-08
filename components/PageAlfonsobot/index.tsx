'use client';

import { alfonsoBoit1stResponse } from '@/config/alfonsobotPromtHistory';
import DialogBot from './dialogAlfonsoBot';
import DialogUser from './dialogUser';
import SendInput from './sendInput';
import useUserStore from '@/store/userStore';
import { Lang } from '@config/AlfonsoBot_lang';
import Markdown from 'markdown-to-jsx';
import { useEffect, useRef } from 'react';

export default function Alfonsobot() {
  const { appIsEnglish, isBotLoading } = useUserStore();
  const txt = appIsEnglish ? Lang.en : Lang.es;

  const { alfonsobotChat } = useUserStore();
  const chat = [alfonsoBoit1stResponse(appIsEnglish), ...alfonsobotChat];

  // If isLoadingContent is true, scroll to the bottom.
  const refLoader = useRef<HTMLDivElement>(null);
  useEffect(() => {
    isBotLoading && refLoader.current?.scrollIntoView({ behavior: 'smooth' });
  }, [isBotLoading]);

  return (
    <>
      <div className="h-[80vh] md:h-[70vh] mx-[-2rem] md:mx-0 flex flex-col">
        <div className="bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(0,0,0,0.7)] flex-1 overflow-y-scroll">
          <div className="px-4 py-2">
            {chat.map((dialog, i) => {
              if (dialog.role === 'model')
                return (
                  <DialogBot
                    key={i}
                    response={<Markdown options={mdOpt}>{dialog.parts as string}</Markdown>}
                  />
                );
              else return <DialogUser key={i} response={<p>{dialog.parts as string}</p>} />;
            })}

            {isBotLoading ? (
              <div ref={refLoader} key="Loading...">
                <DialogBot isBotLoading />
              </div>
            ) : null}
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-inherit px-4 py-2">
          <SendInput
            botErrorMsg={txt.botErrorMsg}
            buttonTxt={txt.sendButton}
            placeholder={txt.inputPlaceholder}
          />
        </div>
      </div>
    </>
  );
}

const mdOpt = {
  overrides: {
    strong: {
      props: { className: 'text-blue-500 text-lg' },
    },
    li: {
      props: { className: 'list-disc ml-5' },
    },
    p: {
      props: { className: 'mb-2' },
    },
    a: {
      props: { className: 'text-blue-500' },
    },
  },
};
