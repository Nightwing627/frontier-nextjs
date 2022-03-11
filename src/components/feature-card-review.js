/** @jsx jsx */
import { jsx, Image, Box, Heading, Text, Card, Flex } from 'theme-ui';
import { FaCircle } from 'react-icons/fa';

export default function FeatureCardReview({
  data: { title, text, imgSrc, user }
,}) {
  return (
    <Card sx={styles.CardBox}>
      <>
        <Image src={imgSrc} alt={title} sx={styles.img}/>
      </>
      <Box sx={styles.CardBox.card}>
        <Heading as="p" sx={styles.CardBox.heading}>
          {title} </Heading>
        <Text as="p" sx={{ mt: 2 }}>{text}</Text>

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
            </Flex>
            <Flex className="user-text">
              <Text 
                as="span" 
                sx={{ 
                  mr: 2,
                  fontSize: '14px',
                 }}>
                  {user.readTime} read</Text>
              {user.created && (
                <>
                <FaCircle className="circle-icon"/>
                <Text as="span" sx={{ml: 2}}>{user.created}</Text>
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
      margin: 'auto'
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      px: '1rem',
      pb: '20px',
    },
    heading: {
      color: '#121E31',
      fontFamily: 'mazzard-h-bold',
      fontSize: '20px',
      mt: 1,
    },
    boxShadow: '0px 6px 47px rgba(38, 78, 118, 0.1)',
    '&:hover': {
      boxShadow: '0px 6px 47px rgba(38, 78, 118, 0.3)',
    },
    transition: 'all 0.3s',
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
    width: '100%',
    mx: 'auto',
    mb: [3, null, 4, null, null, 3],
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  },
};
