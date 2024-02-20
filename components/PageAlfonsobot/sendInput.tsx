'use client';

import runAlfonsobotChat from '@/server/actions/runAlfonsobotChat';
import useUserStore from '@/store/userStore';
import { Button, CircularProgress } from '@nextui-org/react';
import { useState } from 'react';

export default function SendInput() {
  const { appIsEnglish, addChatResponse } = useUserStore((store) => store);

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    addChatResponse({ role: 'user', parts: inputText });

    const res = await runAlfonsobotChat(inputText);
    addChatResponse({ role: 'model', parts: res });

    setInputText('');
    setIsLoading(false);
  }

  const buttonTxt = appIsEnglish ? 'Send' : 'Enviar';
  const placeholder = appIsEnglish ? 'Write your query...' : 'Escribe tu consulta...';
  return (
    <form onSubmit={onSubmit} className="flex items-center" aria-label={placeholder}>
      <input
        onChange={(e) => setInputText(e.currentTarget.value)}
        value={inputText}
        disabled={isLoading ? true : false}
        className="w-full border rounded-full py-2 px-4 mr-2"
        type="text"
        placeholder={placeholder}
      />

      {isLoading ? (
        <button
          disabled
          className="bg-white dark:bg-black text-white font-medium py-2 px-4 rounded-full"
        >
          <CircularProgress size="sm" />
        </button>
      ) : (
        <input
          disabled={isLoading ? true : false}
          type="submit"
          aria-label="Send"
          className="bg-blue-500 hover:bg-blue-400 dark:bg-blue-800 dark:hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-full"
          value={buttonTxt}
        />
      )}
    </form>
  );
}
