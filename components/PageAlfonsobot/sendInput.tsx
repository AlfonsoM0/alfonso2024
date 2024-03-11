'use client';

import runAlfonsobotChat from '@/server/actions/runAlfonsobotChat';
import useUserStore from '@/store/userStore';
import { Button, CircularProgress } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { ResetIcon } from '../icons';

type SendInputProps = {
  botErrorMsg: string;
  buttonTxt: string;
  placeholder: string;
};

export default function SendInput(txt: SendInputProps) {
  const { alfonsobotChat, addChatResponse, clearChatResponses } = useUserStore((store) => store);

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [isBotError, setIsBotError] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);
    setIsBotError(false);

    addChatResponse({ role: 'user', parts: inputText });

    try {
      const res = await runAlfonsobotChat(inputText, alfonsobotChat);
      addChatResponse({ role: 'model', parts: res });
    } catch (error) {
      // console.error('Bot Error => ', error);
      setIsBotError(true);
      addChatResponse({ role: 'model', parts: txt.botErrorMsg });
    }

    setInputText('');
    setIsLoading(false);
  }

  function reset() {
    clearChatResponses();
    setIsBotError(false);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center flex-wrap justify-center gap-2 sm:flex-nowrap"
      aria-label={txt.placeholder}
    >
      <input
        onChange={(e) => setInputText(e.currentTarget.value)}
        value={inputText}
        disabled={isLoading ? true : false}
        className="w-full border rounded-full py-2 px-4"
        type="text"
        placeholder={txt.placeholder}
        aria-label={txt.placeholder}
      />

      {isLoading ? (
        <button
          disabled
          className="bg-white dark:bg-black text-white font-medium py-2 px-4 rounded-full"
        >
          <CircularProgress size="sm" />
        </button>
      ) : (
        <div className="flex">
          <input
            disabled={isLoading || inputText.length < 2 ? true : false}
            type="submit"
            aria-label="Send"
            className="bg-blue-500 hover:bg-blue-400 dark:bg-blue-800 dark:hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-full disabled:text-slate-500"
            value={txt.buttonTxt}
          />
          <button
            disabled={isLoading}
            type="button"
            aria-label="Reset Chat"
            onClick={reset}
            className={`${
              isBotError ? 'bg-red-500' : 'bg-danger-600'
            } dark:bg-danger-400 text-white font-medium py-2 px-4 rounded-full ml-1 disabled:text-slate-500`}
          >
            <ResetIcon Width={20} />
          </button>
        </div>
      )}
    </form>
  );
}
