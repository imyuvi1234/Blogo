import React, { useContext } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import AppContext from '../Context/AppContext';
import { Avatar1 } from '../Styles/images';
import { NavLink } from 'react-router-dom';

function BlogView() {
  const Blogs = useContext(AppContext);
  const { bposts } = Blogs;
  const FirstObj = bposts[0];

  return (
    <React.Fragment>
      <Box>
        <Stack direction="row">
          <Stack p={5} width="50%">
            <img
              src={FirstObj.image}
              alt="hero_image_blog"
              style={{ borderRadius: '10px' }}
            />
          </Stack>
          <Stack p={1} pt={4} direction="column" width="35%">
            <Typography variant="subtitle1" pt={4} color="var(--color-six)">
              {FirstObj.hashtopic}
            </Typography>
            <Typography variant="h4" pt={3}>
              {FirstObj.topic}
            </Typography>
            <Typography variant="body1" pt={4}>
              {FirstObj.shortContent}
            </Typography>
            <Stack direction="row" pt={5}>
              <Stack width="10%">
                <img src={Avatar1} />
              </Stack>
              <Stack direction="column" pl={3}>
                <NavLink
                  style={{
                    fontWeight: 'bold',
                    fontSize: '18px',
                    textDecoration: 'none',
                  }}
                >
                  {FirstObj.author}
                </NavLink>

                <Typography style={{ color: '#8f8f8f', fontSize: '12px' }}>
                  {FirstObj.creationdate}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </React.Fragment>
  );
}

export default BlogView;
