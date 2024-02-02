import { CSSProperties } from 'react';

export default function AudioOffIcon({
  Width,
  Style,
  ClassName,
}: {
  Width: number;
  Style?: CSSProperties;
  ClassName?: string;
}) {
  // https://heroicons.com/ | https://www.svgrepo.com
  // style={Style}
  // width={Width}
  // height={Width}
  // className={ClassName}
  return (
    <svg
      style={Style}
      width={Width}
      height={Width}
      className={ClassName}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  );
}
