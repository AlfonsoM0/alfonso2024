'use client';

import runAlfonsobotChat from '@/server/actions/runAlfonsobotChat';
import useUserStore from '@/store/userStore';
import { CircularProgress } from '@nextui-org/react';
import { useState } from 'react';
import Icon from '../icons';
import { setAlfonsobotHistory, alfonsoBoit1stResponse } from '@/config/alfonsobotPromtHistory';
import TextAreaAutosize from 'react-textarea-autosize';

type SendInputProps = {
  botErrorMsg: string;
  buttonTxt: string;
  placeholder: string;
};

export default function SendInput(txt: SendInputProps) {
  const {
    alfonsobotChat,
    addChatResponse,
    clearChatResponses,
    appIsEnglish,

    userQuery,
    setUserQuery,
    isBotLoading,
    setIsBotLoading,
    isBotError,
    setIsBotError,
  } = useUserStore((store) => store);

  async function onSubmit(e?: React.FormEvent<HTMLFormElement>) {
    e && e.preventDefault();

    setIsBotLoading(true);
    setIsBotError(false);

    addChatResponse({ role: 'user', parts: userQuery });

    const history = [
      ...setAlfonsobotHistory(appIsEnglish),
      alfonsoBoit1stResponse(appIsEnglish),
      ...alfonsobotChat,
    ];

    try {
      const res = await runAlfonsobotChat(userQuery, history);
      addChatResponse({ role: 'model', parts: res });
    } catch (error) {
      // console.error('Bot Error => ', error);
      setIsBotError(true);
      addChatResponse({ role: 'model', parts: txt.botErrorMsg });
    }

    setUserQuery('');
    setIsBotLoading(false);
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
      <TextAreaAutosize
        onChange={(e) => setUserQuery(e.currentTarget.value)}
        value={userQuery}
        className="dark:caret-white w-full border rounded-xl py-2 px-4"
        placeholder={txt.placeholder}
        aria-label={txt.placeholder}
      />

      {isBotLoading ? (
        <button
          disabled
          type="button"
          className="bg-white dark:bg-black text-white font-medium py-2 px-4 rounded-full"
        >
          <CircularProgress size="sm" />
        </button>
      ) : (
        <div className="flex">
          <input
            disabled={isBotLoading || userQuery.length < 2 ? true : false}
            type="submit"
            aria-label="Send"
            className="bg-blue-500 hover:bg-blue-400 dark:bg-blue-800 dark:hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-full disabled:text-slate-500"
            value={txt.buttonTxt}
          />
          <button
            disabled={isBotLoading}
            type="button"
            aria-label="Reset Chat"
            onClick={reset}
            className={`${
              isBotError ? 'bg-red-500' : 'bg-danger-600'
            } dark:bg-danger-400 text-white font-medium py-2 px-4 rounded-full ml-1 disabled:text-slate-500`}
          >
            <Icon title="Reset" width={20} />
          </button>
        </div>
      )}
    </form>
  );
}
