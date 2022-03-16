/** @jsx jsx */
import React, { useState } from "react"
import Link from "next/link"
import { jsx, Image, Grid, Box } from "theme-ui"

import { HiMail } from "react-icons/hi"
import { AiOutlineWarning, AiOutlineCheck } from "react-icons/ai"
import logImg from "assets/logImg.svg"

export default function Signup({ className }) {
  const [email, setEmail] = useState("")
  const [code1, setCode1] = useState("")
  const [code2, setCode2] = useState("")
  const [code3, setCode3] = useState("")
  const [code4, setCode4] = useState("")
  const [emailverify, setEmailVerify] = useState(false)

  const verifyFunc = () => {
    email == "admin" ? setEmailVerify(true) : setEmailVerify(false)
  }

  return (
    <div sx={styles.signPage} className={className}>
      <Grid columns={[1, null, null, 2]} sx={styles.signuppage}>
        <Box sx={styles.logImg}>
          <Image src={logImg} alt="Sign logo" />
        </Box>
        <Box>
          <div className="logform">
            <h2>Sign up</h2>
            <hr />
            <p className={!emailverify ? "email-address" : "hide"}>
              Your email address
            </p>
            <p className={emailverify ? "email-address" : "hide"}>
              We just send you a verify code. Check your inbox to get them.
            </p>
            <div className={!emailverify ? "email-form" : "hide"}>
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

            <div className={emailverify ? "flex" : "hide"}>
              <div className="email-code">
                <input
                  type="number"
                  className={code1 == 1 ? "code" : "white"}
                  value={code1}
                  onInput={(e) => setCode1(e.target.value)}
                />
              </div>
              <div className="email-code">
                <input
                  type="number"
                  className={code2 == 1 ? "code" : "white"}
                  value={code2}
                  onInput={(e) => setCode2(e.target.value)}
                />
              </div>
              <div className="email-code">
                <input
                  type="number"
                  className={code3 == 1 ? "code" : "white"}
                  value={code3}
                  onInput={(e) => setCode3(e.target.value)}
                />
              </div>
              <div className="email-code">
                <input
                  type="number"
                  className={code4 == 1 ? "code" : "white"}
                  value={code4}
                  onInput={(e) => setCode4(e.target.value)}
                />
              </div>
            </div>

            <p
              className={
                !(code1 == 1 && code2 == 1 && code3 == 1 && code4 == 1) &&
                code1 != "" &&
                code2 != "" &&
                code3 != "" &&
                code4 != ""
                  ? "red"
                  : "hide"
              }
            >
              The code you entered is incorrect.
            </p>

            <div className={!emailverify ? "" : "hide"}>
              <button
                className={email == "admin" ? "continue" : "inactive"}
                onClick={verifyFunc}
              >
                Continue
              </button>
            </div>
            <div className={emailverify ? "" : "hide"}>
              <button
                className={
                  code1 == 1 && code2 == 1 && code3 == 1 && code4 == 1
                    ? "continue"
                    : "inactive"
                }
              >
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
    marginTop: ["110px", 0],
    backgroundColor: " rgba(244, 244, 244, 1)",
    height: [null, "100vh", "100vh", "100vh"],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    ".hide": {
      display: "none",
    },
    ".logform": {
      ".red": {
        color: "red",
      },
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
        width: "80px",
        height: "80px",
        borderRadius: "12px",
        padding: "12px",
        alignItems: "center",
        display: "flex",

        ".code": {
          width: "50px",
          fontSize: "24px",
          border: "none",
          backgroundColor: "rgba(244, 244, 244, 1)",
          outline: "none",
          textAlign: "center",
          color: "black",
        },
        ".white": {
          width: "50px",
          fontSize: "24px",
          border: "none",
          backgroundColor: "rgba(244, 244, 244, 1)",
          outline: "none",
          color: "red",
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
      ".flex": {
        display: "flex",
        justifyContent: "space-between",
      },
    },
  },
}
