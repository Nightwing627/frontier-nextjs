/** @jsx jsx */
import { jsx } from 'theme-ui';
import {Box, Input, Text, Button, Image, Grid, Label, Radio, Textarea, Flex} from 'theme-ui';
import React, { useState } from 'react';
import {
    IoMdAddCircleOutline
} from 'react-icons/io';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import Modal from 'react-modal';
import CampaignLayout from "../../components/campaign/layout";
import Textgroup from "../../components/campaign/campaign-text-group";
import perkImage from  "assets/campaign/basic_feature.png";

const text = {
    perkTitle: "Perk Details",
    perkContent: ['Perks are incentives to backers in exchange for their support. \
        Make sure your perks are not ', 
        <b key={1} sx={{color: 'black'}}>prohibited.</b>, 
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

    modalItemTitle: 'Item Name *',
    modalItemContent: 'Use a concise and obvious name for the item.',
    modalOptionTitle: 'Options',
    modalOptionContent: 'Do you have options that backers can choose from for this item, e.g., color, size, etc.? \
        This will create SKUs that you can use later to help with fulfillment.'
}

const options = [
    {
        name: '',
        value: ''
    }
]

export default function CreatePerkPage() {
    const [optionAmount, setOptionAmount] = useState(1);
    const [checkeddark, setCheckedDark] = useState(true)
    const [checkedlight, setCheckedLight] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const addOption = (e) => {
        e.preventDefault();
        options.push({
            name: '',
            value: ''
        });
        setOptionAmount(optionAmount + 1);
    }

    const closeCustomOption = (e, key) => {
        e.preventDefault();
        options.splice(key, 1);
        setOptionAmount(optionAmount - 1);
    }

    return (
        <section sx={styles.section} id="createPerk">
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
                        <Input sx={styles.input} placeholder={text.pricePlaceholder} />
                        <Text sx={styles.title}>Retail Price</Text>
                        <Box sx={styles.usdtInput}>
                            <Input sx={styles.input} placeholder={'$'} />
                            <Text sx={styles.pricePlaceholderRight}>USDT</Text>
                        </Box>
                        <Textgroup title={text.titleTitle} content={text.titleContent} />
                        <Box sx={styles.usdtInput}>
                            <Input sx={styles.input} placeholder={'$'} />
                            <Text sx={styles.pricePlaceholderRight}>USDT</Text>
                        </Box>                        
                        <Text sx={styles.titleInputMark}>30</Text>
                    </Box>
                    <Box>
                        <Textgroup title={text.itemTitle} content={text.itemContent} />
                        <Button sx={styles.addButton} onClick={openModal}>
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
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={styles.modal.main}
                >
                    <Box>
                        <Flex>
                            <Text sx={styles.title}>Item</Text>
                            <Box sx={styles.modal.modalClose} onClick={(e) => {
                                    closeModal(e)
                                }}>
                                <AiOutlineCloseCircle sx={{position:'relative', float:'right', fontSize: '22px', cursor:'pointer'}} />
                            </Box>
                        </Flex>
                        <Textgroup title={text.modalItemTitle} content={text.modalItemContent} />
                        <Input sx={styles.input} placeholder={''} />
                        <Text sx={styles.titleInputMark}>30</Text>
                    </Box>
                    <Box>
                        <Textgroup title={text.modalOptionTitle} content={text.modalOptionContent} />
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
                            No, I am not offering any options for this item.
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
                            Yes, This perk contains items that need to be shipped.
                        </Label>
                    </Box>  
                    <Box>
                        <Grid sx={styles.modal.grid}>
                            <Text sx={styles.title}>Option Name</Text>
                            <Text sx={styles.title}>Option Value</Text>
                            <Box></Box>
                        </Grid>
                        {options.map((item, i) => (
                            <Grid sx={styles.modal.grid} key={i}>
                                <Input placeholder="name" value={item.name} onChange={(e)=>{}}/>
                                <Input placeholder="value" value={item.value} onChange={(e)=>{}} />
                                <Box sx={styles.modal.optionClose} onClick={(e) => {
                                    closeCustomOption(e, i);
                                }}>
                                    <AiOutlineCloseCircle sx={{fontSize: '24px', cursor:'pointer', color: '#33383F'}} />
                                </Box>                                
                            </Grid>
                        ))}
                        <Button sx={styles.addButton} onClick={(e) => {addOption(e)}}>
                            <IoMdAddCircleOutline sx={styles.addImageIcon} />
                            <span sx={styles.addImage}>&nbsp;Add Option</span>
                        </Button>  
                    </Box> 
                    <Box>
                        <Grid sx={styles.grid}>
                            <Button sx={styles.button_back}>Cancel</Button>
                            <Button sx={styles.button}>Save</Button>
                        </Grid>
                    </Box>                           
                </Modal>
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
    usdtInput: {
        mb: '20px'
    },
    pricePlaceholderRight: {
        textAlign: 'right',
        pr: '2%',
        mt: '-50px',
        color: '#989898',
        zIndex: -1000,
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
        mb: '8px',
        position: 'relative',
        zIndex: 1,
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
        pb: '50px',
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
    modal: {
        '.modal-option-grid': {
            pt: 0,
        },
        main: {
            overlay: {
                backgroundColor: 'rgb(0, 0, 0, 0.6)',
                zIndex: 1002,
            },
            content: {
                marginRight: ['200px', '200px'],
            }          
        },
        optionClose: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        modalClose: {
            width: '100%',
            float: 'right',
            pt: '18px',
            color: '#33383F'
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
                'repeat(1, 7fr 7fr 1fr)',
                null,
                'repeat(1, 7fr 7fr 1fr)',
            ],
            '&:first-of-type': {
                pt: 0,
            },
            '&:last-of-type': {
                mb: '14px',
            },
        },
    },
};
