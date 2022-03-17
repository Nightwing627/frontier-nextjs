/** @jsx jsx */
import router, { useRouter } from "next/router"
import React, { useState } from "react"
import { jsx, Box, Text, Flex } from "theme-ui"
import list from "./sidebar.data"

export default function Sidebar() {
  const router = useRouter()
  const [subFlag, setsubFlag] = useState(true)
  const handleMainMenu = (e, link) => {
    e.preventDefault()
    router.push(link)
  }
  return (
    <Box>
      <ul sx={{ padding: "0px 0px" }}>
        {list.map((item, i) => (
          <li
            key={i}
            onClick={(e) => handleMainMenu(e, item.router)}
            sx={styles.mainlist.type}
          >
            <Flex>
              <Text sx={styles.mainlist.icon}>{item.icon}</Text>
              <Text sx={styles.mainlist.aloneList}> {item.text} </Text>
            </Flex>
          </li>
        ))}
      </ul>
    </Box>
  )
}

const styles = {
  mainlist: {
    type: {
      padding: "12px",
      listStyleType: "none",
      fontFamily: "mazzard-h-bold",
      fontWeight: 600,
      fontStyle: "normal",
      fontSize: "15px",
      lineHeight: "24px",
      borderRadius: "8px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#5B6EF5",
        borderRadius: "8px",
        color: "white",
      },
    },
    aloneList: {
      width: "100%",
      pl: "15px",
    },
    icon: {
      pt: "2px",
      fontSize: "20px",
    },
  },
}
