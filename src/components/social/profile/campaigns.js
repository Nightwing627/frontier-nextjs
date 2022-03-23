/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Grid } from "theme-ui"

import SocialCardColumn from "components/social-card-column.js"

import CardImage from "assets/crypto-feature/card-image.png"
import UserAvatar1 from "assets/user-avatars/avatar_1.png"
import UserAvatar2 from "assets/user-avatars/avatar_2.png"

const data_1 = [
  {
    id: 1,
    type: "FUNDING",
    title: "Triple 4K Display for MacBook Pro 2016-2021",
    imgSrc: CardImage,
    altText: "Triple",
    process: 30,
    raised: "5,345",
    days: 45,
  },
  {
    id: 2,
    type: "FUNDING",
    title: "NAKEY - The Case For People Who Hate Cases",
    imgSrc: CardImage,
    altText: "Nakey",
    process: 30,
    raised: "5,345",
    days: 45,
  },
]
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"

export default function Campaigns() {
  return (
    <section sx={styles.social_campaign}>
      <Container sx={styles.campaign_cards_list}>
        <Grid sx={styles.grid.first}>
          {data_1.map((item) => (
            <SocialCardColumn data={item} key={item.id} />
          ))}
        </Grid>
      </Container>
    </section>
  )
}

const styles = {
  social_campaign: {
    variant: "section.keyFeature",
    backgroundColor: "section_bg_color",
    padding: "20px 0 !important",
  },
  campaign_cards_list: {
    padding: "0 !important",
  },
  grid: {
    mb: -1,
    pt: 0,
    first: {
      gridGap: [
        "35px 0",
        null,
        "45px 28px",
        null,
        "50px 28px",
        null,
        null,
        "50px 28px",
      ],
      gridTemplateColumns: [
        null,
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
      ],
    },
  },
}
