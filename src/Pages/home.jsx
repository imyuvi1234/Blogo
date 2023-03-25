import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { BlogView, Sidebar, TypedText } from '../Components/allComponents';

function Home() {
  return (
    <React.Fragment>
      <Container>
        <TypedText />
      </Container>
      <Box sx={{ width: '95vw', margin: 'auto' }} display="flex">
        <Grid sx={{ width: '75vw' }} item xs={12}>
          <BlogView />
        </Grid>
        <Grid sx={{ width: '25vw', ml: 5 }} item xs={0}>
          <Sidebar />
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default Home;
