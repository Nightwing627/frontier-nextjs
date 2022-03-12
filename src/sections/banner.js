/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Text, Image, Button, IconButton } from 'theme-ui';
import React, { useState } from 'react';
import { Link } from 'components/link';
import { FaArrowRight } from 'react-icons/fa';
import BannerBGLeft from 'assets/banner-bg/left.png';
import BannerBGRight from 'assets/banner-bg/right.png';

import highlow from 'assets/sponsor/highlow.svg';
import emajine from 'assets/sponsor/emajine.svg';
import glowup from 'assets/sponsor/glowup.svg';

const data = [
  {
    id: 1,
    path: '#',
    image: highlow,
    title: 'highlow',
  },
  {
    id: 2,
    path: '#',
    image: emajine,
    title: 'emajine',
  },
  {
    id: 3,
    path: '#',
    image: glowup,
    title: 'glowup',
  },
];

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Text as="p" sx={styles.banner.titleFace}>
            - Crowdfunding
          </Text>
          <Heading as="h1" variant="heroPrimary" >
          We Help Surface
          </Heading>
          <Heading as="h1" variant="heroPrimary">
          Innovations In Technology
          </Heading>
          <Text as="p" variant="heroSecondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          </Text>
          <Flex>
            <Button variant="normalButton" aria-label="Learn More">
              Learn More <FaArrowRight />
            </Button>
            
            <Button variant="whiteButton" aria-label="Donate">
              Donate
            </Button>
          </Flex>
          <>
            <Box sx={styles.sponsorBox}>
              <Text as="p" sx={styles.sponsorTitle}>Our Partners</Text>
              <Box sx={styles.sponsorBox.sponsor}>
                {data.map((item, index) => (
                  <Link path={item.path} key={`client-key${index}`}>
                    <Image src={item.image} alt={item.title} />
                  </Link>
                ))}
              </Box>
            </Box>
          </>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerBGRight} alt="banner" />
        </Box>
     
      </Container>
      
    </section>
  );
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'white',
    container: {
      display: 'flex',
      background: `url(${BannerBGLeft})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      margin: 0,
    },
    titleFace: {
      color: '#1B8271',
      fontFamily: 'mazzard-h-bold',
      mb: '40px'
    },
    contentBox: {
      width: ['100%', null, '88%', '70%', '70%', '55%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, 8, 8, null, 5, 10],
      ml: ['2%', '2%', '4%', '8%', '10%', '6%']
    },
    imageBox: {
      display: ['none', 'none', null, null, null, 'block'],
      justifyContent: 'center',
      ml: [0, null, null, '-110px', '-115px', '-150px', '-210px', '-250px'],
      mr: [0, null, null, '-145px', '-160px', '-140px', '-220px', '-170px'],
      mt: [0, null, null, '40px', 4, 7, 10],
      mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      overflow: 'hidden',
      textAlign: 'right',
      width: '100%',
    },
    leftBG: {
      display: 'block',
      background: `url(${BannerBGLeft})`,
      minWidth: '100%',
      height: '60vh',
      position: 'absolute',
      left: 0,
      display: 'block',
      backgroundRepeat: 'no-repeat',
      top: '25%',
    }
  },
  sponsorTitle: {
    color: 'secondary',
    fontFamily: 'mazzard-h-bold',
    fontSize: '20px',
    opacity: 0.6,
    flexShrink: 2,
    pb: [2, null, 0],
    pt: [0, null, 50],
  },
  sponsorBox: {
    pt: ['35px', null, null, null, null, '45px'],
    flexDirection: ['column', null, 'row'],
    sponsor: {
      pt: '15px',
      display: 'flex',
      alignItems: 'center',
      '> a': {
        mr: [5, null, null, 4, 6],
        display: 'flex',
        '&:last-of-type': {
          mr: 0,
        },
      },
    },
  },
};
