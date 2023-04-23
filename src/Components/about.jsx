import { Box, Container, Typography, Stack } from '@mui/material';
import React from 'react';

export default function About() {
  return (
    <React.Fragment>
      <Stack direction="column">
      <Container sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            backgroundColor: 'var(--color-five)',
            width: '80vw',
            borderRadius: '1.5rem',
            padding: '2rem',
            color: 'var(--color-four)',
            mx: 'auto',
            mt: '2rem',
          }}
        >
          <Typography variant='h3'>About Us</Typography>
        </Box>
      </Container>
      <Container>
        <Box sx={{
            p : "2rem",

        }}>
            <Typography variant='body1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas facere assumenda exercitationem sunt voluptatum! Cupiditate mollitia sunt officia recusandae consectetur obcaecati totam, culpa pariatur error ratione corporis, minima maxime facere!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia est ut rem eos impedit labore excepturi blanditiis quos repellat sunt, expedita inventore quisquam cum sequi quo quibusdam, accusamus porro.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque iusto cum voluptatibus, amet totam voluptas maiores expedita sint corrupti nulla explicabo consequuntur quam voluptates eaque enim in nemo tempore officiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam voluptates ipsam fugiat, perspiciatis, sint, blanditiis eos nemo non vitae ad ratione. Iste doloribus quo magnam, impedit ab consequuntur reprehenderit?
            </Typography>
        </Box>
      </Container>
      </Stack>
    </React.Fragment>
  );
}
