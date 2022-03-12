/** @jsx jsx */
import { jsx, Container, Button, Box } from 'theme-ui';
import SectionHeader from '../components/section-header';
import { FaArrowRight } from 'react-icons/fa';
import Community from 'assets/community.png';

const title = 'Join crypto community';
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerlaboris nisi ut aliquip ex ea commodo consequat.';

export default function CryptoCommunity() {
  return (
    <section sx={styles.section} id="crypto-community">
      <Container sx={styles.container}>
        <SectionHeader
          title={title}
          description={description}
        />
        <Box sx={styles.box}>
          <Button variant="normalButton" aria-label="Get Started">
              Get Started <FaArrowRight />
          </Button>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'section_bg_color',
    pt: 70,
  },
  container: {
    background: `url(${Community})`,
    py: '70px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    bg: 'white',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
  }
};
