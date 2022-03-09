/** @jsx jsx */
import { jsx, Container, Flex, Button, Image } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo-dark.svg';
import LogoWhite from 'assets/logo.svg';
import WalletIcon from 'assets/wallet.svg';
import MetaMask from 'assets/metamask.svg';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={className === 'sticky' ? LogoWhite : LogoWhite} />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <Link
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </Link>
            ))}
          </Flex>

          <Button
            className="connect_wallet__btn"
            variant="secondary"
            aria-label="Connect to Wallet"
          >
            Connect to Wallet
          </Button>
          <Button
            className="wallet__btn"
            variant="secondary"
            aria-label="Wallet"
          >
          </Button>
          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'black',
    fontWeight: 'normal',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    transition: 'all 0.5s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.connect_wallet__btn': {
      background: 'linear-gradient(90.19deg, #2CD4FF -16.46%, #5979FF 24.09%, #A662FF 99.83%)',
      borderRadius: '30px',
      border: 'none',
      height: '60px',
      fontSize: '18px',
      fontWeight: '700',
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '.wallet__btn': {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#fef3e7',
      backgroundImage: `url(${MetaMask})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '35px',
      backgroundPosition: 'center',
      ml: 2,
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
      '.donate__btn': {
        borderColor: 'primary',
        color: 'primary',
        '&:hover': {
          boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
          backgroundColor: 'primary',
          color: 'white',
        },
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
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
  },
};
