import Link from 'next/link';

const NavItem = ({ title, path }) => {
  return (
    <Link href={path}>
      <a className="block mt-4 lg:inline-block lg:mt-0 lg:mr-6 hover:text-blue-500">
        {title}
      </a>
    </Link>
  );
};

export default NavItem;
