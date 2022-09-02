import React, { useState } from 'react';
import {
  MenuIcon,
  XIcon,
  ArrowRightIcon,
  BeakerIcon,
  BookOpenIcon,
  EyeIcon,
} from '@heroicons/react/outline';
import { map } from 'lodash';
import { twMerge } from 'tailwind-merge';
import Link from './Link';
import Sidebar from './Sidebar';

const links = [
  {
    href: '/critical-design',
    title: 'Critical Design',
    icon: <BeakerIcon className="h-5 w-5 shrink-0" />,
  },
  {
    href: '/story-creation',
    title: 'Story Creation',
    icon: <BookOpenIcon className="h-5 w-5 shrink-0" />,
  },
  {
    href: '/media-theory',
    title: 'Media Theory',
    icon: <EyeIcon className="h-5 w-5 shrink-0" />,
  },
];

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <div className="bg-black sticky top-0 w-full z-20">
        <div className="container flex items-center mx-auto px-4 py-1 md:px-6 md:py-3 z-30">
          <Link
            to="/"
            activeClassName="no-underline"
            onClick={() => setShowMenu(false)}
            className="text-white font-semibold text-lg hover:bg-orange-700 rounded-md duration-75 py-1 px-2">
            DXD Resit - Dimitar Dimitrov
          </Link>
          <div
            onClick={() => toggleMenu()}
            className="cursor-pointer w-10 h-10 relative ml-auto">
            <MenuIcon
              className={twMerge(
                showMenu ? 'opacity-0' : 'opacity-100',
                'menu-icon',
              )}
            />
            <XIcon
              className={twMerge(
                showMenu ? 'opacity-100' : 'opacity-0',
                'menu-icon',
              )}
            />
          </div>
        </div>
      </div>
      <Sidebar
        className="flex py-28 items-center"
        show={showMenu}
        onClose={() => toggleMenu()}
        animation="slide"
        from="right"
        hideOnDesktop={false}>
        <div className="mx-auto grid grid-cols-1 gap-5">
          {map(links, ({ href, title, icon }) => (
            <Link
              className="flex items-center justify-between max-w-xs hover:bg-orange-700"
              activeClassName="bg-orange-800"
              onClick={() => {
                toggleMenu();
                window.scrollTo(0, 0);
              }}
              key={href}
              to={href}>
              <div className="flex items-center pr-5">
                {icon}
                <span className="ml-3">{title}</span>
              </div>
              <ArrowRightIcon className="ml-3 w-5 h-5 flex-shrink-0" />
            </Link>
          ))}
        </div>
      </Sidebar>
    </>
  );
};

export { links };

export default Nav;
