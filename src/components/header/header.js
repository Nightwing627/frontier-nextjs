/** @jsx jsx */
import { jsx, Container, Flex, Button, Image } from "theme-ui"
import { keyframes } from "@emotion/core"
// import { Link } from 'react-scroll';

import router, { useRouter } from "next/router"
import Link from "next/link"
import Logo from "components/logo"
import LogoWhite from "assets/logo.svg"
import MetaMask from "assets/metamask.svg"
import User from "assets/user.png"
import { DrawerProvider } from "../../contexts/drawer/drawer.provider"
import MobileDrawer from "./mobile-drawer"
import menuItems, { otherItems } from "./header.data"

export default function Header({ className }) {
  const pathname = useRouter().pathname
  const router = useRouter()

  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={className === "sticky" ? LogoWhite : LogoWhite} />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label, link }, i) => (
              <Link href={link} key={path}>
                {label}
              </Link>
            ))}
            <ul className="nav__menu">
              <li className="nav__menu-item">
                <a>Others</a>
                <Submenu />
              </li>
            </ul>
          </Flex>

          <Button
            className="connect_wallet__btn"
            variant="secondary"
            aria-label="Connect to Wallet"
            onClick={() => {
              router.push("/campaign")
            }}
          >
            Connect to Wallet
          </Button>
          {pathname == "/" ? (
            <Button sx={styles.header.walletBtn} aria-label="Wallet"></Button>
          ) : (
            <Button sx={styles.header.userBtn} aria-label="Profile"></Button>
          )}

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  )
}

export function Submenu() {
  return (
    <>
      <ul className="nav__submenu">
        {otherItems.map(({ label, link }, i) => (
          <li className="nav__submenu-item" key={label}>
            <a href={link}>{label}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`

const styles = {
  header: {
    color: "black",
    fontWeight: "normal",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
    transition: "all 0.5s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".connect_wallet__btn": {
      background:
        "linear-gradient(90.19deg, #2CD4FF -16.46%, #5979FF 24.09%, #A662FF 99.83%)",
      borderRadius: "30px",
      border: "none",
      height: "60px",
      fontSize: "18px",
      fontWeight: "700",
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    walletBtn: {
      bg: "#fef3e7",
      backgroundImage: `url(${MetaMask})`,
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "35px",
      backgroundPosition: "center",
      ml: 2,
    },
    userBtn: {
      backgroundImage: `url(${User})`,
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "60px",
      backgroundPosition: "center",
      ml: 2,
      bg: "transparent",
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
      ".donate__btn": {
        borderColor: "primary",
        color: "primary",
        "&:hover": {
          boxShadow: "rgba(31, 62, 118, 0.57) 0px 9px 20px -5px",
          backgroundColor: "primary",
          color: "white",
        },
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: "18px",
      fontWeight: "700",
      px: 25,
      cursor: "pointer",
      lineHeight: "1.2",
      color: "#767474",
      "&.active": {
        color: "black",
      },
    },
    ".nav__menu": {
      listStyle: "none",
      pl: 0,
      mt: 0,
      mb: 0,
      lineHeight: "45px",
      fontWeight: "700",
      display: "contents",
    },
    ".nav__menu-item": {
      display: "inline-block",
      position: "relative",
      "&:hover": {
        bg: "white",
        ".nav__submenu": {
          display: "block",
          listStyle: "none",
        },
      },
    },
    ".nav__submenu": {
      fontWeight: 300,
      display: "none",
      position: "absolute",
      width: "max-content",
      bg: "white",
    },
    ".nav__submenu-item.nav__menu-item": {
      display: "inline-block",
      position: "relative",
      "&:hover": {
        bg: "white",
        ".nav__submenu": {
          display: "block",
        },
      },
    },
    ".nav__submenu": {
      fontWeight: 300,
      textTransform: "none",
      display: "none",
      position: "absolute",
      width: "max-content",
      bg: "white",
    },
    ".nav__submenu-item": {
      "&:hover": {
        background: "rgba(#000, 0.1)",
      },
    },
  },
}
