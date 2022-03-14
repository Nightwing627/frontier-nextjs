import { jsx } from 'theme-ui';
import { Heading, Box, Card, Text, Input, Label, Checkbox } from 'theme-ui';
import Categoires, { Popular } from './category.data';

export default function Filter() {
    return (
        <section sx={styles.section} id="filter">
            <Heading as="h1" variant="lead" >
                Filter
            </Heading>
            <Card sx={styles.Card}>
                <Text as="p">Category</Text>
                <ul>
                    {Categoires.map(({ id, label }, i) => (
                    <li key={id}>
                        <Label sx={{ fontSize: '18px', lineHeight: '35px', alignItems: 'center' }}>
                            <Checkbox />
                            {label}
                        </Label>
                    </li>
                    ))}
                </ul>
            </Card>
        </section>
    );
  }

const styles = {
    Card: {
        bg: '#456423',
        borderRadius: 20,
        mt: 60,
        p: '2rem 5rem 2rem 2rem',
        '> ul': {
            listStyle: 'none',
            p: 0,
            
        }
      }
  }