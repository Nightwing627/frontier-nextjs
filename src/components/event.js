/** @jsx jsx */
import router, { useRouter } from "next/router"
import React, { useState } from "react"
import { jsx, Box, Text, Flex, Grid, Button, Image } from "theme-ui"
import { AiOutlineUserAdd } from 'react-icons/ai'

export default function Event({ data }) {
    return (
        <Box sx={styles.item}>
            <Image src={data.imgSrc} sx={styles.eventImage} />
            <Box sx={{ ml: '22px' }}>
                <Text as="p" sx={styles.status}>{data.status}</Text>
                <Text as="p" sx={styles.title}>{data.title}</Text>
                <Flex sx={{ mt: 2, alignItems: 'center' }}>
                    <Image src={data.userAvartar} sx={styles.userAvatar} />
                    <Text as="span" sx={styles.bridge}> Created by </Text>
                    <Text as="span" sx={styles.creator}>{data.creator}</Text>
                </Flex>
                <Flex sx={{ mt: 3 }}>
                    <Button sx={styles.action}>Interested</Button>
                    <Button sx={styles.action}>Going</Button>
                    <Button sx={styles.action}>Invite</Button>
                </Flex>
            </Box>
        </Box>
    )
}

const styles = {
    item: {
        p: '10px 20px',
        alignItems: 'center',
        mb: 3,
        display: [ null, null, 'block', null, null, null, 'flex' ],
    },
    eventImage: {
        width: [ null, null, '100%', null, null, null, '192px' ],
        height: [ null, null, '100%', null, null, null, '192px' ],
        objectFit: 'cover',
        borderRadius: '10px',
    },
    status: {
        color: 'primary',
        fontWeight: '600',
        fontSize: '17px',
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
    },
    title: {
        color: 'social_text',
        fontWeight: '600',
        fontSize: '24px',
        lineHeight: '29px',
    },
    userAvatar: {
        width: '36px',
        height: '36px',
        objectFit: 'cover',
    },
    bridge: {
        fontSize: '18px',
        color: '#788292',
        ml: 2,
    },
    creator: {
        fontFamily: 'mazzard-h-bold',
        fontSize: '18px',
        color: '#1A1D1F',
        fontWeight: '900',
        ml: 1,
    },
    action: {
        borderRadius: '12px',
        p: '12px 20px',
        fontSize: '15px',
        fontFamily: 'Inter',
        mr: 3,
    }
}
