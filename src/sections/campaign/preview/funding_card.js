/** @jsx jsx */
import { jsx, Image, Box, Heading, Text, Card, Progress, Flex, Grid, Button } from 'theme-ui';
import {
    BsLink45Deg, 
    BsFillHeartFill
} from 'react-icons/bs'
import {
    FaFacebook,
    FaTwitter
} from 'react-icons/fa'

export default function FundingCardColumn({
  data: { type, title, price, process, backText, progressBottomText, user}
,}) {
  return (
    <Card sx={styles.CardBox}>
      <Box sx={styles.CardBox.card}>
        <Text as="p" sx={styles.CardBox.type}>{type}</Text>
        <Heading as="p" sx={styles.CardBox.heading}>
            {title} 
        </Heading>
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
                        color: '#5B6EF5',
                        fontFamily: 'mazzard-h-bold'
                    }}>
                    {user.text}
                </Text>
            </Flex>
          </div>
        </div>
        <Flex sx={{width: '100%'}}>
            <Text sx={{width: '100%'}}> 
                <b>${price}</b> USD
            </Text>
            <Text sx={{textAlign:'right', width: '100%'}}>{backText}</Text>
        </Flex>
        <Progress sx={styles.CardBox.progress} max={100} value={process}>
        </Progress>
        <Text>{progressBottomText}</Text>
        <Grid sx={styles.CardBox.grid}>
            <Flex>
                <Button sx={styles.CardBox.button}>Back It</Button>
                <Button sx={styles.CardBox.button_back}>
                    <BsFillHeartFill sx={{color: '#5B6EF5', pt: '5px'}} /> Following
                </Button>
            </Flex>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'right'}}>
                <Flex>
                    <FaFacebook sx={styles.socialIcon}/>
                    <FaTwitter sx={styles.socialIcon} />
                    <BsLink45Deg sx={{
                        fontSize: '30px',
                        color: '#707070',
                        ml: '8px',
                        fontWeight: 700
                    }} />
                </Flex>
            </Box>
        </Grid>
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
            margin: 'auto'
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            px: '20px',
            py: '25px',
            bg: '#F4F5F7',
            borderRadius: '12px'
        },
        type: {
            fontFamily: 'mazzard-h-bold',
            color: '#1B8271',
            fontSize: '18px',
        },
        heading: {
        color: 'text',
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
        transition: 'all 0.3s',
        '.card-footer': {
        display: 'flex',
        alignItems: 'center',
        marginTop: ['5px', null, null, '15px'],
        marginBottom: ['5px', null, null, '15px'],
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
            color: 'text',
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
        button: {
            width: '100%',
            borderRadius: '7px',
            fontWeight: 'normal',
            fontSize: '18px !important',
            fontFamily: 'DM Sans',
            fontWeight: 500,
            fontStyle: 'normal',
            mr: '8px',
            padding: '13px 20px'
        },
        button_back: {
            width: '100%',
            borderRadius: '7px',
            fontWeight: 'normal',
            fontSize: '18px !important',
            fontFamily: 'DM Sans',
            fontWeight: 500,
            fontStyle: 'normal',
            bg: '#F4F5F7',
            border: '1px solid #CFCFCF',
            color: 'black',
            padding: '13px 20px',
            boxShadow: 'none'
        },
        grid: {
            pt: ['10px', '10px', null, null, null, '25px', '25px'],
            gridGap: [
                '13px 0',
                null,
                '45px 30px',
                null,
                '50px 30px',
                null,
                null,
                '90px 70px',
            ],
            width: ['100%', '80%', '100%'],
            mx: 'auto',
            gridTemplateColumns: [
                'repeat(1, 1fr)',
                null,
                'repeat(1, 2fr 1fr)',
                null,
                'repeat(1, 2fr 1fr)',
            ],
        },
    },
    
    img: {
        mx: 'auto',
        mb: [3, null, 4, null, null, 5],
        width: ['80px', '90px', null, null, null, '100px', 'auto'],
    },

    socialIcon: {
        fontSize: '24px',
        color: '#707070',
        ml: '10px'
    }

};
