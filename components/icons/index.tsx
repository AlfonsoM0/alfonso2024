import { ComponentProps } from 'react';
import AudioOffIcon from './AudioOffIcon';
import AudioOnIcon from './AudioOnIcon';
import CSSIcon from './CSSIcon';
import DownloadIcon from './DownloadIcon';
import ExpressIcon from './ExpressIcon';
import GitHubIcon from './GitHubIcon';
import GitIcon from './GitIcon';
import HTMLIcon from './HTMLIcon';
import JavaScriptIcon from './JavaScriptIcon';
import LanguageIcon from './LanguageIcon';
import LinkedInIcon from './LinkedInIcon';
import MoonIcon from './MoonIcon';
import NextJsIcon from './NextJsIcon';
import NodeJsIcon from './NodeJsIcon';
import NoSQLIcon from './NoSQLIcon';
import NPMIcon from './NPMIcon';
import PNPMIcon from './PNPMIcon';
import PosgreSQLIcon from './PostgreSQLIcon';
import PostmanIcon from './PostManIcon';
import PrismaIcon from './PrismaIcon';
import ReactIcon from './ReactIcon';
import ReduxIcon from './ReduxIcon';
import ResetIcon from './ResetIcon';
import SEOIcon from './SEOIcon';
import SequelizeIcon from './SequelizeIcon';
import SQLIcon from './SQLIcon';
import SunIcon from './SunIcon';
import TRPCIcon from './TRPCIcon';
import TyepeScriptIcon from './TypeScriptIcon';
import ZustandIcon from './Zustand';
import FirebaseIcon from './Firebase';

export type SvgProps = ComponentProps<'svg'>;

type IconTitle =
  | 'AudioOff'
  | 'AudioOn'
  | 'CSS'
  | 'Download'
  | 'Express.js'
  | 'Firebase.js'
  | 'GitHub'
  | 'Git'
  | 'HTML'
  | 'JavaScript'
  | 'Language'
  | 'LinkedIn'
  | 'Moon'
  | 'Next.js'
  | 'Node.js'
  | 'No-SQL'
  | 'NPM'
  | 'PNPM'
  | 'PostgreSQL'
  | 'Postman'
  | 'Prisma ORM'
  | 'React.js'
  | 'Redux'
  | 'Reset'
  | 'SEO'
  | 'Sequelize ORM'
  | 'SQL'
  | 'Sun'
  | 'tRPC'
  | 'TypeScript'
  | 'Zustand.js';

type IconProps = SvgProps & {
  title: IconTitle;
  width: number;
};

type Icons = {
  title: IconTitle;
  svg: (props: SvgProps) => JSX.Element;
};

// https://heroicons.com/ | https://www.svgrepo.com
const icons: Icons[] = [
  {
    title: 'AudioOff',
    svg: AudioOffIcon,
  },
  {
    title: 'AudioOn',
    svg: AudioOnIcon,
  },
  {
    title: 'CSS',
    svg: CSSIcon,
  },
  {
    title: 'Download',
    svg: DownloadIcon,
  },
  {
    title: 'Express.js',
    svg: ExpressIcon,
  },
  {
    title: 'Firebase.js',
    svg: FirebaseIcon,
  },
  {
    title: 'GitHub',
    svg: GitHubIcon,
  },
  {
    title: 'Git',
    svg: GitIcon,
  },
  {
    title: 'HTML',
    svg: HTMLIcon,
  },
  {
    title: 'JavaScript',
    svg: JavaScriptIcon,
  },
  {
    title: 'Language',
    svg: LanguageIcon,
  },
  {
    title: 'LinkedIn',
    svg: LinkedInIcon,
  },
  {
    title: 'Moon',
    svg: MoonIcon,
  },
  {
    title: 'Next.js',
    svg: NextJsIcon,
  },
  {
    title: 'Node.js',
    svg: NodeJsIcon,
  },
  {
    title: 'No-SQL',
    svg: NoSQLIcon,
  },
  {
    title: 'NPM',
    svg: NPMIcon,
  },
  {
    title: 'PNPM',
    svg: PNPMIcon,
  },
  {
    title: 'PostgreSQL',
    svg: PosgreSQLIcon,
  },
  {
    title: 'Postman',
    svg: PostmanIcon,
  },
  {
    title: 'Prisma ORM',
    svg: PrismaIcon,
  },
  {
    title: 'React.js',
    svg: ReactIcon,
  },
  {
    title: 'Redux',
    svg: ReduxIcon,
  },
  {
    title: 'Reset',
    svg: ResetIcon,
  },
  {
    title: 'SEO',
    svg: SEOIcon,
  },
  {
    title: 'Sequelize ORM',
    svg: SequelizeIcon,
  },
  {
    title: 'SQL',
    svg: SQLIcon,
  },
  {
    title: 'Sun',
    svg: SunIcon,
  },
  {
    title: 'tRPC',
    svg: TRPCIcon,
  },
  {
    title: 'TypeScript',
    svg: TyepeScriptIcon,
  },
  {
    title: 'Zustand.js',
    svg: ZustandIcon,
  },
];

export default function Icon(props: IconProps) {
  const icon = icons.find((i) => i.title === props.title);
  return icon ? icon.svg({ ...props, width: props.width, height: props.width }) : <></>;
}
