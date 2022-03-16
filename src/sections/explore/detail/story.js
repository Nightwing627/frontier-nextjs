/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { FaCircle, FaFlag } from 'react-icons/fa';
import { FaRegCheckCircle } from "react-icons/fa";
import Tabs from 'components/tab';
import Detail from 'assets/detail/detail.png';
import Perk1 from 'assets/detail/perk_1.png';
import Perk2 from 'assets/detail/perk_2.png';

import { Container, Heading, Box, Card, Text, Button, Flex, Label, Checkbox, Image, Grid } from 'theme-ui';

const checkList = [
    {
        id: 1,
        text: 'Unde rerum a. Et voluptatem harum id.',
    },
    {
        id: 2,
        text: 'Et aut dicta quibusdam iste necessitatibus ut ut.',
    },
    {
        id: 3,
        text: 'Voluptas quos quia nisi sit impedit labore enim quod.',
    },
    {
        id: 4,
        text: 'Voluptatem vel recusandae.',
    },
    {
        id: 5,
        text: 'Aliquid veritatis rem voluptate non.',
    },
    {
        id: 6,
        text: 'Itaque et officiis cum excepturi.',
    }
];
const perks = [
    {
        id: 1,
        imgSrc: Perk1,
        title: `Visible Strengths by Mary Mosope Adeyemi`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip`,
    },
    {
        id: 1,
        imgSrc: Perk2,
        title: `Gen3 Airoha Air Pro 3 TWS Cancel Headphone`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip`,
    }
]

export default function Story() {
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </br></br>Eos cumque recusandae recusandae harum dolorem optio. Non asperiores ex qui mollitia et consectetur autem laborum ex. Enim ea deleniti sed omnis. Repudiandae nobis vitae in. Iusto ducimus sed non facilis occaecati quibusdam. Tenetur iure quo nihil minima aut qui. Harum voluptatem ullam deserunt voluptatem cumque rerum enim fugit nulla. Assumenda dolore ex inventore ut.
            </br></br>Consequatur et dignissimos a pariatur et accusantium aliquid. Dolor fugiat corrupti soluta praesentium expedita ducimus labore. Unde minima nulla fuga quos minus temporibus animi qui expedita. Sed quibusdam et. Rerum tempora sit qui ut fugiat.`;

    const imageDesc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumm tempor.`;
    return (
        <section id="more-detail" sx={styles.section}>
            <Container >
                <Grid sx={styles.grid}>
                    <Card sx={styles.tab}>
                        <Tabs>
                            <div label="Updates">
                                <div dangerouslySetInnerHTML={{__html: text}} />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        mx: 'auto',
                                        mt: 7,
                                    }}
                                    >
                                    <Grid sx={styles.checkGrid}>
                                        {checkList.map((item) => (
                                            <Flex sx={{ alignItems: 'center' }} key={item.id}>
                                                <FaRegCheckCircle sx={{ color: '#2AB26E', fontSize: '20px' }}/>
                                                <Text as="p" sx={{ ml: 2 }}>{item.text}</Text>
                                            </Flex>
                                        ))}
                                    </Grid>
                                    <Image sx={styles.detailImage} src={Detail} />
                                    <Text sx={{ mt: 3 }}>
                                        {imageDesc}
                                    </Text>
                                </Box>
                            </div>
                            <div label="Backer List">
                                Selected the Backer List
                            </div>
                            <div label="Reviews (245)">
                                Selected the Reviews
                            </div>
                        </Tabs>
                    </Card>

                    <Card sx={styles.tab}>
                        <Text as="p" className="tab-title">Select a perk</Text>
                        {perks.map((item) => (
                            <Box key={item.id} className="perk-item">
                                <Image src={item.imgSrc} sx={styles.perkImage} />
                                <Text as="p" sx={styles.perkTitle}>{item.title}</Text>
                                <Text as="p" sx={{ mt: 4 }}>{item.desc}</Text>
                                <Button sx={styles.perkBtn}>Get this perk</Button>
                            </Box>
                        ))}
                    </Card>
                </Grid>
            </Container>
        </section>
    );
}

const styles = {
    section: {
        bg: 'section_bg_color',
    },
    grid: {
        mb: -1,
        pt: 0,
        gridGap: [
          '35px 0',
          null,
          '45px 50px',
          null,
          '50px 50px',
          null,
          null,
          '26px 20px',
        ],
        gridTemplateColumns: [
          'repeat(0, 1fr)',
          null,
          'repeat(2, 2fr)',
          null,
          'repeat(1, 2fr 1fr)',
        ],
    },
    tab: {
        bg: 'white',
        p: '2rem 2.5rem',
        mb: 10,
        borderRadius: '20px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
        '.tab-header': {
            display: 'flex',
        },
        '.tab-title': {
            fontFamily: 'mazzard-h-bold',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '32px',
        },
        '.tab-list': {
            
        },
        '.tab-list-item': {
            display: 'inline-block',
            listStyle: 'none',
            color: '#717579',
            fontFamily: 'mazzard-h-bold',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '20px',
            lineHeight: '24px',
            padding: '0 30px',
            cursor: 'pointer',
        },
        '.tab-list-active': {
            bg: 'white',
            color: 'text',
        },
        '.tab-content': {
            py: '30px',
        },
        subTitle: {
            fontSize: '20px',
        },
        '.perk-item': {
            height: '48%',
            '&:first-of-type': {
                borderBottom: '2px solid #D7D7D7',
            }
        }
    },
    checkGrid: {
        gridGap: [
            '35px 0',
            null,
            '45px 50px',
            null,
            '50px 50px',
            null,
            null,
            '50px 50px',
        ],
        gridTemplateColumns: [
            'repeat(0, 1fr)',
            null,
            'repeat(2, 2fr)',
            null,
            'repeat(2, 2fr)',
        ],
    },
    detailImage: {
        my: 6, 
        borderRadius: '20px', 
        width: '100%',
        height: '33vh',
    },
    perkImage: {
        mt: 5,
        mb: 3,
        borderRadius: '20px',
        width: '100%',
        height: '18vh',
    },
    perkTitle: {
        fontFamily: 'mazzard-h-bold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
    },
    perkBtn: {
        fontFamily: 'poppins-bold',
        lineHeight: '27px',
        color: 'white',
        bg: '#1B8271',
        width: '100%',
        borderRadius: '8px',
        mt: '20%',
    },
    
}