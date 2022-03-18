/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import SocialLayout from "../../components/social/layout"

import Profilepage from "sections/social/profile"

export default function Profile() {
  return (
    <section sx={styles.social} id="social">
      <SocialLayout>
        <Profilepage />
      </SocialLayout>
    </section>
  )
}

const styles = {
  social: {
    variant: "section.keyFeature",
  },
}
