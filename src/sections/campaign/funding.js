/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Input, Text, Button, Image, Grid, Flex} from 'theme-ui';
import React, { useState } from 'react';
import {
    IoMdAddCircleOutline
} from 'react-icons/io'
import CampaignLayout from "../../components/campaign/layout";
import Textgroup from "../../components/campaign/campaign-text-group";
import FixedType from "./funding/fixed";
import FlexibleType from "./funding/flexible";

const text = {
    fudingTitle: "Funding Type ",
    fudingCotent: ['Indiegogo offers two funding types: \
        Flexible Funding (keep what you raise) and Fixed Funding (all-or-nothing).', 
        <b key={1} sx={{color: '#5B6EF5'}}>Learn about the differences and the pricing for each.</b>],    
    recipientTitle: ['Funds Recipient Verification ', 
        <b key={5} sx={{
            color: '#969696',
            padding: '5px 5px', 
            border: '1px solid #969696', 
            borderRadius: '3px',
            fontWeight: 400,
            fontSize: '14px',
            ml: '10px',
            '@media screen and (max-width:736px)': {
                display: 'none',
            },
        }}>NOT VERIFED</b>],
    recipientContent: 'The campaign owner must be verified to launch the campaign. ID verification \
        will be done securely with a third party and creates a more trusted platform for you and your backers.',
    walletTitle: 'Wallet Address',
    walletContent: 'The campaign owner must be verified to launch the campaign. ID verification will be done \
        securely with a third party and creates a more trusted platform for you and your backers.',
}

export default function Funding() {
    const [isFlexible, setIsFlexible] = useState(true);
    const handleSetVideo = (e, videoState) => {
        setIsFlexible(videoState);
    }
    return (
        <section sx={styles.section} id="content">
            <CampaignLayout>   
                <Box sx={styles.commonFont}>
                    <Box>
                        <Textgroup title={text.fudingTitle} content={text.fudingCotent} />
                        <Flex sx={styles.video_image_button}>
                            <Button 
                                sx={isFlexible ? styles.button : styles.image_button}
                                onClick={(e) => handleSetVideo(e, true)}
                            >
                                Flexible Funding
                            </Button>
                            <Button 
                                sx={isFlexible ? styles.image_button : styles.button}
                                onClick={(e) => handleSetVideo(e, false)}
                            >
                                Fixed Funding
                            </Button>
                        </Flex>
                    </Box>                    
                    <Box>
                        {   isFlexible ? 
                            <FixedType /> :
                            <FlexibleType /> 
                        }       
                    </Box>
                    <hr sx={styles.hr}></hr>
                    <Box>
                        <Textgroup title={text.recipientTitle} content={text.recipientContent} />
                        <Button sx={styles.verifyButton}>Verify Your ID</Button>
                    </Box>
                    <hr sx={styles.hr}></hr>
                    <Box>
                        <Textgroup title={text.walletTitle} content={text.walletContent} />
                        <Input sx={styles.input} />
                    </Box>
                    <Box>
                        <Grid sx={styles.grid}>
                            <Button sx={styles.button_back}>Back</Button>
                            <Button sx={styles.button}>Save & Continue</Button>
                        </Grid>
                    </Box>               
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
    title: {
        fontSize: [null, null, null, null, null, null, '20px', '24px'],
        pt: '15px',
        fontWeight: 700,
        lineHeight: '24px',
        color: '#203758'
    },
    hr: {
        mt: '25px'
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
    verifyButton: {
        width: '196px',
        borderRadius: '7px',
        fontWeight: 'normal',
        fontSize: '18px !important',
        fontFamily: 'DM Sans',
        fontWeight: 500,
        fontStyle: 'normal',
        mt: '14px'
    },
    button_back: {
        width: '100%',
        borderRadius: '7px',
        fontWeight: 'normal',
        fontSize: '18px !important',
        fontFamily: 'DM Sans',
        fontWeight: 500,
        fontStyle: 'normal',
        bg: '#B4B4B4 !important',
        color: 'white',
    },
    image_button: {
        width: '100%',
        borderRadius: '7px',
        fontWeight: 'normal',
        fontSize: '18px !important',
        fontFamily: 'DM Sans',
        fontWeight: 500,
        fontStyle: 'normal',
        bg: '#F4F5F7 !important',
        color: 'black',
        boxShadow: 'none',
    },
    video_image_button: {
        width: "420px",
        padding: "7px 8px",
        bg: "#F4F5F7",
        borderRadius: "7px",
        mt: '15px',   
        '@media screen and (max-width:736px)': {
            display: 'block',
            width: '260px'
        },
    },
    grid: {
        py: '26px',
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
        'repeat(1, 1fr 1fr)',
        null,
        'repeat(1, 1fr 1fr)',
        ],
    },
};
