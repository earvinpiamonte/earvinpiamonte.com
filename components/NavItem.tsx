import Link from 'next/link';

const NavItem = ({ title, path }) => {
  return (
    <Link
      href={path}
      className="block mt-4 lg:inline-block lg:mt-0 lg:mr-6 hover:text-blue-500">

      {title}

    </Link>
  );
};

export default NavItem;
