/** @jsx jsx */
import { jsx, Image, Box, Heading, Text, Card, Progress, Flex } from 'theme-ui';
import Rating from 'components/rating';
import { FaCircle } from 'react-icons/fa';
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
        <Heading as="p" sx={styles.CardBox.heading}>
          {title} </Heading>
          <Progress sx={styles.CardBox.progress} max={100} value={process}>
          </Progress>
        <Box sx={styles.CardBox.wrapper}>
          <Flex>
            <Image src={Group}/>
            <Text as="p">Total Raised $ {raised}</Text>
          </Flex>
          <Flex>
            <Image src={Calendar}/>
            <Text as="p">{days} Days left</Text>
          </Flex>
        </Box>
        <div className="card-footer">
          <div className="image">
            <Image src={user.avatar} alt="Client Image" />
          </div>
          <div className="reviewer-info">
            <Flex sx={{ alignItems: 'center' }}>
              <Text 
                as="h4" 
                className="username">
                  {user.name}
              </Text>
              <Rating rating={user.rate} />
            </Flex>
            <Flex className="user-text">
              <Text 
                as="span" 
                sx={{ 
                  mr: 2,
                  color: '#1B8271',
                  fontFamily: 'mazzard-h-bold'
                 }}>
                  {user.text}</Text>
              {user.address && (
                <>
                <FaCircle className="circle-icon"/>
                <Text as="span" sx={{ml: 2}}>{user.address}</Text>
                </>
              )}
            </Flex>
          </div>
        </div>
      </Box>
    </Card>
  );
}

const styles = {
  CardBox: {
    background: 'white',
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
    heading: {
      color: '#121E31',
      fontFamily: 'mazzard-h-bold',
      fontSize: '22px',
      mt: 1,
    },
    progress: {
      height: '12px',
      color: '#8485FF',
      backgroundColor: '#EEEEEE',
      border: '1px solid #D7D7D7',
      boxSizing: 'border-box',
      mt: 2,
    },
    wrapper: {
      mt: 2,
      '> div': {
        mt: 2,
        alignItems: 'center',
      },
      '> div > img': {
        width: '32px',
        height: '25px',
      },
      '> div > p': {
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '500',
        ml: 4,
      },
      
    },
    boxShadow: '0px 6px 47px rgba(38, 78, 118, 0.1)',
    '&:hover': {
      boxShadow: '0px 6px 47px rgba(38, 78, 118, 0.3)',
    },
    transition: 'all 0.3s',
    '.rating': {
      mb: [1, null, null, 2],
      ml: [1, null, null, 3],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'yellow',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
      '.username': {
        fontFamily: 'mazzard-h-bold',
        fontSize: '18px',
        color: '#121E31',
      },
      '.user-text': {
        fontSize: '14px',
        alignItems: 'center',
        '.circle-icon': {
          fontSize: '10px',
          color: '#717579',
        },
      },
      
    },
  },
 
  img: {
    mx: 'auto',
    mb: [3, null, 4, null, null, 5],
    width: ['80px', '90px', null, null, null, '100px', 'auto'],
  },
};
