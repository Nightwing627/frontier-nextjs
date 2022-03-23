/** @jsx jsx */
import { jsx } from 'theme-ui';
import {Select, Box, Input, Text, Button, Image, Grid} from 'theme-ui';
import router, {useRouter} from 'next/router';
import {BsLink45Deg} from 'react-icons/bs'
import CampaignLayout from "../../components/campaign/layout";
import Textgroup from "../../components/campaign/campaign-text-group";
import featuredImage from  "assets/campaign/basic_feature.png";

const text = {
    draftTitle: "Draft Campaign Share Link",
    draftContent: `Generate a link to the current draft of your campaign. Share this link 
        to get feedback from friends on how your campaign is shaping up before your campaign goes live.`,
    facebookTitle: 'Facebook Share Image',
    facebookContent: ['Upload an image to be used when sharing on Facebook.', <br key={1}></br>, 
        '1200 x 630 recommended resolution, 600 x 315 minimum resolution.'],
    marketingTitle: 'Marketing Image',
    marketingContent: ['Upload an image for potential use in Indiegogo marketing materials. \
        This image does not guarantee you promotion on any of Indiegogo’s channels, but instead \
        adds your campaign to a pool of potential campaigns to be shared with backers who have \
        expressed interest in campaigns like yours.', <br key={2}></br>, <br key={3}></br>,
        'Image should be of your product in use or a still from your creative project and may \
        not have overlaid text or logos, nor may it include the Indiegogo logo.\
        It must abide by our Terms of Use.', <br key={4}></br>, <br key={5}></br> ,      
        '1200 x 630 recommended resolution, 600 x 315 minimum resolution.'],  
    analyticsTitle: 'Google Analytics',
    analyticsContent: `Enable Google Analytics to gain more insight about your campaign and contributions. 
        To get started, set up a Universal Analytics Property in Google Analytics. Learn more about it here.`,
}

export default function Extras() {
    const router = useRouter()
    return (
        <section sx={styles.section} id="basic">
            <CampaignLayout>   
                <Box sx={styles.commonFont}>
                    <Box>
                        <Textgroup title={text.draftTitle} content={text.draftContent} />
                        <Input sx={styles.input} />
                        <Button sx={styles.addButton}>
                            <BsLink45Deg sx={styles.addImageIcon} />
                            <span sx={styles.addImage}>&nbsp;Generate Link</span>
                        </Button> 
                    </Box>
                    <hr sx={styles.hr}></hr>
                    <Box>
                        <Textgroup title={text.facebookTitle} content={text.facebookContent} />
                        <Box sx={styles.feature}>
                            <Image src={featuredImage} sx={styles.mainImage} />
                        </Box>
                    </Box>
                    <hr sx={styles.hr}></hr>
                    <Box>
                        <Textgroup title={text.marketingTitle} content={text.marketingContent} />
                        <Box sx={styles.feature}>
                            <Image src={featuredImage} sx={styles.mainImage} />
                        </Box>
                    </Box>
                    <hr sx={styles.hr}></hr>
                    <Box>
                        <Textgroup title={text.analyticsTitle} content={text.analyticsContent} />
                        <Grid sx={styles.analyticsGrid}>
                            <Text sx={{
                                display:'flex',
                                alignItems: 'center',
                                color: '#989898'
                            }}>Tracking ID</Text>
                            <Input sx={styles.input} placeholder={'UA-XXXXX-Y'} />
                        </Grid>   
                        <Text sx={styles.titleInputMark}>40</Text>
                    </Box>     
                    <hr sx={styles.hr}></hr>
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
    mainImage: {
        width: '100%',
    },
    feature: {
        pt: '14px'
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
    titleInputMark: {
        fontSize: [null, null, null, null, null, null, '15px', '18px'],
        lineHeight: '30px',
        fontWeight: 400,
        letterSpacing: '-1%',
        color: '#989898',
        textAlign: 'right',
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
        mt: '14px',        
        boxShadow: 'none',
    },
    addImage: {
        position: 'relative',
        bottom: '4px'
    },
    addImageIcon: {
        fontSize: '22px'
    },
    grid: {
        pt: '26px',
        pb: ['20px', '20px', null, null, null, null, '200px', '200px'],
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
    analyticsGrid: {
        pt: '10px',
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
            'repeat(1, 3fr 5fr)',
            null,
            'repeat(1, 3fr 7fr)',
        ],
    },
};
