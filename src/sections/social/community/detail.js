/** @jsx jsx */
import { jsx } from "theme-ui"
import {
  Container,
  Flex,
  Box,
  Link,
  Text,
  Image,
  Button,
  Select,
  Card,
} from "theme-ui"
import React, { useState } from "react"
import { FaGlobe, FaCircle } from "react-icons/fa"
import Socialbg from "assets/social/communites/detail.png"

import AboutPage from "components/social/community/about"
import DiscussPage from "components/social/community/discussion"
import PeoplePage from "components/social/community/people"
import EventPage from "components/social/community/events"
import MediaPage from "components/social/community/media"
import FilePage from "components/social/community/file"

export default function Profilepage() {

  const [isAbout, setIsAbout] = useState(true)
  const [isDiscuss, setIsDiscuss] = useState(false)
  const [isPeople, setIsPeople] = useState(false)
  const [isEvent, setIsEvent] = useState(false)
  const [isMedia, setIsMedia] = useState(false)
  const [isFile, setIsFile] = useState(false)

  const showAbout = () => {
    setIsAbout(true)
    setIsDiscuss(false)
    setIsPeople(false)
    setIsEvent(false)
    setIsMedia(false)
    setIsFile(false)
  }

  const showDiscuss = () => {
    setIsAbout(false)
    setIsDiscuss(true)
    setIsPeople(false)
    setIsEvent(false)
    setIsMedia(false)
    setIsFile(false)
  }

  const showPeople = () => {
    setIsAbout(false)
    setIsDiscuss(false)
    setIsPeople(true)
    setIsEvent(false)
    setIsMedia(false)
    setIsFile(false)
  }

  const showEvent = () => {
    setIsAbout(false)
    setIsDiscuss(false)
    setIsPeople(false)
    setIsEvent(true)
    setIsMedia(false)
    setIsFile(false)
  }

  const showMedia = () => {
    setIsAbout(false)
    setIsDiscuss(false)
    setIsPeople(false)
    setIsEvent(false)
    setIsMedia(true)
    setIsFile(false)
  }

  const showFile = () => {
    setIsAbout(false),
    setIsDiscuss(false)
    setIsPeople(false)
    setIsEvent(false)
    setIsMedia(false)
    setIsFile(true)
  }

  return (
    <Container sx={styles.contain}>
        <Box sx={styles.social}>
            <Box sx={styles.topBG}>
            </Box>
            <Box sx={styles.detailContent}>
                <Box sx={styles.mind}>
                    <Flex>
                        <Box sx={{ width: "100%" }}>
                            <Flex sx={styles.mind.header}>
                                <Text as="span" sx={styles.mind.title}>Cryptocurrency Investing</Text>
                                <Button sx={styles.mind.post}>Edit Profile</Button>
                            </Flex>

                            <Flex sx={styles.mind.summary}>
                                <FaGlobe sx={styles.mind.summary.globe} />
                                <Text as="p">Public group</Text>
                                <FaCircle sx={styles.mind.summary.dot} />                    
                                <Text as="p">145.8K members</Text>
                            </Flex>
                        </Box>
                    </Flex>

                    <Box sx={styles.navbar}>
                        <Flex sx={styles.navbar.item}>
                            <Button
                                sx={styles.navbar.item.social_navbtn} onClick={showAbout}
                                className={isAbout && "nav_active"}>
                                About
                            </Button>
                            <Button
                                sx={styles.navbar.item.social_navbtn} onClick={showDiscuss}
                                className={isDiscuss && "nav_active"}>
                                Discussion
                            </Button>
                            <Button
                                sx={styles.navbar.item.social_navbtn} onClick={showPeople}
                                className={isPeople && "nav_active"}>
                                People
                            </Button>
                            <Button
                                sx={styles.navbar.item.social_navbtn} onClick={showEvent}
                                className={isEvent && "nav_active"}>
                                Events
                            </Button>
                            <Button
                                sx={styles.navbar.item.social_navbtn} onClick={showMedia}
                                className={isMedia && "nav_active"}>
                                Media
                            </Button>
                            <Button
                                sx={styles.navbar.item.social_navbtn} onClick={showFile}
                                className={isFile && "nav_active"}>
                                Files
                            </Button>
                        </Flex>

                        <Card sx={styles.content}>
                            {isAbout    && <AboutPage />}
                            {isDiscuss  && <DiscussPage />}
                            {isPeople   && <PeoplePage />}
                            {isEvent    && <EventPage />}
                            {isMedia    && <MediaPage />}
                            {isFile     && <FilePage />}
                            
                        </Card>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Container>
  )
}

const styles = {
    contain: {
        mt: 4,
        ml: 3,
        p: '0px !important',
    },
    hide: { display: "none", },
    social: { bg: "white", },
    socialbg: {
        width: "100%",
        height: "400px",
    },
    topBG: {
        backgroundImage: `url(${Socialbg})`,
        backgroundSize: "cover",
        with: "100%",
        height: "400px",
    },
    detailContent: {
        p: '0 40px 40px 40px',
        mt: '-40px',
    },
    mind: {
        bg: "rgba(244, 245, 247, 1)",
        borderRadius: "10px",
        p: 5,
        header: {
            position: "relative",
            alignItems: "center",
            justifyContent: "space-between",
            pb: "10px",
        },
        title: {
            color: '#1A1D1F',
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '40px',
            letterSpacing: '-0.03em',
        },
        post: {
            fontSize: "15px !important",
            color: "white",
            bg: "button_color",
            borderRadius: "12px",
        },
        summary: {
            alignItems: 'center',
            fontSize: "20px",
            color: '#6F767E',
            fontWeight: "500",
            fontFamily: 'Inter',
            globe: { mr: 2, },
            dot: {
                fontSize: '6px',
                mr: 3,
            },
            '> p': { mr: 3 }
        },
    },
    navbar: {
        margin: "30px 0",
        width: "100%",
        borderBottom: "1px solid rgba(239, 239, 239, 1)",
        item: {
            social_navbtn: {
                bg: 'white',
                color: '#6F767E',
                borderRadius: '8px',
                mr: 4,
                fontSize: '15px !important',
                p: '8px 16px !important',
                boxShadow: 'none',
                fontFamily: 'Inter',
                letterSpacing: '-0.01em',
            },
            '.nav_active': {
                bg: 'primary',
                color: 'white',
            },
        }
    },
    content: {
        pt: 7
    }
}
