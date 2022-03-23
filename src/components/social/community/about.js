/** @jsx jsx */
import router, { useRouter } from "next/router"
import React, { useState } from "react"
import { jsx, Box, Text, Flex } from "theme-ui"
import { FaGlobe, FaEye, FaClock, FaYelp } from "react-icons/fa"

export default function About() {
  return (
    <Box>
        <Text as="p" sx={styles.title}>
            About this community
        </Text>
        <Text as="p" sx={styles.description}>
            Cryptocurrency Investing enthusiasts group, discuss cryptocurrency investment opportunities and skills, help everyone to catch up the next once-in-a-life crypto bullish run.
             This group is open to public about discussing CryptoCurrency and help each other out with trade facts and knowledge base!!
             &nbsp;&nbsp;<span>See less</span>
        </Text>
        <Box>
            <Box sx={styles.content}>
                <Flex sx={styles.item}>
                    <FaGlobe sx={styles.icon}/>
                    <Text as="p" sx={styles.title}>Public</Text>
                </Flex>
                <Text as="p" sx={styles.summary}>Anyone can see who's in the group and what they post.</Text>
            </Box>
            <Box sx={styles.content}>
                <Flex sx={styles.item}>
                    <FaEye sx={styles.icon}/>
                    <Text as="p" sx={styles.title}>Visible</Text>
                </Flex>
                <Text as="p" sx={styles.summary}>Anyone can find this group.</Text>
            </Box>
            <Box sx={styles.content}>
                <Flex sx={styles.item}>
                    <FaYelp sx={styles.icon}/>
                    <Text as="p" sx={styles.title}>General</Text>
                </Flex>
                <Text as="p" sx={styles.summary}>Anyone can see who's in the group and what they post.</Text>
            </Box>
            <Box sx={styles.content}>
                <Flex sx={styles.item}>
                    <FaClock sx={styles.icon}/>
                    <Text as="p" sx={styles.title}>History</Text>
                </Flex>
                <Text as="p" sx={styles.summary}>Group created on May 3, 2021</Text>
            </Box>
        </Box>
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
    description: {
        fontSize: '15px',
        color: '#6F767E',
        mt: 6,
        fontFamily: 'Inter',
        '> span': {
            color: '#1A1D1F',
            fontWeight: '900',
            cursor: 'pointer'
        }
    },
    content: {
        pt: 5,
    },
    item: {
        alignItems: 'center',
    },
    icon: {
        fontSize: '32px',
        color: '#6F767E',
        mr: 3
    },
    summary: {
        color: '#6F767E',
        ml: 7,

    }

}
