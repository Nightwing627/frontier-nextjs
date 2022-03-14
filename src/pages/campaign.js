import { StickyProvider } from 'contexts/app/app.provider';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Header from '../components/header/header';
import Faq from 'sections/faq';
import Sticky from 'react-stickynode';
import React, { useState } from 'react';

export default function IndexPage() {
  const [isSticky, setIsSticky] = useState(false);
  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };
  return (
    <>
      <Faq />
    </>
  );
}
