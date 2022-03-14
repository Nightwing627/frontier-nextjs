/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Text, Image, Button } from 'theme-ui';
import React, { useState } from 'react';
import { Link } from 'components/link';
import { FaArrowRight } from 'react-icons/fa';
import BG from 'assets/banner-bg/explore.png';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
        <Box sx={styles.banner.container}>

        </Box>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'white',
    container: {
      display: 'flex',
      background: `url(${BG})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      margin: 0,
      height: '60vh',
      width: '100%',
    },
  },
};
