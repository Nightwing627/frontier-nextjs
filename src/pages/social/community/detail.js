/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import SocialLayout from "../../../components/social/layout"

import DetailSection from 'sections/social/community/detail'

export default function SocialCommunity() {
  return (
    <section sx={styles.social} id="social">
      <SocialLayout>
        <DetailSection />
      </SocialLayout>
    </section>
  )
}

const styles = {
  social: {
    variant: 'section.keyFeature'
  },
}
