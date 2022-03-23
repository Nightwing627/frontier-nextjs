/** @jsx jsx */
import { jsx, Image, Box, Heading, Text, Card, Button, Flex } from 'theme-ui';
import { FaCircle } from 'react-icons/fa';
import { useRouter } from 'next/router'

export default function SuggestCard({
  data: { imgSrc, title, members, posts, summary, users }
,}) {
    const router = useRouter();
  return (
    <Card sx={styles.CardBox}>
        <Image src={imgSrc} alt={title} sx={styles.CardBox.image} />
        <Box sx={styles.CardBox.card}>
            <Heading as="p" sx={styles.CardBox.heading}>{title}</Heading>
            <Flex sx={styles.CardBox.subTitle}>
                <Text as="span">{members} Members</Text>
                <FaCircle className="circle-icon"/>
                <Text as="span">{posts} posts a day</Text>
            </Flex>
            <Flex sx={styles.CardBox.friends}>
                <Flex>
                    <Image src={users.user1} sx={styles.CardBox.userImage} />
                    <Image src={users.user2} sx={styles.CardBox.userImage} />
                    <Image src={users.user3} sx={styles.CardBox.userImage} />
                </Flex>
                <Text as="span">{summary}</Text>
            </Flex>
            <Box sx={styles.CardBox.footer}>
                <Button onClick={() => {router.push('/social/community/detail')}}>Join Community</Button>
            </Box>
        </Box>
    </Card>
  );
}

const styles = {
  CardBox: {
    background: 'white',
    borderRadius: '14px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    p: '20px 18px',
    '&:hover': {
        boxShadow: '0px 6px 17px rgba(38, 78, 118, 0.2)',
      },
    '@media screen and (min-width: 420px) and (max-width: 767px)': {
      margin: 'auto'
    },
    image: {
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px',
        height: ['152px']
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      pb: '0px',
    },
    heading: {
      color: 'text',
      fontFamily: 'mazzard-h-bold',
      fontSize: '20px',
      lineHeight: '30px',
      mt: '10px',
    },
    subTitle: {
        alignItems: 'center',
        mt: '5px',
        '> span': {
            mr: 2,
            color: 'text',
            fontSize: '16px',
            fontFamily: 'mazzard-h-bold',
            lineHeight: '20px',
        }
    },
    summary: { 
        
    },
    friends: {
        mt: '26px',
        alignItems: 'center'
    },
    userImage: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '3px solid white',
        objectFit: 'cover',
        ml: '-15px',
        '&:first-of-type': {
            ml: 0,
            border: 'none',
        }
    },
    '.circle-icon': {
        color: '#C4C4C4',
        fontSize: '10px',
        mr: 2
    },
    footer: {
        width: '100%',
        mt: 4,
        '> button': {
            width: '100%',
            py: 4,
            boxShaodw: 'none',
            '&:hover': {
                boxShaodw: 'rgb(24 62 118 / 42%) 0px 5px 15px -5px',
            }
        }
    },
    transition: 'all 0.3s',

  },
};
