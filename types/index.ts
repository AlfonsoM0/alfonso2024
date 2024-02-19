import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type AlfonsoBotChat = {
  role: 'user' | 'model';
  parts: string[];
}[];
