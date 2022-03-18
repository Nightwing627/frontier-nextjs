/** @jsx jsx */
import { jsx } from 'theme-ui';
import {Select, Box, Input, Textarea, Button, Image, Grid, Flex} from 'theme-ui';
import Textgroup from "../../../components/campaign/campaign-text-group";
import videoImage from "../../../assets/campaign/content_video.png";
import overlayImage from  "../../../assets/campaign/basic_feature.png";

const text = {
    videoTitle: 'Video URL *',
    videoContent: ['Enter a YouTube or Vimeo URL to appear at the top of your campaign page.\
    Make sure your video has closed captioning enabled on ', <b sx={{color: '#5B6EF5'}}>Youtube</b>,
    ' or ', <b sx={{color: '#5B6EF5'}}>Vimeo</b>],
    overlayTitle: 'Video Overlay Image (Optional)',
    overlayContent: ['Choose an image to represent your video before it plays.', <br></br>, 
        '695 x 460 recommended resolution.'],
}

export default function VideoType() {
    return (
        <Box sx={styles.commonFont}>                
            <Box>
                <Textgroup title={text.videoTitle} content={text.videoContent} />
                <Grid sx={styles.grid}>
                    <Input sx={styles.input} placeholder={'https://'} />
                    <Button sx={styles.button}>Add Video</Button>
                </Grid>    
                <Image sx={styles.mainImage} src={videoImage}></Image>            
            </Box>
            <Box>
                <Textgroup title={text.overlayTitle} content={text.overlayContent} />
                <Image sx={styles.overlayImage} src={overlayImage}></Image>
            </Box>        
        </Box>
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
    overlayImage: {
        width: '100%',
        mt: '20px',
    },
    input: {
        border: '2px solid #989898',
        py: '13px',
    },
    button: {
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
        bg: '#F4F5F7 !important',
        color: 'black',
        boxShadow: 'none'
    },
    grid: {
        py: '20px',
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
        'repeat(1, 3fr 2fr)',
        null,
        'repeat(1, 3fr 2fr)',
        ],
    },
};
