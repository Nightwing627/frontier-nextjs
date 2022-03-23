/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Label, Radio, Button } from 'theme-ui';
import router, {useRouter} from 'next/router';
import React, {useState} from 'react'
import CampaignLayout from "../../components/campaign/layout";
import Textgroup from "../../components/campaign/campaign-text-group";

const text = {
    allowTitle: "Allow Tips for Frontier on Checkout Page",
    allowContent: `We provide our backer community the option to add a tip for Indiegogo at checkout, 
        so we can donate a portion of those tips to causes that are important to the Indiegogo community. 
        You can control whether this feature is visible on your campaign’s checkout page. Learn more.`,
}

export default function Settings() {
    const router = useRouter()
    const [checkeddark, setCheckedDark] = useState(true)
    const [checkedlight, setCheckedLight] = useState(false)
    return (
        <section sx={styles.section} id="basic">
            <CampaignLayout>   
                <Box sx={styles.commonFont}>
                    <Textgroup title={text.allowTitle} content={text.allowContent} />
                    <Label sx={styles.radioText}>
                        <Radio
                            name='dark-mode'
                            value='true'
                            defaultChecked={true}
                            sx={{color: checkeddark ? 'black !important' : '#989898', mt: '3px'}}
                            onChange={() => {
                            setCheckedDark(!checkeddark)
                            setCheckedLight(!checkedlight)
                            }}
                        />
                        Yes, allow Tips for Frontier on my campaign’s checkout page        
                    </Label>
                    <Label sx={styles.radioText}>
                        <Radio
                            name='dark-mode'
                            value='false'
                            sx={{color: checkedlight ? 'black !important' : '#989898', mt: '3px'}}
                            onChange={() => {
                            setCheckedDark(!checkeddark)
                            setCheckedLight(!checkedlight)
                            }}
                        />
                        No, do not allow Tips for Frontier on my campaign’s checkout page    
                    </Label>    
                    <Button sx={styles.button}>Review</Button>       
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
        mt: '70px'
    },
    radioText: {
        fontSize: [null, null, null, null, null, null, '15px', '18px'],
        lineHeight: '30px',
        fontWeight: 400,
        letterSpacing: '-1%',
        color: '#989898',
        pt: '13px'
    },
    button: {
        width: '100%',
        borderRadius: '7px',
        fontWeight: 'normal',
        fontSize: '18px !important',
        fontFamily: 'DM Sans',
        fontWeight: 500,
        fontStyle: 'normal',
        my: '25px'
    }
};
