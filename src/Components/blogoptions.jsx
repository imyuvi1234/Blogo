import { Stack, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import { Avatar5 } from '../Styles/images';

function Blogoptions() {
  const Blogs = useContext(AppContext);
  const { bposts } = Blogs;
  const blogarray = bposts;

  return (
    <>
      <Stack direction="row" pb={3}>
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
                <Stack>
                  <Typography
                    variant="subtitle1"
                    pt={1}
                    color="var(--color-six)"
                  >
                    {item.hashtopic}
                  </Typography>
                  <Typography variant="body1">
                    {item.topic.substring(0, 20)}{' '}
                    {item.topic.length >= 20 && '...'}
                  </Typography>
                  <Typography variant="body2" pt={2}>
                    {item.shortContent.substring(0, 100)}{' '}
                    {item.shortContent.length >= 100 && '...'}
                    {/* {item.shortContent} */}
                  </Typography>
                </Stack>
                <Stack direction="row" pt={2}>
                  <Stack width="12%" pt={0.5} pl={1}>
                    <img src={Avatar5} />
                  </Stack>
                  <Stack direction="column" pl={2}>
                    <NavLink
                      style={{
                        fontWeight: 'bold',
                        fontSize: '14px',
                        textDecoration: 'none',
                        color: 'var(--color-three)',
                      }}
                    >
                      {item.author}
                    </NavLink>

                    <Typography style={{ color: '#8f8f8f', fontSize: '12px' }}>
                      {item.creationdate}
                    </Typography>
                  </Stack>
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
