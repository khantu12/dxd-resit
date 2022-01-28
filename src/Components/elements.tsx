import React, { useState } from 'react';
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from 'react-lazy-load-image-component';
import Zoom from 'react-medium-image-zoom';

type ReactComponent = React.FC<React.HTMLAttributes<HTMLParagraphElement>>;

const Main: ReactComponent = ({ children, className }) => {
  return (
    <main
      className={`mx-auto max-w-3xl px-5 sm:px-20 flex flex-col my-12 ${className}`}>
      {children}
    </main>
  );
};
const H1: ReactComponent = ({ children, className }) => {
  return <h1 className={`text-4xl font-bold mb-2 ${className}`}>{children}</h1>;
};
const Title: ReactComponent = ({ children, className }) => {
  return (
    <H1 className={`text-center mb-8 tracking-wide ${className}`}>
      {children}
    </H1>
  );
};
const H2: ReactComponent = ({ children, className }) => {
  return (
    <h2 className={`text-2xl font-semibold mt-5 mb-2 ${className}`}>
      {children}
    </h2>
  );
};
const H3: ReactComponent = ({ children, className }) => {
  return (
    <h3 className={`text-xl font-medium mt-4 mb-2 ${className}`}>{children}</h3>
  );
};
const Paragraph: ReactComponent = ({ children, className }) => {
  return (
    <p className={`text-base font-normal my-2 ${className}`}>{children}</p>
  );
};
const OrderedList: ReactComponent = ({ children, className }) => {
  return (
    <ol className={`list-disc flex flex-col space-y-1 ml-10 my-2 ${className}`}>
      {children}
    </ol>
  );
};
const Image = ({
  className,
  src,
  zoom = false,
}: LazyLoadImageProps & { zoom?: boolean }) => {
  const [shouldZoom, setShouldZoom] = useState(false);
  if (zoom) {
    return (
      <LazyLoadImage
        effect="blur"
        src={src}
        onClick={() => {
          setShouldZoom((prev) => !prev);
        }}
        wrapperClassName={`${shouldZoom && 'w-full left-0 absolute'}`}
        className={`max-h-[80vh] mx-auto my-6 ${
          shouldZoom ? 'cursor-zoom-out' : 'cursor-zoom-in'
        } ${className}`}
      />
    );
  }
  return (
    <LazyLoadImage
      effect="blur"
      src={src}
      className={`max-h-[80vh] mx-auto my-6 ${className}`}
    />
  );
};
const ImageCaption: ReactComponent = ({ children, className }) => {
  return (
    <p className={`-mt-4 mb-6 text-gray-500 text-center italic ${className}`}>
      {children}
    </p>
  );
};
const Anchor: React.FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = ({ children, className, ...props }) => {
  return (
    <a
      {...props}
      className={`font-medium w-max border-b-2 border-orange-700 cursor-pointer hover:bg-orange-700 hover:text-white duration-200 ${className}`}>
      {children}
    </a>
  );
};

export {
  Main,
  Title,
  H1,
  H2,
  H3,
  Paragraph,
  OrderedList,
  Image,
  ImageCaption,
  Anchor,
};
