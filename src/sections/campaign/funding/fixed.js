/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Input, Text } from 'theme-ui';
import Textgroup from "../../../components/campaign/campaign-text-group";

const text = {
    goalTitle: 'Campaign Goal Amount & Currency',
    goalContent: ['How much money would you like to raise for this campaign? \
        A minimum goal of 500 in your currency is required. For help on choosing a goal amount, see ', 
        <b key={2} sx={{color: '#5B6EF5'}}>article.</b>, 'this article. Make sure you keep in mind our ',
        <b key={3} sx={{color: '#5B6EF5'}}>fees</b>, 'and your ', <b key={4} sx={{color: '#5B6EF5'}}>reserved funds</b>],
}

const noteText = [
    {
        title: 'A note about taxes',
        content: [
            'Please be aware that the individual listed in the bank form may be liable for taxes if qualified, \
            please refer to our ', <b>help center article</b>, ' for more information.'
        ]
    },
    {
        title: 'A note about Reserved Funds',
        content: [
            'After you raise 1000 in your currency, Frontier will automatically hold 5% of your \
            funds in reserve to help you process any refund requests and to cover chargebacks \
            from your backers for up to six months after the end of your campaign. \
            For more information, please see this ', <b>article.</b>
        ]
    },
    {
        title: 'A about Nonprofits',
        content: [
            'Are you an employee, board member, or otherwise authorized to represent the nonprofit? \
            For this payment option, we require that representatives be affiliated with the nonprofit. \
            Keep in mind you will need to enter the SSN or ITIN for the representative and the \
            organization’s bank account information later on. If you want to raise funds individually \
            for the nonprofit please select the individual option. Learn more about our ',
            <b>requirements for nonprofits.</b>
        ]
    }
]

export default function FixedFunding() {
    return (
        <Box sx={styles.commonFont}> 
            <Textgroup title={text.goalTitle} content={text.goalContent} />
            <Box sx={styles.usdtInput}>
                <Input sx={styles.input} placeholder={'$'} />
                <Text sx={styles.pricePlaceholderRight}>USDT</Text>
            </Box>  
            <Box sx={styles.note}>
                {noteText.map((item, i) => (
                    <Box key={i+10}>
                        <Text sx={styles.noteTitle}>{item.title}</Text>
                        <Text sx={styles.noteContent}>{item.content}</Text>
                    </Box>
                ))}                
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
