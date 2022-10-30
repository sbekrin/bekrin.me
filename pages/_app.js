import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import GlobalStyles from '~/components/global-styles';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Sergey Bekrin, a Lead Frontend Engineer"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
