import Link from 'next/link';

import { useState, useEffect } from 'react';

import {
  TerminalIcon,
  XIcon,
  MenuIcon,
  ExternalLinkIcon,
  MailIcon,
} from '@heroicons/react/outline';

import NavItem from '@/components/NavItem';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import ThemeChanger from '@/components/ThemeChanger';

const Nav = () => {
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    document.body.style.overflowY = modalIsOpen ? 'hidden' : 'auto';
  }, [modalIsOpen]);

  return (
    <>
      <Modal show={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <div className="text-right">
          <button onClick={closeModal}>
            <XIcon className="w-4 h-4" />
          </button>
        </div>
        <p className="mb-8">
          I'm currently not doing any freelance works at the moment but you may
          still view my Freelancer.com profile.
        </p>
        <p className="mb-2">
          <Button
            pill={true}
            src="https://freelancer.com/u/earvinpiamonte"
            className="mr-2"
          >
            <ExternalLinkIcon className="w-4 h-4 inline-block mr-1" />
            <span className="align-middle">View profile</span>
          </Button>
          <Button
            color="gray"
            pill={true}
            outlined={true}
            src="mailto:earvin.piamonte@gmail.com"
          >
            <MailIcon className="w-4 h-4 inline-block mr-1" />
            <span className="align-middle">Send an email</span>
          </Button>
        </p>
      </Modal>
      <nav className="flex items-center justify-between flex-wrap">
        <div className="w-full lg:w-auto lg:mr-12 flex items-center justify-between py-1 lg:py-0 lg:px-0">
          <div>
            <Link href="/">
              <a className="font-semibold text-xl tracking-tight text-purple-500">
                <TerminalIcon className="w-8 h-8" />
              </a>
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              className="p-1 text-purple-500"
              onClick={() => setDropdownMenuOpen(!dropdownMenuOpen)}
            >
              {dropdownMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`w-full lg:w-auto lg:flex-grow lg:flex lg:items-center py-4 lg:py-0 ${
            dropdownMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="text-sm lg:flex-grow lg:mb-0 mb-4">
            <NavItem title="Home" path="/" />
            <NavItem title="Portfolio" path="/portfolio" />
            <NavItem title="Crafts" path="/crafts" />
            <NavItem title="Blog" path="/blog" />
            <NavItem title="My Gear" path="/my-gear" />
          </div>
          <div>
            <ThemeChanger />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
