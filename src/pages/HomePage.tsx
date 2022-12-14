import { ArrowRightIcon } from '@heroicons/react/outline';
import { map } from 'lodash';
import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Title, Main } from '../Components/elements';
import { links } from '../Components/Nav';

const HomeLink: React.FC<
  NavLinkProps & React.RefAttributes<HTMLAnchorElement>
> = ({ children, className, to }) => {
  return (
    <NavLink
      to={to}
      className={twMerge(
        'flex space-x-5 items-center rounded-lg hover:bg-orange-700 hover:text-white duration-75 p-5',
        className as string | undefined,
      )}>
      {children}
    </NavLink>
  );
};

const HomePage = () => (
  <Main className="items-center">
    <Title>DXD Resit</Title>
    <span className="font-semibold text-xl text-orange-700 p-2 rounded-md border-orange-700">
      Dimitar Dimitrov
    </span>

    <div className="h-full flex flex-col w-full md:w-1/2 space-y-2 mt-20">
      {map(links, ({ href, title, icon }) => (
        <HomeLink key={href} to={href}>
          {icon}
          <span>{title}</span>
          <ArrowRightIcon className="!ml-auto w-5 h-5 flex-shrink-0" />
        </HomeLink>
      ))}
    </div>
  </Main>
);

export default HomePage;
