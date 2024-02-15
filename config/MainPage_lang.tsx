import CSSIcon from '@components/icons/CSSIcon';
import ExpressIcon from '@components/icons/ExpressIcon';
import GitHubIcon from '@components/icons/GitHubIcon';
import GitIcon from '@components/icons/GitIcon';
import HTMLIcon from '@components/icons/HTMLIcon';
import JavaScriptIcon from '@components/icons/JavaScriptIcon';
import LinkedInIcon from '@components/icons/LinkedInIcon';
import NPMIcon from '@components/icons/NPMIcon';
import PNPMIcon from '@components/icons/PNPMIcon';
import NextJsIcon from '@components/icons/NextJsIcon';
import NoSQLIcon from '@components/icons/NoSQLIcon';
import NodeJsIcon from '@components/icons/NodeJsIcon';
import PostManIcon from '@components/icons/PostManIcon';
import PostgreSQLIcon from '@components/icons/PostgreSQLIcon';
import ReactIcon from '@components/icons/ReactIcon';
import ReduxIcon from '@components/icons/ReduxIcon';
import SEOIcon from '@components/icons/SEOIcon';
import SQLIcon from '@components/icons/SQLIcon';
import SequelizeIcon from '@components/icons/SequelizeIcon';
import TypeScriptIcon from '@components/icons/TypeScriptIcon';
import TRPCIcon from '@components/icons/TRPCIcon';
import PrismaIcon from '@components/icons/PrismaIcon';

const socialIconsWidth = 80;
const toolsIconWidth = 60;

const es = {
  presentation: (
    <>
      Soy un apasionado <br /> desarrollador web Full Stack
    </>
  ),
  presentation_p: `Soy un desarrollador web y un administrador de empresas experimentado. Soy una persona sociable, creativa y analítica que valora la honestidad, la confianza y el respeto.`,
  talents: `Si está buscando una persona con facilidad para: `,
  talents_ul: [
    `Comunicar o enseñar ideas complejas.`,
    `Planear, organizar, dirigir y controlar proyectos.`,
    `Desarrollar códigos de lógicas complejas en backend y frontend.`,
    `Analizar situaciones o datos para encontrar soluciones creativas.`,
    `Comprender sobre las tecnologías empresariales y de la información.`,
  ],
  contactMe: `Conecta conmigo: `,
  contactMe_ul: [
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon Width={socialIconsWidth} />,
      href: 'https://www.linkedin.com/in/alfonsomontesdeoca/',
    },
    {
      name: 'GitHub',
      icon: <GitHubIcon Width={socialIconsWidth} />,
      href: 'https://github.com/AlfonsoM0',
    },
  ],
  knowMore: `¿Quieres saber más sobre mí?`,
  alfonsoBot: `¡Pregúntele a AlfonsoBot!`,
  lenguagesAndTools: `Lenguages y herramientas`,
  lenguagesAndTools_ul: [
    {
      name: 'JavaScript',
      icon: <JavaScriptIcon Width={toolsIconWidth} />,
      href: 'https://wikipedia.org/wiki/JavaScript',
    },
    {
      name: 'HTML (HyperText Markup Language)',
      icon: <HTMLIcon Width={toolsIconWidth} />,
      href: 'https://wikipedia.org/wiki/HTML',
    },
    {
      name: 'CSS (Cascading Style Sheets)',
      icon: <CSSIcon Width={toolsIconWidth} />,
      href: 'https://wikipedia.org/wiki/CSS',
    },
    {
      name: 'TypeScript',
      icon: <TypeScriptIcon Width={toolsIconWidth} />,
      href: 'https://www.typescriptlang.org/',
    },
    {
      name: 'SEO (Search Engine Optimization)',
      icon: <SEOIcon Width={toolsIconWidth} />,
      href: 'https://wikipedia.org/wiki/Search_engine_optimization',
    },
    {
      name: 'Node.js',
      icon: <NodeJsIcon Width={toolsIconWidth} />,
      href: 'https://nodejs.org/',
    },
    {
      name: 'NPM (Node Package Manager)',
      icon: <NPMIcon Width={toolsIconWidth} />,
      href: 'https://www.npmjs.com/',
    },
    {
      name: 'PNPM (Performant Node Package Manager)',
      icon: <PNPMIcon Width={toolsIconWidth} />,
      href: 'https://pnpm.io//',
    },
    {
      name: 'Git',
      icon: <GitIcon Width={toolsIconWidth} />,
      href: 'https://git-scm.com/',
    },
    {
      name: 'React.js',
      icon: <ReactIcon Width={toolsIconWidth} />,
      href: 'https://es.reactjs.org/',
    },
    {
      name: 'Next.js',
      icon: <NextJsIcon Width={toolsIconWidth} />,
      href: 'https://nextjs.org/',
    },
    {
      name: 'Redux',
      icon: <ReduxIcon Width={toolsIconWidth} />,
      href: 'https://redux.js.org/',
    },
    {
      name: 'Prisma (TypeScript ORM)',
      icon: <PrismaIcon Width={toolsIconWidth} />,
      href: 'https://www.prisma.io/',
    },
    {
      name: 'TRPC (Typescript Remote Procedure Call)',
      icon: <TRPCIcon Width={toolsIconWidth} />,
      href: 'https://trpc.io/',
    },
    {
      name: 'PostgreSQL',
      icon: <PostgreSQLIcon Width={toolsIconWidth} />,
      href: 'https://www.postgresql.org/',
    },
    {
      name: 'Sequelize (JavaScript ORM)',
      icon: <SequelizeIcon Width={toolsIconWidth} />,
      href: 'https://sequelize.org/',
    },
    {
      name: 'SQL',
      icon: <SQLIcon Width={toolsIconWidth} />,
      href: 'https://wikipedia.org/wiki/SQL',
    },
    {
      name: 'No-SQL',
      icon: <NoSQLIcon Width={toolsIconWidth} />,
      href: 'https://wikipedia.org/wiki/NoSQL',
    },
    {
      name: 'Express.js',
      icon: <ExpressIcon Width={toolsIconWidth} />,
      href: 'https://expressjs.com/',
    },
    {
      name: 'Postman',
      icon: <PostManIcon Width={toolsIconWidth} />,
      href: 'https://www.postman.com/',
    },
  ],
};

const en = {
  presentation: (
    <>
      I&apos;m a passionate <br /> Full Stack Web Developer
    </>
  ),
  presentation_p: `I am a web developer and an experienced business administrator. I am a sociable, creative and analytical person who values honesty, trust and respect.`,
  talents: `If you are looking for someone proficient at: `,
  talents_ul: [
    `Communicateing or teaching complex ideas.`,
    `Planing, organizing, directing and controling.`,
    `Developing complex logic codes in Backend and Frontend.`,
    `Analyzing situations or data to find creative solutions.`,
    `Understanding business and information technologies.`,
  ],
  contactMe: `Connect with me: `,
  contactMe_ul: es.contactMe_ul,
  knowMore: `Do you want to know more about me?`,
  alfonsoBot: `Ask AlfonsoBot!`,
  lenguagesAndTools: `Languages and Tools`,
  lenguagesAndTools_ul: es.lenguagesAndTools_ul,
};

const lang = { es, en };

export default lang;
