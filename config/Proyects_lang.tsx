import ExpressIcon from '@components/icons/ExpressIcon';
import GitIcon from '@components/icons/GitIcon';
import NPMIcon from '@components/icons/NPMIcon';
import NextJsIcon from '@components/icons/NextJsIcon';
import NodeJsIcon from '@components/icons/NodeJsIcon';
import PNPMIcon from '@components/icons/PNPMIcon';
import PostManIcon from '@components/icons/PostManIcon';
import PostgreSQLIcon from '@components/icons/PostgreSQLIcon';
import PrismaIcon from '@components/icons/PrismaIcon';
import ReactIcon from '@components/icons/ReactIcon';
import ReduxIcon from '@components/icons/ReduxIcon';
import SequelizeIcon from '@components/icons/SequelizeIcon';
import TRPCIcon from '@components/icons/TRPCIcon';
import TypeScriptIcon from '@components/icons/TypeScriptIcon';

const toolsIconWidth = 30;

const es = {
  pageTitle: 'Proyectos',
  proyects: [
    {
      name: 'Mujer App',
      description: 'App para comunidad de mujeres emprendedoras de México.',
      lenguagesAndTools_ul: [
        {
          name: 'TypeScript',
          icon: <TypeScriptIcon Width={toolsIconWidth} />,
          href: 'https://www.typescriptlang.org/',
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
      ],
      projectLinkURL: 'https://www.mujer.app',
      projectVideoURL: 'https://www.youtube.com/watch?v=-5j-q7n9loo',
      isVerticalVideo: true,
    },
    {
      name: 'Doctorine App',
      description: 'App de gestión de pacientes, turnos y consultas para médicos odontólogos.',
      lenguagesAndTools_ul: [
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
          name: 'Redux',
          icon: <ReduxIcon Width={toolsIconWidth} />,
          href: 'https://redux.js.org/',
        },
        {
          name: 'PostgreSQL',
          icon: <PostgreSQLIcon Width={toolsIconWidth} />,
          href: 'https://www.postgresql.org/',
        },
        {
          name: 'Sequelize',
          icon: <SequelizeIcon Width={toolsIconWidth} />,
          href: 'https://sequelize.org/',
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
      projectLinkURL: '',
      projectVideoURL: 'https://www.youtube.com/watch?v=TZZrBaSuPXQ',
      isVerticalVideo: false,
    },
  ],
};

export type Proyect = (typeof es.proyects)[0];

const en = {
  pageTitle: 'Proyects',
  proyects: [
    {
      ...(es.proyects.find((p) => p.name === 'Mujer App') as Proyect),
      description: 'App for entrepreneurial women in Mexico.',
    },
    {
      ...(es.proyects.find((p) => p.name === 'Doctorine App') as Proyect),
      description: 'Patient management application, shifts and consultations for dentist doctors.',
    },
  ],
};

const lang = { es, en };

export default lang;
