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
import { Button } from '@nextui-org/react';
import { Kbd } from '@nextui-org/react';
import { Link } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import Image from 'next/image';

import { link as linkStyles } from '@nextui-org/theme';

import NextLink from 'next/link';
import clsx from 'clsx';

import { ThemeSwitch } from '@/components/theme-switch';
import AlfonsoLogo from '@public/android-chrome-512x512.png';
import { LanguageIcon } from '@components/icons';

import useUserStore from '@/store/userStore';
import lang from '@config/MyNavbar_lang';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const { appIsEnglish, changeLanguage } = useUserStore((store) => store);

  const txt = appIsEnglish ? lang.en : lang.es;

  const pathname = usePathname();

  const navLinks = txt.navLinks.filter((item) => item.url !== pathname);

  return (
    <NextUINavbar maxWidth="lg" position="sticky" shouldHideOnScroll>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image alt="Alfonso Logo" src={AlfonsoLogo.src} width={32} height={32} />
            <p className="font-bold text-inherit">{txt.hello}</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <ul className="hidden md:flex gap-4 justify-start ml-2">
          {navLinks.map((item) => (
            <NavbarItem key={item.url}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
                color="foreground"
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
            <LanguageIcon Width={24} ClassName="text-default-500" />
          </button>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <button onClick={changeLanguage} aria-label="Language">
          <LanguageIcon Width={24} ClassName="text-default-500" />
        </button>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {navLinks.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" href={item.url} size="lg">
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
