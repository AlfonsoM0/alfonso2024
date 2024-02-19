'use client';

import useUserStore from '@/store/userStore';
import { Button, CircularProgress } from '@nextui-org/react';

export default function SendInput() {
  const { appIsEnglish } = useUserStore((store) => store);

  const buttonTxt = appIsEnglish ? 'Send' : 'Enviar';

  return (
    <div className="flex items-center">
      <input
        className="w-full border rounded-full py-2 px-4 mr-2"
        type="text"
        placeholder="Type your message..."
      />
      <Button
        isDisabled={false}
        variant="bordered"
        className="bg-blue-500 hover:bg-blue-400 dark:bg-blue-800 dark:hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-full"
      >
        {/* <CircularProgress size="sm" /> */}
        {buttonTxt}
      </Button>
    </div>
  );
}
