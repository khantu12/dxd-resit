import React, { useState } from 'react';
import { MenuIcon, XIcon, ArrowRightIcon } from '@heroicons/react/outline';
import { map } from 'lodash';
import Link from './Link';
import Sidebar from './Sidebar';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const links = [
    {
      href: '/critical-design',
      title: 'Critical Design',
      description:
        'The Critical Design course is focused on turning a topic into an idea and an idea into a concept.',
    },
    {
      href: '/media-theory',
      title: 'Media Theory',
      description:
        'The Media Theory course teaches how the media works, the different mediums, how and when to use each of the mediums.',
    },
    {
      href: '/story-creation',
      title: 'Story Creation',
      description:
        'The Story Creation class focuses on how to communicate and create an amazing story that is built upon emotion, motive, characters and events.',
    },
  ];

  return (
    <>
      <div className="bg-black sticky top-0 w-full z-20">
        <div className="container flex items-center mx-auto px-4 py-1 md:px-6 md:py-3 z-30">
          <Link
            to="/"
            activeClassName="no-underline"
            onClick={() => setShowMenu(false)}
            className="text-white font-semibold text-lg hover:text-black hover:bg-white duration-100 p-0 rounded-none ">
            DXD Resit - Dimitar Dimitrov
          </Link>
          <div
            onClick={() => toggleMenu()}
            className="cursor-pointer w-10 h-10 relative ml-auto">
            <MenuIcon
              className={`${showMenu ? 'opacity-0' : 'opacity-100'} menu-icon`}
            />
            <XIcon
              className={`${showMenu ? 'opacity-100' : 'opacity-0'} menu-icon`}
            />
          </div>
        </div>
      </div>
      <Sidebar
        className="flex justify-center items-center"
        show={showMenu}
        onClose={() => toggleMenu()}
        animation="slide"
        from="right"
        hideOnDesktop={false}>
        <div className="mx-auto grid grid-cols-1 gap-5">
          {map(links, ({ href, title }) => (
            <Link
              className="flex flex-col !text-left max-w-xs hover:bg-orange-700"
              activeClassName="bg-orange-800"
              onClick={() => {
                toggleMenu();
                window.scrollTo(0, 0);
              }}
              key={href}
              to={href}>
              <div className="flex items-center justify-between">
                <span className="">{title}</span>
                <ArrowRightIcon className="ml-3 w-5 h-5 flex-shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </Sidebar>
    </>
  );
};

export default Nav;
