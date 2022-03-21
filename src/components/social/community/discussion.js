/** @jsx jsx */
import router, { useRouter } from "next/router"
import React, { useState } from "react"
import { jsx, Box, Text, Flex, Card, Image, Button, Input } from "theme-ui"
import { FaGlobe, FaEllipsisH, FaHeart, FaComment, FaPaperPlane, FaBookmark } from 'react-icons/fa'
import Avatar from 'assets/user-avatars/avatar.png'
import Happy from 'assets/social/happy.svg'
import ImageF from 'assets/social/image.svg'
import Doc from 'assets/social/document.svg'

export default function Discussion() {
  return (
    <Box>
      <Card sx={styles.mind}>
        <Flex>
          <Image src={Avatar} sx={styles.mind.avatar}/>
          <Box sx={{ pl: '30px', width: '100%' }}>
            <Flex sx={ styles.mind.part1 }>
              <Input placeholder="What's on you mind, lqbal?" />
              <Button sx={styles.mind.post}>Post</Button>
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
            My success in trading wasn't planned, I had ugly beginning in my early days of trades. 
            But today I'm a true definition of grace, Mr Aarons Jackson has never failed me since the day i started investing with him, 
            i have been sitting down and watch my investment grows, 
            i only monitor the progress of my profit nothing else. 
            I know there are alot of hungry scammers here who are making others scared of trading but am assuring you Mr Aarons jackson is 100% legit try and see for your… 
            <span>See more</span>
          </Text>

          <Flex sx={styles.personal.footer}>
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
      
          <Flex sx={styles.comment}>
            <Image src={Avatar} sx={styles.comment.avatar}/>
            <Box sx={{ pl: '10px', width: '100%' }}>
              <Flex sx={ styles.comment.inputArea }>
                <Input placeholder="Write a publice comment" />
                <Flex sx={{ alignItems: 'center' }}>
                  <Image src={ImageF} sx={styles.mind.svgIcon} />
                  <Image src={Doc} sx={styles.mind.svgIcon} />
                  <Image src={Happy} sx={styles.mind.svgIcon} />
                </Flex>  
              </Flex>
              
            </Box>
          </Flex>
      </Card>
    </Box>
  )
}

const styles = {
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
      justifyContent: 'space-between',
      '> input': {
        fontSize: '20px',
        color: '#203758',
        border: 'none',
        outline: 'none',
        '&:focus': {
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
        }
      }
    },
    post: {
      fontSize: '18px',
      fontFamily: 'mazzard-h-bold',
      color: 'white',
      bg: 'button_color',
    },
    reply: {
      fontSize: '15px',
      fontFamily: 'mazzard-h-bold',
      ml: '10px',
    },
    svgIcon: {
      mr: '20px',
      fontSize: '35px',
    }
  },

  personal: {
    bg: 'white',
    borderRadius: '10px',
    border: '1.5px solid #F1F2F6',
    mt: 7,
    p: 5,
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
        lineHeight: '24px',
        '> span': {
          color: '#203758',
          fontFamily: 'mazzard-h-bold',
          cursor: 'pointer',
        }
      }
    },
    footer: { 
      alignItems: 'center', 
      mt: 4,
      p: 2,
      justifyContent: 'space-between',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderLeft: 'none',
      borderRight: 'none',
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
  },

  comment: {
    mt: 5,
    border: '1.5px solid #F1F2F6;',
    p: '10px 20px',
    alignItems: 'center',
    bg: '#F1F2F6',
    borderRadius: '58px',
    avatar: {
      width: '50px',
      height: '50px',
      minWidth: 'auto',
      borderRadius: '50%',
    },
    inputArea: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'space-between',
      '> input': {
        fontSize: '20px',
        color: '#203758',
        border: 'none',
        outline: 'none',
        '&:focus': {
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
        },
      },
    },
  },
}
