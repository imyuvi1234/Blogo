import {
  Box,
  Paper,
  Divider,
  Stack,
  Typography,
  Button,
} from '@mui/material';
import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';

function Sidebar() {
  const InterestOptions = useContext(AppContext);
  const { interestfields, bposts } = InterestOptions;

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const newList = shuffle(bposts);

 

  return (
    <React.Fragment>
      <Box>
        <Paper
          elevation={5}
          sx={{
            mt: 5,
            padding: '25px',
            backgroundColor: 'var( --color-four )',
          }}
        >
          <Box sx={{ mt: '10px' }}>
            <Typography
              variant="body1"
              align="center"
              sx={{
                textDecoration: 'underline',
                textDecorationColor: '#1871db',
                mb: '2px',
              }}
            >
              Trending topics this week
            </Typography>
          </Box>
            <Stack spacing={1}>
            {interestfields.map((item) => {
            return (
              <Button variant="outlined" size="small" key={item.interestId}>
                {item.topic}
              </Button>
            );
          })}
            </Stack>
          

          <Divider sx={{ marginTop: '15px' }} />

          <Stack direction="column">
            <Box sx={{ mt: '10px' }}>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  textDecoration: 'underline',
                  textDecorationColor: '#1871db',
                  mb: '2px',
                }}
              >
                Trending blogs this week
              </Typography>
            </Box>
            {newList.map((item, i) => {
              return (
                <Stack
                  direction="column"
                  key={i}
                  sx={{ mt: '10px', mb: '10px', cursor: 'pointer' }}
                >
                  <Box
                    sx={{
                      display: 'inline',
                      border: '1px solid #1871db',
                      p: '7px',
                      borderRadius: '5px',
                    }}
                  >
                    {i + 1}. {item.title}
                  </Box>
                </Stack>
              );
            })}
          </Stack>
        </Paper>
      </Box>
    </React.Fragment>
  );
}

export default Sidebar;
