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
import { FaGlobe, FaHeart, FaComment, FaPaperPlane, FaBookmark, FaEllipsisH } from 'react-icons/fa'
import RightSide from './right-side'
import Avatar from 'assets/user-avatars/avatar.png'
import Happy from 'assets/social/happy.svg'
import ImageF from 'assets/social/image.svg'
import Doc from 'assets/social/document.svg'
import Img1 from 'assets/social/1.jpg'
import Img2 from 'assets/social/2.jpg'
import Img3 from 'assets/social/3.jpg'

export default function Feed() {
  return (
    <Container sx={{ p: '0px !important' }}>
      <Box>
        <Grid sx={styles.grid}>
          <Box>
            <Card sx={styles.mind}>
              <Flex>
                <Image src={Avatar} sx={styles.mind.avatar}/>
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

            <Card sx={styles.personal}>
              <Flex sx={{ justifyContent: 'space-between' }}>
                <Flex sx={styles.personal.userInfo}>
                  <Image src={Avatar} sx={styles.personal.userInfo.avatar}/>
                  <Box sx={{ ml: 5 }}>
                    <Text as="p" sx={styles.personal.userInfo.username}>
                      Thomas Ben
                    </Text>
                    <Text as="span" sx={{ color: '#788292' }}>45 mins ago</Text>
                  </Box>
                </Flex>
                <FaEllipsisH sx={{ color: '#788292', mr: '10px' }} />
              </Flex>
              <Text as="p" sx={styles.personal.userInfo.summary}>
                Being a father is sometimes my hardest but always my most rewarding job.<br />
                Happy Father’s Day to all dads out there. 
              </Text>
              <Flex sx={{ alignItems: 'center', pt: '20px', justifyContent: 'space-between' }}>
                <Flex>
                  <Flex sx={styles.personal.iconPart}>
                    <FaHeart sx={styles.personal.faIcon} />
                    <Text as="span">1.5k</Text>
                  </Flex>
                  <Flex sx={styles.personal.iconPart}>
                    <FaComment sx={styles.personal.faIcon} />
                    <Text as="span">46</Text>
                  </Flex>
                  <Flex sx={styles.personal.iconPart}>
                    <FaPaperPlane sx={styles.personal.faIcon} />
                    <Text as="span">100</Text>
                  </Flex>
                </Flex>
                <Flex sx={styles.personal.iconPart}>
                  <FaBookmark sx={styles.personal.faIcon} />
                </Flex>
              </Flex>
            </Card>

            <Card sx={styles.personal}>
              <Flex sx={{ justifyContent: 'space-between' }}>
                <Flex sx={styles.personal.userInfo}>
                  <Image src={Avatar} sx={styles.personal.userInfo.avatar}/>
                  <Box sx={{ ml: 5 }}>
                    <Text as="p" sx={styles.personal.userInfo.username}>
                      Thomas Ben
                    </Text>
                    <Text as="span" sx={{ color: '#788292' }}>45 mins ago</Text>
                  </Box>
                </Flex>
                <FaEllipsisH sx={{ color: '#788292', mr: '10px' }} />
              </Flex>
              <Text as="p" sx={styles.personal.userInfo.summary}>
                Having fun while cooking and eating variety of foods with <a className="user-name">@Sarah</a>
              </Text>
              <Grid sx={styles.personalGrid}>
                <Image src={Img1} sx={styles.personalGrid.mainImg} />
                <Box>
                  <Image src={Img2} sx={styles.personalGrid.secImg} />
                  <Image src={Img3} sx={styles.personalGrid.secImg} />
                </Box>
              </Grid>
              <Flex sx={{ alignItems: 'center', pt: '20px', justifyContent: 'space-between' }}>
                <Flex>
                  <Flex sx={styles.personal.iconPart}>
                    <FaHeart sx={styles.personal.faIcon} />
                    <Text as="span">1.5k</Text>
                  </Flex>
                  <Flex sx={styles.personal.iconPart}>
                    <FaComment sx={styles.personal.faIcon} />
                    <Text as="span">46</Text>
                  </Flex>
                  <Flex sx={styles.personal.iconPart}>
                    <FaPaperPlane sx={styles.personal.faIcon} />
                    <Text as="span">100</Text>
                  </Flex>
                </Flex>
                <Flex sx={styles.personal.iconPart}>
                  <FaBookmark sx={styles.personal.faIcon} />
                </Flex>
              </Flex>
            </Card>
          </Box>
          <RightSide />
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
  personalGrid: {
    my: 3,
    pt: 0,
    gridGap: [
      "35px 0",
      null,
      "45px 14px",
      null,
      "50px 14px",
      null,
      null,
      "50px 20px",
    ],
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      null,
      null,
      "repeat(1, 60% 35%)",
    ],
    mainImg: {
      borderRadius: '10px',
      width: '100%',
      height: '100%',
    },
    secImg: {
      borderRadius: '10px',
      width: '100%',
      height: '48%',
    }
  },
  mind: {
    bg: 'white',
    borderRadius: '10px',
    border: '1.5px solid #F1F2F6',
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
  },
  personal: {
    bg: 'white',
    borderRadius: '10px',
    border: '1.5px solid #F1F2F6',
    mt: 4,
    py: 5,
    pl: 7,
    userInfo: {
      avatar: {
        width: '70px',
        height: '70px',
        minWidth: 'auto',
        borderRadius: '50%',
      },
      username: {
        color: '#203758',
        fontFamily: 'mazzard-h-bold',
        fontSize: '18px'
      },
      summary: {
        color: '#203758',
        mt: 5,
        fontSize: '16px',
        '.user-name': {
          color: 'button_color',
        }
      }
    },
    iconPart: {
      mr: '40px',
      '> span': {
        ml: 2
      }
    },
    faIcon: {
      fontSize: '24px',
      color: '#D7E0EB',
      '&:hover': {
        color: '#F0304E',
      }
    }
  }
}
