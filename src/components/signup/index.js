/** @jsx jsx */
import React, { useState } from "react"
import Link from "next/link"
import { jsx, Image, Grid, Box } from "theme-ui"

import { HiMail } from "react-icons/hi"
import { AiOutlineWarning, AiOutlineCheck } from "react-icons/ai"
import logImg from "assets/logImg.svg"

export default function Signup({ className }) {
  const [email, setEmail] = useState("")

  return (
    <div sx={styles.signPage} className={className}>
      <Grid columns={[1, null, null, null, 2]} sx={styles.signuppage}>
        <Box sx={styles.logImg}>
          <Image src={logImg} alt="Sign logo" />
        </Box>
        <Box>
          <div className="logform">
            <h2>Sign up</h2>
            <hr />
            <p className="email-address">Your email address</p>
            <div className="email-form">
              <div className="flex">
                <HiMail />
                <input
                  type="email"
                  className={email != "admin" ? "email" : "white"}
                  placeholder="Your email"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="confirmicon">
                <AiOutlineWarning
                  fill="red"
                  sx={
                    email != "" && email != "admin" ? styles.show : styles.hide
                  }
                />
                <AiOutlineCheck
                  fill="green"
                  sx={email == "admin" ? styles.show : styles.hide}
                />
              </div>
            </div>
            <div className="email-code">
              <input
                type="number"
                className={email != "admin" ? "code" : "white"}
                placeholder="Your email"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex">
              <div className="email-code">
                <input
                  type="number"
                  className={email != "admin" ? "code" : "white"}
                  placeholder="Your email"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="email-code">
                <input
                  type="number"
                  className={email != "admin" ? "code" : "white"}
                  placeholder="Your email"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="email-code">
                <input
                  type="number"
                  className={email != "admin" ? "code" : "white"}
                  placeholder="Your email"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button className={email != "" ? "continue" : "inactive"}>
                Continue
              </button>
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
  hide: {
    display: "none",
  },
  show: {
    display: "block",
  },
  logImg: {
    backgroundColor: " rgba(244, 244, 244, 1)",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  signuppage: {
    alignItems: "center",
    height: "100vh",
  },
  signPage: {
    color: "black",
    fontSize: "30px",
    backgroundColor: "white",
    height: "100vh",

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
        justifyContent: "space-between",

        ".flex": {
          display: "flex",
          svg: {
            color: "rgba(111, 118, 126, 1)",
            marginRight: "10px",
          },
        },
        ".confirmicon": {
          display: "flex",
        },
        ".email": {
          fontSize: "18px",
          border: "none",
          backgroundColor: "rgba(244, 244, 244, 1)",
          outline: "none",
          color: "red",
        },
        ".white": {
          fontSize: "18px",
          border: "none",
          backgroundColor: "rgba(244, 244, 244, 1)",
          outline: "none",
          color: "black",
        },
      },
      ".email-code": {
        backgroundColor: "rgba(244, 244, 244, 1)",
        borderRadius: "12px",
        padding: "12px",
        alignItems: "center",
        display: "flex",

        ".code": {
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
