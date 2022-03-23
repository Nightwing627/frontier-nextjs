/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Text, Image } from 'theme-ui';
import {BsDot} from 'react-icons/bs';
import Textgroup from "../../../components/campaign/campaign-text-group";
import videoImage from "../../../assets/campaign/preview_input.png";

const text = {
    frontierTitle: 'What is Frontier and how does crowdfunding work?',
    frontierContent: `Indiegogo is a platform to fund ingenious, work-in-progress products and ideas. 
        Although contributing to a campaign is not the same as purchasing a product, 
        when you support a crowdfunding project, you help bring ideas to life! Learn more.`,
    selectTitle: 'How do I select a perk that interestes me onthis page?',
    selectContent: `On desktop, you’ll see a list with all available perks on the right hand side of 
        the page. Click on the perk you want, then click the "Get This Perk" button 
        to be redirected to the payment page. 
        If you're on a mobile device, scroll up to see all available perks.`,
    ownerTitle: 'How do I ask the project owner a question',
    ownerContent: `If you’ve already backed this campaign, you can leave a comment on the Comments 
        tab, or send the project owner a direct message. Otherwise, you may be able to contact the 
        project owner through their website or social media accounts. Learn more.`,
    shippingTitle: 'Can I change the shipping address for my perk?',
    shippingContent: `If you’ve already backed this campaign, you can leave a comment on the Comments tab, 
        or send the project owner a direct message. Otherwise, you may be able to contact the project 
        owner through their website or social media accounts. Learn more.`,
    itemTitle: 'Can I change the item, or perk, I selected?',
    itemContent: `You’ll need to contact the project owner directly to request any change to perks, 
        like color or quantity.`,
    refundTitle: 'Can I ask Indiegogo for a refund?',
    refundContent: `Indiegogo does not guarantee that the perks offered by the campaigner will be 
        produced or delivered and is not directly responsible for refunding contributions. 
        Learn more about our Refund policy.`
}

export default function PreviewFaq() {
    return (
        <Box sx={styles.commonFont}>             
            <Box>
                <Text sx={styles.falBigTitle}>First time on Indiegogo?</Text>
                <Textgroup title={text.frontierTitle} content={text.frontierContent} />
                <Textgroup title={text.selectTitle} content={text.selectContent} />
                <Textgroup title={text.ownerTitle} content={text.ownerContent} />
            </Box>
            <hr sx={styles.hr}></hr>
            <Box>
                <Text sx={styles.falBigTitle}>Already contributed to this project?</Text>
                <Textgroup title={text.shippingTitle} content={text.shippingContent} />
                <Textgroup title={text.itemTitle} content={text.itemContent} />
                <Textgroup title={text.refundTitle} content={text.refundContent} />
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
    falBigTitle: {
        fontSize: ['20px', null, null, null, '22px', '22px', '24px', '24px'],
        pt: '30px',
        fontWeight: 700,
        lineHeight: '24px',
        color: '#203758'
    },    
    mainImage: {
        width: '100%',
    },
    feature: {
        pt: '46px'
    },
    hr: {
        mt: '30px',
        mb: '0px'
    }
};
