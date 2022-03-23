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
import { useRouter } from 'next/router'
import { FaEllipsisH } from 'react-icons/fa'
import RightSide from '../right-side'
import SuggestCard from 'components/social/suggest-card'
import { SuggestData } from '../social.data'

export default function MainSection() {
    const router = useRouter();
  return (
    <Container sx={styles.contain}>
      <Box>
        <Grid sx={styles.grid}>
          <Box>
            <Card sx={styles.content}>
                <Flex sx={styles.content.header}>
                    <Heading sx={styles.title}>Suggested Communities for you</Heading>
                    <FaEllipsisH sx={{ ml: 2, color: '#788292' }}/>
                </Flex>
                
                <Grid sx={styles.content.grid}>
                    {SuggestData.map((item) => (
                        <SuggestCard data={item} key={item.id}/>
                    ))}
                </Grid>

                <Box sx={styles.content.footer}>
                    <Button onClick={() => {router.push('/social/community/create')}}>+ Create Community</Button>
                </Box>
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
            "repeat(1, 74% 35.5%)",
        ],
    },
    contain: {
        mt: 4,
        ml: 3,
        p: '0px !important',
        border: '1.5px solid #F1F2F6',
        borderRadius: '10px',
    },
    title: {
        variant: 'heroPrimary',
        fontSize: '24px',
        color: 'social_text',
    },
    content: {
        bg: 'white',
        borderRadius: '8px',
        p: '24px 34px',
        header: {
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        grid: {
            mb: -1,
            py: 6,
            gridGap: [
                "35px 0",
                null,
                "45px 28px",
                null,
                "50px 28px",
                null,
                null,
                "28px 28px",
            ],
            gridTemplateColumns: [
                null,
                null,
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(1, 1fr)",
                null,
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
            ],
        },
        footer: {
            mt: 2,
            width: '100%',
            '> button': {
                width: '100%',
                color: 'primary',
                bg: 'white',
                border: '2px solid #5B6EF5',
                boxShaodw: 'none',
                '&:hover': {
                    boxShaodw: 'rgb(24 62 118 / 42%) 0px 5px 15px -5px',
                }
            }
        }
    },
}
