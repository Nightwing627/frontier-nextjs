/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import SocialLayout from "../../components/social/layout"

import Chat from "sections/social/chat"

export default function SocialNotification() {
  return (
    <section sx={styles.social} id="social">
      <SocialLayout>
        <Chat />
      </SocialLayout>
    </section>
  )
}

const styles = {
  social: {
    variant: "section.keyFeature",
  },
}
