import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function Header({ title, description }) {
    return (
        <Box
            variant="sectionHeader">
            <Heading 
                as="h2"
                variant="sectionHeader.title">
                {title}
            </Heading>
            <Text 
                as="p"
                variant="sectionHeader.subTitle">
                {description}
            </Text>
        </Box>
    );
}

const styles = {

}