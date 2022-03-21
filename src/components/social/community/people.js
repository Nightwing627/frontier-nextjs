/** @jsx jsx */
import router, { useRouter } from "next/router"
import React, { useState } from "react"
import { jsx, Box, Text, Flex } from "theme-ui"

export default function About() {
  return (
    <Box>
      <h2>About Me</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetiing
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a gallery of type and
        scrambled it to make a type specimen book. It has survived not only five
        centruies, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktp publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetiing
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a gallery of type and
        scrambled it to make a type specimen book. It has survived not only five
        centruies, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktp publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </Box>
  )
}

const styles = {}
