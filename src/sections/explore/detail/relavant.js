/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Text } from 'theme-ui';
import SectionHeader from '../../../components/section-header';
import FeatureCardColumn from '../../../components/feature-card-column.js';

import CardImage from 'assets/crypto-feature/card-image.png';
import UserAvatar1 from 'assets/user-avatars/avatar_1.png';
import UserAvatar2 from 'assets/user-avatars/avatar_2.png';
import UserAvatar3 from 'assets/user-avatars/avatar_3.png';
import UserAvatar4 from 'assets/user-avatars/avatar_4.png';

const data = [
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

export default function Relavant() {

  return (
    <section sx={styles.section} id="relavant">
      <Container>
        <Text as="h2" sx={styles.title}>
            You may also be interested in
        </Text>

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
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
    pb: 9
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
        '50px 28px',
    ],
    gridTemplateColumns: [
        null,
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(4, 1fr)',
    ],
  },
  title: {
    fontFamily: 'mazzard-h-bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '50px',
    lineHeight: '59px',
    mb: '30px',
    color: '#080A12',
  }
};
