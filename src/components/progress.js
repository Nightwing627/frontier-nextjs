/** @jsx jsx */
import React from 'react';
import { jsx, Box, Text, Label } from 'theme-ui';

export default function Progress({ parentStyle, childStyle, badgeStyle, text }) {
  return (
    <Box sx={styles.progressBox}>
        <Text as="span" className="badgeBar" sx={{ ...badgeStyle }} >{text}</Text>
        <Box sx={styles.progressBox.progress}>
            <Box className="progressBar" sx={{ ...childStyle }} aria-valuemin="0" aria-valuemax="100">
            </Box>
        </Box>
    </Box>
  );
}

const styles = {
    progressBox: {
        progress: {
            display: 'flex',
            height: '12px',
            overflow: 'hidden',
            fontSize: '.75rem',
            bg: '#e9ecef',
            borderRadius: '10px',
        },
        '.progressBar': {
            display: 'flex',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center',
            transition: 'width .6s ease',
        },
        '.badgeBar': {
            display: 'inline-block',
            padding: '0 10px',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '24px',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            verticalAlign: 'baseline',
            borderRadius: '0.25rem',
            borderRadius: '15px',
            position: 'relative',
            mb: '5px'
        },
    },
    
}