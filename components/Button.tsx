import Link from 'next/link';

import { ColorsString } from '@/types/index';

const Button = (props: {
  title?: string;
  src?: string;
  color?: ColorsString;
  outlined?: boolean;
  pill?: boolean;
  narrow?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<any>) => void;
}) => {
  const {
    title,
    src,
    color = 'purple',
    outlined = false,
    pill = false,
    narrow = false,
    children,
    className,
    ...rest
  } = props;

  const commonClassNames = `font-medium ${
    narrow ? 'py-1.5 px-1.5' : 'pt-1 pb-1.5 px-4'
  } ${
    pill ? 'rounded-full' : 'rounded'
  } hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-${color}-500 focus:ring-offset-2 focus:ring-offset-${color}-200 border border-transparent inline-block`;

  const solidClassNames = `bg-${color}-600 text-white`;
  const outlinedClassNames = `text-${color}-600 border-${color}-600 hover:text-white`;

  const typeClassNames = outlined ? outlinedClassNames : solidClassNames;

  const classNames = `${commonClassNames} ${typeClassNames} ${className}`;

  const isInternalLink = src && (src.startsWith('/') || src.startsWith('#'));

  return src ? (
    isInternalLink ? (
      <Link href={src}>
        <a {...rest} className={classNames}>
          {title ?? children}
        </a>
      </Link>
    ) : (
      <a
        {...rest}
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames}
      >
        {title ?? children}
      </a>
    )
  ) : (
    <button {...rest} className={classNames}>
      {title ?? children}
    </button>
  );
};

export default Button;
