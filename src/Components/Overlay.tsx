import React from 'react';

const Overlay: React.FC<
  { show: boolean } & React.HTMLAttributes<HTMLDivElement>
> = ({ show, ...props }) => (
  <div
    {...props}
    className={`${
      !show && 'hidden'
    } cursor-pointer absolute w-full h-[100vh] top-0 z-10`}
  />
);

export default Overlay;
