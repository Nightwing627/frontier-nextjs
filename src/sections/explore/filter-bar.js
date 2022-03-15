/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Heading, Box, Card, Text, Button, Flex, Label, Checkbox } from 'theme-ui';
import { useState, useEffect } from 'react';
import Categoires, { Popular } from './category.data';
import { FaAngleDown, FaAngleUp, FaHeart } from 'react-icons/fa';
import DonateBG from 'assets/group-bg.png';

export default function Filter() {
    const [seeMore, setSeeMore] = useState(false);
    const [filterSize, setFilterSize] = useState(5);

    useEffect(() => {
        seeMore ? setFilterSize(Categoires.length) : setFilterSize(5)
    });

    return (
        <section sx={styles.filterSection} id="filter" >
            <Heading as="h1" variant="lead" >
                Filter
            </Heading>
            <Card sx={styles.filterCard}>
                <Text as="p" sx={styles.category}>Category</Text>
                <ul>
                    {Categoires.map(({ id, label }, i) => (
                        i < filterSize && 
                        <li key={id}>
                            <Label sx={styles.label}>
                                <Checkbox sx={{ mr: 4 }} />
                                {label}
                            </Label>
                        </li>
                    ))}
                </ul>
                <Flex sx={styles.showMore} onClick={()=>setSeeMore(!seeMore)}>
                    <Text as="p" >See More Categories</Text>
                    {!seeMore ? <FaAngleDown sx={styles.arrowIcon} /> 
                        : <FaAngleUp sx={styles.arrowIcon} />}
                    
                </Flex>

                <Button sx={styles.searchBtn} aria-label="Learn More">
                    SEARCH PROJECTS
                </Button>
            </Card>
            <Card sx={styles.donateCard}>
                <Text as="p" sx={styles.donateCard.title}>
                    Donate to <br />
                    World Cancer Society
                </Text>
                <Text as="p" sx={styles.donateCard.expalin}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Text>
                <Button sx={styles.donateCard.button} aria-label="Learn More">
                    Donate Now <FaHeart />
                </Button>
            </Card>
        </section>
    );
  }

const styles = {
    filterSection: {
        flex: '0 0 auto',
        width: '21%',
        '@media screen and (max-width: 1000px)': {
            display: 'none'
        },
    },
    filterCard: {
        bg: 'white',
        borderRadius: 20,
        mt: 50,
        p: '2rem',
        '> ul': {
            listStyle: 'none',
            p: 0,
        },
        boxShadow: '0px 1px 3px 0px #0000001A',
    },
    label: {
        fontSize: '18px',
        lineHeight: '35px',
        alignItems: 'center',
        color: 'text'
    },
    category: {
        fontFamily: 'mazzard-h-bold',
        color: 'secondary',
        fontSize: '20px'
    },
    showMore: {
        color: 'primary',
        fontSize: '16px',
        alignItems: 'center',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': {
            color: '#3e51d7'
        }
    },
    arrowIcon: {
        ml: '10px'
    },
    searchBtn: {
        variant: "normalButton",
        width: '100%',
        mt: 30,
        fontFamily: 'DM Sans',
        fontWeight: 500,
    },
    donateCard: {
        bg: 'text',
        boxShadow: '0px 1px 2px 0px #0000000F',
        borderRadius: 20,
        p: '2rem 1.5rem',
        backgroundImage: `url(${DonateBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '50%',
        backgroundPosition: 'bottom',
        backgroundPositionX: 'right',
        mt: 7,
        title: {
            fontSize: '24px',
            fontWeight: 700,
            fontFamily: 'mazzard-h-bold',
            color: 'white',
        },
        expalin: {
            fontSize: '14px',
            fontWeight: 200,
            color: 'white',
        },
        button: {
            variant: "normalButton",
            mt: 6
        }
    },
}