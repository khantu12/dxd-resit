import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

const Link: React.FC<
  NavLinkProps &
    React.RefAttributes<HTMLAnchorElement> & {
      activeClassName?: string;
    }
> = ({ children, className, activeClassName, ...props }) => (
  <NavLink
    {...props}
    className={({ isActive }) =>
      `${className} p-3 text-center select-none ${
        isActive && (activeClassName || 'underline')
      } uppercase cursor-pointer rounded-lg font-semibold text-white transition-colors ease-in-out duration-75 `
    }>
    {children}
  </NavLink>
);

export default Link;
