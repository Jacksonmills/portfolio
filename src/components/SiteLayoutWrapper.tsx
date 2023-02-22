import Head from 'next/head';
import React from 'react';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Footer from '@/components/Footer';

const SiteLayoutWrapper = ({ children }: { children: React.ReactNode; }) => {
  const isDev = process.env.NODE_ENV !== 'production';

  return (
    <>
      <Head>
        <title>{`JEM`}</title>
        <meta name="description" content="Hey, I'm Jackson Eroe Mills, a Frontend Engineer from Chicago, IL (Looking for work!)" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      <Layout>
        {children}
      </Layout>
      <Footer />
    </>
  );
};

export default SiteLayoutWrapper;