import { useEffect } from "react"
import Router from "next/router"
import { initGA, logPageView } from "analytics"
// Load main sections
import { ThemeProvider } from "theme-ui"
import { StickyProvider } from "contexts/app/app.provider"
import theme from "theme"
import SEO from "components/seo"
import Layout from "components/layout"
// Load DM Sans typeface
import "typeface-dm-sans"
import "assets/fonts/index.css"
// Load other package css file
import "react-multi-carousel/lib/styles.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-modal-video/css/modal-video.min.css"
import "rc-drawer/assets/index.css"

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA()
    logPageView()
    Router.events.on("routeChangeComplete", logPageView)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Frontier" />
          <Component {...pageProps} />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  )
}
