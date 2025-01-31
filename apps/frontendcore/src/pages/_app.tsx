import { CacheProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { Version } from 'ui-mui';
import { createEmotionCache } from 'utils-mui';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';

import { AuthProvider } from '../context/AuthContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import './../styles/styles.css';

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
            <Version version="2.11.4" />
            <div className="content-wrapper">
              <section className="content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <AuthProvider>{page}</AuthProvider>
                    </div>
                  </div>
                </div>
              </section>
            </div>
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
      {getLayout(
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>,
      )}
    </>
  );
};

export default App;
