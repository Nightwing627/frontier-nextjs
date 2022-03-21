/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import SocialLayout from "../../../components/social/layout"

import MainSection from 'sections/social/community/main'

export default function SocialCommunity() {
  return (
    <section sx={styles.social} id="social">
      <SocialLayout>
        
      </SocialLayout>
    </section>
  )
}

const styles = {
  social: {
    variant: 'section.keyFeature'
  },
}
