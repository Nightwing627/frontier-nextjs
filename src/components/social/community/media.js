/** @jsx jsx */
import router, { useRouter } from "next/router"
import React, { useState } from "react"
import { jsx, Grid, Box, Text, Flex, Card, Button, Image } from "theme-ui"
import MediaImg from 'assets/social/medias/1.png'

export default function Media() {

  let items = [];
  for (var i = 0; i < 20; i ++) {
    items.push(MediaImg);
  }

  return (
    <Grid sx={styles.grid}>
      {items.map((item) => (
        <Image src={item} sx={styles.image}></Image>
      ))}
        
    </Grid>
  )
}

const styles = {
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      "10px 5px",
    ],
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(1, 1fr 1fr)",
      null,
      null,
      null,
      null,
      "repeat(1, 1fr 1fr 1fr)",
      "repeat(1, 1fr 1fr 1fr 1fr)",
    ],
  },
  image: {
    width: [ null, null, '100%', null, null, null, '220px' ],
    height: [ null, null, '100%', null, null, null, '220px' ],
    objectFit: 'cover',
    borderRadius: '10px',
  }
}

// width: [ null, null, '100%', null, null, null, '192px' ],
