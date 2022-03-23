/** @jsx jsx */
import { jsx } from 'theme-ui';
import {Select, Box, Input, Textarea, Button, Image, Grid} from 'theme-ui';
import {IoMdAddCircleOutline} from 'react-icons/io';
import router, {useRouter} from 'next/router';
import CampaignLayout from "../../components/campaign/layout";
import Textgroup from "../../components/campaign/campaign-text-group";
import perkImage from  "assets/campaign/perks.png";

const text = {
    createTitle: "You haven't created any perks yet",
    createContent: `Perks are incentives offered to backers in exchange for their support. 
        You may edit your perk details until the perk is claimed. 
        Visit the Help Center to learn about different kinds of perks you can offer.`,
}

export default function Basic() {
    const router = useRouter();
    return (
        <section sx={styles.section} id="perk">
            <CampaignLayout>   
                <Box sx={styles.commonFont}>
                    <Textgroup title={text.createTitle} content={text.createContent} />
                    <Box sx={styles.feature}>
                        <Image src={perkImage} sx={styles.mainImage} />
                    </Box>
                    <Button sx={styles.addButton} onClick={() => {router.push('/campaign/editor/createperk')}}>
                        <IoMdAddCircleOutline sx={styles.addImageIcon} />
                        <span sx={styles.addImage}>&nbsp;Create New Perk</span>
                    </Button>
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
