/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import Sticky from 'react-stickynode';
import Header from './header/header';
import Footer from './footer/footer';
import router, { useRouter } from 'next/router'

export default function Layout({ children }) {
  const pathname = useRouter().pathname;
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
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      {
        pathname.search("campaign") > -1 ? "" : <Footer /> 
      }
    </React.Fragment>
  );
}
