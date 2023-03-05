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
                      // { item.image === ? item.image  : item[1].image }
                      item.image
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
