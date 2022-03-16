/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Text, Image, Button, IconButton, Grid} from 'theme-ui';
import React, { useState } from 'react';
import CampaignLayout from "../../components/campaign/layout";
import campainHand from 'assets/campaign/main_hand.png';

export default function CampaignHome() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={styles.section} id="campaign">
        <CampaignLayout>
          <Image src={campainHand}></Image>
        </CampaignLayout>
    </section>
  );
}

const styles = {
    section: {
        variant: 'section.campaignFeature',
        backgroundColor: 'section_bg_color',
    },
};
