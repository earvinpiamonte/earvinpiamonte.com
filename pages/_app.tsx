import type { AppProps } from 'next/app';

import '@/styles/global.css';

import ThemeProvider from '../providers/ThemeProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
