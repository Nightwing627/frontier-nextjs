import React from 'react';
import Banner from 'sections/explore/banner';
import Filter from 'sections/explore/filter-bar';
import ResultList from 'sections/explore/result-list';
import { Container, Flex } from 'theme-ui';

export default function IndexPage() {
  return (
    <>
      <Banner />
      <Container>
        <Flex>
          <Filter sx={styles.filter}/>
          <ResultList sx={styles.result}/>
        </Flex>
      </Container>
      
    </>
  );
}

const styles = {
  filter: {
    width: '30%',
  },
  result: {
    width: '70%',
  }
}
