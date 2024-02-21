import AlfonsoBotIcon from '@public/android-chrome-192x192.webp';
import Image from 'next/image';

export default function AlfonsobotResponse({
  response = <p>Hi, how can I help you?</p>,
}: {
  response?: React.ReactNode;
}) {
  return (
    <>
      <div className="flex items-center mb-2">
        <Image
          width={32}
          height={32}
          className="rounded-full mr-2"
          src={AlfonsoBotIcon.src}
          alt="AlfonsoBot Avatar"
        />
        <div className="font-medium">AlfonsoBot</div>
      </div>
      <div className="bg-white dark:bg-black rounded-lg p-2 shadow mb-2 max-w-[85%]">
        {response}
      </div>
    </>
  );
}
