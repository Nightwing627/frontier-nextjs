/** @jsx jsx */
import { jsx } from 'theme-ui';
import {Box, Input, Text, Button, Image, Grid, Label, Radio, Textarea} from 'theme-ui';
import React, { useState } from 'react';
import {
    IoMdAddCircleOutline
} from 'react-icons/io'
import CampaignLayout from "../../components/campaign/layout";
import Textgroup from "../../components/campaign/campaign-text-group";
import perkImage from  "assets/campaign/basic_feature.png";

const text = {
    perkTitle: "Perk Details",
    perkContent: ['Perks are incentives to backers in exchange for their support. \
        Make sure your perks are not ', 
        <b sx={{color: 'black'}}>prohibited.</b>, 
        ' Learn more about perks in the help center.'],
    visibilityTitle: 'Visibility',
    visibilityContent: 'You can change the visibility of your perks at any time. \
        Change the visibility to hidden if you’re working on a perk that is not \
        ready or if you no longer want backers to claim it.',
    priceTitle: 'Price *',
    priceContent: 'Set an amount that you want to collect from backers who claim this perk. \
        This amount should represent how much you want to receive for all the items included in this perk.',
    titleTitle: 'Title *',
    titleContent: 'The title for your perk is what will appear on your campaign page and throughout Indiegogo. \
        Create a title that best describes the contents of what this perk is offering.',
    itemTitle: 'Included Items *',
    itemContent: 'Add the items included in this perk. \
        Items could be physical, digital, experiences, or even just a thank you. \
        Specify item quantity and add additional items to create bundles.',
    descriptionTitle: 'Description *',
    descriptionContent: 'Describe the details of this perk. Be creative, \
        this is your opportunity to educate backers on what they will be receiving after they claim this perk.',
    imageTitle: 'Perk Image',
    imageContent: 'Please do not use images containing text such as price and discount or the Indiegogo brand colors. \
        Recommended dimensions: 660x440 pixels. PNG or JPG supported.',
    quantityTitle: 'Quantity Available',
    quantityContent: 'You can limit the quantity available to backers based on production volume. \
        Leaving this field blank indicates that there is no quantity limit.',
    deliveryTitle: 'Estimated delivery date',
    deliveryContent: 'Estimate a delivery date for this perk for your backers. \
        This date and future changes to it will appear on the perk card for your backers to see. \
        We recommend that you post an update to backers whenever you change this date.',
    shippingTitle: 'Shipping',
    shippingContent: 'Estimate a delivery date for this perk for your backers. \
        This date and future changes to it will appear on the perk card for your backers to see. \
        We recommend that you post an update to backers whenever you change this date.',
}

export default function Content() {
    const [checkeddark, setCheckedDark] = useState(true)
    const [checkedlight, setCheckedLight] = useState(false)
    return (
        <section sx={styles.section} id="basic">
            <CampaignLayout>   
                <Box sx={styles.commonFont}>
                    <Box>
                        <Textgroup title={text.perkTitle} content={text.perkContent} />
                        <Textgroup title={text.visibilityTitle} content={text.visibilityContent} />
                        <Box>
                            <Text sx={styles.title}>Who are you raising money for?</Text>
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
                                <b sx={{color: 'black'}}>Visibile. </b> &nbsp;Perk is available to claim.
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
                                <b sx={{color: 'black'}}>Hidden. </b> &nbsp;Perk is not available to claim.
                            </Label>
                        </Box>
                    </Box> 
                    <Box>
                        <Textgroup title={text.priceTitle} content={text.priceContent} />
                        <Input sx={styles.input} placeholder={'$'} />
                        <Text sx={styles.title}>Retail Price</Text>
                        <Input sx={styles.input} placeholder={'$'} />
                        <Textgroup title={text.titleTitle} content={text.titleContent} />
                        <Input sx={styles.input} placeholder={'$'} />
                        <Text sx={styles.titleInputMark}>30</Text>
                    </Box>
                    <Box>
                        <Textgroup title={text.itemTitle} content={text.itemContent} />
                        <Button sx={styles.addButton}>
                            <IoMdAddCircleOutline sx={styles.addImageIcon} />
                            <span sx={styles.addImage}>&nbsp;Add Item</span>
                        </Button>
                    </Box>
                    <Box>
                        <Textgroup title={text.descriptionTitle} content={text.descriptionContent} />
                        <Textarea sx={styles.textarea} placeholder={'Enter description here'} />   
                    </Box>   
                    <Box>
                        <Textgroup title={text.imageTitle} content={text.imageContent} />
                        <Box sx={styles.feature}>
                            <Image src={perkImage} sx={styles.mainImage} />
                        </Box>
                    </Box>
                    <Box>
                        <Textgroup title={text.quantityTitle} content={text.quantityContent} />
                        <Input sx={styles.input} placeholder={''} />
                        <Textgroup title={text.deliveryTitle} content={text.deliveryContent} />
                        <Text sx={styles.title}>Estimated date</Text>
                        <Input sx={styles.input} placeholder={'MM/YYYY'} />
                    </Box>
                    <Box>
                        <Textgroup title={text.shippingTitle} content={text.shippingContent} />
                        <Box>
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
                                No. This perk does not contain items that need to be shipped.
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
                                Yes. This perk contains items that need to be shipped.
                            </Label>
                        </Box>
                    </Box>
                    <Box>
                        <Grid sx={styles.grid}>
                            <Button sx={styles.button_back}>Cancel</Button>
                            <Button sx={styles.button}>Save</Button>
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
    title: {
        fontSize: [null, null, null, null, null, null, '20px', '24px'],
        pt: '15px',
        fontWeight: 700,
        lineHeight: '24px',
        color: '#203758'
    },
    titleInputMark: {
        fontSize: [null, null, null, null, null, null, '15px', '18px'],
        lineHeight: '30px',
        fontWeight: 400,
        letterSpacing: '-1%',
        color: '#989898',
        pt: '7px',
        textAlign: 'right',
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
    radioText: {
        fontSize: [null, null, null, null, null, null, '15px', '18px'],
        lineHeight: '30px',
        fontWeight: 400,
        letterSpacing: '-1%',
        color: '#989898',
        pt: '13px'
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
        bg: '#B4B4B4 !important',
        color: 'white',
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
    video_image_button: {
        width: "300px",
        padding: "7px 8px",
        bg: "#F4F5F7",
        borderRadius: "7px",
        mt: '15px',   
    },
    grid: {
        pt: '26px',
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
