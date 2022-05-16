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
    color = 'blue',
    outlined = false,
    pill = false,
    narrow = false,
    children,
    className,
    ...rest
  } = props;

  let bgClass = 'bg-blue-600';
  let textClass = 'text-blue-600';
  let borderClass = 'border-blue-600';
  let hoverBgClass = 'hover:bg-blue-700';
  let focustRingClass = 'focus:ring-blue-500';
  let focusRingOffsetClass = 'focus:ring-offset-blue-200';

  switch (color) {
    case 'blue':
      bgClass = 'bg-blue-600';
      textClass = 'text-blue-600';
      borderClass = 'border-blue-600';
      hoverBgClass = 'hover:bg-blue-700';
      focustRingClass = 'focus:ring-blue-500';
      focusRingOffsetClass = 'focus:ring-offset-blue-200';
      break;
    case 'blue':
      bgClass = 'bg-blue-600';
      textClass = 'text-blue-600';
      borderClass = 'border-blue-600';
      hoverBgClass = 'hover:bg-blue-700';
      focustRingClass = 'focus:ring-blue-500';
      focusRingOffsetClass = 'focus:ring-offset-blue-200';
      break;
    case 'gray':
      bgClass = 'bg-gray-600';
      textClass = 'text-gray-600';
      borderClass = 'border-gray-600';
      hoverBgClass = 'hover:bg-gray-700';
      focustRingClass = 'focus:ring-gray-500';
      focusRingOffsetClass = 'focus:ring-offset-gray-200';
      break;
    case 'green':
      bgClass = 'bg-green-600';
      textClass = 'text-green-600';
      borderClass = 'border-green-600';
      hoverBgClass = 'hover:bg-green-700';
      focustRingClass = 'focus:ring-green-500';
      focusRingOffsetClass = 'focus:ring-offset-green-200';
      break;
    case 'red':
      bgClass = 'bg-red-600';
      textClass = 'text-red-600';
      borderClass = 'border-red-600';
      hoverBgClass = 'hover:bg-red-700';
      focustRingClass = 'focus:ring-red-500';
      focusRingOffsetClass = 'focus:ring-offset-red-200';
      break;
    case 'yellow':
      bgClass = 'bg-yellow-600';
      textClass = 'text-yellow-600';
      borderClass = 'border-yellow-600';
      hoverBgClass = 'hover:bg-yellow-700';
      focustRingClass = 'focus:ring-yellow-500';
      focusRingOffsetClass = 'focus:ring-offset-yellow-200';
      break;
    case 'indigo':
      bgClass = 'bg-indigo-600';
      textClass = 'text-indigo-600';
      borderClass = 'border-indigo-600';
      hoverBgClass = 'hover:bg-indigo-700';
      focustRingClass = 'focus:ring-indigo-500';
      focusRingOffsetClass = 'focus:ring-offset-indigo-200';
      break;
    case 'green':
      bgClass = 'bg-green-600';
      textClass = 'text-green-600';
      borderClass = 'border-green-600';
      hoverBgClass = 'hover:bg-green-700';
      focustRingClass = 'focus:ring-green-500';
      focusRingOffsetClass = 'focus:ring-offset-green-200';
      break;
  }

  const commonClassNames = `font-medium align-middle ${
    narrow ? 'pt-1 pb-1.5 px-2' : 'pt-1 pb-1.5 px-4'
  } ${
    pill ? 'rounded-full' : 'rounded'
  } ${hoverBgClass} focus:outline-none focus:ring-2 ${focustRingClass} focus:ring-offset-2 ${focusRingOffsetClass} border border-transparent inline-block`;

  const solidClassNames = `${bgClass} text-white`;
  const outlinedClassNames = `${textClass} ${borderClass} hover:text-white`;

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
