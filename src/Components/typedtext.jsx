import { Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import Typewriter from 'typewriter-effect';
import '../Styles/typedtext.css';

function TypedText() {
  return (
    <React.Fragment>
      <Container
        sx={{
          mt: 4,
          background: 'var(--color-five)',
          borderRadius: 6,
        }}
      >
        <Stack textAlign="center" sx={{ color: 'var(--color-four)', p: 4 }}>
          <Typography variant="h3" pb={1}>
            {' '}
            Blogo{' '}
          </Typography>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Read It.')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Write It.')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Keep Your Self Updated.')
                .start();
            }}
          />
        </Stack>
      </Container>
    </React.Fragment>
  );
}

export default TypedText;
