/** @jsx jsx */
import { jsx, Image, Box, Heading, Text, Card, Flex, Button } from 'theme-ui';

import { FaAngleRight } from 'react-icons/fa';

let imgUrl = '';
export default function FeatureCardCollection({
  data: { name, title, imgSrc}
,}) {
  imgUrl = imgSrc;
  return (
    <Card sx={styles.CardBox}>
      <Box sx={{ textAlign: 'center' }}>
        <Image src={imgSrc} altText={title} />
        <Text sx={styles.CardBox.title}>{name}</Text>
      </Box>
      <Flex sx={{ alignItems: 'center', display: 'block' }}>
        <Text as="span" sx={styles.CardBox.subTitle}>{title}</Text>
        <Button variant='whiteButton' sx={styles.CardBox.collectionBtn} aria-label="">
          See Collection
          <FaAngleRight sx={{ fontSize: '25px', ml: '10px' }}/>
        </Button>
      </Flex>
    </Card>
  );
}

const styles = {
  CardBox: {
    borderRadius: 10,
    ml: [0, null, null, 0],
    position: 'relative',
    mt: ['40px', null, null, 0],
    p: 0,
    card: {
      display: 'flex',
      flexDirection: 'column',
      px: '1rem',
      pb: '20px',
    },
    title: {
      fontFamily: 'poppins-bold',
      fontSize: '40px',
      lineHeight: '75px',
      position: 'absolute',
      top: '32%',
      width: '100%',
      color: 'white',
      cursor: 'pointer',
      
    },
    subTitle: {
      fontFamily: 'mazzard-h-bold',
      fontSize: '24px',
      top: '10px',
      position: 'relative',
      cursor: 'pointer',
    },
    collectionBtn: {
      float: 'right',
      alignItems: 'center',
      position: 'relative',
      display: 'flex',
      float: [null, null, null, null, null, 'left', 'left', 'right'],
      mt: ['18px', '18px', '18px', '18px', '18px', '18px', null, 0],
      ml: ['0px', '0px', '0px', '0px', '0px', '0px', null, 0],
      cursor: 'pointer',
      background: 'transparent',
    }
  },
};
