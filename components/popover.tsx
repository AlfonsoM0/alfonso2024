import React from 'react';
import { Popover, PopoverTrigger, PopoverContent, Button } from '@nextui-org/react';

export default function CustomPopover({
  children,
  popoverTitle,
  popoverText,
}: {
  children: React.ReactNode;
  popoverTitle?: string;
  popoverText?: string;
}) {
  return (
    <Popover placement="top" showArrow={true}>
      <PopoverTrigger className="bg-transparent h-auto w-auto">
        <Button>{children}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">{popoverTitle}</div>
          <div className="text-tiny">{popoverText}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
