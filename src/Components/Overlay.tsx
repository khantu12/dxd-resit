import React from 'react';

const Overlay: React.FC<
  { show: boolean } & React.HTMLAttributes<HTMLDivElement>
> = ({ show, ...props }) => (
  <div
    {...props}
    className={`${
      !show && 'hidden'
    } cursor-pointer fixed w-full h-full top-0 z-10`}
  />
);

export default Overlay;
