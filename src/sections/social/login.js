/** @jsx jsx */
import React, { useState } from "react"
import { jsx, Image, Grid, Box } from "theme-ui"
import Link from "next/link"
import { HiMail } from "react-icons/hi"
import { RiLock2Line } from "react-icons/ri"

import logImg from "assets/logImg.svg"

export default function Login({ className }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div sx={styles.signPage} className={className}>
      <Grid columns={[1, null, null, 2]} sx={styles.signuppage}>
        <Box sx={styles.logImg}>
          <Image src={logImg} alt="Sign logo" />
        </Box>
        <Box>
          <div className="logform">
            <h2>Sign in</h2>
            <hr />
            <p className="email-address">Your email address</p>
            <div className="email-form">
              <HiMail />
              <input
                type="email"
                className="email"
                placeholder="Your email"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password-form">
              <RiLock2Line />
              <input
                type="password"
                className="email"
                placeholder="Password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                className={
                  email != "" && password != "" ? "continue" : "inactive"
                }
              >
                Sign in
              </button>
            </div>
            <p>
              This site is protected by reCAPTCHA and the Google Privacy Policy.
            </p>
            <p>
              Already a member? <a href="#">Sign up</a>
            </p>
          </div>
        </Box>
      </Grid>
    </div>
  )
}

const styles = {
  logImg: {
    backgroundColor: " rgba(244, 244, 244, 1)",
    height: [null, "100vh", "100vh", "100vh"],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: ["110px", 0],
  },
  signuppage: {
    alignItems: "center",
    height: [null, "100vh", "100vh", "100vh"],
  },
  signPage: {
    color: "black",
    fontSize: "30px",
    backgroundColor: "white",
    height: [null, "100vh", "100vh", "100vh"],

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
        svg: {
          color: "rgba(111, 118, 126, 1)",
          marginRight: "10px",
        },

        ".email": {
          fontSize: "18px",
          border: "none",
          backgroundColor: "rgba(244, 244, 244, 1)",
          outline: "none",
        },
      },
      ".password-form": {
        marginTop: "12px",
        backgroundColor: "rgba(244, 244, 244, 1)",
        borderRadius: "12px",
        padding: "12px",
        alignItems: "center",
        display: "flex",
        svg: {
          color: "rgba(111, 118, 126, 1)",
          marginRight: "10px",
        },

        ".email": {
          fontSize: "18px",
          border: "none",
          backgroundColor: "rgba(244, 244, 244, 1)",
          outline: "none",
        },
      },
      ".continue": {
        width: "100%",
        backgroundColor: "rgba(91, 110, 245, 1)",
        borderRadius: "12px",
        padding: "12px",
        border: "none",
        fontSize: "18px",
        color: "white",
        cursor: "pointer",
      },
      ".inactive": {
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
