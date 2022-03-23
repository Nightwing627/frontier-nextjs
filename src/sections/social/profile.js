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
import { FiTwitter, FiInstagram } from "react-icons/fi"
import { CgChevronDown } from "react-icons/cg"
import { FaPinterestP } from "react-icons/fa"
import { BsDot, BsFunnel } from "react-icons/bs"
import Socialbg from "assets/socialbg.jpg"
import Avatar1 from "assets/user-avatars/avatar.png"

import Posts from "../../components/social/profile/posts"
import Campaigns from "../../components/social/profile/campaigns"
// import Contributions from "../../components/social/profile/contributions"
import About from "../../components/social/profile/about"

export default function Profilepage() {
  const [isPost, setIsPost] = useState(true)
  const [isCampaigns, setIsCampaigns] = useState(false)
  const [isContributions, setIsContributions] = useState(false)
  const [isReferrals, setIsReferrals] = useState(false)
  const [isAbout, setIsAbout] = useState(false)

  const IsPost = () => {
    setIsPost(true)
    setIsCampaigns(false)
    setIsContributions(false)
    setIsReferrals(false)
    setIsAbout(false)
  }

  const IsCampaigns = () => {
    setIsPost(false)
    setIsCampaigns(true)
    setIsContributions(false)
    setIsReferrals(false)
    setIsAbout(false)
  }

  const IsContributions = () => {
    setIsPost(false)
    setIsCampaigns(false)
    setIsContributions(true)
    setIsReferrals(false)
    setIsAbout(false)
  }

  const IsReferrals = () => {
    setIsPost(false)
    setIsCampaigns(false)
    setIsContributions(false)
    setIsReferrals(true)
    setIsAbout(false)
  }

  const IsAbout = () => {
    setIsPost(false)
    setIsCampaigns(false)
    setIsContributions(false)
    setIsReferrals(false)
    setIsAbout(true)
  }

  return (
    <Container>
      <Box sx={styles.social}>
        <Box sx={styles.topBG}></Box>
        <Box sx={styles.socialcontent}>
          <Box sx={styles.mind}>
            <Flex>
              <Image src={Avatar1} sx={styles.mind.avatar} />
              <Box sx={{ pl: "30px", width: "100%" }}>
                <Flex sx={styles.mind.part1}>
                  <Text
                    as="span"
                    sx={{
                      fontSize: "32px",
                      fontWeight: "Bold",
                      color: "rgba(26, 29, 31, 1);",
                    }}
                  >
                    Chelsie Haley
                  </Text>
                  <Box sx={styles.mindSocialIcons}>
                    <Link href="#" sx={styles.socialIcons}>
                      <FiTwitter />
                    </Link>
                    <Link href="#" sx={styles.socialIcons}>
                      <FiInstagram />
                    </Link>
                    <Link href="#" sx={styles.socialIcons}>
                      <FaPinterestP />
                    </Link>
                    <Button sx={styles.mind.post}>Edit Profile</Button>
                  </Box>
                </Flex>
                <Flex sx={styles.mind.part2}>
                  <Text as="p" sx={styles.mind.reply}>
                    Dream big. Think different. Do great!
                  </Text>
                </Flex>
                <Flex sx={styles.mind.part2}>
                  <Text as="p" sx={styles.mind.reply}>
                    <span>48</span> Campaigns
                  </Text>
                  <BsDot />
                  <Text as="p" sx={styles.mind.reply}>
                    <span>96</span> Comments
                  </Text>
                  <BsDot />
                  <Text as="p" sx={styles.mind.reply}>
                    <span>5</span> Contributions
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Box sx={styles.horizon} />
            <Flex sx={{ justifyContent: "space-between" }}>
              <Box>
                <Button
                  sx={isPost ? styles.active : styles.social_navbtn}
                  onClick={IsPost}
                >
                  Posts
                </Button>
                <Button
                  sx={isCampaigns ? styles.active : styles.social_navbtn}
                  onClick={IsCampaigns}
                >
                  Campaigns
                </Button>
                <Button
                  sx={isContributions ? styles.active : styles.social_navbtn}
                  onClick={IsContributions}
                >
                  Contributions
                </Button>
                <Button
                  sx={isReferrals ? styles.active : styles.social_navbtn}
                  onClick={IsReferrals}
                >
                  Referrals
                </Button>
                <Button
                  sx={isAbout ? styles.active : styles.social_navbtn}
                  onClick={IsAbout}
                >
                  About
                </Button>
              </Box>
              <Box sx={isAbout ? styles.hide : { display: "flex" }}>
                <Button
                  sx={isAbout ? styles.active : styles.social_select}
                  // onClick={IsSocialSelect}
                >
                  Most Recent <CgChevronDown />
                </Button>
                <Button sx={isAbout ? styles.active : styles.social_select}>
                  <BsFunnel />
                </Button>
              </Box>
            </Flex>
            <Card sx={isPost ? [] : styles.hide}>
              <Posts />
            </Card>
            <Card sx={isCampaigns ? [] : styles.hide}>
              <Campaigns />
            </Card>
            {/* <Card sx={isContributions ? [] : styles.hide}>
              <Contributions />
            </Card> */}
            {/* <Card sx={isReferrals ? [] : styles.hide}>
              <Referrals />
            </Card> */}
            <Card sx={isAbout ? [] : styles.hide}>
              <About />
            </Card>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

const styles = {
  hide: {
    display: "none",
  },
  social: {
    backgroundColor: "white",
  },
  socialbg: {
    width: "100%",
    height: "400px",
  },
  topBG: {
    backgroundImage: `url(${Socialbg})`,
    background: "cover",
    with: "100%",
    height: "400px",
  },
  socialcontent: {
    padding: " 0 40px 40px 40px",
    marginTop: "-40px",
  },
  mindSocialIcons: {
    display: "flex",
    alignItems: "center",
  },
  socialIcons: {
    marginRight: "35px",
    color: "rgba(111, 118, 126, 1)",
    svg: {
      fontSize: "20px",
      display: "flex",
      alignItems: "center",
    },
  },
  horizon: {
    margin: "40px 0",
    width: "100%",
    borderBottom: "1px solid rgba(239, 239, 239, 1)",
  },

  mind: {
    bg: "rgba(244, 245, 247, 1)",
    borderRadius: "10px",
    p: 5,

    avatar: {
      width: "60px",
      height: "60px",
      minWidth: "auto",
      borderRadius: "50%",
    },
    part1: {
      position: "relative",
      alignItems: "center",
      justifyContent: "space-between",
      pb: "10px",
    },
    post: {
      fontSize: "15px !important",
      color: "white",
      bg: "button_color",
      borderRadius: "12px",
    },
    part2: {
      alignItems: "center",
      svg: {
        fontSize: "20px",
        color: "rgba(111, 118, 126, 1)",
      },
    },
    reply: {
      fontSize: "20px",
      color: "rgba(111, 118, 126, 1)",
      fontWeight: "500",
      span: {
        color: "black",
        fontWeight: "bold",
      },
    },
    svgIcon: {
      mr: "15px",
    },
  },
  active: {
    background: "rgba(91, 110, 245, 1)",
    color: "white",
    borderRadius: "8px",
    marginRight: "8px",
    fontSize: "15px !important",
    padding: "8px 16px !important",
  },
  social_navbtn: {
    background: "rgba(252, 252, 252, 1)",
    color: "rgba(111, 118, 126, 1)",
    borderRadius: "8px",
    marginRight: "8px",
    fontSize: "15px !important",
    padding: "8px 16px !important",
  },
  social_select: {
    display: "flex",
    alignItems: "center",
    background: "rgba(244, 245, 247, 1)",
    color: "rgba(111, 118, 126, 1)",
    border: "2px solid rgba(239, 239, 239, 1)",
    borderRadius: "8px",
    marginRight: "8px",
    fontSize: "15px !important",
    padding: "8px 16px !important",
  },
}
