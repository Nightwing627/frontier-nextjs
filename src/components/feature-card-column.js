/** @jsx jsx */
import { jsx, Image, Box, Heading, Text, Card, Slider, Flex } from 'theme-ui';

import Group from 'assets/group.png'
import Calendar from 'assets/calendar.png'

export default function FeatureCardColumn({
  data: { type, title, imgSrc, altText, process, raised, days, user}
,}) {
  return (
    <Card sx={styles.CardBox}>
      <>
        <Image src={imgSrc} alt={altText} />
      </>
      <Box sx={styles.CardBox.card}>
        <Text as="p" sx={styles.CardBox.type}>{type}</Text>
        <Heading as="p" sx="sectionHeader">
          {title} </Heading>
        <Slider defaultValue={process} />
        <Box sx={styles.wrapper}>
          <Flex>
            <Image src={Group}/>
            <Text as="p">Total Raised $ {raised}</Text>
          </Flex>
          <Flex>
            <Image src={Calendar}/>
            <Text as="p">{days} Days left</Text>
          </Flex>
          <Flex>
            <div className="card-footer">
              <div className="image">
                <Image src={user.avatar} alt="Client Image" />
              </div>
              <div className="reviewer-info">
                <Heading as="h4" sx={styles.heading}>
                  {user.name}
                </Heading>
                <Text>{user.address}</Text>
              </div>
            </div>
          </Flex>
        </Box>
      </Box>
    </Card>
  );
}

const styles = {
  CardBox: {
    background: 'antiquewhite',
    borderRadius: 10,
    ml: [0, null, null, 0],
    position: 'relative',
    mt: ['40px', null, null, 0],
    p: 0,
    '@media screen and (min-width: 420px) and (max-width: 767px)': {
      maxWidth: '380px',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      px: '1rem',
      pb: '20px',
    },
    type: {
      fontFamily: 'mazzard-h-bold',
      color: '#1B8271',
      fontSize: '18px',
    },
  },
  
  img: {
    mx: 'auto',
    mb: [3, null, 4, null, null, 5],
    width: ['80px', '90px', null, null, null, '100px', 'auto'],
  },
  
};
