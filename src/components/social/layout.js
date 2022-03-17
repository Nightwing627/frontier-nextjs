/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import { Box, Grid, Flex, Container } from "theme-ui"
import Siderbar from "./siderbar"
import MobileDrawer from "./mobile-drawer"
import { DrawerProvider } from "../../contexts/drawer/drawer.provider"

export default function SocialLayout({ children }) {
  return (
    <DrawerProvider>
      <Container>
        <MobileDrawer />
        
        <Grid sx={styles.grid}>
          <Box sx={styles.sidebar}>
            <Siderbar />
          </Box>
          {children}
        </Grid>
      </Container>
      
    </DrawerProvider>
  )
}

const styles = {
  sidebar: {
    "@media screen and (max-width: 1024px)": {
      display: "none",
    },
    height: "calc(100vh)",
    bg: "white",
    p: '5%',
    mt: '-20px',
  },
  section: {
    variant: "section.campaignFeature",
    backgroundColor: "section_bg_color",
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      "35px 0",
      null,
      "45px 28px",
      null,
      "50px 28px",
      null,
      null,
      "50px 28px",
    ],
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      null,
      null,
      "repeat(1, 1fr 3fr)",
    ],
  },
}
