import { Progress, Skeleton } from '@nextui-org/react';
import AlfonsoBotIcon from '@public/android-chrome-192x192.png';
import Image from 'next/image';

export default function AlfonsobotResponse({
  response = <p>Hi, how can I help you?</p>,
  isBotLoading = false,
}: {
  response?: React.ReactNode;
  isBotLoading?: boolean;
}) {
  if (isBotLoading) return <ResponseContainer response={LoaderSkeleton} />;

  return <ResponseContainer response={response} />;
}

function ResponseContainer({ response }: { response: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center mb-2">
        <Image
          width={32}
          height={32}
          className="rounded-full mr-2"
          src={AlfonsoBotIcon.src}
          title="AlfonsoBot Avatar"
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

const LoaderSkeleton = (
  <div className="space-y-3">
    <Skeleton className="w-3/5 rounded-lg">
      <div className="h-3 w-full rounded-lg bg-secondary"></div>
    </Skeleton>
    <Skeleton className="w-4/5 rounded-lg">
      <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
    </Skeleton>
    <Skeleton className="w-2/5 rounded-lg">
      <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
    </Skeleton>
    <Skeleton className="w-3/5 rounded-lg">
      <div className="h-3 w-full rounded-lg bg-secondary"></div>
    </Skeleton>
    <Skeleton className="w-4/5 rounded-lg">
      <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
    </Skeleton>
    <Skeleton className="w-2/5 rounded-lg">
      <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
    </Skeleton>
  </div>
);
