import React from 'react';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { Switch } from '@headlessui/react';

const ThemeChanger = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const enabled = theme === 'dark';

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <Switch
      checked={enabled}
      onChange={() => setTheme(enabled ? 'light' : 'dark')}
      className={`
        ${enabled ? 'bg-purple-500' : 'bg-purple-500'}
        relative inline-flex items-center h-6 rounded-full w-11 relative
      `}
    >
      <span className="sr-only">Enable dark mode</span>
      {enabled ? (
        <MoonIcon className={`w-4 h-4 text-white absolute left-1 top-1`} />
      ) : (
        <SunIcon className={`w-4 h-4 text-white absolute right-1 top-1`} />
      )}
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full transition ease-in-out duration-200`}
      />
    </Switch>
  );
};

export default ThemeChanger;
