import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { Version } from 'ui-mui';
import { createEmotionCache } from 'utils-mui';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';

import 'bootstrap/dist/css/bootstrap.min.css';

// @ts-expect-error cause this works
import GlobalStyles from './../styles/global.css';
const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ??
    ((page) => (
      <>
        <div className="wrapper">
          <Header />
          <Sidebar />
          <CacheProvider value={clientSideEmotionCache}>
            <ThemeProvider theme={GlobalStyles}>
              <Version version="2.11.4" />
              <div className="content-wrapper">
                <section className="content">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12">{page}</div>
                    </div>
                  </div>
                </section>
              </div>
            </ThemeProvider>
          </CacheProvider>
        </div>
        <Footer />
      </>
    ));

  return (
    <>
      <Head>
        <title>FrontendCore - 2025</title>
        <meta name="description" content="Monorepo FrontendCore - 2025" />
        <meta name="version" content="2.11.4" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
