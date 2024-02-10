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
      viewBox="-2.5 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g fill="none" fillRule="evenodd">
        <path d="M-3 0h32v32H-3z"></path>
        <path
          fill="#353535"
          d="M1.192 16.267c.04 2.065.288 3.982.745 5.75.456 1.767 1.16 3.307 2.115 4.618.953 1.31 2.185 2.343 3.694 3.098 1.51.755 3.357 1.132 5.54 1.132 3.22 0 5.89-.844 8.016-2.532 2.125-1.69 3.446-4.22 3.962-7.597h1.192c-.437 3.575-1.847 6.345-4.23 8.312-2.384 1.966-5.324 2.95-8.82 2.95-2.383.04-4.42-.338-6.107-1.133-1.69-.794-3.07-1.917-4.142-3.367-1.073-1.45-1.867-3.158-2.383-5.124C.258 20.408 0 18.294 0 16.028c0-2.542.377-4.806 1.132-6.792C1.887 7.25 2.88 5.57 4.112 4.2 5.34 2.83 6.77 1.79 8.4 1.074 10.03.358 11.698 0 13.406 0c2.383 0 4.44.457 6.167 1.37 1.728.914 3.138 2.126 4.23 3.635 1.093 1.51 1.887 3.238 2.384 5.184.496 1.945.705 3.97.625 6.077H1.193zm24.43-1.192c0-1.867-.26-3.645-.775-5.333-.516-1.688-1.28-3.168-2.294-4.44-1.013-1.27-2.274-2.273-3.784-3.008-1.51-.735-3.258-1.102-5.244-1.102-1.67 0-3.228.317-4.678.953-1.45.636-2.72 1.56-3.813 2.77-1.092 1.212-1.976 2.672-2.652 4.38-.675 1.708-1.072 3.635-1.19 5.78h24.43z"
        ></path>
      </g>
    </svg>
  );
}