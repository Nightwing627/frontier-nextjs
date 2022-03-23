/** @jsx jsx */
import { jsx } from 'theme-ui';
import {Select, Box, Input, Textarea, Button, Image, Grid} from 'theme-ui';
import {IoIosArrowDown} from 'react-icons/io'
import CampaignLayout from "../../components/campaign/layout";
import Textgroup from "../../components/campaign/campaign-text-group";
import featuredImage from  "assets/campaign/basic_feature.png";

const text = {
    basicTitle: "Basics",
    basicContent: `Make a good basic impression: introduce your campaign objectives and entice people to 
        learn more. This basic information will represent your campaign on your campaign page, 
        on your campaign card, and in searches.`,
    campaignTitle: 'Campaign Title *',
    campaignContent: 'What is your campaign?',
    taglineTitle: 'Campaign Tagline *',
    taglineContent: 'Provide a short description that best describes your campaign to your audience',
    featureTitle: 'Featured Image *',
    featureContent: ['Upload a square image that represents your campaign.', <br key={1}></br>, 
        '640 x 640 recommended resolution, 220 x 220 minimum resolution.'],
    categoryTitle: 'Category *',
    categoryContent: 'To help backers find your campaign, select a category that best represents your project.',
    tagsTitle: 'Tags *',
    tagsContent: `Enter up to five keywords that best describe your campaign. These tags will help with 
        organization and discoverability.`,
    durationTitle: 'Campaign Duration *',
    durationContent: `How many days will you be running your campaign for? You can run a campaign for any 
        number of days, with a 60 day duration maximum.`,
}

export default function Basic() {
    return (
        <section sx={styles.section} id="basic">
            <CampaignLayout>   
                <Box sx={styles.commonFont}>
                    <Textgroup title={text.basicTitle} content={text.basicContent} />
                    <Box>
                        <Textgroup title={text.campaignTitle} content={text.campaignContent} />
                        <Input sx={styles.input} placeholder={'My Campaign Title'} />
                    </Box>
                    <Box>
                        <Textgroup title={text.taglineTitle} content={text.taglineContent} />
                        <Textarea sx={styles.textarea} placeholder={'Enter description here'} />   
                    </Box>
                    <Box>
                        <Textgroup title={text.featureTitle} content={text.featureContent} />
                        <Box sx={styles.feature}>
                            <Image src={featuredImage} sx={styles.mainImage} />
                        </Box>
                    </Box>
                    <Box>
                        <Textgroup title={text.categoryTitle} content={text.categoryContent} />
                        <Select
                            arrow={
                            <IoIosArrowDown />
                            }
                            sx={styles.select}
                        >
                            <option>Select a Category</option>
                            <option>Hi</option>
                            <option>Beep</option>
                            <option>Boop</option>
                        </Select>
                    </Box>
                    <Box>
                        <Textgroup title={text.tagsTitle} content={text.tagsContent} />
                        <Select
                            arrow={
                            <IoIosArrowDown />
                            }
                            sx={styles.select}
                        >
                            <option>Enter a few tags</option>
                            <option>Hi</option>
                            <option>Beep</option>
                            <option>Boop</option>
                        </Select>
                    </Box>
                    <Box>
                        <Textgroup title={text.durationTitle} content={text.durationContent} />
                        <Input sx={styles.input} placeholder={''} />
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
    textarea: {
        border: '2px solid #989898',
        py: '13px',
        mt: '15px',
        mb: '8px',
        borderRadius: '8px',
        height: '126px',
        fontSize: '15px'
    },
    startCampaign: {
        pt: '25px',
        pb: '200px'
    },
    select: {
        color: '#989898',
        border: '2px solid #989898',
        mt: '22px',
        mb: '6px',
        borderRadius: '12px'
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
};
