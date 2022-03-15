import React from "react"

import Banner from "sections/banner"
import CryptoTrading from "sections/crypto-trading"
import BackProject from "sections/back-project"
import Category from "sections/category"
import CryptoReview from "sections/crypto-review"
import Subscribe from "sections/subscribe"

export default function IndexPage() {
  return (
    <>
      <Banner />
      <CryptoTrading />
      <BackProject />
      <Category />
      <CryptoReview />
      <Subscribe />
    </>
  )
}
