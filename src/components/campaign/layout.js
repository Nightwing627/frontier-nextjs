/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import { Box, Grid, Flex} from 'theme-ui';
import Siderbar from "./siderbar";
import MobileDrawer from './mobile-drawer';
import router, { useRouter } from 'next/router';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';

export default function CampaignLayout({ children }) {
    const pathname = useRouter().pathname;
    return (
        <DrawerProvider>
            { 
            pathname != '/campaign' ? 
                <Box sx={styles.sidebar}>
                    <Siderbar /> 
                </Box>
                : "" 
            }
            <Grid sx={styles.grid}>
                <Box>                    
                    <MobileDrawer /> 
                </Box>
                <Box sx={styles.mainContent}>
                    <main>
                        {children}
                    </main>
                </Box>
                <Box></Box>
            </Grid>
        </DrawerProvider>   
    );
}

const styles = {
    sidebar: {
        '@media screen and (max-width: 1024px)': {
            display: 'none',
        },
        position: 'fixed',
        ml:'3%',
        width: '20%',
        height: 'calc(100vh)',
        bg: 'white',
        px: '2%',
        mt: '-30px',
        py: '2%'
    },
    mainContent: {
        px: '3%',
        py: '5%',
        backgroundColor: 'white'
    },
    section: {
        variant: 'section.campaignFeature',
        backgroundColor: 'section_bg_color',
    },
    grid: {
        mb: -1,
        pt: 0,
        gridGap: [
            '25px 0',
            null,
            '45px 28px',
            null,
            '50px 28px',
            null,
            null,
            '50px 28px',
        ],
        gridTemplateColumns: [
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            null,
            null,
            'repeat(1, 1fr 2fr 1fr)',
        ],
    },
};