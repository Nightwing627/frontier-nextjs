/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import SocialLayout from "../../components/social/layout"

import Feed from 'sections/social/feed'

export default function SocialFeed() {
  return (
    <section sx={styles.social} id="social">
      <SocialLayout>
        <Feed />
      </SocialLayout>
    </section>
  )
}

const styles = {
  social: {
    variant: 'section.keyFeature'
  },
}
