/** @jsx jsx */
import {jsx, Text } from 'theme-ui';

export default function CampaignTextGroup({title, content}) {
    return (
        <>
            <Text sx={styles.title}>{title}</Text>
            <Text sx={styles.contentText}>{content}</Text>
        </>
    );
}

const styles = {
    title: {
        fontSize: [null, null, null, null, null, null, '20px', '24px'],
        pt: '20px',
        pb: '14px',
        fontWeight: 700,
        lineHeight: '24px',
        color: '#203758'
    },
    contentText: {
        fontSize: [null, null, null, null, null, null, '15px', '18px'],
        lineHeight: '25px',
        fontWeight: 400,
        letterSpacing: '-1%',
        color: '#989898',
    },
}