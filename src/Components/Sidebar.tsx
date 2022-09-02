import React, { useCallback, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import Overlay from './Overlay';

type SidebarProps = {
  show?: boolean;
  onClose?: () => void;
  animation?: 'slide' | 'appear';
  hideOnDesktop?: boolean;
  from?: 'left' | 'right';
} & React.HTMLAttributes<HTMLDivElement>;

const Sidebar: React.FC<SidebarProps> = ({
  show = false,
  children,
  className,
  onClose,
  animation = 'slide',
  from = 'left',
  hideOnDesktop = true,
}) => {
  const appear: string = twMerge(
    show ? 'opacity-100' : 'opacity-0 pointer-events-none',
    'w-full bg-black/80 backdrop-blur-sm',
  );
  const slide: { [key in typeof from]: string } = {
    left: show ? 'translate-x-0' : '-translate-x-full',
    right: twMerge(show ? 'translate-x-0' : 'translate-x-full', 'right-0'),
  };

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      onClose?.();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  return (
    <>
      {animation === 'slide' && <Overlay onClick={onClose} show={show} />}
      <div
        className={twMerge(
          animation === 'appear' ? appear : slide[from],
          hideOnDesktop && 'md:hidden',
          'top-0 fixed px-10 flex flex-col z-10 transition-translate ease-in-out duration-300 bg-black text-teal-200 min-h-full',
          className,
        )}>
        {children}
      </div>
    </>
  );
};

export default Sidebar;
