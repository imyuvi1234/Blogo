import { Stack } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../Context/AppContext';

function Blogoptions() {
  const Blogs = useContext(AppContext);
  const { bposts } = Blogs;
  const blogarray = bposts;

  return (
    <>
      <Stack direction="row">
        {blogarray.map((item, i) => {
          return (
            <>
              <Stack
                direction="column"
                key={i}
                width="20%"
                p={1}
                ml={5}
                sx={{
                  outline: '1px',
                  outlineColor: 'var(--color-five)',
                  outlineStyle: 'solid',
                  borderRadius: '5px',
                }}
              >
                <Stack width="100%">
                  <img
                    src={
                      item.image !== ''
                        ? item.image
                        : 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    }
                    alt="hero_image_blog"
                    style={{ borderRadius: '10px' }}
                  />
                </Stack>
              </Stack>
            </>
          );
        })}
      </Stack>
    </>
  );
}

export default Blogoptions;
