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
import { FaGlobe } from 'react-icons/fa'
import Avatar1 from 'assets/user-avatars/avatar.png'
import Happy from 'assets/social/happy.svg'
import ImageF from 'assets/social/image.svg'
import Doc from 'assets/social/document.svg'

export default function Feed() {
  return (
    <Container>
      <Box>
        <Grid sx={styles.grid}>
          <Box>
            <Card sx={styles.mind}>
              <Flex>
                <Image src={Avatar1} sx={styles.mind.avatar}/>
                <Box sx={{ pl: '30px', width: '100%' }}>
                  <Flex sx={ styles.mind.part1 }>
                    <Text as="span" sx={{ fontSize: '20px', color: '#203758' }}>
                      What's on you mind, lqbal?</Text>
                    <Button sx={styles.mind.post}>Post</Button>
                  </Flex>
                  <Flex sx={styles.mind.part2}>
                    <FaGlobe sx={{ fontSize: '20px' }}/>
                    <Text as="p" sx={styles.mind.reply}>Everyone can reply</Text>
                  </Flex>
                  <Flex sx={{ alignItems: 'center', pt: '15px' }}>
                    <Image src={ImageF} sx={styles.mind.svgIcon} />
                    <Image src={Doc} sx={styles.mind.svgIcon} />
                    <Image src={Happy} sx={styles.mind.svgIcon} />
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
      width: '60px',
      height: '60px',
      minWidth: 'auto',
      borderRadius: '50%',
    },
    part1: {
      position: 'relative',
      alignItems: 'center',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      justifyContent: 'space-between',
      pb: '10px',
    },
    post: {
      fontSize: '18px',
      fontFamily: 'mazzard-h-bold',
      color: 'white',
      bg: 'button_color',
    },
    part2: {
      alignItems: 'center',
      py: '15px',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    },
    reply: {
      fontSize: '15px',
      fontFamily: 'mazzard-h-bold',
      ml: '10px',
    },
    svgIcon: {
      mr: '15px',
    }
  }
}
