import { SVGProps } from 'react';
import { Part, InputContent } from '@google/generative-ai';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type AlfonsoBotResponse = {
  role: 'user' | 'model';
  parts: string | (string | Part)[];
};
