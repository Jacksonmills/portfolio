import GlobalStyles from '@/components/GlobalStyles';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
      <Analytics />
      <div id='modal'></div>
    </>
  );
}
