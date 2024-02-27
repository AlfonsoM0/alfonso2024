'use client';

import DialogBot from './dialogAlfonsoBot';
import DialogUser from './dialogUser';
import SendInput from './sendInput';
import useUserStore from '@/store/userStore';
import Markdown from 'markdown-to-jsx';

export default function Alfonsobot() {
  const chat = useUserStore((store) => store.alfonsobotChat).slice(1);
  const { appIsEnglish } = useUserStore((store) => store);

  const disclamer = appIsEnglish ? 'Disclamer' : 'Descargo de responsabilidad';
  const disclamerTxt = appIsEnglish
    ? 'AlfonsoBot will do its best to respond. But sometimes he can be too creative in his responses.'
    : 'AlfonsoBot hará lo mejor posible para responder. Pero aveces puede ser demasiado creativo en sus respuestas.';

  return (
    <>
      <div className="h-[75vh] md:h-[65vh] flex flex-col">
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
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-inherit px-4 py-2">
          <SendInput />
        </div>
      </div>
      <div className="p-2 mx-8 mt-2 border border-primary-100 rounded-lg text-center">
        <p className="text-sm">
          <strong>{disclamer}</strong>
        </p>
        <p className="text-xs">{disclamerTxt}</p>
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
