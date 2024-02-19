import AlfonsoBotIcon from '@public/android-chrome-192x192.png';
import Image from 'next/image';

export default function UserResponse({
  response = <p>Sure, I can help with that.</p>,
}: {
  response?: React.ReactNode;
}) {
  return (
    <>
      <div className="flex items-center justify-end">
        <div className="bg-blue-500 dark:bg-blue-800 text-white rounded-lg p-2 shadow mr-2 max-w-sm">
          {response}
        </div>
      </div>
    </>
  );
}
