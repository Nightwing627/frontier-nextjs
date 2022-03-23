/** @jsx jsx */
import { jsx } from 'theme-ui';
import {Select, Box, Image, Grid, Radio, Label, Button} from 'theme-ui';
import React, { useState } from 'react';
import router, {useRouter} from 'next/router';
import {IoIosArrowDown} from 'react-icons/io'
import CampaignLayout from "../../components/campaign/layout";
import Textgroup from "../../components/campaign/campaign-text-group";
import campainHand from 'assets/campaign/main_hand.png';

const text = {
  startTitle: "Let's get ready to start your campaign !",
  startContent: ['We want to create the best onboarding for you – please fill out the information below.', <br key={1}></br>, 
    'Your answers will be locked for this campaign and can’t be changed later.'],
  moneyTitle: 'Who are you asking money for?',
  moneyContent: 'Please choose the type of account that will be receiving your funds',
  locateTitle: 'Where are you located?',
  locateContent: ['If you are raising funds as an individual, what is your country of legal residence?', <br key={2}></br>, 
    'If you are raising funds for a business headquartered?', <br key={3}></br> ,
    'Learn more about country limitations.']
}

export default function CampaignHome() {
  const [checkeddark, setCheckedDark] = useState(true)
  const [checkedlight, setCheckedLight] = useState(false)
  const router = useRouter()
  return (
    <section sx={styles.section} id="campaign">
      <CampaignLayout>          
        <Box>
          <Image src={campainHand} sx={styles.mainImage}></Image>
        </Box>
        <Box sx={styles.commonFont}>
          <Textgroup title={text.startTitle} content={text.startContent} />
          <Textgroup title={text.moneyTitle} content={text.moneyContent} />
          <Grid sx={styles.grid}>
            <Label sx={styles.radioText}>
              <Radio
                name='dark-mode'
                value='true'
                defaultChecked={true}
                sx={{color: checkeddark ? 'black !important' : '#989898', mt: '3px'}}
                onChange={() => {
                  setCheckedDark(!checkeddark)
                  setCheckedLight(!checkedlight)
                }}
              />
              Individual
            </Label>
            <Label sx={styles.radioText}>
              <Radio
                name='dark-mode'
                value='false'
                sx={{color: checkedlight ? 'black !important' : '#989898', mt: '3px'}}
                onChange={() => {
                  setCheckedDark(!checkeddark)
                  setCheckedLight(!checkedlight)
                }}
              />
              Business or Nonprofit
            </Label>
          </Grid>
          <Textgroup title={text.locateTitle} content={text.locateContent} />
        </Box>
        <Box sx={styles.startCampaign}>
          <Select
            arrow={
              <IoIosArrowDown />
            }
            sx={styles.select}
          >
            <option>Select a residence country</option>
            <option>Hi</option>
            <option>Beep</option>
            <option>Boop</option>
          </Select>
          <Button 
            sx={styles.button}
            onClick={() => {router.push('/campaign/editor/basic')}}
          >
            Start a Campaign
          </Button>
        </Box>
      </CampaignLayout>
    </section>
  );
}

const styles = {
  section: {
    variant: 'section.campaignFeature',
    backgroundColor: 'section_bg_color',
  },
  commonFont: {
    variant: 'section.fonts',
  },
  mainImage: {
    width: '100%'
  },
  startCampaign: {
    pt: '25px',
    pb: ['20px', '20px', null, null, null, null, '200px', '200px']
  },
  radioText: {
    fontSize: [null, null, null, null, null, null, '15px', '18px'],
    lineHeight: '30px',
    fontWeight: 400,
    letterSpacing: '-1%',
    color: '#989898'
  },
  select: {
    color: '#989898',
    border: '2px solid #989898',
    borderRadius: '12px'
  },
  button: {
    mt: '35px',
    width: '100%',
    borderRadius: '7px',
    fontWeight: 'normal',
    fontSize: '18px !important',
    fontFamily: 'DM Sans',
    fontWeight: 500,
    fontStyle: 'normal'
  },
  grid: {
    pt: '11px',
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
      'repeat(1, 1fr 2fr)',
      null,
      'repeat(1,1fr 2fr)',
    ],
  },
};
