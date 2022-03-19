/** @jsx jsx */
import { jsx } from 'theme-ui';
import {Box, Input, Text, Button, Flex, Grid} from 'theme-ui';
import {
    IoMdAddCircleOutline
} from 'react-icons/io';
import Textgroup from "../../../components/campaign/campaign-text-group";

const text = {
    vgTitle: 'Video Gallery',
    vgContent: 'Add more YouTube or Vimeo videos related to your campaign. \
        These will show up as additional selectable videos under your pitch video \
        or image at the top of your campaign page.',
    igTitle: 'Image Gallery',
    igContent: 'Add more images related to your campaign. \
        These will show up as additional selectable images under your pitch video or \
        image at the top of your campaign page.',
}

export default function ImageType() {
    return (
        <Box sx={styles.commonFont}>                
            <Box>
                <Textgroup title={text.vgTitle} content={text.vgContent} />
                <Text sx={styles.title}>YouTube or Vimeo URL</Text>
                <Grid sx={styles.grid}>
                    <Input sx={styles.input} placeholder={'https://'} />
                    <Button sx={styles.button}>Add Video</Button>
                </Grid>          
            </Box>
            <Box>
                <Textgroup title={text.igTitle} content={text.igContent} />
                <Input type="file" accept="iamge/ *" sx={{display: 'none'}} />
                <Button sx={styles.button_back}>
                   <IoMdAddCircleOutline sx={styles.addImageIcon} />
                   <span sx={styles.addImage}>&nbsp;Add Image</span>
                </Button>
            </Box>        
        </Box>
    );
}

const styles = {
    section: {
        variant: 'section.campaignFeature',
        backgroundColor: 'section_bg_color',
    },
    addImage: {
        position: 'relative',
        bottom: '4px'
    },
    addImageIcon: {
        fontSize: '22px'
    },
    title: {
        fontSize: [null, null, null, null, null, null, '20px', '24px'],
        pt: '20px',
        pb: '14px',
        fontWeight: 700,
        lineHeight: '24px',
        color: '#203758'
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
        color: '#5B6EF5',
        border: '2px solid #5B6EF5',
        boxShadow: 'none',
        mt: '14px',
    },
    grid: {
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
