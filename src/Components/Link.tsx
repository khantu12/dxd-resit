import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const Link: React.FC<
  NavLinkProps &
    React.RefAttributes<HTMLAnchorElement> & {
      activeClassName?: string;
    }
> = ({ children, className, activeClassName, ...props }) => (
  <NavLink
    {...props}
    className={({ isActive }) =>
      twMerge(
        'p-3 text-center select-none',
        isActive && (activeClassName || 'underline'),
        'cursor-pointer rounded-lg font-semibold text-white transition-colors ease-in-out duration-75',
        className as string | undefined,
      )
    }>
    {children}
  </NavLink>
);

export default Link;
