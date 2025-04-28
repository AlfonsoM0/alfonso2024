'use client';

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/react';
import { Link } from '@nextui-org/react';
import Image from 'next/image';

import { link as linkStyles } from '@nextui-org/theme';

import NextLink from 'next/link';
import clsx from 'clsx';

import { ThemeSwitch } from '@/components/theme-switch';
import AlfonsoLogo from '@public/android-chrome-512x512.png';
import Icon from '@components/icons';

import useUserStore from '@/store/userStore';
import lang from '@config/MyNavbar_lang';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const Navbar = () => {
  const { appIsEnglish, setAppIsEnglish, changeLanguage } = useUserStore((store) => store);

  const txt = appIsEnglish ? lang.en : lang.es;

  const pathname = usePathname();

  const navLinks = txt.navLinks.filter((item) => item.url !== pathname);

  useEffect(() => {
    const browserLanguage = navigator.language;
    if (browserLanguage.includes('es')) setAppIsEnglish(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NextUINavbar
      maxWidth="lg"
      position="sticky"
      shouldHideOnScroll
      className="max-w-screen-lg m-auto lg:rounded-full lg:mt-2"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/" title={`Home`}>
            <Image
              title="Alfonso Logo"
              alt="Alfonso Logo"
              src={AlfonsoLogo.src}
              width={32}
              height={32}
            />
            <p className="font-bold text-inherit">{txt.hello}</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <ul className="hidden sm:flex gap-4 justify-start ml-2">
          {navLinks.map((item) => (
            <NavbarItem key={item.url} aria-label={item.name}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
                color="foreground"
                title={item.name}
                href={item.url}
              >
                {item.name}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <button onClick={changeLanguage} aria-label="Language">
            <Icon title="Language" width={24} className="text-default-500" />
          </button>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <button onClick={changeLanguage} aria-label="Language">
          <Icon title="Language" width={24} className="text-default-500" />
        </button>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-10 flex flex-col items-center gap-10">
          {navLinks.map((item) => (
            <NavbarMenuItem key={item.url} aria-label={item.name}>
              <Link color="foreground" title={item.name} href={item.url} size="lg">
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
