import Link from 'next/link';

const CustomLink = (props) => {
  const { href, className } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className={className || `app-link`} {...props} />
      </Link>
    );
  }

  return (
    <a
      className={className || `app-link`}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};

export default CustomLink;
