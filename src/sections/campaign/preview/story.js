/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Text, Image, Flex } from 'theme-ui';
import {BsDot} from 'react-icons/bs';
import Textgroup from "../../../components/campaign/campaign-text-group";
import videoImage from "../../../assets/campaign/preview_input.png";

const styles = {
    section: {
        variant: 'section.campaignFeature',
        backgroundColor: 'section_bg_color',
    },
    dot: {
        fontSize: '32px',
    },
    dotText: {
        pt: '3px'
    },
    commonFont: {
        variant: 'section.fonts',
    },
    mainImage: {
        width: '100%',
    },
    feature: {
        pt: '46px'
    },
};

const text = {
    summaryTitle: 'Short Summary',
    summaryContent: ['Contributors fund ideas they can be passionate about and to people they trust. \
        Here are some things to do in this section:', 
        <br key={1}></br>, <br key={2}></br>,
        <Flex key={3}><BsDot sx={styles.dot}/> <Text sx={styles.dotText}>Introduce yourself and your background.</Text></Flex>,
        <Flex key={4}><BsDot sx={styles.dot}/> <Text sx={styles.dotText}>Briefly describe your campaign and why it's important to you.</Text></Flex>,
        <Flex key={5}><BsDot sx={styles.dot}/> <Text sx={styles.dotText}>Express the magnitude of what contributors will help you achieve.</Text></Flex>,
    ]
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


