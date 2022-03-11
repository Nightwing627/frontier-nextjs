import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import CryptoTrading from 'sections/crypto-trading';
import BackProject from 'sections/back-project';
import Category from 'sections/category';
import CryptoReview from 'sections/crypto-review';
import Subscribe from 'sections/subscribe';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Frontier" />
          <Banner />
          <CryptoTrading />
          <BackProject />
          <Category />
          <CryptoReview />
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
