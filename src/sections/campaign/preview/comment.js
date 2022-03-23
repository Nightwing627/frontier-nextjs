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
  NavLink,
  Checkbox,
  Label,
  Radio,
} from "theme-ui"
import React, { useState } from "react"
import { FaCircle, FaEllipsisH, FaAngleDown, FaSpinner } from 'react-icons/fa'
import { NewsData, FilterData } from './comment.data'

export default function PreviewComment() {
    return (
        <Container sx={styles.contain}>
            <Card sx={styles.newContent}>
                <Box sx={styles.news}>
                    {NewsData.map((item) => (
                        <Flex key={item.id} sx={styles.newsItem}>
                            <Flex >
                                <Flex>
                                    <Image src={item.avatar} sx={styles.newsItem.avatar}/>
                                    <Box sx={styles.newsItem.tip}>{item.icon}</Box>
                                </Flex>
                                <Box sx={{ ml: 3 }}>
                                    <Text as="span" sx={styles.newsItem.textNormal}>Lurline </Text>@username <br/>
                                    Comment on <Text as="span"  sx={styles.newsItem.textNormal}>Smiles - 3D icons</Text>
                                    <Text as="p" sx={styles.newsItem.text}>"Great work, I just purchased this product"</Text>
                                    <Flex sx={styles.newsItem.status}>
                                        {item.status == 'like' ? 
                                            <NavLink className="liked">Liked</NavLink> : <NavLink>Like</NavLink>}
                                        <NavLink>Reply</NavLink>
                                    </Flex>
                                </Box>
                            </Flex>
                            <Box sx={{ alignItems: 'center' }}>
                                <Text as="span">1h</Text>
                                <FaCircle sx={{ color: '#2A85FF', ml: 3, fontSize: '12px' }}/>
                            </Box>
                        </Flex>
                    ))}
                </Box>

                <Flex sx={styles.newsItem.loadMore}>                        
                    <Button sx={styles.newsItem.loadMore.btn}>
                        <FaSpinner sx={{ mr: 1 }}/> Load More
                    </Button>
                </Flex>
            </Card>
        </Container>
    )
}

const styles = {
    contain: {
        p: '0px 10px !important',
        bg: 'white',
    },
    title: {
        variant: 'heroPrimary',
        fontSize: '24px',
        color: '#203758',
    },
    newContent: {
        bg: '#FCFCFC',
        borderRadius: '8px',
        header: {
            width: '100%',
            justifyContent: 'space-between',
        },
        titleLeftWall: {
            width: '16px',
            height: '32px',
            bg: '#FFBC99',
            borderRadius: '4px'
        },
        titleLeft: {
            fontSize: '20px',
            lineHeight: '32px',
            fontFamily: 'mazzard-h-bold',
            ml: '16px'
        },
        
    },
    newsItem: {
        color: '#9A9FA5',
        fontSize: '15px',
        fontWeight: '500',
        lineHeight: '24px',
        pl: 2,
        py: 6,
        justifyContent: 'space-between',
        borderBottom: '1px solid #EFEFEF',
        avatar: {
            width: '60px',
            height: '60px',
            objectFit: 'cover',
            borderRadius: '50%',
        },
        tip: {
            background: '#FF6A55',
            padding: '8px',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            border: '2px solid white',
            color: 'white',
            position: 'absolute',
            mt: '33px',
            ml: '40px',
            '.news-status': {
                fontSize: '16px',
                bottom: '16%',
                position: 'absolute',
                left: '20%',
            }
        },
        textNormal: {
            color: '#1A1D1F',
            fontFamily: 'poppins-bold',
        },
        text: {
            color: '#1A1D1F',
            fontFamily: 'poppins',
            mt: 2,
        },
        status: {
            color: '#1A1D1F',
            fontFamily: 'poppins-bold',
            fontSize: '15px',
            letterSpacing: '-0.01em',
            lineHeight: '24px',
            mt: '15px',
            '> a': {
                pl: 0,
                cursor: 'pointer',
                '&:hover': { color: '#2A85FF', }
            },
            '.liked': { color: '#2A85FF', }
        },
        loadMore: {
            mt: '15px',
            width: '100%',
            justifyContent: 'center',
            btn: {
                bg: '#FCFCFC',
                fontSize: '14px',
                color: '#1A1D1F',
                p: '16px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '8px',
                border: '2px solid #EFEFEF',
                boxShadow: 'none',
                fontSize: '14px !important',
                padding: '10px 15px !important',
            }
        }
    },
}