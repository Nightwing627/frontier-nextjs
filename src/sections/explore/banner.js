/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex, Box, Text, Input, Heading } from 'theme-ui';
import { FaSearch, FaAngleDown } from 'react-icons/fa';
import BG from 'assets/banner-bg/explore.png';
import Categoires, { Popular } from './category.data';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
        <Box sx={styles.banner.container}>
          <Heading as="p" sx={styles.title}>
          Let’s find a crowdfunding projects around the world
          </Heading>
        </Box>
        <Box sx={styles.search}>
            <Flex sx={{ alignItems: 'center' }}>
                <Flex as="nav" sx={styles.nav}>
                    <ul className="nav__menu">
                        <li className="nav__menu-item">
                            <a>All Category</a>
                            <ul className="nav__submenu">
                                {Categoires.map(({ id, label }, i) => (
                                <li className="nav__submenu-item" key={id}>
                                    <a>{label}</a>
                                </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                    <FaAngleDown sx={{ ml: '-15px' }}/>
                </Flex>
                <Input sx={styles.input} placeholder="Search for campaigns..."/>
                <FaSearch />
            </Flex>
        </Box>
        
        <Flex sx={styles.popular}>
          <Text as="label">Popular Search: </Text>
          <ul>
              {Popular.map(({ id, label }, i) => (
                <li key={id}>
                    <a>{label}</a>
                </li>
                ))}
          </ul>
        </Flex>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, 5],
    container: {
      display: 'flex',
      background: `url(${BG})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      margin: 0,
      height: '48vh',
      width: '100%',
      justifyContent: 'center',
      textAlign: 'center',
    },
  },
  title: {
    fontFamily: 'poppins-bold',
    fontSize: '50px',
    lineHeight: '75px',
    position: 'absolute',
    top: '32%',
    width: '45%',
    color: 'white',
  },
  input: {
    width: '70%',
    mr: 2,
    px: 5,
    fontSize: '20px',
    border: 'none',
    '&:focus': {
      boxShadow: 'none',
    }
  },
  search: {
    width: ['36%'],
    alignItems: 'center',
    borderRadius: '10px',
    margin: 'auto',
    p: '10px 5px',
    bg: 'white',
    boxShadow: '0px 10px 40px rgba(132, 133, 255, 0.35)',
    top: '-45px',
    position: 'relative'
  },
  nav: {
    m: 0,
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: '18px',
      fontWeight: '700',
      px: 25,
      cursor: 'pointer',
      lineHeight: '1.2',
      color: '#767474',
      '&.active': {
        color: 'black',
      },
    },
    '.nav__menu': {
      listStyle: 'none',
      pl: 0,
      mt: 0,
      mb: 0,
      lineHeight: '45px',
      fontWeight: '700',
      display: 'contents',
    },
    '.nav__menu-item': {
      display: 'inline-block',
      position: 'relative',
      '&:hover': {
        bg: 'white',
        '.nav__submenu': {
          display: 'block',
          listStyle: 'none'
        }
      }
    },
    '.nav__submenu-item.nav__menu-item': {
      display: 'inline-block',
      position: 'relative',
      '&:hover': {
        bg: 'white',
        '.nav__submenu': {
          display: 'block',
        }
      }
    },
    '.nav__submenu': {
      fontWeight: 300,
      textTransform: 'none',
      display: 'none',
      position: 'absolute',
      width: 'auto',
      bg: 'white',
      p: 0,
    },
    '.nav__submenu-item': {
      '&:hover': {
        background: 'rgba(#000, 0.1)',
      }
    }
  },
  popular: {
    justifyContent: 'center',
    alignItems: "center",
    '> label': {
      fontSize: '18px',
      fontWeight: '500',
    },
    '> ul': {
      listStyle: 'none',
      display: 'flex',
      p: 0,
      pl: '10px',
      '> li': {
        p: '0 10px',
        color: '#5B6EF5',
        fontSize: '18px',
        '> a': {
          cursor: 'pointer',
          '&:hover': {
            textDecoration: 'underline',
          }
        }
      }
    }
  }
};
