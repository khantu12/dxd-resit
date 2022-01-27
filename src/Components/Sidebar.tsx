import React, { useCallback, useEffect } from 'react';
import Overlay from './Overlay';

type SidebarProps = {
  show?: boolean;
  onClose?: () => void;
  animation?: 'slide' | 'appear';
  hideOnDesktop?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Sidebar: React.FC<SidebarProps> = ({
  show = false,
  children,
  className,
  onClose,
  animation = 'slide',
  hideOnDesktop = true,
}) => {
  const appear: string = `${
    show ? 'opacity-100' : 'opacity-0 pointer-events-none'
  } w-full bg-black/80 backdrop-blur-sm`;
  const slide: string = `${show ? 'translate-x-0' : '-translate-x-full'}`;

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

  useEffect(() => {
    if (animation !== 'appear') {
      return;
    }

    if (show) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [show]);

  return (
    <>
      {animation === 'slide' && <Overlay onClick={onClose} show={show} />}
      <div
        className={`${
          animation === 'appear' ? appear : slide
        } absolute p-10 py-13 flex flex-col z-20 ${
          hideOnDesktop && 'md:hidden'
        } transition-translate ease-in-out duration-300 bg-black top-full text-teal-200 min-h-[calc(100vh-100%)] ${className}`}>
        {children}
      </div>
    </>
  );
};

export default Sidebar;
