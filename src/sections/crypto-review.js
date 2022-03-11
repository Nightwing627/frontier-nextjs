/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardReview from 'components/feature-card-review.js'

import Review from 'assets/crypto-feature/review.png';
import Avatar1 from 'assets/user-avatars/avatar_5.png';
import Avatar2 from 'assets/user-avatars/avatar_6.png';
import Avatar3 from 'assets/user-avatars/avatar_7.png';

const data = [
  {
    id: 1,
    title: 'Introducing Drops: Cult-Classic Campaigns Return for a Limited Time',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgSrc: Review,
    user: {
        name: 'Hawkins Junior',
        avatar: Avatar1,
        readTime: '24min',
        created: 'November 21th, 2020',
    },
  },
  {
    id: 2,
    title: '10 Years, 1 Takeaway: It\'s All About Community & Trust',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgSrc: Review,
    user: {
        name: 'Jean Kapoor',
        avatar: Avatar2,
        readTime: '1hr',
        created: 'November 21th, 2020',
    },
  },
  {
    id: 3,
    title: 'Global Supply Chain Disruptions Are Affecting Crowdfunding Timelines',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgSrc: Review,
    user: {
        name: 'Melinda Humbles',
        avatar: Avatar3,
        readTime: '30min',
        created: 'November 21th, 2020',
    },
  },
];

const head = {
  title: 'From the Crypto Review',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
}

export default function CryptoReview() {
  return (
    <section sx={styles.section} id="crypto-review">
      <Container>
        <SectionHeader
          title={head.title}
          description={head.description}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardReview
              data={item} key={item.id}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'section_bg_color',
    marginTop: '-25px',
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 28px',
      null,
      '50px 28px',
      null,
      null,
      '50px 58px',
    ],
    gridTemplateColumns: [
      null,
      null,
      'repeat(1, 1fr)',
      null,
      'repeat(3, 1fr)',
    ],
  },
};
