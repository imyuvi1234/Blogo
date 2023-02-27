import React, { useContext } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import AppContext from '../Context/AppContext';

function BlogView() {
  const Blogs = useContext(AppContext);
  const { bposts } = Blogs;
  console.log(bposts);

  return (
    <React.Fragment>
      {bposts.map((item, i) => {
        return (
          <React.Fragment>
            <Box>
              <Stack direction="row">
                <Stack p={5} width="55%">
                  <img
                    src={item.image}
                    alt="hero_image_blog"
                    style={{ borderRadius: '10px' }}
                  />
                </Stack>
                <Stack p={1} direction="column">
                  <Typography pt={4}>{item.topic}</Typography>
                </Stack>
              </Stack>
            </Box>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

export default BlogView;
