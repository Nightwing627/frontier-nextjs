/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import FeatureCardCollection from 'components/feature-card-collection.js';

import CardImage from 'assets/crypto-feature/card-image.png';
import UserAvatar1 from 'assets/user-avatars/avatar_1.png';
import UserAvatar2 from 'assets/user-avatars/avatar_2.png';
import UserAvatar3 from 'assets/user-avatars/avatar_3.png';
import UserAvatar4 from 'assets/user-avatars/avatar_4.png';

import Collection1 from 'assets/collection/1.png';
import Collection2 from 'assets/collection/2.png';
import Collection3 from 'assets/collection/3.png';
import Collection4 from 'assets/collection/4.png';


const data_1 = [
  {
    id: 1,
    type: 'FUNDING',
    title: 'Triple 4K Display for MacBook Pro 2016-2021',
    imgSrc: CardImage,
    altText: 'Triple',
    process: 30,
    raised: '5,345',
    days: 45,
    user: {
        name: 'Cheyenne Curtls',
        avatar: UserAvatar1,
        text: '12 Campaign',
        rate: 3,
    },
  },{
    id: 2,
    type: 'FUNDING',
    title: 'NAKEY - The Case For People Who Hate Cases',
    imgSrc: CardImage,
    altText: 'Nakey',
    process: 30,
    raised: '5,345',
    days: 45,
    user: {
        name: 'Ahmad Schleifer',
        avatar: UserAvatar2,
        text: '12 Campaign',
        rate: 3,
        address: 'New York, Longdon',
      }, 
  },{
    id: 3,
    type: 'FUNDING',
    title: 'Stupid Old Suidios Has Gotta Move',
    imgSrc: CardImage,
    altText: 'Stupid',
    process: 30,
    raised: '5,345',
    days: 45,
    user: {
        name: 'Skylar Gouse',
        avatar: UserAvatar3,
        text: '12 Campaign',
        rate: 3,
        address: 'New York, Longdon',
      },
  },{
    id: 4,
    type: 'FUNDING',
    title: 'Little Failures by Alisha M. Wielfaert',
    imgSrc: CardImage,
    altText: 'Little',
    process: 20,
    raised: '5,345',
    days: 45,
    user: {
      name: 'Maren George',
      avatar: UserAvatar4,
      text: '12 Campaign',
      rate: 3,
      address: 'New York, Longdon',
    },
  },
];
const data_2 = [
  {
    id: 1,
    name: '10 Cool & Clever Finds',
    title: 'Our roundup of standout projects',
    imgSrc: Collection1,
  },{
    id: 2,
    name: 'Team Favorites',
    title: 'Urtopia & more team favorites',
    imgSrc: Collection2,
  },{
    id: 3,
    name: 'InDemand Superstars',
    title: 'These campaigns are crowd favorites',
    imgSrc: Collection3,
  },{
    id: 4,
    name: 'Essential Camera Gear',
    title: 'For photographers, vloggers & tiktokers',
    imgSrc: Collection4,
  },
  
];
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip';

export default function CryptoTrading() {
  return (
    <section sx={styles.section} id="feature">
      <Container>
        <SectionHeader
          title="Find it first on Crypto Trading."
          description={description}
        />

        <Grid sx={styles.grid.first}>
          {data_1.map((item) => (
            <FeatureCardColumn
              data={item} key={item.id}
            />
          ))}
        </Grid>

        <Grid sx={styles.grid.second}>
          {data_2.map((item) => (
            <FeatureCardCollection
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
    variant: 'section.keyFeature',
    backgroundColor: 'section_bg_color',
  },
  grid: {
    mb: -1,
    pt: 0,
    first: {
      gridGap: [
        '35px 0',
        null,
        '45px 28px',
        null,
        '50px 28px',
        null,
        null,
        '50px 28px',
      ],
      gridTemplateColumns: [
        'repeat(1, 1fr)',
        null,
        'repeat(2, 1fr)',
        null,
        'repeat(4, 1fr)',
      ],
    },
    second: {
      mt: [5, null, 6, 8, 10],
      gridGap: [
        '50px 70px',
      ],
      gridTemplateColumns: [
        'repeat(1, 2fr)',
        'repeat(1, 2fr)',
        'repeat(1, 2fr)',
        null,
        'repeat(2, 1fr)',
      ],
    }
  },
};
