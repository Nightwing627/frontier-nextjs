/** @jsx jsx */
import { jsx, Container, Button, Box } from 'theme-ui';
import SectionHeader from '../components/section-header';
import { FaArrowRight } from 'react-icons/fa';

const title = 'Back the project';
const description = 'Crypto is your destination for clever innovations in tech, design, and more, often with special perks and pricing for early adopters. Back a campaign, share your ideas and feedback with the project team - and join the risks and rewards of bringing new products to life.';

export default function BackProject() {
  return (
    <section sx={styles.section} id="back-project">
      <Container sx={styles.container}>
        <SectionHeader
          title={title}
          description={description}
        />
        <Box sx={styles.box}>
          <Button variant="normalButton" aria-label="Learn More">
              Learn More <FaArrowRight />
          </Button>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  section: {
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
  }
};
