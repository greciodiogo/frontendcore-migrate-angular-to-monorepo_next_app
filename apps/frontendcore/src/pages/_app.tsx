import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createEmotionCache } from 'utils-mui';
import { getVersionInfo } from 'utils-version';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

// @ts-expect-error cause this works
import GlobalStyles from './../styles/global.css';
const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>FrontendCore - 2025</title>
        <meta name="description" content="Monorepo FrontendCore - 2025" />
        <meta name="version" content={getVersionInfo()} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={GlobalStyles}>{<Component {...pageProps} />}</ThemeProvider>
      </CacheProvider>
      <Footer version="2.11.4" date="13/01/2025" />
    </>
  );
};

export default App;
