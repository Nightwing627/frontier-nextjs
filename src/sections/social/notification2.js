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
  Grid,
  Card,
  Select,
  NavLink,
  Checkbox,
  Label,
  Radio,
} from "theme-ui"
import React, { useState } from "react"
import { FaCircle, FaEllipsisH, FaAngleDown, FaSpinner } from 'react-icons/fa'
import { NotiDetail } from './social.data'

export const getServerSideProps = async () => {
    return {
        props: { data: NotiDetail },
    }
}

export default function Notification() {
    return (
        <Container sx={styles.contain}>
            <Grid sx={styles.grid}>
                <Card sx={styles.content}>
                    <Flex sx={styles.content.header}>
                        <Heading sx={styles.title}>Notifications</Heading>
                        <FaEllipsisH sx={{ ml: 2, color: '#788292' }}/>
                    </Flex>

                    <Box sx={styles.news}>
                        {NotiDetail.map((item) => (
                            <Flex key={item.id} sx={styles.newsItem}>
                                <Flex sx={{ width: '95%' }}>
                                    <Flex sx={{ width: '10%' }}>
                                        <Image src={item.avatar} sx={styles.newsItem.avatar}/>
                                    </Flex>
                                    <Box sx={{ ml: 3, color: 'social_text', width: '80%' }}>
                                        {item.title != null && 
                                            <>
                                                <Text as="span" sx={styles.newsItem.textNormal}>{item.title.from}</Text>
                                                &nbsp;{item.title.bridge}&nbsp;
                                                <Text as="span" sx={styles.newsItem.textNormal}>{item.title.target}</Text>
                                            </>
                                        }
                                        <div sx={styles.newsItem.text} dangerouslySetInnerHTML={{__html: item.description}}></div>
                                        <Text as="p" sx={styles.newsItem.time}>{item.time} hrs ago</Text>
                                    </Box>
                                </Flex>
                                <Box sx={{ width: '5%' }}>
                                    <FaCircle sx={{ color: '#2A85FF', ml: 3, fontSize: '12px' }}/>
                                </Box>
                            </Flex>
                        ))}
                    </Box>
                </Card>
            </Grid>
        </Container>
    )
}

const styles = {
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
    grid: {
        mb: -1,
        pt: 0,
        gridGap: [ "0px 0px", ],
        gridTemplateColumns: [
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          null,
          null,
          "repeat(1, 73.5%)",
        ],
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
    },
    newsItem: {
        pl: 2,
        py: 6,
        justifyContent: 'space-between',
        borderBottom: '1px solid #EFEFEF',
        width: '100%',
        avatar: {
            width: '65px',
            height: '65px',
            objectFit: 'cover',
            borderRadius: '50%',
        },
        textNormal: {
            fontFamily: 'poppins-bold',
            mb: 2
        },
        text: {
            fontFamily: 'poppins',
        },
        time: {
            color: '#5B6EF5',
            lineHeight: '19px',
            fontFamily: 'mazzard-h-bold',
            mt: 3
        }
    },
}