import React from 'react';
import Banner from 'sections/banner';
import CryptoTrading from 'sections/crypto-trading';
import BackProject from 'sections/back-project';
import Category from 'sections/category';
import CryptoReview from 'sections/crypto-review';
import Subscribe from 'sections/subscribe';
import CryptoCommunity from 'sections/crypto-community';

export default function HomePage() {
  return (
    <>
      <Banner />
      <CryptoCommunity />
      <CryptoTrading />
      <BackProject />
      <Category />
      <CryptoReview />
      <Subscribe />
    </>
  );
}
