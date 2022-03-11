/** @jsx jsx */
import { jsx, Container, Button, Box, Flex, Input } from 'theme-ui';
import SectionHeader from '../components/section-header';
import { FaArrowRight } from 'react-icons/fa';

const title = 'Clever Things For Curious Humans™';
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.';

export default function Subscribe() {
  return (
    <section sx={styles.section} id="subscribe">
      <Container sx={styles.container}>
        <SectionHeader
          title={title}
          description={description}
        />
        <Flex sx={styles.box}>
          <Input sx={styles.input} placeholder="Enter your email address..."/>
          <Button variant="normalButton" aria-label="Learn More">
              SUBSCRIBE
          </Button>
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    variant: 'section.keyFeature',
    backgroundColor: 'section_bg_color',
    py: 0,
  },
  container: {
    backgroundColor: 'white',
    py: '70px',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    width: '25%',
    border: '2px solid #5B6EF5',
    borderRadius: '30px',
    mr: 2,
    px: 5,
    fontSize: '20px',
    '&:focus': {
      boxShadow: '0px 10px 40px rgba(132, 133, 255, 0.35)',
      border: '2px solid #5B6EF5',
    }
  }
};
