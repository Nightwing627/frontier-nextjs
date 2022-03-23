/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Heading, Box, Select, Flex, Grid, Button } from 'theme-ui';
import { ListData, OrderData } from './category.data';
import FeatureCardColumn from 'components/feature-card-column.js';
import {FaAngleDown} from 'react-icons/fa';

export default function ResultList() {
    return (
      <section sx={styles.resultSection} id="result">
        <Flex>
          <Heading as="h1" variant='lead' sx={{ width: '50%' }}>
            824 Projects Found
          </Heading>
          <Flex sx={{ width: '50%', justifyContent: 'end' }}>
            <Select sx={styles.select}
              arrow={ <FaAngleDown sx={{ ml: '-35px' }}/> }>
                {OrderData.map((item) => (
                    <option key={item.id}>{item.label}</option>
                ))}
            </Select>
          </Flex>
        </Flex>
        <Grid sx={styles.grid}>
          {ListData.map((item) => (
            <FeatureCardColumn data={item} key={item.id} />
          ))}
        </Grid>

        <Flex sx={styles.loadMore}>
          <Button sx={styles.searchBtn} aria-label="Learn More">
              LOAD MORE
          </Button>
        </Flex>
      </section>
    );
}

const styles = {
  resultSection: {
    flex: '0 0 auto',
    width: '75%',
    ml: '2%',
  },
  grid: {
    mb: -1,
    pt: 50,
    gridGap: [
      '35px 0',
      null,
      '45px 28px',
      null,
      '50px 28px',
      null,
      null,
      '50px 28px',
    ],
    gridTemplateColumns: [
      null,
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
      'repeat(3, 1fr)',
    ],
  },
  select: {
    width: 'max-content',
    p: '10px 38px',
    borderRadius: '34px',
    fontSize: '20px',
    justifyContent: 'end',
    borderRadius: '12px',
  },
  searchBtn: {
    variant: "normalButton",
    mt: 30,
    
    fontWeight: 500,
    p: '18px 44px !important',
  },
  loadMore: {
    justifyContent: 'center',
    my: 6
  }
}