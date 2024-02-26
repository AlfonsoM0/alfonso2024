'use client';

import runAlfonsobotChat from '@/server/actions/runAlfonsobotChat';
import useUserStore from '@/store/userStore';
import { Button, CircularProgress } from '@nextui-org/react';
import { useEffect, useState } from 'react';

export default function SendInput() {
  const { appIsEnglish, alfonsobotChat, addChatResponse, clearChatResponses } = useUserStore(
    (store) => store
  );

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [isBotError, setIsBotError] = useState(false);
  const botErrorMsg = appIsEnglish
    ? 'There was an error when processing your message. Check that it is not an inappropriate message and tries again.'
    : 'Hubo un error al procesar tu mensaje. Comprueba que no sea un mensaje inapropiado e intenta nuevamente.';

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsBotError(false);
    setIsLoading(true);

    addChatResponse({ role: 'user', parts: inputText });

    try {
      const res = await runAlfonsobotChat(inputText, alfonsobotChat);
      addChatResponse({ role: 'model', parts: res });
    } catch (error) {
      // console.error('Bot Error => ', error);
      setIsBotError(true);
      addChatResponse({ role: 'model', parts: botErrorMsg });
    }
    setInputText('');
    setIsLoading(false);
  }

  function reset() {
    clearChatResponses();
    setIsBotError(false);
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
        aria-label={placeholder}
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

      {isBotError ? (
        <button
          onClick={reset}
          className="bg-danger-600 dark:bg-danger-400 text-white font-medium py-2 px-4 rounded-full ml-1"
        >
          RESET
        </button>
      ) : null}
    </form>
  );
}
