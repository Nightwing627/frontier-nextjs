/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Input, Image } from 'theme-ui';
import {BsDot} from 'react-icons/bs';
import Textgroup from "../../../components/campaign/campaign-text-group";
import videoImage from "../../../assets/campaign/preview_input.png";

const text = {
    summaryTitle: 'Short Summary',
    summaryContent: ['Contributors fund ideas they can be passionate about and to people they trust. \
        Here are some things to do in this section:', 
        <br key={1}></br>, <br key={2}></br>,
        <BsDot />, ' Introduce yourself and your background.',<br></br>,
        <BsDot />, " Briefly describe your campaign and why it's important to you.",<br></br>,
        <BsDot />, ' Express the magnitude of what contributors will help you achieve.'],
}

export default function PreviewStory() {
    return (
        <Box sx={styles.commonFont}> 
            <Textgroup title={text.summaryTitle} content={text.summaryContent} />
            <Box sx={styles.feature}>
                <Image src={videoImage} sx={styles.mainImage} ></Image>
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
    note: {
        px: ['5px', '5px', null, '10px', null, '20px', '20px'],
        py: ['5px', '5px', null, '10px', null, '20px', '20px'],
        bg: '#FFE38D',
        mt: '50px',
        borderRadius: '5px'
    },
    noteTitle: {
        fontSize: '20px', 
        mb: '15px',
        color: '#203758',
        fontWeight: 700
    },
    noteContent: {
        fontSize: '16px', 
        mb: '15px',
        color: '#000000',
        fontWeight: 400,
        '&:last-of-type': {
            pb: '0px',
        },
    },
    mainImage: {
        width: '100%',
    },
    feature: {
        pt: '46px'
    },
    input: {
        border: '2px solid #989898',
        py: '13px',
    },
    usdtInput: {
        my: '20px'
    },
    pricePlaceholderRight: {
        textAlign: 'right',
        pr: '2%',
        mt: '-45px',
        color: '#989898',
        zIndex: -1000,
    },
};
