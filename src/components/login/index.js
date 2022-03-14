/** @jsx jsx */
import { jsx, Container, Flex, Button, Image, Grid, Box } from "theme-ui"
import Link from "next/link"

import logImg from "assets/logImg.svg"
import log from "./log.data"

export default function Login({ className }) {
  return (
    <div sx={styles.logPage} className={className}>
      {/* {log.map(({ path, label, link }, i) => (
        <Link href={link} key={path}>
          {label}
        </Link>
      ))} */}
      <Grid columns={[1, null, null, null, 2]}>
        <Box sx={styles.logImg}>
          <Image src={logImg} alt="Sign logo" />
        </Box>
        <Box>
          <div className="logform">
            <h2>Sign up</h2>
            <hr />
            <p className="email-address">Your email address</p>
            <div className="email-form">
              <input type="email" className="email" />
            </div>
            <div>
              <button className="continue">Continue</button>
            </div>
            <p>
              This site is protected by reCAPTCHA and the Google Privacy Policy.
            </p>
            <p>
              Already a member? <a href="#">Sign in</a>
            </p>
          </div>
        </Box>
      </Grid>
    </div>
  )
}

const styles = {
  logImg: {
    textAlign: "center !important",
    backgroundColor: " rgba(244, 244, 244, 1)",
  },
  logPage: {
    paddingTop: "126px",
    color: "black",
    fontSize: "30px",
    backgroundColor: "white",
    ".logform": {
      margin: "0 auto",
      width: "400px",
      ".email-address": {
        color: "black",
        fontWeight: "bold",
      },
      ".email-form": {
        backgroundColor: "rgba(244, 244, 244, 1)",
        borderRadius: "12px",
        padding: "12px",
        alignItems: "center",
        display: "flex",
        ".email": {
          fontSize: "18px",
          border: "none",
          backgroundColor: "rgba(244, 244, 244, 1)",
          outline: "none",
        },
      },
      ".continue": {
        width: "100%",
        backgroundColor: "rgba(91, 110, 245, 0.5)",
        borderRadius: "12px",
        padding: "12px",
        border: "none",
        fontSize: "18px",
        color: "white",
      },
      h2: {
        margin: "15px 0",
      },
      p: {
        fontSize: "16px",
        color: "rgba(154, 159, 165, 1)",
      },
      a: {
        color: "black",
        fontWeight: "bold",
        textDecoration: "none",
      },
    },
  },
}
