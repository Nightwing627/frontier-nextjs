/** @jsx jsx */
import { jsx } from 'theme-ui';
import {Select, Box, Input, Text, Button, Image, Grid, Flex} from 'theme-ui';
import React, { useState } from 'react';
import {
    IoMdAddCircleOutline
} from 'react-icons/io'
import CampaignLayout from "../../components/campaign/layout";
import Textgroup from "../../components/campaign/campaign-text-group";
import summaryImage from  "assets/campaign/content_summary.png";
import VideoType from "./content/video_type";
import ImageType from "./content/image_type";

const text = {
    pitchTitle: "Pitch Video or Image",
    pitchContent: ['Add a video or image to appear on the top of your campaign page. Campaigns with\
        videos raise 2000% more than campaigns without video. Keep your video 2-3 minutes. ', 
        <b key={1} sx={{color: '#5B6EF5'}}>Learn how to make a great video</b>],
    videoTitle: 'Video URL *',
    videoContent: ['Enter a YouTube or Vimeo URL to appear at the top of your campaign page.\
    Make sure your video has closed captioning enabled on ', <b key={2} sx={{color: '#5B6EF5'}}>Youtube</b>,
    ' or ', <b key={3} sx={{color: '#5B6EF5'}}>Vimeo</b>],
    storyTitle: 'Story *',
    storyContent: ['Tell potential contributors more about your campaign. \
        Provide details that will motivate people to contribute. \
        A good pitch is compelling, informative, and easy to digest. ', <br key={4}></br>, 
        'Add more images related to your campaign. \
        These will show up as additional selectable images under your pitch \
        video or image at the top of your campaign page. '],
    faqTitle: 'FAQ *',
    faqContent: 'The FAQ section should provide the most common details that \
        backers are looking for when evaluating your campaign. \
        We will also provide common answers to questions about crowdfunding and how Indiegogo works.',
}

export default function Content() {
    const [isVideo, setIsVideo] = useState(true);
    const handleSetVideo = (e, videoState) => {
        setIsVideo(videoState);
    }
    return (
        <section sx={styles.section} id="content">
            <CampaignLayout>   
                <Box sx={styles.commonFont}>
                    <Box>
                        <Textgroup title={text.pitchTitle} content={text.pitchContent} />
                        <Flex sx={styles.video_image_button}>
                            <Button 
                                sx={isVideo ? styles.button : styles.image_button}
                                onClick={(e) => handleSetVideo(e, true)}
                            >
                                Video
                            </Button>
                            <Button 
                                sx={isVideo ? styles.image_button : styles.button}
                                onClick={(e) => handleSetVideo(e, false)}
                            >
                                Image
                            </Button>
                        </Flex>
                    </Box>                    
                    <Box>
                        {   isVideo ? 
                            <VideoType /> :
                            <ImageType /> 
                        }       
                    </Box>
                    <Box>
                        <Textgroup title={text.storyTitle} content={text.storyContent} />
                        <Box sx={styles.feature}>
                            <Image src={summaryImage} sx={styles.mainImage} />
                        </Box>
                    </Box>
                    <Box>
                        <Textgroup title={text.faqTitle} content={text.faqContent} />
                    </Box>
                    <Box>
                        <Text sx={styles.title}>Question</Text>
                        <Input sx={styles.input} placeholder={''} />
                    </Box>
                    <Box>
                        <Text sx={styles.title}>Answer</Text>
                        <Input sx={styles.input} placeholder={''} />
                        <Button sx={styles.addButton}>
                            <IoMdAddCircleOutline sx={styles.addImageIcon} />
                            <span sx={styles.addImage}>&nbsp;Add another question</span>
                        </Button>
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
    mainImage: {
        width: '100%',
    },
    feature: {
        pt: '14px'
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
    addButton: {
        width: '100%',
        borderRadius: '7px',
        fontWeight: 'normal',
        fontSize: '18px !important',
        fontFamily: 'DM Sans',
        fontWeight: 500,
        fontStyle: 'normal',
        bg: 'white',
        color: '#5B6EF5',
        border: '2px solid #5B6EF5',
        boxShadow: 'none',
        mt: '14px',
    },
    addImage: {
        position: 'relative',
        bottom: '4px'
    },
    addImageIcon: {
        fontSize: '22px'
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
