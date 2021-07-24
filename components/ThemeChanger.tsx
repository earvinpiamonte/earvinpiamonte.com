import React from 'react';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

import Button from '@/components/Button';

const ThemeChanger = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      outlined={true}
      narrow={true}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <>
          <SunIcon className="w-4 h-4" />
        </>
      ) : (
        <>
          <MoonIcon className="w-4 h-4" />
        </>
      )}
    </Button>
  );
};

export default ThemeChanger;
