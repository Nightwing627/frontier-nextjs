/** @jsx jsx */
import { jsx } from 'theme-ui';
import {Select, Box, Input, Textarea, Button, Image, Grid} from 'theme-ui';
import router, {useRouter} from 'next/router';
import React, {useState} from 'react';
import CampaignLayout from "../../components/campaign/layout";
import FundingCard from './preview/funding_card';
import UserAvatar1 from '../../assets/user-avatars/avatar_1.png';
import Story from './preview/story';
import Faq from './preview/faq';
import Update from './preview/update';
import Comment from './preview/comment';

const data = {
    id: 1,
    type: 'FUNDING',
    title: 'My Campaign Title',
    backText: '0 backers',
    progressBottomText: ['0% of $500 ', <b key={1}>Fixed Goal</b>],
    process: 30,
    price: 120,
    user: {
        name: 'Cheyenne Curtls',
        avatar: UserAvatar1,
        text: 'Ask a question',
        rate: 3,
    },
}

export default function FundingCardSection() {
    const router = useRouter()
    const [menuNumber, setMenuNumter] = useState(1)
    return (
        <section sx={styles.section} id="basic">
            <CampaignLayout>   
                <Box sx={styles.commonFont}>
                    <FundingCard data={data} />   
                </Box>
                <Grid sx={styles.grid}>
                    <Box className="preview-story" sx={menuNumber == 1 ? styles.menuActive : ""} onClick={(e) => {setMenuNumter(1)}}>STORY</Box>
                    <Box className="preview-faq" sx={menuNumber == 2 ? styles.menuActive : ""} onClick={(e) => {setMenuNumter(2)}}>FAQ</Box>
                    <Box className="preview-update" sx={menuNumber == 3 ? styles.menuActive : ""} onClick={(e) => {setMenuNumter(3)}}>UPDATE(28)</Box>
                    <Box className="preview-comment" sx={menuNumber == 4 ? styles.menuActive : ""} onClick={(e) => {setMenuNumter(4)}}>COMMENTS(245)</Box>
                </Grid>
                {menuNumber == 1 ? <Story /> : ''}
                {menuNumber == 2 ? <Faq /> : ''}
                {menuNumber == 3 ? <Update /> : ''}
                {menuNumber == 4 ? <Comment /> : ''}
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
    menuActive: {
        color: 'black',
        borderBottom: '2px solid black',
        pb: '10px'
    },
    mainImage: {
        width: '100%',
    },
    feature: {
        py: '26px'
    },
    input: {
        border: '2px solid #989898',
        py: '13px',
        mt: '15px',
        mb: '8px'
    },
    button: {
        width: '100%',
        borderRadius: '7px',
        fontWeight: 'normal',
        fontSize: '18px !important',
        fontFamily: 'DM Sans',
        fontWeight: 500,
        fontStyle: 'normal'
    },
    button_back: {
        width: '100%',
        borderRadius: '7px',
        fontWeight: 'normal',
        fontSize: '18px !important',
        fontFamily: 'DM Sans',
        fontWeight: 500,
        fontStyle: 'normal',
        bg: '#B4B4B4'
    },
    grid: {
        '.preview-story' : {
            width: ['40%', '28%', '38%', '37%', '100%', '90%', '70%'],
        },
        '.preview-faq' : {
            width: ['25%', '20%', '30%', '70%', '65%', '55%', '55%'],
        },
        '.preview-update' : {
            width: ['77%', '58%', '76%', '60%', '91%', '77%', '68%'],
        },
        '.preview-comment' : {
            width: ['100%', '65%', '100%', '74%', '82%', '77%', '62%'],
        },
        fontSize: '18px',
        fontFamily: 'mazzard-h-bold',
        fontWeight: 700, 
        cursor: 'pointer',
        color: '#717579',
        pt: '15px',
        pb: ['20px', '20px', null, null, null, null, '20px', '20px'],
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
            'repeat(1, 1fr 1fr)',
            null,
            'repeat(1, 1fr 1fr 1fr 1fr)',
            null,
            'repeat(1, 1fr 1fr 2fr 3fr)',
        ],
    },
};
