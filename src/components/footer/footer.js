/** @jsx jsx */
import { jsx, Heading, Box, Container, Text } from "theme-ui"
import { Link } from "components/link"
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import Logo from "components/logo"
import LogoWhite from "assets/logo_bottom.svg"
import menuItems from "./footer.data"
export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container sx={styles.footer.container}>
        <Box sx={styles.footer.footerTopArea}>
          <Box sx={styles.footer.menus_main}>
            <Heading sx={styles.footer.heading}>
              <Logo src={LogoWhite} />
            </Heading>
            <p sx={styles.footer.link}>
              Crypto Funding Website lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </p>
            <div className="social-items">
              <Link path="/">
                <FaFacebookF />
              </Link>
              <Link path="/">
                <FaTwitter />
              </Link>
              <Link path="/">
                <FaYoutube />
              </Link>
              <Link path="/">
                <FaLinkedin />
              </Link>
              <Link path="/">
                <FaInstagram />
              </Link>
            </div>
          </Box>

          {menuItems.map(({ header, items }, i) => (
            <Box sx={styles.footer.menus} key={i}>
              <Heading sx={styles.footer.heading}>{header}</Heading>
              <nav>
                {items.map(({ path, label }, i) => (
                  <Link
                    path={path}
                    key={i}
                    label={label}
                    sx={styles.footer.link}
                  />
                ))}
              </nav>
            </Box>
          ))}

          <Box sx={styles.footer.menus_main}>
            <Heading sx={styles.footer.heading}>Get in Touch with Us</Heading>
            <nav>
              <Link sx={styles.footer.link}>
                <FaMapMarkerAlt /> 832 Thompson Drive, San Fransisco CA 94107,
                United States
              </Link>
              <Link sx={styles.footer.link}>
                <FaPhoneAlt /> 394-091-3312
              </Link>
              <Link sx={styles.footer.link}>
                <HiOutlineMail /> support@crypto.com
              </Link>
            </nav>
          </Box>
        </Box>
      </Container>
      <Text sx={styles.footer.copyright}>
        @ 2021 Crypto Funding, Inc. All Rights Reserved
      </Text>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: "rgba(18, 30, 49, 1)",
    container: {
      width: "100%",
      alignItems: "stretch",
    },
    footerTopArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      pt: [7, null, 8],
      pb: ["10px", null, null, "20px"],
      px: [0, null, null, null, 4],
    },
    menus: {
      width: ["100%", "50%", null, null, "12%"],
      display: "flex",

      flexDirection: "column",
      mb: ["40px", null, null, "60px"],
    },

    menus_main: {
      width: ["100%", null, null, "27%"],
      display: "flex",
      flexDirection: "column",
      mb: ["40px", null, null, "60px"],
      a: {
        color: "rgba(114, 115, 124, 1)",
      },
    },

    ".social-items": {
      width: "300px",
      padding: "0 30px",
      display: "flex",
      justifyContent: "space-between",
    },

    heading: {
      fontSize: [3, null, null, "20px"],
      color: "white",
      fontWeight: "500",
      mb: [3, 4, 5, null, 6],
      lineHeight: "1.35",
    },

    link: {
      fontSize: ["14px", null, "16px"],
      color: "rgba(255, 255, 255, 0.6)",
      fontWeight: "body",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, null, 1.6, 1.8],
      ":hover": {
        color: "primary",
      },
      ":last-child": {
        mb: "0px",
      },
    },
    copyright: {
      borderTop: "1px solid rgba(61, 63, 78, 1)",
      fontSize: ["14px", null, "16px"],
      fontWeight: "bold",
      width: "100%",
      textAlign: "center",
      p: ["20px 20px"],
      color: "white",
      a: {
        textDecoration: "none",
        color: "inherit",
        pl: 1,
        transition: "all 0.25s",
        "&:hover": {
          color: "primary",
        },
      },
    },
  },
}
