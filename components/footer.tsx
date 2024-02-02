import { Link } from '@nextui-org/link';
import { Lang } from '@config/Footer_lang';

export default function Footer() {
  const { es, en } = Lang;

  return (
    <footer className="w-full flex items-center justify-center py-3">
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="#"
        title="alfonso.ar homepage"
      >
        <span className="text-default-600">{es[0]}</span>
        <p className="text-primary">{es[1]}</p>
      </Link>
    </footer>
  );
}
