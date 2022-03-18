/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Carousel from 'react-responsive-carousel';
import DetailCarousel from '../../../components/explore/detail-card';
import { FaCircle, FaFlag } from 'react-icons/fa';
import { BiHeart, BiShareAlt } from "react-icons/bi";
import Rating from 'components/rating';
import Progress from 'components/progress';
import CardImage from 'assets/detail/2.png';
import UserAvatar from 'assets/user-avatars/avatar_1.png';

import Group from 'assets/group.png'
import Calendar from 'assets/calendar.png'

import { Container, Heading, Box, Card, Text, Button, Flex, Label, Checkbox, Image } from 'theme-ui';

export default function Main() {

    return (
        <section id="detail" sx={styles.section}>
            <Container >
                <Card sx={styles.detailCard}>
                    <Flex>
                        <Box sx={styles.carousel}>
                            <Image src={CardImage} sx={{ borderRadius: '20px' }} />
                        </Box>
                        <Box sx={styles.detail}>
                            <Flex>
                                <div className="card-header">
                                    <div className="image">
                                        <Image src={UserAvatar} alt="Client Image" />
                                    </div>
                                    <div className="reviewer-info">
                                        <Flex sx={{ alignItems: 'center', mb: '-10px' }}>
                                            <Text as="h4" className="username">
                                                Hendric Anderson
                                            </Text>
                                            <Rating rating={3} />
                                        </Flex>
                                        <Flex className="user-text">
                                            <Text 
                                                as="span" 
                                                sx={{ 
                                                mr: 2,
                                                color: '#1B8271',
                                                fontFamily: 'mazzard-h-bold'
                                                }}>
                                                12 Campaign
                                            </Text>
                                            <FaCircle className="circle-icon"/>
                                            <Text as="span" sx={{ml: 2}}>New York, Longdon</Text>
                                        </Flex>
                                    </div>
                                </div>
                                <ul className="flags-bar">
                                    <li><BiHeart /></li>
                                    <li><BiShareAlt /></li>
                                    <li><FaFlag /></li>
                                </ul>
                            </Flex>

                            <Heading sx={styles.headTitle}>
                                Samcung Okulus Rivt PC - Powered VR Gaming Headset
                            </Heading>

                            <Text as="p" sx={styles.description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            </Text>
                            
                            <Progress childStyle={styles.childStyle} badgeStyle={styles.badgeStyle} text={65 + '%'} />
                            
                            <Flex sx={{ my: 6, justifyContent: 'space-between' }}>
                                <Flex>
                                    <Image src={Group} sx={{ width: '32px', height: '24px' }} />
                                    <Box sx={styles.userText}>
                                        <Text as="p">$ 65,235</Text>
                                        <Text as="p">Total Raised</Text>
                                    </Box>
                                </Flex>
                                <Flex sx={{ ml: '5%' }}>
                                    <Image src={Calendar} sx={{ width: '26px', height: '26px' }} />
                                    <Box sx={styles.userText}>
                                        <Text as="p">235</Text>
                                        <Text as="p">Days to go</Text>
                                    </Box>
                                </Flex>
                                <Button sx={styles.fundBtn} aria-label="Fund This Project">
                                    Fund This Project
                                </Button>
                            </Flex>

                            <Box sx={{ mt: 7 }}>
                                <Text as="p" sx={{ fontFamily: 'poppins-bold' }}>Project Notes:</Text>
                                <Text  sx={styles.projectNotes}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                </Text>
                            </Box>
                        </Box>
                    </Flex>
                </Card>
            </Container>
        </section>
    );
}

const styles = {
    section: {
        variant: 'section.keyFeature',
        bg: 'section_bg_color',
        pb: '40px !important',
    },
    detailCard: {
        bg: 'white',
        p: '4rem 2rem',
        mt: '50px',
        borderRadius: '20px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
        wrapper: {
            mt: 2,
            '> div': {
              mt: 2,
              alignItems: 'center',
            },
            '> div > img': {
              width: '32px',
              height: '25px',
            },
            '> div > p': {
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: '500',
              ml: 4,
            },
            
        },
    },
    carousel: {
        flex: '0 0 auto',
        width: '50%',
        pr: 7,
    },
    detail: {
        flex: '0 0 auto',
        width: '50%',
        '.card-header': {
            display: 'flex',
            alignItems: 'center',
            '.image': {
              flexShrink: 0,
              mr: [3, null, null, 4],
              pt: '14px',
              display: 'flex',
              img: {
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                objectFit: 'cover',
              },
            },
            '.username': {
              fontFamily: 'mazzard-h-bold',
              fontSize: '18px',
              color: 'text',
            },
            '.user-text': {
              fontSize: '14px',
              alignItems: 'center',
              '.circle-icon': {
                fontSize: '10px',
                color: '#717579',
              },
            },
            '.rating': {
                mb: [1, null, null, 2],
                ml: [1, null, null, 3],
                ul: {
                  pl: 0,
                  listStyle: 'none',
                  mb: 0,
                  display: 'flex',
                },
                svg: {
                  marginRight: '2px',
                  '&:last-of-type': {
                    marginRight: 0,
                  },
                },
                '.star': {
                  color: 'yellow',
                  mr: '1px',
                },
                '.star-o': {
                  color: '#ddd',
                  mr: '1px',
                },
            },
        },
        '.flags-bar': {
            listStyle: 'none',
            display: 'flex',
            fontSize: '25px',
            m: 0,
            color: '#717579',
            alignItems: 'flex-end',
            justifyContent: 'end',
            width: '50%',
            '> li': {
                p: '0 1rem',
            }
        }
    },
    headTitle: {
        variant: "heroPrimary",
        fontSize: '32px',
        mt: 4,
        color: 'text',
    },
    description: {
        color: 'text',
        fontSize: [2, 3, 4, '17px', null, 3, '18px', '18px'],
        lineHeight: [2, null, null, null, '28px'],
        my: 3,
    },
    userText: {
        ml: '15px',
        mt: '-5px',
        '> p:first-of-type': {
            fontFamily: 'mazzard-h-bold',
            fontSize: '20px'
        },
        '> p:nth-of-type(2)': {
            fontSize: '18px'
        }
    },
    fundBtn: {
        variant: "normalButton",
        padding: ['11px 20px 10px', null, null, null, '13px 50px'],
    },
    projectNotes: {
        bg: '#EEEEEE', 
        px: 6, 
        py: 6, 
        border: '1px solid #D7D7D7', 
        borderRadius: '10px',
        mt: 5
    },

    childStyle: {
        width: '65%',
        bg: '#FF7468'
    },
    badgeStyle: {
        ml: '62%',
        color: 'white',
        bg: '#FF7468',
    }
}