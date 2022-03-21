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
import { FaCircle, FaEllipsisH, FaAngleDown, FaSpinner } from "react-icons/fa"
import { NewsData, FilterData } from "./social.chat.data"

export default function Chat() {
  return (
    <Container sx={styles.contain}>
      <Heading sx={styles.title}>Message Center</Heading>
      <Grid sx={styles.grid}>
        <Card sx={styles.friendName}>
          <Box sx={styles.news}>
            {NewsData.map((item) => (
              <Flex key={item.id} sx={styles.newsItem}>
                <Flex>
                  <Flex sx={{ width: "90px" }}>
                    <Image src={item.avatar} sx={styles.newsItem.avatar} />
                  </Flex>
                  <Box sx={{ ml: 3 }}>
                    <Flex sx={{ justifyContent: "space-between" }}>
                      <Text as="span" sx={styles.newsItem.textNormal}>
                        {item.username}
                      </Text>
                      <Box sx={{ alignItems: "center" }}>
                        <Text as="span">1h</Text>
                        <FaCircle
                          sx={{ color: "#2A85FF", ml: 3, fontSize: "12px" }}
                        />
                      </Box>
                    </Flex>
                    <Text as="p" sx={styles.newsItem.text}>
                      {item.comment}
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            ))}
          </Box>
        </Card>

        <Card sx={styles.chatContent}>
          <Box>
            <Flex sx={{ justifyContent: "space-between" }}>
              <Text sx={{ fontSize: "20px", fontWeight: "bold" }}>
                Orval Casper
              </Text>
              <Box>
                <FaEllipsisH sx={{ ml: 2, color: "black" }} />
              </Box>
            </Flex>
            <Text sx={{ fontSize: "13px", color: "rgba(111, 118, 126, 1)" }}>
              Friend since: Sep 2021
            </Text>
          </Box>
          <Box sx={{ bg: "#FCFCFC" }}>
            <Flex sx={styles.newsItem.loadMore}>
              <Button sx={styles.newsItem.loadMore.btn}>
                <FaSpinner sx={{ mr: 1 }} /> Load More
              </Button>
            </Flex>
            <Box sx={styles.chatContent.news}>
              {FilterData.map((item) => (
                <Flex key={item.id} sx={styles.newsItem}>
                  <Flex>
                    <Flex sx={{ width: "90px !important" }}>
                      <Image src={item.avatar} sx={styles.newsItem.avatar} />
                    </Flex>
                    <Box sx={{ ml: 3 }}>
                      <Text as="span" sx={styles.newsItem.textNormal}>
                        {item.username}
                      </Text>

                      <Text as="p" sx={styles.newsItem.text}>
                        {item.comment}
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              ))}
            </Box>
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
    p: "32px 34px !important",
    bg: "white",
    border: "1.5px solid #F1F2F6",
    borderRadius: "10px",
  },
  title: {
    variant: "heroPrimary",
    fontSize: "24px",
    color: "#203758",
  },
  grid: {
    mt: "1.1rem",
    mb: -1,
    pt: 0,
    gridGap: ["0px 0px"],
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      null,
      null,
      "repeat(1, 35% 65%)",
    ],
  },
  friendName: {
    bg: "#FCFCFC",
    borderRadius: "8px",
    p: "24px",
  },
  chatContent: {
    bg: "#F4F4F4",
    borderRadius: "8px",
    p: "24px",
  },
  news: { mt: 6 },
  newsItem: {
    color: "#9A9FA5",
    fontSize: "15px",
    fontWeight: "500",
    lineHeight: "24px",
    pl: 2,
    pb: 6,
    justifyContent: "space-between",
    avatar: {
      width: "60px",
      height: "60px",
      objectFit: "cover",
      borderRadius: "50%",
    },
    tip: {
      background: "#FF6A55",
      padding: "8px",
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      border: "2px solid white",
      color: "white",
      position: "absolute",
      mt: "33px",
      ml: "40px",
      ".news-status": {
        fontSize: "16px",
        bottom: "16%",
        position: "absolute",
        left: "20%",
      },
    },
    textNormal: {
      color: "#1A1D1F",
      fontFamily: "poppins-bold",
    },
    text: {
      color: "#1A1D1F",
      fontFamily: "poppins",
      mt: 2,
    },
    status: {
      color: "#1A1D1F",
      fontFamily: "poppins-bold",
      fontSize: "15px",
      letterSpacing: "-0.01em",
      lineHeight: "24px",
      mt: "15px",
      "> a": {
        pl: 0,
        cursor: "pointer",
        "&:hover": { color: "#2A85FF" },
      },
      ".liked": { color: "#2A85FF" },
    },
    loadMore: {
      width: "100%",
      justifyContent: "center",
      btn: {
        bg: "#FCFCFC",
        fontSize: "14px",
        color: "#1A1D1F",
        p: "16px",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        border: "2px solid #EFEFEF",
        boxShadow: "none",
        fontSize: "14px !important",
        padding: "10px 15px !important",
        "&:hover": { boxShadow: "none" },
      },
    },
  },
}
