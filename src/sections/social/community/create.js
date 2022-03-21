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
  Input,
  Select
} from "theme-ui"
import React, { useState } from "react"
import { FaAngleDown } from 'react-icons/fa'
import { useRouter } from 'next/router'
import RightSide from '../right-side'
import featuredImage from  "assets/campaign/basic_feature.png";

export default function MainSection() {
    const router = useRouter();
  return (
    <Container sx={styles.contain}>
      <Box>
        <Grid sx={styles.grid}>
            <Card sx={styles.content}>
                <Flex sx={styles.content.header}>
                    <Heading sx={styles.title}>Create Community</Heading>
                </Flex>
                
                <Box sx={styles.content.inputGroup}>
                    <Text as="p" sx={styles.content.inputGroup.title}>Community Name</Text>
                    <Input sx={styles.content.inputGroup.input} placeholder={'Enter community name'} />
                </Box>

                <Box sx={styles.content.inputGroup}>
                    <Text as="p" sx={styles.content.inputGroup.title} className="select-title">Privacy Type</Text>
                    <Select sx={styles.content.inputGroup.select}>
                        <option disabled selected hidden>Select a category</option>
                        <option>Hi</option>
                        <option>Beep</option>
                        <option>Boop</option>
                    </Select>
                </Box>

                <Box sx={styles.content.inputGroup}>
                    <Text as="p" sx={styles.content.inputGroup.title}>Community Name</Text>
                    <Input sx={styles.content.inputGroup.input} placeholder={'Enter community name'} />
                </Box>

                <Box sx={styles.content.inputGroup}>
                    <Text as="p" sx={styles.content.inputGroup.title}>Add Cover Photo</Text>
                    <Image src={featuredImage} sx={{ width: '100%', mt: 3 }} />
                </Box>

                <Box sx={styles.content.inputGroup}>
                    <Text as="p" sx={styles.content.inputGroup.title}>Invite Friends (Optional)</Text>
                    <Input sx={styles.content.inputGroup.input} placeholder={'Enter friend\'s name'} />
                </Box>

                <Box sx={styles.content.footer}>
                    <Button>+ Create Community</Button>
                </Box>
            </Card>
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
        '.header-text': {
            fontSize: '50px !important'
        },
        inputGroup: {
            my: 6,
            color: 'social_text',
            fontFamily: 'Inter',
            title: {
                fontSize: '20px',
                fontWeight: '700',
            },
            input: {
                mt: 3,
                border: '2px solid #9A9FA5',
                borderRadius: '12px',
                p: '22px',
                fontSize: '20px',
                '&::placeholder': {
                    color: '#989898',
                    fontFamily: 'Inter',
                    fontSize: '18px',
                    letterSpacing: '-0.01em'
                }
            },
            select: {
                width: '100%',
                p: '10px 22px',
                alignItems: 'center',
                border: '2px solid #9A9FA5',
                borderRadius: '12px',
                fontSize: '20px',
                '&:hover': {
                    borderColor: 'primary',
                    boxShadow: '0 0 0 2px #5B6EF5',
                    outline: 'none',
                }
            },
            '.select-title': {
                mb: 3,
            }
        },
        footer: {
            mt: 2,
            width: '100%',
            '> button': {
                width: '100%',
                borderRadius: '12px',
                boxShaodw: 'none',
                '&:hover': {
                    boxShaodw: 'rgb(24 62 118 / 42%) 0px 5px 15px -5px',
                }
            }
        }
    },
}
