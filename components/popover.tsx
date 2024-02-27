import React from 'react';
import { Popover, PopoverTrigger, PopoverContent, Button } from '@nextui-org/react';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

export default function CustomPopover({
  children,
  popoverTitle,
  popoverText,
  popoverUrl,
}: {
  children: React.ReactNode;
  popoverTitle?: string;
  popoverText?: string;
  popoverUrl?: Url;
}) {
  return (
    <Popover placement="top" showArrow={true}>
      <PopoverTrigger className="bg-transparent h-auto w-auto hover:bg-white">
        <Button>{children}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <Link
            href={popoverUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${popoverTitle} link`}
            className="text-small font-bold"
          >
            {popoverTitle}
          </Link>
          <p className="text-tiny">{popoverText}</p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
