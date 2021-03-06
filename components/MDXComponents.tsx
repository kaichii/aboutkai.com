import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import React, { AnchorHTMLAttributes } from 'react';
import { QAndA } from './Q&A';

const CustomLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { href } = props;
  const isInternalLink =
    href && (href?.startsWith('/') || href?.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};
function RoundedImage(props: ImageProps) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const MDXCompnents = {
  // a: CustomLink,
  Image: RoundedImage,
  QAndA
};

export default MDXCompnents;
