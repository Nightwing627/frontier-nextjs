/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import SocialLayout from "../../components/social/layout"

import Notification from 'sections/social/notification2'

export default function SocialNotification() {
  return (
    <section sx={styles.social} id="social">
      <SocialLayout>
        <Notification />
      </SocialLayout>
    </section>
  )
}

const styles = {
  social: {
    variant: 'section.keyFeature'
  },
}
