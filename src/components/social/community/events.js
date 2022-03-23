/** @jsx jsx */
import router, { useRouter } from "next/router"
import React, { useState } from "react"
import { jsx, Box, Text, Flex, Card, Button, Image } from "theme-ui"
import { FaCircle } from "react-icons/fa"
import { BsChatSquareDots } from 'react-icons/bs'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { UpcomingEventData, PastEventData } from 'sections/social/social.data'
import EventComp from 'components/event'

export default function Events() {
  return (
    <Box>
        <Card sx={styles.event}>
          <Flex sx={styles.header}>
            <Text as="p" sx={styles.header.title}>Upcoming events</Text>
            <Text as="p" sx={styles.header.action}>Create event</Text>
          </Flex>
          <Box sx={styles.event.content}>
            {UpcomingEventData.map((item) => (
              <EventComp key={item.id} data={item} />
            ))}
          </Box>
        </Card>

        <Card sx={styles.event}>
          <Flex sx={styles.header}>
            <Text as="p" sx={styles.header.title}>Past events</Text>
            <Text as="p" sx={styles.header.action}>See All</Text>
          </Flex>
          <Box sx={styles.event.content}>
            {PastEventData.map((item) => (
              <EventComp key={item.id} data={item} />
            ))}
          </Box>
        </Card>
    </Box>
  )
}

const styles = {
  event: {
    borderRadius: '10px',
    border: '1.5px solid #F1F2F6',
    p: 0,
    '&:last-of-type': {
      mt: 7,
    },
    content: {
      mt: 6,
      bg: 'white',
      borderRadius: '14px',
      py: 4,
      px: 6,
      mb: 3,
    },
  },

  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '28px',
    fontFamily: 'Inter',
    lineHeight: '24px',
    fontWeight: '600',
    title: {
      color: '#1A1D1F',
    },
    action: {
      color: 'primary',
      cursor: 'pointer',
      '&:hover': {
        color: '#3e54ef'
      }
    },
  }
}
