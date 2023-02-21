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
        <title>{`Jackson Mills`}</title>
        <meta name="description" content="Jem's portfolio" />
        <link rel="icon" href="/favicon.ico" />
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