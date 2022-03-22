/** @jsx jsx */
import router, { useRouter } from "next/router"
import React, { useState } from "react"
import { jsx, Box, Text, Flex, Card, Button, Image } from "theme-ui"
import { FaCircle } from "react-icons/fa"
import { BsChatSquareDots } from 'react-icons/bs'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { AdminData, FriendData } from 'sections/social/social.data'

export default function People() {
  return (
    <Box>
        <Flex sx={{ alignItems: 'center' }}>
          <Text as="p" sx={styles.title}>Members</Text>
          &nbsp;&nbsp;<FaCircle sx={styles.midDot} />&nbsp;&nbsp;
          <Text as="p" sx={styles.title}>146,214</Text>
        </Flex>
        <Text as="p" sx={styles.description}>
          New people and Pages who join this group will appear here.
        </Text>

        <Card sx={styles.users}>
          <Flex sx={{ alignItems: 'center' }}>
            <Text as="p" sx={styles.title}>Admins & moderators</Text>
            &nbsp;&nbsp;<FaCircle sx={styles.midDot} />&nbsp;&nbsp;
            <Text as="p" sx={styles.title}>5</Text>
          </Flex>
          <Box sx={styles.users.content}>
            {AdminData.map((item) => (
              <Flex key={item.id} sx={styles.users.item}>
                <Flex>
                  <Image src={item.userImage} sx={styles.users.content.avatar} />
                  <Box sx={{ ml: 5 }}>
                    <Text as="p" sx={styles.users.content.username}>
                      {item.userName}
                    </Text>
                    <Text as="p" sx={styles.users.role}>{item.role}</Text>
                    <Text as="p" sx={styles.users.position}>{item.position}</Text>
                  </Box>
                </Flex>
                <Button sx={styles.users.action}><AiOutlineUserAdd />Add Friend</Button>
              </Flex>
            ))}
            <Box sx={styles.users.footer}>
              <Button sx={styles.users.footer.action}>See All</Button>
            </Box>
          </Box>
        </Card>

        <Card sx={styles.users}>
          <Flex sx={{ alignItems: 'center' }}>
            <Text as="p" sx={styles.title}>Friends</Text>
            &nbsp;&nbsp;<FaCircle sx={styles.midDot} />&nbsp;&nbsp;
            <Text as="p" sx={styles.title}>114</Text>
          </Flex>
          <Box sx={styles.users.content}>
            {FriendData.map((item) => (
              <Flex key={item.id} sx={styles.users.item}>
                <Flex sx={{ alignItems: 'center' }}>
                  <Image src={item.avatar} sx={styles.users.content.avatar} />
                  <Box sx={{ ml: 5 }}>
                    <Text as="p" sx={styles.users.content.username}>
                      {item.userName}
                    </Text>
                    <Text as="p" sx={styles.users.position}>{item.job}</Text>
                  </Box>
                </Flex>
                <Button sx={styles.users.action}><BsChatSquareDots />Message</Button>
              </Flex>
            ))}
            <Box sx={styles.users.footer}>
              <Button sx={styles.users.footer.action}>See All</Button>
            </Box>
          </Box>
        </Card>
    </Box>
  )
}

const styles = {
    title: {
      fontSize: '28px',
      fontFamily: 'Inter',
      lineHeight: '24px',
      fontWeight: '600',
      color: '#1A1D1F',
    },
    midDot: {
      fontSize: '5px',
    },
    description: {
        fontSize: '15px',
        color: '#6F767E',
        mt: 3,
        fontFamily: 'Inter',
    },
    
    users: {
      borderRadius: '10px',
      border: '1.5px solid #F1F2F6',
      p: 0,
      mt: 6,
      '&:last-of-type': {
        mt: 7,
      },
      content: {
        mt: 3,
        bg: 'white',
        borderRadius: '14px',
        py: 4,
        px: 6,
        avatar: {
          width: '90px',
          height: '90px',
          ObjectFit: 'cover',
          borderRadius: '50%',
        },
        username: {
          color: 'social_text',
          fontFamily: 'Inter',
          fontSize: '24px',
          lineHeight: '29px',
          fontWeight: '600',
        },
      },
      item: {
        justifyContent: 'space-between',
        my: 5,
      },
      role: {
        bg: 'rgba(91, 110, 245, 0.2)',
        borderRadius: '8px',
        p: '5.5px 16px',
        color: 'primary',
        fontSize: '15px',
        lineHeight: '24px',
        letterSpacing: '-0.01em',
        fontFamily: 'Inter',
        fontWeight: '700',
        width: 'fit-content',
        mt: '10px'
      },
      position: {
        color: '#788292',
        fontSize: '18px',
        lineHeight: '22px',
        fontFamily: 'Inter',
        fontWeight: '500',
        mt: '10px'
      },
      action: {
        height: 'fit-content',
        alignItems: 'center',
        display: 'flex',
        mt: '4%',
        fontSize: '15px !important',
        borderRadius: '12px',
        fontFamily: 'Inter !important',
        fontWeight: '700',
        '> svg': {
          fontSize: '24px',
          mr: '12px',
        },
      },
      footer: {
        width: '100%',
        action: {
          mt: 3,
          width: '100%',
          borderRadius: '12px',
          py: '22px !important',
        }
      }
    },
}
// #6F767E'
