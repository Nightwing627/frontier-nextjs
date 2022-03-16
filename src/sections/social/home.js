/** @jsx jsx */
import { jsx } from "theme-ui"
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Button,
  IconButton,
  Grid,
} from "theme-ui"
import React, { useState } from "react"
import SocialLayout from "../../components/social/layout"

export default function SocialHome() {
  const [videoOpen, setVideoOpen] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setVideoOpen(true)
  }
  return (
    <section sx={styles.social} id="social">
      <SocialLayout>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
      </SocialLayout>
    </section>
  )
}

const styles = {
  social: {
    paddingTop: "130px",
  },
}
