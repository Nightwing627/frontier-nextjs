/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import Sticky from 'react-stickynode';
import Header from './header/header';
import { Container, Grid } from 'theme-ui';

export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);
  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };
  return (
    <React.Fragment>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </Sticky>
      <Grid sx={styles.grid}>
        <div>aaa</div>
        <main
            sx={{
            variant: 'layout.main',
            }}
        >
            {children}
        </main>
      </Grid>
      
    </React.Fragment>
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
      gridGap: [
        '35px 0',
        null,
        '45px 50px',
        null,
        '50px 50px',
        null,
        null,
        '50px 50px',
      ],
      gridTemplateColumns: [
        'repeat(0,1fr)',
        null,
        'repeat(1,2fr)',
        null,
        'repeat(1,2fr)',
      ],
    },
  };