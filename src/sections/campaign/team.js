/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Input, Label, Button, Checkbox, Grid, Text, Flex, Image} from 'theme-ui';
import CampaignLayout from "../../components/campaign/layout";
import Textgroup from "../../components/campaign/campaign-text-group";
import teamOwner from "../../assets/campaign/team_owner.png"

const text = {
    primaryTitle: 'Primary Contract',
    primaryContent: "Please provide this person's information so we can get in touch if \
        there are any issues with the campaign. \
        This information will not be displayed publicly.",
    supportTitle: 'Support Email Address',
    supportContent: "If you don't want to use the Campaign Owner's Indiegogo Account email address \
        to answer questions from backers, please include another that will be used by you or a team \
        member to address backer specific concerns. \
        Learn more about providing great customer service to your backers.",
    teamTitle: 'Campaign Team',
    teamContent: "If other people are helping you with your campaign, send them an email invitation below. \
        Once they accept the invitation and create an \
        Indiegogo account, they will be represented on your campaign page as members of your team.",
}

export default function Team() {
    return (
        <section sx={styles.section} id="basic">
            <CampaignLayout>   
                <Box sx={styles.commonFont}>
                    <Textgroup title={text.primaryTitle} content={text.primaryContent} />
                    <Grid sx={styles.gridLegal}>
                        <Box>
                            <Text sx={styles.title}>Legal First Name *</Text>
                            <Input sx={styles.input} />
                            <Text sx={styles.title}>Date of Birth *</Text>
                            <Input sx={styles.input} placeholder="MM/DD/YYYY" />
                        </Box>
                        <Box>
                            <Text sx={styles.title}>Legal Last Name *</Text>
                            <Input sx={styles.input} />
                            <Text sx={styles.title}>Phone Number *</Text>
                            <Input sx={styles.input} />
                        </Box>
                    </Grid>
                    <Box>
                        <Text sx={styles.title}>Country *</Text>
                        <Input sx={styles.input} placeholder="Type country name" />
                        <Text sx={styles.title}>Street Address *</Text>
                        <Input sx={styles.input} placeholder="Street Address *" />
                    </Box>
                    <hr style={styles.hr}></hr>
                    <Box>
                        <Textgroup title={text.supportTitle} content={text.supportContent} />
                        <Grid sx={styles.gridVerify}>
                            <Input sx={styles.inputVerify} placeholder={''} />
                            <Button sx={styles.button}>Verify Email</Button>
                        </Grid> 
                    </Box>
                    <hr style={styles.hr}></hr>
                    <Box>
                        <Textgroup title={text.teamTitle} content={text.teamContent} />
                        <Text sx={styles.title}>New Team Member Email</Text>
                        <Grid sx={styles.gridVerify}>
                            <Input sx={styles.inputVerify} placeholder={''} />                            
                            <Button sx={styles.button}>Add Member</Button>
                        </Grid> 
                        <Label sx={styles.checkboxLabel}>
                            <Checkbox defaultChecked={false} sx={styles.checkbox} />
                            Grant this team member full editing rights on the campaign
                        </Label>
                    </Box>
                    <hr style={styles.hr}></hr>
                    <Box>
                        <Text sx={styles.title}>Team Owner</Text>
                        <Grid sx={styles.gridLegal}>
                            <Flex sx={{mt: '10px'}}>
                                <Box>
                                    <Image src={teamOwner} sx={styles.ownerImage} />
                                </Box>
                                <Box sx={{
                                    display:'flex', 
                                    justifyContent: 'left', 
                                    alignItems: 'center', 
                                    fontSize: '15px',
                                }}>
                                    <div>
                                        <Text sx={{
                                            fontWeight: 700,
                                            color: 'black'
                                        }}>Iqbal Hossan</Text>
                                        <Text sx={{
                                            color: '#989898'
                                        }}>iqbalchotan@yahoo.com</Text>
                                        <Text sx={{
                                            color: '#5B6EF5',
                                            fontWeight: 700
                                        }}>Edit Profile</Text>
                                    </div>                                    
                                </Box>
                            </Flex>
                            <Box>
                                <Text sx={styles.title}>Role</Text>
                                <Input sx={styles.input} />
                            </Box>
                        </Grid>
                    </Box>
                    <hr></hr>
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
    checkbox: {
        color: '#989898 !important',
    },
    checkboxLabel: {
        color: '#989898',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '24px',
        mt: '25px',
    },
    hr: {
        marginTop:'34px'
    },
    commonFont: {
        variant: 'section.fonts',
    },
    mainImage: {
        width: '100%',
    },
    ownerImage: {
        width: '100%',
        borderRadius: '50%',
        mt: '10px'
    },
    feature: {
        py: '14px'
    },
    title: {
        fontSize: [null, null, null, null, null, null, '20px', '24px'],
        pt: '15px',
        fontWeight: 700,
        lineHeight: '24px',
        color: '#203758'
    },
    input: {
        border: '2px solid #989898',
        py: '13px',
        mt: '15px',
        mb: '8px'
    },
    inputVerify: {
        border: '2px solid #989898',
        py: '13px',
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
        bg: '#B4B4B4'
    },
    grid: {
        py: '26px',
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
    gridVerify: {
        pt: '20px',
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
