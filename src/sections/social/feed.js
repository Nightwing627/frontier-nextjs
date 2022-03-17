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
  Card,
} from "theme-ui"
import React, { useState } from "react"
import Avatar1 from 'assets/user-avatars/avatar.png'

export default function Feed() {
  return (
    <Container>
      <Box>
        <Grid sx={styles.grid}>
          <Box>
            <Card sx={styles.mind}>
              <Flex>
                <Image src={Avatar1} sx={styles.mind.avatar}/>
                <Box sx={{ ml: 3}}>
                  <Flex sx={{ alignItem: 'center', justifyContent: 'space-between' }}>
                    <Text as="span">What's on you mind, lqbal?</Text>
                    <Button sx={styles.mind.post}>Post</Button>
                  </Flex>
                  
                </Box>
              </Flex>
            </Card>
            <Card>
              
            </Card>
            <Card>
              
            </Card>
          </Box>
          <Box>
            <Card>

            </Card>
            <Card>
              
            </Card>
            <Card>
              
            </Card>
          </Box>
        </Grid>
      </Box>
    </Container>
  )
}

const styles = {
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
      "repeat(1, 2fr 1fr)",
    ],
  },
  mind: {
    bg: 'white',
    borderRadius: '10px',
    p: 5,
    avatar: {
      borderRadius: '50%',
    },
    post: {
      fontSize: '18px',
      fontFamily: 'mazzard-h-bold',
      color: 'white',
      bg: 'button_color',
    }
  }
}
