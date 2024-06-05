import Icon from '@/components/icons';

const socialIconsWidth = 80;
const toolsIconWidth = 60;

const languagesAndToolsData = [
  {
    name: 'JavaScript',
    icon: <Icon title="JavaScript" width={toolsIconWidth} />,
    href: 'https://wikipedia.org/wiki/JavaScript',
  },
  {
    name: 'HTML (HyperText Markup Language)',
    icon: <Icon title="HTML" width={toolsIconWidth} />,
    href: 'https://wikipedia.org/wiki/HTML',
  },
  {
    name: 'CSS (Cascading Style Sheets)',
    icon: <Icon title="CSS" width={toolsIconWidth} />,
    href: 'https://wikipedia.org/wiki/CSS',
  },
  {
    name: 'TypeScript',
    icon: <Icon title="TypeScript" width={toolsIconWidth} />,
    href: 'https://www.typescriptlang.org/',
  },
  {
    name: 'SEO (Search Engine Optimization)',
    icon: <Icon title="SEO" width={toolsIconWidth} />,
    href: 'https://wikipedia.org/wiki/Search_engine_optimization',
  },
  {
    name: 'Node.js',
    icon: <Icon title="Node.js" width={toolsIconWidth} />,
    href: 'https://nodejs.org/',
  },
  {
    name: 'NPM (Node Package Manager)',
    icon: <Icon title="NPM" width={toolsIconWidth} />,
    href: 'https://www.npmjs.com/',
  },
  {
    name: 'PNPM (Performant Node Package Manager)',
    icon: <Icon title="PNPM" width={toolsIconWidth} />,
    href: 'https://pnpm.io//',
  },
  {
    name: 'Git',
    icon: <Icon title="Git" width={toolsIconWidth} />,
    href: 'https://git-scm.com/',
  },
  {
    name: 'React.js',
    icon: <Icon title="React.js" width={toolsIconWidth} />,
    href: 'https://es.reactjs.org/',
  },
  {
    name: 'Next.js',
    icon: <Icon title="Next.js" width={toolsIconWidth} />,
    href: 'https://nextjs.org/',
  },
  {
    name: 'Tailwind CSS',
    icon: <Icon title="TailwindCSS" width={toolsIconWidth} />,
    href: 'https://tailwindcss.com/',
  },
  {
    name: 'Redux',
    icon: <Icon title="Redux" width={toolsIconWidth} />,
    href: 'https://redux.js.org/',
  },
  {
    name: 'Zustand.js',
    icon: <Icon title="Zustand.js" width={toolsIconWidth} />,
    href: 'https://zustand-demo.pmnd.rs/',
  },
  {
    name: 'Prisma (TypeScript ORM)',
    icon: <Icon title="Prisma ORM" width={toolsIconWidth} />,
    href: 'https://www.prisma.io/',
  },
  {
    name: 'tRPC (Typescript Remote Procedure Call)',
    icon: <Icon title="tRPC" width={toolsIconWidth} />,
    href: 'https://trpc.io/',
  },
  {
    name: 'PostgreSQL',
    icon: <Icon title="PostgreSQL" width={toolsIconWidth} />,
    href: 'https://www.postgresql.org/',
  },
  {
    name: 'Sequelize (JavaScript ORM)',
    icon: <Icon title="Sequelize ORM" width={toolsIconWidth} />,
    href: 'https://sequelize.org/',
  },
  {
    name: 'SQL',
    icon: <Icon title="SQL" width={toolsIconWidth} />,
    href: 'https://wikipedia.org/wiki/SQL',
  },
  {
    name: 'No-SQL',
    icon: <Icon title="No-SQL" width={toolsIconWidth} />,
    href: 'https://wikipedia.org/wiki/NoSQL',
  },
  {
    name: 'Firebase',
    icon: <Icon title="Firebase.js" width={toolsIconWidth} />,
    href: 'https://firebase.google.com/',
  },
  {
    name: 'Express.js',
    icon: <Icon title="Express.js" width={toolsIconWidth} />,
    href: 'https://expressjs.com/',
  },
  {
    name: 'Postman',
    icon: <Icon title="Postman" width={toolsIconWidth} />,
    href: 'https://www.postman.com/',
  },
];

const contactMeData = [
  {
    name: 'LinkedIn',
    icon: <Icon title="LinkedIn" width={socialIconsWidth} />,
    href: 'https://www.linkedin.com/in/alfonsomontesdeoca/',
  },
  {
    name: 'GitHub',
    icon: <Icon title="GitHub" width={socialIconsWidth} />,
    href: 'https://github.com/AlfonsoM0',
  },
];

const es = {
  presentation: (
    <>
      Soy un apasionado <br /> desarrollador web Full Stack
    </>
  ),
  presentation_p: `Soy un desarrollador web y un administrador de empresas experimentado. Soy una persona sociable, creativa y analítica que valora la honestidad, la confianza y el respeto.`,
  talents: `Si está buscando una persona hábil para: `,
  talents_ul: [
    `Comunicar o enseñar ideas complejas.`,
    `Planificar, organizar, dirigir y controlar proyectos.`,
    `Desarrollar códigos de lógicas complejas en backend y frontend.`,
    `Analizar situaciones o datos para encontrar soluciones creativas.`,
    `Comprender sobre las tecnologías empresariales y de la información.`,
  ],
  contactMe: `Conecta conmigo`,
  contactMe_ul: contactMeData,
  knowMore: `¿Quieres saber más sobre mí?`,
  alfonsoBot: `¡Pregúntele a AlfonsoBot!`,
  lenguagesAndTools: `Lenguajes y herramientas`,
  lenguagesAndTools_ul: languagesAndToolsData,
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
    `Communicating or teaching complex ideas.`,
    `Planning, organising, directing and controlling.`,
    `Developing complex logic codes in Backend and Frontend.`,
    `Analyzing situations or data to find creative solutions.`,
    `Understanding business and information technologies.`,
  ],
  contactMe: `Connect with me`,
  contactMe_ul: contactMeData,
  knowMore: `Do you want to know more about me?`,
  alfonsoBot: `Ask AlfonsoBot!`,
  lenguagesAndTools: `Languages and Tools`,
  lenguagesAndTools_ul: languagesAndToolsData,
};

const lang = { es, en };

export default lang;
