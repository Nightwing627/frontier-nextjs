/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Flex, Text, Image, Grid } from 'theme-ui';
import React, {useState} from 'react';
import { FaComment } from 'react-icons/fa';
import Textgroup from "../../../components/campaign/campaign-text-group";
import logoImage from "../../../assets/campaign/preview_update_logo.png";
import fundImage from "../../../assets/campaign/preview_update_first.png";
import kickImage from "../../../assets/campaign/preview_update_second.png";

const text = {
    fundTitle: '100% funded in 2 hours',
    fundContent: ['Dear backers,', 
        <br key={1}></br>, <br key={2}></br>, 
        "ZERA is 100% funded in a few hours! Thank you for making our first day on Indiegogo exceptional \
        and astonishing! We couldn't be more grateful! Thanks for all your support."],
    newsTitle: 'More great news !',
    newsContent: ['You can also share ZERA with your family and friends to earn a 10% commission.', 
        <br key={3}></br>, <br key={4}></br>, 
        "We have started the Kickbooster Referral Program! You can be rewarded with a 10% commission on \
        every dollar you help raise for our campaign! All you have to do is:",
        <br key={5}></br>, <br key={5}></br>, 
        "Click HERE and register as a Booster.\
        Share your unique Booster link on your Facebook, Instagram, Twitter, LinkedIn, Blog! \
        Refer to your Kickbooster dashboard and watch your commissions roll in!"],
    contactTitle: '',
    contactContent: ['If you have any questions, please do not hesitate to contact us through \
        contact@hycier.com.',
        <br key={7}></br>, <br key={8}></br>,
        'Cheers',
        <br key={9}></br>, <br key={10}></br>,
        'ZERA Team']
}

export default function PreviewUpdate() {
    const [commentAmount, setCommentAmount] = useState(0);
    return (
        <Box sx={styles.commonFont}> 
            <Grid sx={styles.gridLegal}>
                <Flex sx={{mt: '10px'}}>
                    <Box>
                        <Image src={logoImage} sx={styles.ownerImage} />
                    </Box>
                    <Box sx={{
                        display:'flex', 
                        justifyContent: 'left', 
                        alignItems: 'center', 
                        fontSize: '15px',
                        ml: '10px'
                    }}>
                        <div>
                            <Text sx={{
                                fontWeight: 700,
                                color: 'black',
                                fontFamily: 'mazzard-h-bold',
                            }}>by ZERA Team</Text>
                            <Text sx={{
                                color: '#989898'
                            }}>Dec 8, 2021 * 9:10AM</Text>
                        </div>                                    
                    </Box>
                </Flex>
                <Box sx={{
                        display:'flex', 
                        justifyContent: 'right', 
                        alignItems: 'center',
                        color: '#AEAEAE',
                        '@media screen and (max-width: 767px)': {
                            display: 'none'
                        },
                    }}>
                    <Text>1 day ago</Text>
                </Box>
            </Grid>
            <Textgroup title={text.fundTitle} content={text.fundContent} />
            <Box sx={styles.feature}>
                <Image src={fundImage} sx={styles.mainImage} />
            </Box>
            <Textgroup title={text.newsTitle} content={text.newsContent} />
            <Box sx={styles.feature}>
                <Image src={kickImage} sx={styles.mainImage} />
            </Box>
            <Text sx={styles.contentText}>{text.contactContent}</Text>
            <hr sx={styles.hr}></hr>
            <Box>
                <Flex>
                    <FaComment sx={{color: '#D7E0EB', fontSize: '26px'}} />
                    <Text sx={{
                        fontSize: '18px',
                        color: '#203758',
                        mt: '-4px',
                        fontWeight: 700,
                    }}>&nbsp;&nbsp;{commentAmount} Comments</Text>
                </Flex>
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
    hr: {
        my: '15px',
    },
    ownerImage: {
        width: '100%',
        borderRadius: '50%',
        mt: '10px'
    },
    feature: {
        pt: '20px'
    },
    contentText: {
        fontSize: [null, null, null, null, null, null, '15px', '18px'],
        lineHeight: '25px',
        fontWeight: 400,
        letterSpacing: '-1%',
        color: '#989898',
        pt: '15px'
    },
    gridLegal: {
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
