import GlobalStyles from '@/components/GlobalStyles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
      <div id='modal'></div>
    </>
  );
}
