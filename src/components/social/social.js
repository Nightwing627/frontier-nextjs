/** @jsx jsx */
import React, { useState } from "react"
import { jsx, Image, Grid, Box } from "theme-ui"
import Link from "next/link"
import { HiMail } from "react-icons/hi"

export default function SocialPage({ className }) {
  return (
    <div sx={styles.social_page} className={className}>
      {/* <Grid columns={[1, null, null, 2]} sx={styles.signuppage}>
        <Box sx={styles.logImg}></Box>
        <Box></Box>
      </Grid> */}
    </div>
  )
}

const styles = {
  social_page: {
    paddingTop: "110px",
  },
}
