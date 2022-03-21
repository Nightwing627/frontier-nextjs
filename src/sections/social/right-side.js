/** @jsx jsx */
import { jsx } from "theme-ui"
import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Grid,
  Card,
} from "theme-ui"
import React, { useState } from "react"
import { FaEllipsisH, FaCheckCircle, FaCircle } from 'react-icons/fa'
import StoryData, { FollowData, ContactData } from './social.data'
import { withRouter } from "next/router"

export default function RightSide() {
  return (
      <Box>
          <Card sx={styles.story}>
                <Flex sx={styles.header}>
                    <Text as="p">Stories</Text>
                    <FaEllipsisH sx={{ color: '#788292' }} />
                </Flex>
                <Grid sx={styles.grid}>
                    {StoryData.map((item) => (
                        <Box key={item.id} sx={{ backgroundImage: `url(${item.imgSrc})` }} className="story-item">
                            <Box sx={styles.story.user}>
                                <Image src={item.avatar}/>
                                <Text as="p">{item.name}</Text>
                            </Box>
                        </Box>
                    ))}
                </Grid>
          </Card>

          <Card sx={styles.follow}>
                <Flex sx={styles.header}>
                    <Text as="p">Who to Follow</Text>
                    <FaEllipsisH sx={{ color: '#788292' }} />
                </Flex>
                <Box sx={styles.follow.followers}>
                    {FollowData.map((item) => (
                        <Flex key={item.id} sx={styles.follow.item}>
                            <Flex sx={styles.follow.subItem}>
                                <Image src={item.imgSrc} sx={styles.follow.img}/>
                                <Text as="span" sx={{ ml: 2, fontSize: '14px', color: '#788292' }}>
                                    {item.name}</Text>
                                <FaCheckCircle sx={{ ml: 2, color: '#788292' }} />
                            </Flex>
                            <Button sx={styles.follow.followBtn}>Follow</Button>
                        </Flex>
                    ))}
                </Box>
          </Card>

          <Card sx={styles.contact}>
                <Flex sx={styles.header}>
                    <Flex sx={{ alignItems: 'center' }}>
                        <Text as="p" sx={ styles.header.title }>Online Contacts</Text>
                        <FaCircle sx={{ color: '#23BE7E', fontSize: '10px', ml: 2 }} />
                    </Flex>
                    <FaEllipsisH sx={{ color: '#788292' }} />
                </Flex>
                <Box sx={styles.contact.users}>
                    {ContactData.map((item) => (
                        <Flex key={item.id} sx={styles.contact.user}>
                            <Image src={item.imgSrc} sx={styles.contact.img}/>
                            <Text as="span" sx={{ ml: 2, fontSize: '16px', color: '#788292' }}>
                                {item.name}</Text>
                        </Flex>
                    ))}
                </Box>
          </Card>
      </Box>
  )
}

const styles = {
    grid: {
        my: 3,
        pt: 0,
        gridGap: [
            "15px 0",
            null,
            "10px 14px",
            null,
            "10px 14px",
            null,
            null,
            "10px 10px",
        ],
        gridTemplateColumns: [
            null,
            null,
            null,
            "repeat(1, 1fr)",
            null,
            null,
            "repeat(3, 1fr)",
        ],
    },
    header: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        '> p': {
            color: '#203758',
            fontFamily: 'mazzard-h-bold',
            fontSize: '17px',
        },
        title: {
            color: '#203758',
            fontFamily: 'mazzard-h-bold',
            fontSize: '17px',
        }
    },
    story: {
        '.story-item': {
            borderRadius: '10px',
            height: '17vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: 'center',
        },
        user: {
            color: 'white',
            fontFamily: 'mazzard-h-bold',
            fontSize: '14px',
            textAlign: 'center',
            position: 'relative',
            top: '46%',
            height: 'fit-content',
            '> img': {
                width: '55px',
                height: '55px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '2px solid #1877F2',
                padding: '1px',
                bg: 'white',
            }
        }
    },
    follow: {
        followers: {
            border: '1.5px solid #F1F2F6',
            mt: '16px',
            bg: 'white',
            borderRadius: '10px',
        },
        item: {
            p: '15px 20px',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            borderBottom: '1px solid #F1F2F6',
        },
        subItem: {
            alignItems: 'center',
        },
        img: {
            width: '34px',
            height: '34px',
            objectFit: 'cover',
            borderRadius: '50%',
        },
        followBtn: {
            bg: 'rgba(91, 110, 245, 0.1)',
            borderRadius: '26px',
            color: 'button_color',
            p: '11px 20px 10px !important',
            fontSize: '13px !important',
            boxShadow: '0px 3px 0px rgb(132 133 255 / 20%)',
        }
    },
    contact: {
        mt: 3,
        users: {
            bg: 'white',
            mt: 2,
        },
        user: {
            p: '20px 30px',
            alignItems: 'center',
            borderBottom: '1px solid #F1F2F6',
        },
        img: {
            width: '55px',
            height: '55px',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '2px solid #1877F2',
            padding: '1px',
            bg: 'white',
        }
    }
}
