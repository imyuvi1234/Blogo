import { Box, Container } from '@mui/material';
import React from 'react';
import { BlogView, Sidebar, TypedText } from '../Components/allComponents';

function Home() {
  return (
    <React.Fragment>
      <Container>
        <TypedText />
      </Container>
      <Box sx={{ width: '95vw', margin: 'auto' }} display="flex">
        <Box sx={{ width: '65vw' }}>
          <BlogView />
        </Box>
        <Box sx={{ width: '35vw', ml: 5 }}>
          <Sidebar />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Home;
