import React from 'react';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

import Button from '@/components/Button';

const ThemeChanger = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      outlined={true}
      narrow={true}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <SunIcon className="w-4 h-4 inline-block" />
      ) : (
        <MoonIcon className="w-4 h-4 inline-block" />
      )}
      <span className="align-middle text-sm ml-1 lg:hidden">
        Switch to {theme === 'dark' ? 'light' : 'dark'} theme
      </span>
    </Button>
  );
};

export default ThemeChanger;
