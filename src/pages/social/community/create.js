/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import SocialLayout from "../../../components/social/layout"

import CreateSection from 'sections/social/community/create'

export default function SocialCommunityCreate() {
  return (
    <section sx={styles.social} id="social">
      <SocialLayout>
        <CreateSection />
      </SocialLayout>
    </section>
  )
}

const styles = {
  social: {
    variant: 'section.keyFeature'
  },
}
